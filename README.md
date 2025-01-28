<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pelajar Islam Indonesia</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS file -->
</head>
<body>
    <header>
        <div class="logo">
            <img src="IMG_9420.PNG" alt="Pengurus Daerah Pelajar Islam Indonesia">
        </div>
        <nav>
            <ul>
                <li><a href="#coming-soon">Coming Soon</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#management">Management</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

   <section id="home" class="intro box">
    <h1>WELCOME TO PD PII KOTA MATARAM</h1>
    <p>Untuk informasi lebih lanjut, silakan klik di bawah ini:</p>
    <button>
        <a href="https://www.instagram.com/pd_pii_mataram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">INFORMASI LEBIH LANJUT!</a>
    </button>
</section>

<section id="coming-soon" class="content box">
    <h2>COMING SOON: TA'LIM UMUM 2025</h2>
    <h3>Poster: </h3>
    <p>Click <a href="https://www.instagram.com/p/DFNtt_AT6Y9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">here</a> to view the event poster.</p>
</section>

    <section id="about" class="content box">
        <h2>SEJARAH PELAJAR ISLAM INDONESIA</h2>
        <p>
            Pelajar Islam Indonesia yang berdiri sejak tahun 1947 merupakan organisasi yang bergerak sebagai wadah penanganan problematika pelajar. 
            Dengan perkembangan zaman, organisasi ini tetap berkomitmen untuk mencetak generasi pemimpin pelajar. 
            Pelajar Islam Indonesia memiliki program yang mendukung pembentukan karakter pelajar yang muslim, cendekia, dan pemimpin. 
            Selain itu, PII juga mengatasi permasalahan melalui training yang diadakan setiap tahun sebagai kontribusi dalam pembentukan akhlak dan moral pelajar.
        </p>
    </section>

    <section id="programs" class="content box">
        <h3>OUR PROGRAMS</h3>
        <article class="program">
            <img src="WhatsApp Image 2024-10-21 at 20.29.16.jpeg" alt="Konfersi Daerah (KONDA) ke XXVII/KE-27">
            <h4>Konfersi Daerah (KONDA) ke XXVII/KE-27</h4>
            <p>Pergantian Kepengurusan Ketua Umum Periode 2022/2023 dengan 2023/2024</p>
        </article>
        <article class="program">
            <img src="WhatsApp Image 2024-10-21 at 20.30.04.jpeg" alt="HARBANAS PII KE -77">
            <h4>HARBANAS PII KE -77</h4>
            <p>Keluarga besar pelajar islam indonesia NTB telah mengadakan Harbanas PII ke-77 bersama Kanda/Yunda KB PII NTB di SMAN 3 MATARAM dengan Tema Membangun Kolaborasi Indonesia</p>
        </article>
    </section>

    <section id="management" class="content box">
        <h2>STRUKTUR ORGANISASI</h2>
        <div class="team">
            <div class="team-member">
                <img src="WhatsApp Image 2024-10-21 at 20.29.14 (1).jpeg" alt="Sekretaris Umum - Cahaya Cinta Ilahi">
                <h5>Sekretaris Umum</h5>
                <p>Cahaya Cinta Ilahi</p>
            </div>
            <div class="team-member">
                <img src="WhatsApp Image 2024-10-21 at 20.29.14.jpeg" alt="Ketua Umum - M. Qaerul Ibad">
                <h5>Ketua Umum</h5>
                <p>M. Qaerul Ibad</p>
            </div>
            <div class="team-member">
                <img src="WhatsApp Image 2024-10-21 at 20.29.14 (2).jpeg" alt="Bendahara Umum - Rizkiyana Intan Pratiwi">
                <h5>Bendahara Umum</h5>
                <p>Rizkiyana Intan Pratiwi</p>
            </div>
        </div>
    </section>

    <footer id="contact">
        <h2>Contact Us</h2>
        <p>
            Pengurus Daerah Pelajar Islam Indonesia Kota Mataram Priode 2023/2024<br>
            Email: <a href="mailto:pdpiikotamataram@gmail.com">pdpiikotamataram@gmail.com</a><br>
            Phone: +62 838-9841-5041<br>
            Instagram: <a href="https://instagram.com/pd_pii_mataram" target="_blank">@pd_pii_mataram</a><br>
            Location: Jl. Terusan Bung Hatta, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat. 83124
        </p>
    </footer>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #003366;
    padding: 10px 20px;
    color: white;
    flex-wrap: wrap;
}

header .logo img {
    height: 70px;
    width: auto;
}

nav ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ffcc00;
}

/* Intro Section */
.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    text-align: center;
    background-image: url('Subway\,\ Camille\ Unknown.gif');
    background-size: cover;
    background-position: center;
    color: white;
    background-attachment: fixed;
}

.intro h1 {
    font-size: 36px;
    margin-bottom: 15px;
}

.intro p {
    font-size: 18px;
    margin-bottom: 30px;
    max-width: 600px;
    line-height: 1.6;
}

button {
    padding: 12px 25px;
    background-color: #ffcc00;
    color: #003366;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-size: 18px;
}

button a {
    text-decoration: none;
    color: inherit;
}

button:hover {
    background-color: #ffd700;
    transform: scale(1.05);
}

/* Content Sections */
.content {
    padding: 50px 20px;
    text-align: center;
}

.content h2, .content h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

.content p {
    font-size: 18px;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Box style for sections */
.box {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
}

/* Program Section */
.programs-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.program {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.program img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    margin-right: 20px;
}

.program-description {
    text-align: justify;
}

.program-description h4 {
    font-size: 24px;
    margin: 0 0 10px;
}

.program-description p {
    font-size: 16px;
}

/* Team Section */
.team {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.team-member {
    text-align: center;
    max-width: 150px;
}

.team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.team-member h5 {
    font-size: 15px;
    margin: 10px 0;
}

/* Footer Section */
footer {
    background-color: #003366;
    color: white;
    text-align: center;
    padding: 20px;
}

footer h2 {
    margin-bottom: 10px;
}

footer p {
    font-size: 14px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .intro h1 {
        font-size: 28px;
    }

    .intro p {
        font-size: 16px;
    }

    .content h2, .content h3 {
        font-size: 28px;
    }

    .content p {
        font-size: 16px;
    }

    .team {
        flex-direction: column;
    }

    .team-member {
        max-width: 100%;
    }

    .program {
        flex-direction: column;
        align-items: flex-start;
    }

    .program img {
        width: 100%;
        margin-right: 0;
    }

    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        margin: 10px 0;
    }
}

@media (max-width: 480px) {
    .intro h1 {
        font-size: 24px;
    }

    .intro p {
        font-size: 14px;
    }

    .content h2, .content h3 {
        font-size: 24px;
    }

    .content p {
        font-size: 14px;
    }

    .team-member img {
        width: 120px;
        height: 120px;
    }

    .team-member h5 {
        font-size: 14px;
    }
}
