<?php

	function addPage($categories){
		foreach($categories as $categorie){
		?>
			<article id="<?php echo $categorie; ?>">
			<?php
				include 'connection.php';
				$requete = 'SELECT titre, niveau, image, description, pdf, previsualisation FROM cartes WHERE categorie = \''.$categorie.'\' ORDER BY titre';

				$cartes = $bdd->query($requete);

				while($carte = $cartes->fetch()){
				?>
					<div class="card"">
						<div class="header">
							<span>
								<?php
									$niveau = strtolower($carte["niveau"]);
									if(strcmp($niveau, "général") == 0)
									{
									?>
										<img src="images/star.svg"/>
									<?php
									}else{
									?>
										<img src="images/other.svg"/>
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
						<p><?php echo $carte["description"]; ?></p>
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
			</article>
		<?php
		}
	}

?>