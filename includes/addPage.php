<?php

	function addPage($categories){
		foreach($categories as $categorie){
		?>
			<article id="<?php echo $categorie; ?>">
			<?php
				include 'addFinder.php';
				include 'connection.php';
				$requete = 'SELECT titre, niveau, image, description, pdf, previsualisation FROM cartes WHERE categorie = \''.$categorie.'\' ORDER BY titre';

				$cartes = $bdd->query($requete);
			?>
				<ol>
			<?php
				while($carte = $cartes->fetch()){
					$niveau = strtolower($carte["niveau"]);
				?>
					<div class="card <?php
						if(strcmp($niveau, "général") == 0)
						{
							echo "culture";
						}else{
							echo "courses";
						}
					?>">
						<div class="header">
							<span>
								<?php
									if(strcmp($niveau, "général") == 0)
									{
									?>
										<svg viewBox="0 0 24 24">
											<use xlink:href="#IMG_CULTURE"></use>
										</svg>
									<?php
									}else{
									?>
										<svg viewBox="0 0 24 24">
											<use xlink:href="#IMG_BOOK"></use>
										</svg>
									<?php
									}
								?>
							</span>
							<h1>
								<p><?php echo $carte["titre"]; ?></p>
								<p><?php echo $carte["niveau"]; ?></p>
							</h1>
						</div>
						<span>
							<img src="images/illustrations/<?php echo $carte["image"]; ?>"/>
						</span>
						<p class="description"><?php echo $carte["description"]; ?></p>
						<nav>
							<li>
								<a>
									<img src="images/print.svg"/>
								</a>
								<a class="toggleView" data-link="<?php echo $carte["previsualisation"]; ?>">
									<img src="images/view.svg"/>
								</a>
							</li>
							<li>
								<a target="_blank" class="text" href="mindmaps/<?php echo $carte["pdf"]; ?>.xmind">Télécharger</a>
							</li>
						</nav>
					</div>
				<?php
				}
			?>
					<div class="notFound hidden">
						<svg viewBox="0 0 24 24">
							<use xlink:href="#IMG_NOTFOUND"></use>
						</svg>
						<span>
							<p>Aucun résultat pour </p>
							<p class="searchBarTry">[Error]</p>
						</span>
					</div>
				</ol>
			</article>
		<?php
		}
	}

?>