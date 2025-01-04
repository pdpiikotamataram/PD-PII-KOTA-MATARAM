document.getElementById('learnMoreBtn').addEventListener('click', function() {
    // Menggunakan confirm untuk mendapatkan respons pengguna
    const userResponse = confirm('Welcome to Pelajar Islam Indonesia! Would you like to explore more sections?');

    if (userResponse) {
        this.style.transition = 'transform 0.3s, background-color 0.3s';
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            window.location.href = '#about';
        }, 300);
    } else {
        const message = document.createElement('div');
        message.textContent = 'Feel free to browse our website at your own pace!';
        message.classList.add('message'); // Tambahkan kelas untuk styling
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('fade-out'); // Menambahkan kelas fade-out untuk animasi hilang
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300); // Waktu untuk menghapus setelah animasi
        }, 2000);
    }
});
