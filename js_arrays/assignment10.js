/*
10. Write a JavaScript function that takes a string and returns an object representing the character count for each letter. Use .reduce to build this object. 
	For example:
		1. Input: countLetters('abbcccddddeeeee') | Output: {a:1, b:2, c:3, d:4, e:5}
	Note: Using Arrays 'Reduce' operation
*/
function a10(){
var rl = require("readline-sync")
var str = rl.question("enter the string: ")//document.getElementById("a10").value

var array = str.split("")

var result = array.reduce(function(a, element){
    if(a[element])
        a[element] += 1
    else
        a[element] = 1

    return a
},{})


console.log(result)
a10()
}
a10()