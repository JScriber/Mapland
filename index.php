<!DOCTYPE html>
<html>
	<!-- Created by Anthony GST
	- 01/06/2017 -->
	<head>
		<!-- CSS files -->
		<link rel="stylesheet" href="styles/general.css" type="text/css"/>
		<link rel="stylesheet" href="styles/main.css" type="text/css"/>
		<link rel="stylesheet" href="styles/finder.css" type="text/css"/>
		<link rel="stylesheet" href="styles/accueil.css" type="text/css"/>
		
		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
		<link rel="manifest" href="images/favicons/site.webmanifest">
		<link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#6a1b9a">
		<link rel="shortcut icon" href="images/favicons/favicon.ico">
		<meta name="msapplication-TileColor" content="#6a1b9a">
		<meta name="msapplication-config" content="images/favicons/browserconfig.xml">
		<meta name="theme-color" content="#6a1b9a">

		<meta charset="utf-8"/>
		<title>MapLand</title>
	</head>

	<body>
		<?php include('includes/vectors.php'); ?>
		<div id="popup">
			<nav>
				<p id="popupName">Test</p>
				<button id="closePopup">
					<img src="images/close.svg">
				</button>
			</nav>
			<div>
				<img id="preview" src=""/>
			</div>
		</div>

		<div id="conteneur">
			<!-- Bandeau -->
			<header class="light">
				<img id="logoPrincipal" src="images/system/logos/MapLand.png"/>
				<div class="searchBar">
					<span>
						<input id="search" autocomplete="off" type="text" placeholder="Rechercher une carte"/>
					</span>
					<svg viewBox="0 0 24 24">
						<use xlink:href="#IMG_SEARCH"></use>
					</svg>
				</div>
				<ul id="liens">
					<li data-article="histoire">Histoire</li>
					<li data-article="geographie">Géographie</li>
					<li data-article="physique">Physique</li>
					<li data-article="svt">SVT</li>
				</ul>
			</header>
			
			<!-- Page d'accueil -->
			<article id="accueil" class="shown">
				<div class="introduction">
					<h1>Bienvenue sur MapLand</h1>
					<p>Le site de cartes heuristiques accompagnant vos révisions !</p>
				</div>
				<div class="information">
					<h1>
						<img src="images/files.svg"/>
						<p>Nos cartes</p>
					</h1>
					<ul>
						<li>
							<img src="images/history.svg"/>
							<p>Histoire</p>
						</li>
						<li>
							<img src="images/geography.svg"/>
							<p>Géographie</p>
						</li>
						<li>
							<img src="images/science.svg"/>
							<p>Physique</p>
						</li>
						<li>
							<img src="images/svt.svg"/>
							<p>SVT</p>
						</li>
					</ul>
				</div>
				<ol>
					<div class="information">
						<h1>
							<img src="images/download.svg"/>
							<p>Lancez-vous</p>
						</h1>
						<section>
							<p>Créez vous-mêmes vos cartes avec <strong><a target="_blank" href="http://www.xmind.net">XMind</a></strong>. Un logiciel en partie gratuit permettant de synthétiser et organiser votre cours. Téléchargez le logiciel sur le site dédié et lancez-vous dans le monde des <strong>cartes heuristiques</strong> !</p>
						</section>
					</div>
					<div class="information">
						<h1>
							<img src="images/share.svg"/>
							<p>Partagez le site</p>
						</h1>
						<section>
							<p>Nos services sont <strong>gratuits</strong>, mais ont demandé beaucoup de travail... Ainsi, n'hésitez pas à faire honneur à notre travail en le partageant avec vos amis ! Nous serions heureux d'apprendre que notre travail est toujours utile.</p>
						</section>
					</div>
				</ol>
			</article>

			<!-- Ajout des pages -->
			<?php 
				include('includes/addPage.php');
				addPage(array(
					"histoire",
					"geographie",
					"physique",
					"svt"
				));
			?>
			
			<!--  FOOTER -->
			<footer>
				Créé par <a href="https://www.linkedin.com/in/anthony-gueusset/" target="_blank">Anthony GUEUSSET</a>. Icônes par <a href="https://www.flaticon.com/authors" target="_blank">Flaticon</a>.
			</footer>
		</div>
	</body>

	<!-- JS files -->
	<script type="text/javascript" src="scripts/main.js"></script>

</html>
