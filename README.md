/* Basic styles for the page */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* Header and navigation */
header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

header .logo img {
    width: 120px;
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
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* General section styling */
section {
    padding: 20px;
    margin: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3, h4, h5 {
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Box container for content sections */
.box {
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background-color: #fafafa;
    margin-bottom: 20px;
}

.intro {
    text-align: center;
}

.intro button {
    background-color: #333;
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
}

.intro button a {
    color: white;
    text-decoration: none;
}

.intro button:hover {
    background-color: #555;
}

/* Program section styling */
.program {
    margin-bottom: 20px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
}

.program img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.program h4 {
    color: #444;
}

.program p {
    font-size: 14px;
}

/* Management and team section */
.team {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.team-member {
    width: 200px;
    text-align: center;
}

.team-member img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

.team-member h5 {
    font-size: 16px;
    font-weight: bold;
}

.team-member p {
    font-size: 14px;
    color: #666;
}

/* Footer styling */
footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

footer a {
    color: #f4f4f4;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Mobile responsive styling */
@media (max-width: 768px) {
    .team {
        flex-direction: column;
        align-items: center;
    }

    header nav ul li {
        display: block;
        margin: 10px 0;
    }
}
