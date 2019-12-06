// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.



var vowelBack = function(string){

  string = string.split("")
  var az = "abcdefghijklmnopqrstuvwxyz".split("")

  for ( var i = 0 ; i < string.length ; i++){

     var index = az.indexOf(string[i])

     switch(string[i]){

      case "a":
      case "i":
      case "u":

      console.log("vowel",index,string[i])

       if(az[index-5] !== undefined){

                string[i]=az[index-5]

                 console.log("vowel",index-5,string[i])

            }else{

              string[i] = az[az.length-5]

              console.log("vowel",az.length-5,string[i])
            }     
      break;
      case "o":
      case "c":
            console.log("special",index,string[i])
            string[i]=az[index-1]
            console.log("special",index-1,string[i])

        break;

        case "d":

            console.log("special",index,string[i])
            string[i]=az[index-3]
            console.log("special",index-3,string[i])
            break;

        case "e":

            console.log("special",index,string[i])
            string[i]=az[index-4]
            console.log("special",index-4,string[i])
            break;

      default:

         console.log("consonants",index,string[i])

          if (az[index+9] !== undefined){

                string[i]= az[index + 9]

                console.log("consonants",index+9,string[i])

            }else{

                string[i]= az[0]
                 console.log("consonants",9,string[i])
            }     
        }
    }
  
return string.join("")
  
}
