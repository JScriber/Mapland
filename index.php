<!DOCTYPE html>
<html>
	<!-- Thought up by Anthony GST ~ Dedicated to G.D., my star my perfect silence. 
	- 01/06/2017 Version 0.1.3 -->
	<head>
		<!-- CSS files -->
		<link rel="stylesheet" href="styles/main.css" type="text/css"/>
		<link rel="stylesheet" href="styles/accueil.css" type="text/css"/>
		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link rel="shortcut icon" href="images/system/logos/MapLand.png">
		<meta charset="utf-8" />
		<title>MapLand</title>
	</head>

	<body>
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
			<header>
				<img id="logoPrincipal" src="images/system/logos/MapLand.png"/>
				<ul id="liens">
					<li data-article="accueil" class="highlight">Accueil</li>
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
