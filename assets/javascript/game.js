$(document).ready(function(){
	
	var potterRPG = {

		squad : [
			{
				name : "harry",
				HP: 300,
				currentHP: 300,
				attackPow: 25,
				incAttackPow: 25,
				counterPow: 25
			},
			{
				name : "dumbledore",
				HP: 450,
				currentHP: 400,
				attackPow: 10,
				incAttackPow: 10,
				counterPow: 10
			},
			{
				name : "voldemort",
				HP: 400,
				currentHP: 400,
				attackPow: 15,
				incAttackPow: 15,
				counterPow: 15
			},
			{
				name : "snape",
				HP: 350,
				currentHP: 350,
				attackPow: 20,
				incAttackPow: 20,
				counterPow: 20

			}],  //squad close

		playerChoice : {},
		oppChoice: {},

		reset : function(){


		} //function close












	}  //potterRPG close






	$('img').click(function(){
		// $(this).fadeOut('slow');
		$(this).appendTo('#left-of-game');
	});





});	 //document.ready close