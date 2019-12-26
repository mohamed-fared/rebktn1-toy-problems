/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */



var allAnagrams = function(string){

    var round = string.length
    var arr = string.split("")
    var result = [];
    var repeat = function(str){
        
        var strr = str || ''

        if(strr.length === round){

            result.push(strr)
            return;

        }
         arr.forEach((string)=> {

             repeat( strr + string)
        
        })
    }

    repeat();
    return result

}