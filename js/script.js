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
    const alas = parseFloat(document.getElementById('panjang-alas-segitiga').value);
    const tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);

    // Memastikan nilai yang dimasukkan adalah angka
    if(!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
        // Menghitung luas segitiga
        const luas = (alas * tinggi) / 2;
        // Menampilkan hasil perhitungan luas segitiga ke dalam elemen result-luas
        document.getElementById('result-luas-segitiga').innerHTML = 'Luas Segitiga: ' + 1/2 + ' x ' + alas + ' x ' + tinggi + ' = ' + luas;
    } else if (alas <= 0 || tinggi <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-luas-segitiga').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-luas-segitiga').innerHTML = 'Mohon isi semua nilai!';
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
    if(!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3) && sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        // Menghitung keliling segitiga
        const keliling = sisi1 + sisi2 + sisi3;
        // Menampilkan hasil perhitungan keliling ke dalam elemen result-keliling
        document.getElementById('result-keliling-segitiga').innerHTML = 'Keliling Segitiga: ' + sisi1 + ' + ' + sisi2 + ' + ' + sisi3 + ' = ' + keliling;
    } else if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-keliling-segitiga').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-keliling-segitiga').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(sisi1);
    console.log(sisi2);
    console.log(sisi3);
    console.log(sisi1 + sisi2 + sisi3);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung luas persegi panjang
