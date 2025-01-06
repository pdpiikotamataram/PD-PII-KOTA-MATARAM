<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pelajar Islam Indonesia</title>
    <style>
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

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #003366;
            padding: 10px 20px;
            color: white;
        }

        header .logo img {
            height: 70px;
        }

        nav ul {
            list-style: none;
            display: flex;
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
        }

        .intro h1 {
            font-size: 36px;
            margin-bottom: 15px;
        }

        .intro p {
            font-size: 18px;
            margin-bottom: 30px;
            max-width: 600px;
        }

        button {
            padding: 12px 25px;
            background-color: #ffcc00;
            color: #003366;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button a {
            text-decoration: none;
            color: inherit;
        }

        button:hover {
            background-color: #ffd700;
        }

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

        /* Styles for the Programs section */
        .programs-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .program {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
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

        /* Center text for specific sections */
        .content.box p,
        #coming-soon p {
            text-align: center;
            font-size: 18px;
            margin-top: 20px;
        }

        /* Styles for the team section */
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

        /* Footer styles */
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

        h2 {
            text-align: center;
            margin-bottom: 10px;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8; /* Warna latar belakang yang lebih terang */
            color: #333;
        }

        header {
            background-color: #004080; /* Warna header yang lebih gelap */
        }

        .intro {
            background-image: url('Subway\,\ Camille\ Unknown.gif');
            background-size: cover;
            background-position: center;
            color: #fff; /* Warna teks putih */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Menambahkan bayangan untuk kontras */
        }

        button {
            padding: 12px 25px;
            background-color: #ffcc00;
            color: #003366;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            font-size: 18px; /* Ukuran font yang lebih besar */
        }

        button:hover {
            background-color: #ffd700;
            transform: scale(1.05); /* Sedikit efek zoom saat hover */
        }

        .box {
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Bayangan yang lebih lembut */
        }

        .message {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 20px;
            background-color: #ffcc00;
            color: #003366;
            border-radius: 5px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s;
        }

        .message.fade-out {
            opacity: 0; /* Animasi hilang */
        }
    </style>
</head>

<body>
    <header>
        <div class="logo">
            <img src="IMG_9420.PNG" alt="Pengurus Daerah Pelajar Islam Indonesia">
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#management">Management</a></li>
                <li><a href="#coming-soon">Coming Soon</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="intro box">
        <h1>WELCOME TO PD PII KOTA MATARAM</h1>
        <p>Untuk informasi lebih lanjut, silakan klik di bawah ini:</p>
        <button>
            <a href="https://www.instagram.com/pd_pii_mataram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none; color: white;">LIHAT INFORMASI!</a>
        </button>
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

    <section id="programs" class="content">
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
        <article class="program">
            <img src="WhatsApp Image 2024-10-21 at 20.30.05.jpeg" alt="Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah">
            <h4>Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah</h4>
            <p>Alhamdulillah PII Mataram telah melaksanakan sosialisasi bersama MTs Madrasatul Qur'aniyah. Terima kasih kepada Siswa dan Siswi MTs-SA Madrasatul Qur'aniyah yang telah antusias dalam sosialisasi ini.</p>
        </article>
        <article class="program">
            <img src="image copy 11.png" alt="Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah">
            <h4>Ta'lim Bersama</h4>
            <p>Pembentukan karakter Islami dimulai dengan memperkuat aqidah, keyakinan yang kokoh kepada Allah dan Rasul-Nya. Aqidah yang kuat akan menjadi landasan bagi segala perilaku dan tindakan kita. Karakter Islami mencakup kejujuran, kesabaran, dan kasih sayang.</p>
        </article>
        <article class="program">
            <img src="image copy 13.png" alt="Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah">
            <h4>PRA-BATRA 2024</h4>
            <p>Kepengurusan Daerah Kota Mataram Telah membuat agenda acara yaitu #Pra-Batra

                Yang di adakan di kota mataram, Sabtu, 06/Juli/2024, Yg di buat oleh Ketua Bidang oleh
                Nabillatussalamah
                ...
            </p>
        </article>
        <article class="program">
            <img src="WhatsApp Image 2024-11-11 at 19.25.52.jpeg" alt="Sosialisasi bersama MTs
