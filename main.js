// Menambahkan animasi scroll-to-top saat tombol di klik
document.querySelector('.btn-primary a').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menambahkan animasi untuk Struktur Organisasi saat scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.org-card');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add('animate__animated', 'animate__zoomIn');
        }
    });
});

// Menambahkan efek animasi untuk halaman yang baru dimuat
window.addEventListener('load', function() {
    document.querySelector('#home').classList.add('animate__animated', 'animate__fadeIn');
    document.querySelector('#about').classList.add('animate__animated', 'animate__fadeIn');
    document.querySelector('#programs').classList.add('animate__animated', 'animate__fadeIn');
    document.querySelector('#management').classList.add('animate__animated', 'animate__fadeIn');
});
