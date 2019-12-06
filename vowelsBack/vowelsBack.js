// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.



// need more time :)) it will work for "omar" only i think not for matt wallahy 
var vowelBack = function(string){

  string = string.split("")
  var az = "abcdefghijklmnopqrstuvwxyz".split("")


  for ( var i = 0 ; i < string.length ; i++){

    if (string[i] !=="a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" & string[i] !== "u"){


         var index = az.indexOf(string[i])

            if (az[index+9] !== undefined){

                string[i]= az[index + 9]

            }else{


                string[i]= az[0]
            }
    }else{
        var index = az.indexOf(string[i])

        if(az[index-1] !== undefined){

            string[i]=az[index-1]
            console.log(az[index-1])

        }else{
            string[i] = az[az.length-5 ]
        }
    }

  }
  
return string
  
}