/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/


var zeroSum = function(num){

	var obj ={}

	for (var i = 0 ; i < num.length; i++ ){

		if(obj[num[i]]){

			// console.log(obj)

			return true 

		}else{

			obj[-[num[i]]] = 1
		}

	}	

	return false 
	
}



var y = zeroSum([ 1, 3, 2, -3])
var x = zeroSum([ 5, 7, 2, 9 ])
=======
*/
>>>>>>> 7358c78edba3c993773b7de22c6cc1c2bb42aaae
