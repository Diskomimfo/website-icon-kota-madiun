document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger'); // Mendapatkan elemen tombol hamburger
    const dataList = document.querySelector('.data-list'); // Mendapatkan elemen menu dropdown

    // Menambahkan event listener untuk menangani klik pada tombol hamburger
    hamburger.addEventListener('click', () => {
        dataList.classList.toggle('active'); // Toggle kelas active pada data-list
        // Tambahkan animasi atau perubahan gaya jika ingin
        hamburger.classList.toggle('is-active'); // Menambahkan kelas aktif pada hamburger jika diperlukan
    });
});
