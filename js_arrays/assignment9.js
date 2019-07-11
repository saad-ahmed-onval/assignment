/*
10. Write a JavaScript function that takes two arrays below and creates a new array of strings like the results below
	For example:
		1. Input: 
					var numArray = [1, 2, 3, 4, 5];
					var germanArray = ["eins", "zwei", "drei", "vier", "fünf"];
			Output: 
					[
					   "The number 1 is called eins in German", 
					   "The number 2 is called zwei in German",
					   "The number 3 is called drei in German", 
					   "The number 4 is called vier in German", 
					   "The number 5 is called fünf in German"
					]
    Note: Using Arrays 'Map' operation 
*/

function a9(){

    var wr = document.getElementById("a9")
var numArray = [0, 1, 2, 3, 4, 5];
var germanArray = ["null","eins", "zwei", "drei", "vier", "fünf"];
var result = new Array()

var result = numArray.map(function(a){
        wr = document.write("The number "+a+" is called "+germanArray[a]+" in German")
})

}
