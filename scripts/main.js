window.addEventListener('load', function(){
	// Défilement entre les parties
	var liens = document.getElementById('liens');
	if(liens){
		liens.addEventListener('click', function(e){
			var target = e.target,
			menu = e.currentTarget.parentNode;

			menuAttribute = "light",
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
				var oldDisplay = e.currentTarget.querySelector('.'+listHighlight);
				if(oldDisplay){
					oldDisplay.classList.remove(listHighlight);
				}

				// Ajout de la nouvelle surbrillance
				target.classList.add(listHighlight);

				// Menu avec toutes les fonctionnalités
				menu.classList.remove(menuAttribute);
			}
		});
	}else{
		console.warn("Le menu n'existe pas.");
	}

	// Retour spécial à l'accueil
	var logoPrincipal = document.getElementById('logoPrincipal');
	logoPrincipal.addEventListener('click', function(e){
		var showAttribute = "shown";
		var menuAttribute = "light";

		var menu = e.currentTarget.parentNode;
		var highlit = menu.querySelector('.highlight');
		if(highlit){
			highlit.classList.remove('highlight');
		}

		var oldArticle = document.querySelector('#conteneur > article.'+showAttribute);
		oldArticle.classList.remove(showAttribute);

		menu.classList.add(menuAttribute);

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
				// Drop the searchbar
				var search = document.getElementById('search');
				search.value = "";

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

	// Recherche de cartes
	var search = document.getElementById('search');
	search.addEventListener('keyup', function(e){
		var value = this.value.toLowerCase();
		var hideClass = "hide";

		var currentArticle = document.querySelector('article.shown');

		if(currentArticle){
			var cards = currentArticle.querySelectorAll('.card');

			// Get the current sift method
			var currentTag = currentArticle.querySelector('.switcher li.selected'),
			sift;
			if(currentTag){
				sift = currentTag.getAttribute('data-sift');
			}

			// Test string function
			var isInside = function(value, title, description){
				value = value.trim();

				value = value.replace(/e/gi, "(e|é|ê|è)");
				value = value.replace(/è/gi, "(e|é|ê|è)");
				value = value.replace(/c/gi, "(c|ç)");
				var valueExp = new RegExp(value, 'i');

				console.log(valueExp);

				// Test of the title first
				if(valueExp.test(title) || valueExp.test(description)){
					return true;
				}
				return false;
			}

			var notFound = currentArticle.querySelector('.notFound');
			if(value == ""){
				for(var i = 0; i < cards.length; i++){
					if(sift == "all"){
						cards[i].classList.remove(hideClass);
					}else{
						if(cards[i].classList.contains(sift)){
							cards[i].classList.remove(hideClass);
						}else{
							cards[i].classList.add(hideClass);
						}
					}
				}
				// Hide the not found section
				notFound.classList.add('hidden');
			}else{
				// Checks if the current card has the tag
				var hasTag = function(currentCard){
					if(sift == "all"){
						return true;
					}else{
						return currentCard.classList.contains(sift);
					}
				}
				var occurences = 0;

				for(var i = 0; i < cards.length; i++){
					var title = cards[i].querySelector('.header p').innerHTML;
					var description = cards[i].querySelector('.description').innerHTML;

					if(isInside(value, title, description) && hasTag(cards[i])){
						cards[i].classList.remove(hideClass);
						occurences++;
					}else{
						cards[i].classList.add(hideClass);
					}
				}
				// Show the not found section
				if(notFound){
					if(occurences != 0){
						notFound.classList.add('hidden');
					}else{
						notFound.classList.remove('hidden');
						var searchBarTry = notFound.querySelector('.searchBarTry');
						searchBarTry.innerHTML = value;
					}
				}
			}

		}
	});
});