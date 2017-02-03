/**
 * Created by LostSouls on 1/7/17.
 */
// coin class that assigns to numbers (head/tails or 1/2)
// coin needs to be "flipped" and have a random return
    // coin needs to be exported
var Coin = function (){

    this.number = null;

    this.toss = function(){
        this.number =  Math.floor(Math.random() * 2) + 1
    }

};



module.exports = Coin;




