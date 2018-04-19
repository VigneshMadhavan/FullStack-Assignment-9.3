var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var all = [...primes, ...evens, ...odds];

console.log("Combine all arrays into single array in order as primes, evens and odd");
console.log(all);
var newPrimes = [...primes];

console.log("Copy primes array into another array");
console.log(newPrimes);
console.log(primes);

var jamesBond = {
	first: 'James',
	last: 'Bond',
	country: 'United States',
	city: 'New york',
	twitter: '@jamesbond'
};
var {
	first,
	last,
	twitter,
	city,
	country
} = jamesBond;
console.log("jamesBond Object")
console.log(jamesBond);
console.log("Destructuring the jamesBond object into variables names same the property names");
console.log("first:"+first);
console.log("last:"+last);
console.log("twitter:"+twitter);
console.log("city:"+city);
console.log("country:"+country);

var players = ['paul', 'andy', 'darrell', 'jim'];
console.log("players Array")
console.log(players);
var [player1, player2, player3, player4] = players;

console.log("Destructure the players array into variables player1,player2,player3 and player4 respectively")
console.log("player1:"+player1);
console.log("player2:"+player2);
console.log("player3:"+player3);
console.log("player4:"+player4);