function luasPersegiPanjang() {
    // Mengambil nilai panjang dan lebar dari input pengguna
    const panjang = parseFloat(document.getElementById('panjang-luas').value);
    const lebar = parseFloat(document.getElementById('lebar-luas').value);

    // Memastikan semua nilai yang dimasukkan adalah angka
    if(!isNaN(panjang) && !isNaN(lebar) && panjang > 0 && lebar > 0) {
        // Menghitung luas persegi panjang
        const luas = panjang * lebar;
        // Menampilkan hasil perhitungan luas ke dalam elemen result-luas
        document.getElementById('result-luas-persegi-panjang').innerHTML = 'Luas Persegi Panjang: ' + panjang + ' x ' + lebar + ' = ' + luas;
    } else if (panjang <= 0 || lebar <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-luas-persegi-panjang').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-luas-persegi-panjang').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(panjang);
    console.log(lebar);
    console.log(panjang * lebar);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung keliling persegi panjang
function kelilingPersegiPanjang() {
    // Mengambil nilai panjang dan lebar dari input pengguna
    const panjang = parseFloat(document.getElementById('panjang-keliling').value);
    const lebar = parseFloat(document.getElementById('lebar-keliling').value);

    // Memastikan semua nilai yang dimasukkan adalah angka
    if(!isNaN(panjang) && !isNaN(lebar) && panjang > 0 && lebar > 0) {
        // Menghitung keliling persegi panjang
        const keliling = 2 * (panjang + lebar);
        // Menampilkan hasil perhitungan keliling ke dalam elemen result-keliling
        document.getElementById('result-keliling-persegi-panjang').innerHTML = 'Keliling Persegi Panjang: 2 x (' + panjang + ' + ' + lebar + ') = ' + keliling;
    } else if (panjang <= 0 || lebar <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-keliling-persegi-panjang').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-keliling-persegi-panjang').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(panjang);
    console.log(lebar);
    console.log(2 * (panjang + lebar));

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung luas jajar genjang
function luasJajarGenjang() {
    // Mengambil nilai alas dan tinggi dari input pengguna
    const alas = parseFloat(document.getElementById('alas-jajar-genjang').value);
    const tinggi = parseFloat(document.getElementById('tinggi-jajar-genjang').value);

    if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
        // Menghitung luas jajar genjang
        const luas = alas * tinggi;
        // Menampilkan hasil perhitungan luas ke dalam elemen result-luas
        document.getElementById('result-luas-jajar-genjang').innerHTML = 'Luas Jajar Genjang: ' + alas + ' x ' + tinggi + ' = ' + luas;
    } else if (alas <= 0 || tinggi <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-luas-jajar-genjang').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-luas-jajar-genjang').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(alas);
    console.log(tinggi);
    console.log(alas * tinggi);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung keliling jajar genjang
function kelilingJajarGenjang() {
    // Mengambil nilai alas dan tinggi dari input pengguna
    const datar = parseFloat(document.getElementById('sisi-datar').value);
    const miring = parseFloat(document.getElementById('sisi-miring').value);

    if (!isNaN(datar) && !isNaN(miring) && datar > 0 && miring > 0) {
        // Menghitung keliling jajar genjang
        const keliling = 2 * (datar + miring);
        // Menampilkan hasil perhitungan keliling ke dalam elemen result-keliling
        document.getElementById('result-keliling-jajar-genjang').innerHTML = 'Keliling Jajar Genjang: 2 x (' + datar + ' + ' + miring + ') = ' + keliling;
    } else if (datar <= 0 || miring <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-keliling-jajar-genjang').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-keliling-jajar-genjang').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(datar);
    console.log(miring);
    console.log(2 * (datar + miring));

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung luas lingkaran
function luasLingkaran() {
    // Mengambil nilai jari-jari dari input pengguna
    const jariJari = parseFloat(document.getElementById('jari-jari-luas').value);
    if (!isNaN(jariJari) && jariJari > 0) {
        // Menghitung luas lingkaran
        const luas = Math.PI * Math.pow(jariJari, 2);
        // Menampilkan hasil perhitungan luas ke dalam elemen result-luas
        document.getElementById('result-luas-lingkaran').innerHTML = 'Luas Lingkaran: 3.14 x ' + jariJari + ' x ' + jariJari + ' = ' + luas.toFixed(2);
    } else if (jariJari <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-luas-lingkaran').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-luas-lingkaran').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(jariJari);
    console.log(3.14 * jariJari * jariJari);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk menghitung keliling lingkaran
function kelilingLingkaran() {
    // Mengambil nilai jari-jari dari input pengguna
    const jariJari = parseFloat(document.getElementById('jari-jari-keliling').value);
    if (!isNaN(jariJari) && jariJari > 0) {
        // Menghitung keliling lingkaran
        const keliling = 2 * Math.PI * jariJari;
        // Menampilkan hasil perhitungan keliling ke dalam elemen result-keliling
        document.getElementById('result-keliling-lingkaran').innerHTML = 'Keliling Lingkaran: 2 x 3.14 x ' + jariJari + ' = ' + keliling.toFixed(2);
    } else if (jariJari <= 0) {
        // Menampilkan pesan error jika input adalah nilai negatif
        document.getElementById('result-keliling-lingkaran').innerHTML = 'Mohon isi semua nilai dengan nilai positif!';
    } else {
        // Menampilkan pesan error jika input tidak valid
        document.getElementById('result-keliling-lingkaran').innerHTML = 'Mohon isi semua nilai!';
    }

    // Menampilkan nilai-nilai yang diinputkan ke console
    console.log(jariJari);
    console.log(2 * 3.14 * jariJari);

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form luas segitiga
function resetFormLuasSegitiga() {
    // Mengosongkan input pada form luas segitiga
    document.getElementById('panjang-alas-segitiga').value = '';
    document.getElementById('tinggi-segitiga').value = '';
    // Menghapus hasil perhitungan luas yang ditampilkan
    document.getElementById('result-luas-segitiga').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form keliling segitiga
function resetFormKelilingSegitiga() {
    // Mengosongkan input pada form keliling segitiga
    document.getElementById('sisi-1').value = '';
    document.getElementById('sisi-2').value = '';
    document.getElementById('sisi-3').value = '';
    // Menghapus hasil perhitungan keliling yang ditampilkan
    document.getElementById('result-keliling-segitiga').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form persegi panjang
function resetFormPersegiPanjang(option) {
    // Menghapus hasil perhitungan yang ditampilkan berdasarkan option, 1 untuk luas, 2 untuk keliling
    if (option == 1) {
        // Mengosongkan input pada form luas persegi panjang
        document.getElementById('panjang-luas').value = '';
        document.getElementById('lebar-luas').value = '';
        document.getElementById('result-luas-persegi-panjang').innerHTML = '';
    } else if (option == 2) {
        // Mengosongkan input pada form keliling persegi panjang
        document.getElementById('panjang-keliling').value = '';
        document.getElementById('lebar-keliling').value = '';
        document.getElementById('result-keliling-persegi-panjang').innerHTML = '';
    }

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form keliling jajar genjang
function resetFormKelilingJajarGenjang() {
    // Mengosongkan input pada form keliling jajar genjang
    document.getElementById('sisi-datar').value = '';
    document.getElementById('sisi-miring').value = '';
    // Menghapus hasil perhitungan keliling yang ditampilkan
    document.getElementById('result-keliling-jajar-genjang').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form luas jajar genjang
function resetFormLuasJajarGenjang() {
    // Mengosongkan input pada form luas jajar genjang
    document.getElementById('alas-jajar-genjang').value = '';
    document.getElementById('tinggi-jajar-genjang').value = '';
    // Menghapus hasil perhitungan keliling yang ditampilkan
    document.getElementById('result-luas-jajar-genjang').innerHTML = '';

    // Menghentikan pengiriman form
    return false;
}

// Fungsi untuk mereset form lingkaran
function resetFormLingkaran(option) {
    // Menghapus hasil perhitungan yang ditampilkan berdasarkan option, 1 untuk luas, 2 untuk keliling
    if (option == 1) {
        // Mengosongkan input pada form luas lingkaran
        document.getElementById('jari-jari-luas').value = '';
        document.getElementById('result-luas-lingkaran').innerHTML = '';
    } else if (option == 2) {
        // Mengosongkan input pada form luas lingkaran
        document.getElementById('jari-jari-keliling').value = '';
        document.getElementById('result-keliling-lingkaran').innerHTML = '';
    }

    // Menghentikan pengiriman form
    return false;
}