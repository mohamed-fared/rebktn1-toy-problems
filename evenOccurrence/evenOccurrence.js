/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/


var evenOccurrence = function(arr) {

	var obj = {}

	for ( var i = 0 ; i < arr.length ; i++){

		if (typeof arr[i] === "object" && !Array.isArray(arr[i])){

			var value = JSON.stringify(arr[i])

			obj[value] = ( obj[value] || 0) + 1 
		}else{

			obj[arr[i]] = ( obj[arr[i]] || 0) + 1 

		}

	}

	for ( var j = 0 ; j < arr.length ; j++){


		if (typeof arr[j] === "object" && !Array.isArray(arr[j])){


			var index = JSON.stringify(arr[j])

			if (obj[index] % 2 === 0){

				return JSON.parse(index)
			}

			}else{

			var index = arr[j]

			if (obj[index] % 2 === 0){

				return index
			}
		
		}

	}

}

