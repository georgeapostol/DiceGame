/**
 * Created by LostSouls on 1/6/17.
 */

var Dice = function(){

    this.number = null;

    this.roll = function(){
       this.number =  Math.floor(Math.random() * 6) + 1
    }
    this.roll();
};

module.exports = Dice;


//console.log(this.number);
