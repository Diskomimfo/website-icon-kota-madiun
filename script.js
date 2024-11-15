// Mendapatkan semua elemen modal
var modals = document.querySelectorAll('.modal');
var btns = document.querySelectorAll('.card-item');
var spans = document.getElementsByClassName("close");

// Mengatur event listener untuk setiap tombol
btns.forEach((btn, index) => {
  btn.onclick = function() {
    var modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = "block";
  }
});

// Menutup modal ketika pengguna mengklik 'x'
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";
    }
  }
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

  // Close modal when clicking outside of modal content
  modals.forEach(modal => {
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.classList.remove('modal-active');
      }
    });
  });



// JavaScript untuk mendeteksi scroll dan menambahkan kelas "scrolled"
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  
  if (window.scrollY > 50) { // Jika halaman di-scroll lebih dari 50px
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});




document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah submit form secara default

  // Ambil elemen tombol kirim
  const btn = document.querySelector('button[type="submit"]');
  btn.value = 'Sending...';

  // Ambil nilai dari form
  const from_name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulasi pengiriman data
  alert(`Terima kasih, ${from_name}! Pesan Anda tentang Destinasi Wisata Kota Madiun telah diterima.`);

  // Konfigurasi parameter untuk EmailJS
  const params = {
      from_name: from_name,
      email: email,
      message: message
  };
  
  emailjs.send("service_oexo3kn","template_a6szvl1", params)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          btn.value = 'Send Email';
          alert('Pesan Anda berhasil dikirim!');
      }, function(error) {
          console.log('FAILED...', error);
          btn.value = 'Send Email';
          alert('Gagal mengirim pesan, coba lagi nanti.');
      });

  // Reset form
  this.reset();
});



