/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let ace = false;
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    let cardValue = 0;
    if (card === "J" || card === "Q" || card === "K") {
      cardValue = 10;
    } else if (card !== "A") {
      cardValue = parseInt(card);
    } else {
      cardValue = 1;
      ace = true;
    }
    total += cardValue;
  }
  if (ace && total < 12) {
    total += 10;
  }
  console.log(hand);
  console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
