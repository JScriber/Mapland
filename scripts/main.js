window.addEventListener('load', function(){
	// Défilement entre les parties
	var liens = document.getElementById('liens');
	if(liens){
		liens.addEventListener('click', function(e){
			var target = e.target,

			showAttribute = "shown",
			listHighlight = "highlight";

			while((target.tagName != "LI") && (target != e.currentTarget)){
				target = target.parentNode;
			}
			var targetArticle = target.getAttribute("data-article");
			var article = document.getElementById(targetArticle);
			if(article){
				// Suppression de l'ancien article
				var oldArticle = document.querySelector('#conteneur > article.'+showAttribute);
				oldArticle.classList.remove(showAttribute);

				// Affichage du nouveau
				article.classList.add(showAttribute);

				// Surbrillance dans la liste supprimée
				e.currentTarget.querySelector('.'+listHighlight).classList.remove(listHighlight);

				// Ajout de la nouvelle surbrillance
				target.classList.add(listHighlight);
			}
		});
	}else{
		console.warn("Le menu n'existe pas.");
	}

	// Retour spécial à l'accueil
	var logoPrincipal = document.getElementById('logoPrincipal');
	logoPrincipal.addEventListener('click', function(){
		var showAttribute = "shown";
		var oldArticle = document.querySelector('#conteneur > article.'+showAttribute);
		oldArticle.classList.remove(showAttribute);

		var article = document.getElementById('accueil');
		if(article){
			article.classList.add(showAttribute);
		}
	});


	// Les prévisualisations
	var closePopup = document.getElementById('closePopup');
	if(closePopup){
		var popup = document.getElementById('popup');
		var toggleViews = document.querySelectorAll('.toggleView');

		for(var i = 0; i < toggleViews.length; i++){
			toggleViews[i].addEventListener('click', function(){
				imageRoot = this.getAttribute('data-link');
				if(imageRoot){
					var preview = document.getElementById('preview');

					var url = 'images/cartes/'+imageRoot+'.jpg';

					preview.setAttribute('src', url);

					// Récupération du nom
					var popupName = document.getElementById('popupName');
					var name = this;

					while(name.getAttribute('class') != 'card' && name.tagName != "BODY"){
						name = name.parentNode;
					}
					popupName.innerHTML = name.querySelector('.header p').innerHTML;

					popup.classList.add('shown');
				}
			});
		}
		closePopup.addEventListener('click', function(){
			popup.classList.remove('shown');
		});
		popup.addEventListener('contextmenu', function(e){
			e.preventDefault();
		});
	}


	// Tri des cartes
	var switchers = document.querySelectorAll('.switcher');
	for(var i = 0; i < switchers.length; i++){
		switchers[i].addEventListener('click', function(e){
			var target = e.target;
			while(target.tagName != "LI" && target != e.currentTarget){
				target = target.parentNode;
			}
			if(target.tagName == "LI"){
				// GUI
				var highlightClass = "selected";
				var oldLi = e.currentTarget.querySelector('.'+highlightClass);
				if(oldLi){
					oldLi.classList.remove(highlightClass);
				}
				target.classList.add(highlightClass);

				var sift = target.getAttribute('data-sift');
				var article = e.currentTarget.parentNode.parentNode;

				// Restore the previous hidden ones
				var hiddenOnes = article.querySelectorAll('ol > .card.hide');
				for(var j = 0; j < hiddenOnes.length; j++){
					hiddenOnes[j].classList.remove('hide');
				}
				
				if(sift != "all"){
					var toHide = article.querySelectorAll('.card:not(.'+sift+')');
					var toHideLength = toHide.length;
					if(toHideLength > 0){
						for(var j = 0; j < toHideLength; j++){
							toHide[j].classList.add('hide');
						}
					}
				}
			}
		});
	}
});