document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const userResponse = confirm('Welcome to Pelajar Islam Indonesia! Would you like to explore more sections?');

    if (userResponse) {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            window.location.href = '#about';
        }, 300);
    } else {
        const message = document.createElement('div');
        message.textContent = 'Feel free to browse at your own pace!';
        message.classList.add('message');
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 2000);
    }
});
