<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wireframe TP1</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <nav class="navbar">
        <div class="logo">TP1 - Ktshibola</div>
        <button class="menu-btn" onclick="toggleMenu()">&#9776;</button>

        <div class="nav-links">
            <a href="#">Accueil</a>
            <a href="#">Page 1</a>
            <a href="#">Page 2</a>
            <a href="#">Page 3</a>
        </div>
    </nav>

    <main>
        <h2>MON TITRE DE NIVEAU 1</h2>

        <section class="container">
            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>

            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>

            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>

            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>

            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>

            <article class="box">
                <img src="tttt.jpeg" class="fill" alt="Image">
                <h3>Titre de la carte</h3>
                <p>Description de la carte un peu plus longue</p>
                <a href="#">Lien - En savoir plus</a>
            </article>
        </section>
    </main>

    <footer>
        <div class="footer-container">
            <section class="footer-section">
                <div class="logo-footer">Logo</div>
                <p>Slogan</p>
            </section>
            <section class="footer-section">
                <h4>Liens rapides</h4>
                <a href="#">Lien 1</a>
                <a href="#">Lien 2</a>
                <a href="#">Lien 3</a>
            </section>
            <section class="footer-section">
                <h4>Team</h4>
                <a href="#">Lien 1</a>
                <a href="#">Lien 2</a>
                <a href="#">Lien 3</a>
            </section>
            <section class="footer-section">
                <h4>Légal</h4>
                <a href="#">Lien 1</a>
                <a href="#">Lien 2</a>
                <a href="#">Lien 3</a>
            </section>
        </div>
    </footer>

    <script>
        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('show');
        }
    </script>

</body>
</html>
