$( document ).ready(function() {
    console.log( "ready!" );
		
	var wins = 0;
	
	var heros = [
			["B","A","T","M","A","N"],
			["A","Q","U","A","M","A","N"],
			["S","P","I","D","E","R","M","A","N"],
			["W","O","L","V","E","R","I","N","E"],
			["H","U","L","K","S","M","A","S","H"]
	]

	var random = [Math.floor(Math.random()*heros.length)];
	var randomizer = heros[random];
	var randomHeros = new Array(randomizer.length);

	for (var i = 0; i < randomHeros.length; i++){
	randomHeros[i] = "_";
	}

	function printHiddenWord(){
		for (var i = 0; i < randomHeros.length; i++){
		var letterGuess = document.getElementById("letterGuess");
		var hiddenLetters = document.createTextNode(randomHeros[i]);
		letterGuess.appendChild(hiddenLetters);
		}
	}
}

	


				
