/**
 * Created by LostSouls on 1/7/17.
 */
// create 2 separate dice objects to be rolled
var Dice = require("./Dice");
var Pair = function() {
    this.die1 = new Dice();
    this.die2 = new Dice();
    this.die1.roll();
    this.die2.roll();

    // this.die1.number
    // this.die2.number
    //def dice (self, side)
    //this.number = null;
    //console.log(die1.number, die2.number)
    this.total = function(){
            var total = this.die1.number + this.die2.number;
            return total
    }

};

module.exports = Pair;