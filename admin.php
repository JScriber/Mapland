<!DOCTYPE html>
<html>
	<head>
		<!-- CSS files -->
		<link rel="stylesheet" href="styles/general.css" type="text/css"/>
		<link rel="stylesheet" href="styles/admin.css" type="text/css"/>

		<link rel="shortcut icon" href="images/system/logos/favicon.png">
		<script type="text/javascript" src="scripts/admin.js"></script>
		<meta charset="utf-8">
		<title>MapLand - Admin</title>
	</head>
	<body>
		<?php include('includes/vectors-admin.php'); ?>
		<header>
			<img src="images/system/logos/MapLand.png"/>
			<p>Administration</p>
		</header>
		<section>
			<form action="includes/insertCard.php" method="post" enctype="multipart/form-data">
				<h1>
					<input type="text" name="title" placeholder="Titre de la carte"/>
				</h1>
				<span class="files picture">
					<label for="file" class="label-file">
						<svg viewBox="0 0 24 24">
							<use xlink:href="#IMG_PHOTO"></use>
						</svg>
						<p class="filesPath">Ajouter une image</p>
					</label>
					<input id="file" class="input-file" type="file">
				</span>

				<span>
					<fieldset>
						<legend>Catégorie</legend>
						<select name="categorie">
							<option value="histoire">Histoire</option> 
							<option value="geographie">Géographie</option>
							<option value="physique">Physique</option>
							<option value="svt">S.V.T.</option>
						</select>
					</fieldset>

					<fieldset>
						<legend>Niveau</legend>
						<select name="niveau">
							<option>Général</option> 
							<option>Seconde</option>
							<option>Première S</option>
							<option>Terminale S</option>
						</select>
					</fieldset>
				</span>
				

				<fieldset>
					<legend>Description</legend>
					<textarea maxlength="160" name="description" id="description"></textarea>
				</fieldset>
				
				<span class="files">
					<label for="previsualisation" class="label-file">
						<svg viewBox="0 0 24 24">
							<use xlink:href="#IMG_PREVISUALISATION"></use>
						</svg>
						<p class="filesPath">Prévisualisation</p>
					</label>
					<input id="previsualisation" class="input-file" type="file">
				</span>

				<span class="files">
					<label for="pdf" class="label-file">
						<svg viewBox="0 0 24 24">
							<use xlink:href="#IMG_PDF"></use>
						</svg>
						<p class="filesPath">Importer la carte</p>
					</label>
					<input id="pdf" class="input-file" type="file">
				</span>
				<footer>
					<button>Ajouter</button>
				</footer>
			</form>
		</section>
	</body>
</html>