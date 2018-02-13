new Vue({
	el: '#app',
	data: {
		playerHealth: 80,
		monsterHealth: 80,
		gameIsRunning: false,
		turns: []
	},
	methods:
	{
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {
			var damage = this.calculateDamage(3,10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for '+damage
			});
			if(this.checkWin()) {
				return;
			}

			this.monsterAttacks();

			this.checkWin();
		},
		specialAttack: function() {
			var damage = this.calculateDamage(10,20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster hard for '+damage
			});
			if(this.checkWin()) {
				return;
			}

			this.monsterAttacks();

			this.checkWin();
		},
		heal: function() {
			if(this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals by 10'
			});
			this.monsterAttacks();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		monsterAttacks: function() {
			var damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for '+damage
			});
		},
		healbarColor: function(playerHealth) {
			if(playerHealth >= 20 && playerHealth < 50)
			{
				return 'orange';
			} else if (playerHealth < 20){
				return 'red';
			} else {
				return 'green';
			}
		},
		calculateDamage: function(min,max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if(this.monsterHealth <=0 ) {
				if (confirm('You won ! New game ?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost ! New game ?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});