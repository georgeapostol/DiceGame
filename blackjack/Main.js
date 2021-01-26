/**
 * Created by LostSouls on 1/6/17.
 */
var Pair = require("./Pair");
var Dice = require("./Dice");
var Player = require("./Player");
var Coin = require("./Coin")

var dice = new Dice();

dice.roll();

//console.log(dice.number);
var pair = new Pair();

// if pair >= dice.number:
//     print "pair wins"
// else:
//     print "Single die wins"

if (pair.total() >= dice.number){
    console.log(pair.total()  + " > " + dice.number + " pair wins")
} else {
    console.log(dice.number + " > "+ pair.total()  + " single die wins")
}

player1 = new Player();
player2 = new Player();

var p1 = player1.player_sum();
var p2 = player2.player_sum();



//var coin = new Coin();
//coin = new Coin()
//coin.toss();

//while(coin.number != 1) {
    if (p1 > p2) {
        console.log( " Player 1 wins " + p1 + " to " + p2);
            //break
    }
    else {
        console.log( " Player 2 wins " + p2 + " to " + p1);
        //break
    }


//}
