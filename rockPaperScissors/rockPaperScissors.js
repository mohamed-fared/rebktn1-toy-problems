/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/


var rockPaperScissors = function (n) {


	var arr = ["R","P","S"]

	var arrResult = []

	var str = ""

	for (var i = 0 ; i < n ; i++){

		// arrResult.push(arr[Math.floor(Math.random()*3)])

		str = str + arr[Math.floor(Math.random()*3)]

	}

	arrResult.push(str)
	console.log(arrResult)
	return arrResult 

};