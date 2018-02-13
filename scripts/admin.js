window.addEventListener('load', function(){
	var files = document.querySelectorAll('.input-file');
	for(var i = 0; i < files.length; i++){
		files[i].addEventListener('change', function(){
			var path = this.parentNode.querySelector('.filesPath');
			path.innerHTML = this.files[0].name;
		});
	}
	

	var description = document.getElementById('description');

	description.addEventListener('keydown', function(){

		var newHeight = this.scrollHeight;
		if(this.value.length <= 55 && newHeight > 25){
			newHeight = 25;
		}
		this.style.cssText = 'height:auto;';
	    this.style.cssText = 'height:' + newHeight + 'px';
	});
});