// Fonction de lancement
function luncher(){
	function primary(){
		// Fonction de récupération
		var getFrom = function(element, tag){
			var target = element.getElementsByTagName(tag)[0];
			if(target){
				return target.innerHTML;
			}
		}
		// Récupération données
		var requete = request.responseXML;
		var matieres = requete.getElementsByTagName('matiere'),
		conteneur = document.getElementById('conteneur');

		var identifiant = 0;
		for(var a = 0; a < matieres.length; a++){
			// La matière courante
			var matiere = matieres[a];

			// Son nom
			var nom = matiere.getAttribute('nom');

			// Création de la page
			var article = document.createElement('article');
			conteneur.insertBefore(article, conteneur.querySelector('footer'));
			article.setAttribute('id', nom.toLowerCase());

			// Création du lien d'accès
			var links = document.getElementById('links'),
			bouton = document.createElement('li');
			bouton.setAttribute('data-article', nom.toLowerCase());
			bouton.innerHTML = nom;
			links.appendChild(bouton);

			// Ajout du contenu
			var cartes = matiere.getElementsByTagName('carte');
			for (var b = 0; b < cartes.length; b++){
				// Tous nos attributs sur chaque carte
				var carteAttributs = cartes[b];
				var attributs = {
					'nom': carteAttributs.getAttribute('nom'),
					'niveau': getFrom(carteAttributs, 'niveau'),
					'fichier': 'mindmaps/'+getFrom(carteAttributs, 'fichier'),
					'image': 'images/cartes/'+getFrom(carteAttributs, 'image'),
					'description': getFrom(carteAttributs, 'description')
				}

				var modele = document.querySelector('#temporary a');
				var carte = modele.cloneNode(true);
				article.appendChild(carte);
				// On applique les attributs sur le nouvel elements
				carte.setAttribute('id', identifiant);
				carte.setAttribute('data-file', attributs.fichier);
				carte.querySelector('img').setAttribute('src', attributs.image);
				carte.querySelector('h1').innerHTML = attributs.nom;
				carte.querySelector('.description p').innerHTML = attributs.description;
				carte.querySelector('.niveau').innerHTML = attributs.niveau;

				// On ajoute l'evenement pour le téléchargement
				carte.addEventListener('click', function(){
					var file = this.getAttribute('data-file');
					var popup = document.getElementById('popup');
					// On change les valeurs
					popup.querySelector('.popup_title').innerHTML = this.querySelector('h1').innerHTML;
					popup.querySelector('.popup_description').innerHTML = this.querySelector('.description').innerHTML;
					popup.querySelector('.popup_download').setAttribute('href', file);

					popup.style.display = "flex";
				});

				// Le prochain aura un autre identifiant
				identifiant++;
			}
		}
		// Suppresion de l'espace temporaire
		var temporary = document.getElementById('temporary');
		temporary.parentNode.removeChild(temporary);
		// Fermeture possible du popup
		var popup = document.getElementById('popup');
		popup.addEventListener('click', function(){
			if(this.parentNode == document.body){
				popup.style.display = "none";
			}
		});

		// Mise en place du menu
		menu("accueil");
	}

	// Récupération XML 
	var request = new XMLHttpRequest();
	request.addEventListener('readystatechange', function(){
		if(request.readyState == 4 && request.status == 200){
			primary();
		}
	});
	request.open("GET", "configuration/config.xml", true);
	request.send();


	// Disparition du splash-screen
	splashScreenDisappear();
}


var menu = function(shown){
	var conteneur = document.getElementById('conteneur'),
	header = conteneur.querySelector('header'),
	articles = conteneur.querySelectorAll('article'),
	liste = header.querySelectorAll('li');
	
	// Mise en place
	var shownArticle = document.getElementById(shown);
	if(shownArticle){
		// Disparition et taille
		for(var i = 0; i < articles.length; i++){
			articles[i].style.display = "none";
		}
		shownArticle.style.display = "flex";
	}

	// Transition
	for(var i = 0; i < liste.length; i++){
		element = liste[i];
		element.addEventListener('click', function(){
			var dataLink = this.getAttribute('data-article');
			var target = document.getElementById(dataLink);
			if(target){
				// On cache tous les articles
				for(var k = 0; k < articles.length; k++){
					articles[k].style.display = "none";
				}
				// On enlève les couleurs
				for(var j = 0; j < liste.length; j++) {
					liste[j].classList.remove('highlight');
				}
				// On montre celui qu'on veut garder
				this.classList.add('highlight');

				target.style.display = "flex";
				console.log(target);
			}
		});
	}
}


var splashScreenDisappear = function(){
	var splashScreen = document.getElementById('splashscreen');
	var move = 1;
	var animation = setInterval(function(){
		splashScreen.style.transform = "translateY("+move+"%)";
		move += 1;
		if(move > 100){
			clearInterval(animation);
			splashScreen.parentNode.removeChild(splashScreen);
		}
	}, 1);
}

window.addEventListener('load', luncher);
