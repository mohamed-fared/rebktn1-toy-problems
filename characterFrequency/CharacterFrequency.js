/*
Character Frequency
Write a function call characterFrequency 
that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/



var characterFrequency = function(string){

var obj = {}
var array = []
var string = string.split('')
var string = string.sort()
var hold 
var arraySort 

if (string !== ""){

    for ( var i = 0 ; i <string.length ; i++){
         if (obj[string[i]]){
             obj[string[i]] = obj[string[i]] + 1
            }else{
                obj[string[i]] = 1
            }
    }

     var keys = Object.keys(obj)

    for ( var i = 0 ; i < keys.length ; i++){

        array.push([keys[i],obj[keys[i]]])

    }

    // var bubbleSort = function(array){

    //     if(array.length === 0 ){
    //         return array
    //     }

    // for (var i = 0 ; i < array.length ; i++){

    //     if(array[i+1] !== undefined){

    //         if ( array[i][1] < array[i+1][1]){
    //         hold = array[i][1]
    //         array[i][1] = array[i+1][1]
    //         array[i+1][1] = hold
    //         }

    //     }else{

    //     }
    //   }
    // }
    
    // arraySort = bubbleSort(array)
    

    // return arraySort

    return array

    }else
    {
        return []
    }

}