$(document).ready(function(){
	//Random number at beginning between 19 and 120
	var Random=Math.floor(Math.random()*101+19)
	$('#randomNumber').text(Random);

	//Random numbers for crystals between 1 and 12
	var num1=Math.floor(Math.random()*11+1)
	var num2=Math.floor(Math.random()*11+1)
	var num3=Math.floor(Math.random()*11+1)
	var num4=Math.floor(Math.random()*11+1)

	//Score variables
	var userScore=0;
	var wins=0;
	var losses=0;

	$('#numberOfWins').text(wins);
	$('#numberOfLosses').text(losses);

	// Creates a new <audio> element
	var $sound = $("<audio preload=auto>");
	$sound.attr("src", "assets/images/sound.mp3");

	var $soundWinner = $("<audio preload=auto>");
	$soundWinner.attr("src", "assets/images/Buzz-loser.mp3");

	var $soundLoser = $("<audio preload=auto>");
	$soundLoser.attr("src", "assets/images/Horn-winner.mp3");



	//Crystal clicks
	// create dynamic divs with jquery
	// red crystal div 
	// =======================================================================
	var $red = $('<img/>', {
		id: 'red',
		src: "assets/images/redCrystal.png",
		height: "100px",
		width: "150px",
		border: "1px red solid",
		alt: "red crystal"
	}).appendTo(".crystals");
	// blue crystal div
	var $blue = $('<img/>', {
		id: 'blue',
		src: "assets/images/blueCrystal.png",
		height: "100px",
		width: "150px",
		border: "1px red solid",
		alt: "blue crystal"
	}).appendTo(".crystals");
	// yellow crsytal div
	var $yellow = $('<img/>', {
		id: 'yellow',
		src: "assets/images/yellowCrystal.png",
		height: "100px",
		width: "150px",
		border: "1px red solid",
		alt: "yellow crystal"
	}).appendTo(".crystals");
	// green crsytal div
	var $green = $('<img/>', {
		id: 'green',
		src: "assets/images/greenCrystal.jpg",
		height: "100px",
		width: "150px",
		border: "1px red solid",
		alt: "green crystal"
	}).appendTo(".crystals");
	//=================================================================  
	// start game by clicking and collecting first crystal


	$('#red').on('click', function(){
		
		$("body").append($sound);
     	$sound[0].play();

		userScore=userScore + num1;
		$red.html( $( "#green" ).html() ).appendTo(".crystals");
		$blue.html( $( "#red" ).html() );
		$yellow.html( $( "#blue" ).html() );
		$green.html( $( "#yellow" ).html() );
		
		

		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
			 winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#blue').on('click', function(){

		$("body").append($sound);
     	$sound[0].play();

		userScore=userScore + num2;
		userScore=userScore + num1;

		$blue.html( $( "#green" ).html() ).appendTo(".crystals");
		$green.html( $( "#red" ).html() );
		$red.html( $( "#yellow" ).html() );
		$yellow.html( $( "#blue" ).html() );

		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
			 winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#yellow').on('click', function(){

		$("body").append($sound);
     	$sound[0].play();

		userScore=userScore + num3;

		$yellow.html( $( "#green" ).html() ).appendTo(".crystals");
		$green.html( $( "#blue" ).html() );
		$blue.html( $( "#red" ).html() );
		$red.html( $( "#yellow" ).html() );

		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
			 winner();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#green').on('click', function(){

		$("body").append($sound);
     	$sound[0].play();

		userScore=userScore + num4;

		$green.html( $( "#blue" ).html() ).appendTo(".crystals");
		$blue.html( $( "#yellow" ).html() );
		$yellow.html( $( "#red" ).html() );
		$red.html( $( "#green" ).html() );
		
		console.log("New userScore=" + userScore);
		$('#totalScore').text(userScore);
			if(userScore === Random){
			 winner();
			}
			else if(userScore > Random){
				loser();
			}
	})


	//Function and alert for wins
	function winner(){
		alert("Good job! You won!");
		 wins++; 
		 $("body").append($sound);
     	$soundWinner[0].play();

	  	$('#numberOfWins').text(wins);
	  	reset();
	}

	//Function and alert for losses
	function loser(){
		alert("Try Again!");
		losses++;
		$("body").append($sound);
     	$soundLoser[0].play();

		$('#numberOfLosses').text(losses);
		reset();
	}

	//Function for game reset
	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		num1=Math.floor(Math.random()*11+1);
		num2=Math.floor(Math.random()*11+1);
		num3=Math.floor(Math.random()*11+1);
		num4=Math.floor(Math.random()*11+1);
		userScore=0;
		$('#totalScore').text(userScore);
	}

});
