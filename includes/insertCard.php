<?php
	function receiveValue($var){
		$serverName = "/mapland/";
		$value = htmlspecialchars($_POST[$var]);
		if(isset($value) && !empty($value)){
			return $value;
		}else{
			header('Location: '.$serverName.'admin.php');
		}
	}

	$titre = receiveValue('title');
	$categorie = receiveValue('categorie');
	$niveau = receiveValue('niveau');
	$description = receiveValue('description');

	echo $titre."<br>";
	echo $categorie."<br>";
	echo $niveau."<br>";
	echo $description;

?>