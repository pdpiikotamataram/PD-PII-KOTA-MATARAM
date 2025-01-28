<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pelajar Islam Indonesia</title>
    <style>
        /* Basic styles for the page */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }

        /* Header and Navigation */
        header {
            background-color: #004D40;
            color: white;
            text-align: center;
            padding: 15px;
        }

        header .logo img {
            width: 150px;
            margin-bottom: 10px;
        }

        header nav ul {
            list-style: none;
            padding: 0;
        }

        header nav ul li {
            display: inline;
            margin: 0 15px;
        }

        header nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
        }

        header nav ul li a:hover {
            text-decoration: underline;
        }

        /* Section Styles */
        section {
            margin: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2, h3 {
            font-family: 'Arial', sans-serif;
            color: #004D40;
        }

        /* Box Class for Consistency */
        .box {
            background-color: #fafafa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        /* Button Styles */
        .btn-primary {
            background-color: #004D40;
            color: white;
            padding: 12px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn-primary a {
            color: white;
            text-decoration: none;
        }

        .btn-primary:hover {
            background-color: #00796B;
        }

        /* Program Cards Layout */
        .programs-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .program-card {
            width: 250px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .program-card:hover {
            transform: translateY(-10px);
        }

        .program-card img {
            width: 100%;
            height: auto;
            border-bottom: 2px solid #ddd;
        }

        .program-card h4 {
            font-size: 18px;
            padding: 10px;
            color: #004D40;
            margin: 0;
        }

        .program-card p {
            font-size: 14px;
            padding: 10px;
            color: #555;
        }

        /* Team Section Styling */
        .team {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .team-member {
            width: 200px;
            text-align: center;
        }

        .team-member img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            margin-bottom: 15px;
        }

        .team-member h5 {
            font-size: 16px;
            font-weight: bold;
        }

        .team-member p {
            font-size: 14px;
            color: #555;
        }

        /* Footer Styling */
        footer {
            background-color: #004D40;
            color: white;
            text-align: center;
            padding: 20px;
        }

        footer a {
            color: #f4f4f4;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            header nav ul {
                text-align: center;
            }

            header nav ul li {
                display: block;
                margin: 10px 0;
            }

            .programs-container {
                flex-direction: column;
            }

            .team {
                flex-direction: column;
                align-items: center;
            }
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
        <p>For more information, click below:</p>
        <button class="btn-primary">
            <a href="https://www.instagram.com/pd_pii_mataram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">INFORMASI LEBIH LANJUT!</a>
        </button>
    </section>

    <section id="about" class="content box">
        <h2>SEJARAH PELAJAR ISLAM INDONESIA</h2>
        <p>
            Pelajar Islam Indonesia, founded in 1947, is an organization dedicated to addressing student-related issues and shaping future leaders. With continuous programs for character building and Islamic training, PII plays a key role in forming Muslim, intellectual, and leadership qualities among students.
        </p>
    </section>

    <section id="programs" class="content box">
        <h3>OUR PROGRAMS</h3>
        <div class="programs-container">
            <!-- Program 1 -->
            <div class="program-card">
                <img src="WhatsApp Image 2024-10-21 at 20.29.16.jpeg" alt="Konfersi Daerah (KONDA) ke XXVII/KE-27">
                <h4>Konfersi Daerah (KONDA) ke XXVII/KE-27</h4>
                <p>Pergantian Kepengurusan Ketua Umum Periode 2022/2023 dengan 2023/2024.</p>
            </div>
            <!-- Program 2 -->
            <div class="program-card">
                <img src="WhatsApp Image 2024-10-21 at 20.30.04.jpeg" alt="HARBANAS PII KE -77">
                <h4>HARBANAS PII KE -77</h4>
                <p>Harbanas PII ke-77 dengan tema Membangun Kolaborasi Indonesia.</p>
            </div>
            <!-- Program 3 -->
            <div class="program-card">
                <img src="WhatsApp Image 2024-10-21 at 20.30.05.jpeg" alt="Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah">
                <h4>Sosialisasi bersama MTs-SA Madrasatul Qur'aniyah</h4>
                <p>Socialization event with MTs-SA Madrasatul Qur'aniyah students.</p>
            </div>
            <!-- Program 4 -->
            <div class="program-card">
                <img src="image copy 11.png" alt="Ta'lim Bersama">
                <h4>Ta'lim Bersama</h4>
                <p>Character building starts with a strong faith and belief in Allah and His Messenger.</p>
            </div>
        </div>
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
