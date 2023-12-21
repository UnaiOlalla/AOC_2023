let input = ``;
input = input.replace(/Game /g,"")
//console.log(input)
let lines = input.split(`\n`);
//console.log(lines);
let ptotal = 0;
let ftotal = 0;
let total = 0;
let cID = 1;

for (game of lines) {

  game = game.split(": ");
  game.shift();
  game = game[0].split("; ");
  let isL = 1;
  let powS = [0, 0, 0];
  
  for (hand of game) {
    hand = hand.split(", ");
    console.log(hand);
    for (color of hand) {
      color = color.split(" ");
      if (color[1] == "red") {
        if (color[0] > 12) {isL = 0};
        powS[0] = Math.max(powS[0], color[0]);
      } 
      if (color[1] == "green") {
        if (color[0] > 13) {isL = 0}
        powS[1] = Math.max(powS[1], color[0]);
      } 
      if (color[1] == "blue") {
        if (color[0] > 14) {isL = 0}
        powS[2] = Math.max(powS[2], color[0]);
      }   
    }   
  }
  
  if(isL) {total += cID;};
  ftotal += cID;
  cID += 1;
  ptotal += powS[0] * powS[1] * powS[2];
}
console.log(total);
console.log(ftotal);
console.log(ptotal);
