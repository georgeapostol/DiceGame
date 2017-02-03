/**
 * Created by LostSouls on 1/7/17.
 */

// player needs name
// player can roll a group (of 6 dice total)
// 6 dice total
// get total of 6 dice for each player
// calls on coin class and gets toss, if toss = tails, automatic loss (return zero)
// all players cannot lose
var Dice = require("./Dice"), total;
var Coin = require("./Coin")


var Player = function () {
    this.die1 = new Dice();
    this.die2 = new Dice();
    this.die3 = new Dice();
    this.die4 = new Dice();
    this.die5 = new Dice();
    this.die6 = new Dice();

    this.die1.roll();
    this.die2.roll();
    this.die3.roll();
    this.die4.roll();
    this.die5.roll();
    this.die6.roll();

    this.coin = new Coin();
    this.coin.toss();

    if (this.coin.toss = 2) {

        this.player_sum = function () {
            x = this.die1.number + this.die2.number + this.die3.number + this.die4.number +
                this.die5.number + this.die6.number;
            return x
        }

        }
        else {
        x = 0
    }


   // this.player_sum();

    //console.log(this.player_sum())





};



module.exports = Player;