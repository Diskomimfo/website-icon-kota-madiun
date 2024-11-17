document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const dataList = document.querySelector('.data-list');

    hamburger.addEventListener('click', () => {
        dataList.classList.toggle('active'); // Toggle kelas active pada data-list
        // Tambahkan animasi atau perubahan gaya jika ingin
        hamburger.classList.toggle('is-active'); // Menambahkan kelas aktif pada hamburger jika diperlukan
    });
});