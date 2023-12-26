let input = ``;

let lines = input.split("\n")

//console.log(lines);

function preParseInput(chain) {
 
  chain = chain.replace(/one/g, "o1e");
  chain = chain.replace(/two/g, "t2o");
  chain = chain.replace(/three/g, "t3e");
  chain = chain.replace(/four/g, "f4r");
  chain = chain.replace(/five/g, "f5e");
  chain = chain.replace(/six/g, "s6x");
  chain = chain.replace(/seven/g, "s7n");
  chain = chain.replace(/eight/g, "e8t");
  chain = chain.replace(/nine/g, "n9e");
  
  return chain;
  
};

function reverse(chain) {return chain.split("").reverse().join("")}

function firstNumber(chain) { return chain.match(/\d/)} 

function lastNumber(chain) { return firstNumber(reverse(chain)) }

let total = 0;
for (let line of lines) {
  line = preParseInput(line); // comment out for part 1
  //console.log(line + ":" + firstNumber(line) + lastNumber(line));
  total += parseInt(firstNumber(line) + lastNumber(line));
}

console.log(total);
