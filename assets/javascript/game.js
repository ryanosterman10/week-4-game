$(document).ready(function(){
	
	var potterRPG = {

		squad : [
			{
				name : "Harry",
				HP: 300,
				currentHP: 300,
				attackPow: 25,
				incAttackPow: 25,
				counterPow: 25
			},
			{
				name : "Dumbledore",
				HP: 450,
				currentHP: 450,
				attackPow: 10,
				incAttackPow: 10,
				counterPow: 10
			},
			{
				name : "Voldemort",
				HP: 400,
				currentHP: 400,
				attackPow: 15,
				incAttackPow: 15,
				counterPow: 15
			},
			{
				name : "Snape",
				HP: 350,
				currentHP: 350,
				attackPow: 20,
				incAttackPow: 20,
				counterPow: 20

			}],  //squad close

		playerChoice : {},
		oppChoice: {},

		reset : function(){


		}, //reset close

		attack : function(){



		}, // attack close


		counterAttack : function(){


		} // counterAttack close

	}  //potterRPG close

	$('button').on('click', function(){
		potterRPG.attack(console.log("attack"));
		potterRPG.counterAttack(console.log("counterAttack"));
	});




	$('.characters').on('click', function(){
		$(this).appendTo('#left-of-game');
		$('.characters').not(this).addClass('opponent');
			// if($(this).is('#harry')){
			// 	$('#left-of-game').append("Character: " + potterRPG.squad[0].name + "<br>" + "HP: " + potterRPG.squad[0].currentHP);
			// }
			// else if($(this).is('#dumbledore')){
			// 	$('#left-of-game').append("Character: " + potterRPG.squad[1].name + "<br>" + "HP: " + potterRPG.squad[1].currentHP);
			// }
			// else if($(this).is('#voldemort')){
			// 	$('#left-of-game').append("Character: " + potterRPG.squad[2].name + "<br>" + "HP: " + potterRPG.squad[2].currentHP);
			// }
			// else if($(this).is('#snape')){
			// 	$('#left-of-game').append("Character: " + potterRPG.squad[3].name + "<br>" + "HP: " + potterRPG.squad[3].currentHP);
			// }
		if($(this).hasClass('opponent')){
			$(this).appendTo('#right-of-game');
			if($(this).is('#harry')){
				$('#right-of-game').append("Character: " + potterRPG.squad[0].name + "<br>" + "HP: " + potterRPG.squad[0].currentHP);
			}
			else if($(this).is('#dumbledore')){
				$('#right-of-game').append("Character: " + potterRPG.squad[1].name + "<br>" + "HP: " + potterRPG.squad[1].currentHP);
			}
			else if($(this).is('#voldemort')){
				$('#right-of-game').append("Character: " + potterRPG.squad[2].name + "<br>" + "HP: " + potterRPG.squad[2].currentHP);
			}
			else if($(this).is('#snape')){
				$('#right-of-game').append("Character: " + potterRPG.squad[3].name + "<br>" + "HP: " + potterRPG.squad[3].currentHP);
			}
		}
	});




});	 //document.ready close

