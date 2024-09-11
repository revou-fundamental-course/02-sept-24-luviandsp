// Fungsi untuk menampilkan atau menyembunyikan menu ketika mode mobile
function menuToggle() {
    // Mencari elemen dengan class 'menu-toggle' dan 'category-list'
    const menuToggle = document.querySelector('.menu-toggle');
    const categoryList = document.querySelector('.category-list');
    
    // Memastikan kedua elemen ditemukan sebelum menambahkan event listener
    if (menuToggle && categoryList) {
        // Menambahkan event listener pada elemen menuToggle untuk mendengarkan event klik
        menuToggle.addEventListener('click', function() {
            // Menambahkan atau menghapus class 'show' pada elemen categoryList
            // Class 'show' digunakan untuk menampilkan atau menyembunyikan daftar kategori
            categoryList.classList.toggle('show');
        });
    }
}

// Menambahkan event listener pada document untuk menjalankan fungsi menuToggle setelah seluruh konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', menuToggle);

// Fungsi untuk menghitung luas segitiga
function luasSegitiga() {
    // Mengambil nilai alas dan tinggi dari input pengguna
    const alas = parseFloat(document.getElementById('panjang-alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    // Memastikan nilai yang dimasukkan adalah angka
    if(!isNaN(alas) && !isNaN(tinggi)) {
        // Menghitung luas segitiga
        const luas = (alas * tinggi) / 2;
        // Menampilkan hasil perhitungan luas segitiga ke dalam elemen result-luas
        document.getElementById('result-luas').innerHTML = 'Luas Segitiga: ' + 1/2 + ' x ' + alas + ' x ' + tinggi + ' = ' + luas;
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-luas').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(alas);
    console.log(tinggi);
    console.log(alas * tinggi / 2);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung keliling segitiga
function kelilingSegitiga() {
    // Mengambil nilai ketiga sisi segitiga dari input pengguna
    const sisi1 = parseFloat(document.getElementById('sisi-1').value);
    const sisi2 = parseFloat(document.getElementById('sisi-2').value);
    const sisi3 = parseFloat(document.getElementById('sisi-3').value);
    
    // Memastikan semua nilai yang dimasukkan adalah angka
    if(!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        // Menghitung keliling segitiga
        const keliling = sisi1 + sisi2 + sisi3;
        // Menampilkan hasil perhitungan keliling ke dalam elemen result-keliling
        document.getElementById('result-keliling').innerHTML = 'Keliling Segitiga: ' + sisi1 + ' + ' + sisi2 + ' + ' + sisi3 + ' = ' + keliling;
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-keliling').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(sisi1);
    console.log(sisi2);
    console.log(sisi3);
    console.log(sisi1 + sisi2 + sisi3);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form luas segitiga
function resetFormLuas() {
    // Mengosongkan input pada form luas segitiga
    document.getElementById('panjang-alas').value = '';
    document.getElementById('tinggi').value = '';
    // Menghapus hasil perhitungan luas yang ditampilkan
    document.getElementById('result-luas').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form keliling segitiga
function resetFormKeliling() {
    // Mengosongkan input pada form keliling segitiga
    document.getElementById('sisi-1').value = '';
    document.getElementById('sisi-2').value = '';
    document.getElementById('sisi-3').value = '';
    // Menghapus hasil perhitungan keliling yang ditampilkan
    document.getElementById('result-keliling').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}