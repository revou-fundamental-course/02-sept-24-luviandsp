function menuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const categoryList = document.querySelector('.category-list');
    
    if (menuToggle && categoryList) {
        menuToggle.addEventListener('click', function() {
            categoryList.classList.toggle('show');
        });
    }
}

document.addEventListener('DOMContentLoaded', menuToggle);

function luasSegitiga() {
    const alas = parseFloat(document.getElementById('panjang-alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if(!isNaN(alas) && !isNaN(tinggi)) {
        const luas = (alas * tinggi) / 2;
        document.getElementById('result-luas').innerHTML = 'Luas Segitiga: ' + luas;
    } else {
        document.getElementById('result-luas').innerHTML = 'Mohon isi semua nilai!';
    }

    return false;
}

function kelilingSegitiga() {
    const sisi1 = parseFloat(document.getElementById('sisi-1').value);
    const sisi2 = parseFloat(document.getElementById('sisi-2').value);
    const sisi3 = parseFloat(document.getElementById('sisi-3').value);
    
    if(!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('result-keliling').innerHTML = 'Keliling Segitiga: ' + keliling;
    } else {
        document.getElementById('result-keliling').innerHTML = 'Mohon isi semua nilai!';
    }

    return false;
}

function resetFormLuas() {
    document.getElementById('panjang-alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result-luas').innerHTML = '';

    return false;
}

function resetFormKeliling() {
    document.getElementById('sisi-1').value = '';
    document.getElementById('sisi-2').value = '';
    document.getElementById('sisi-3').value = '';
    document.getElementById('result-keliling').innerHTML = '';

    return false;
}