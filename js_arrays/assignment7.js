/*
7. Write a JavaScript program which accept a string as input and swap the case of each character. 
   For example:
    1. Input: 'The Quick Brown Fox'
	   Output:'tHE qUICK bROWN fOX'.
	2. Input: 'JoHn dOe'
       Output: 'jOhN DoE'
*/
function a7(){

var string = document.getElementById("a7").value
var length = string.length
var temp = string.split("")
temp = temp.map(function(a){

    if(a === a.toUpperCase())
    {
        return a.toLowerCase()
    }
    else //if(a === a.toLowerCase())
    {
        return a.toUpperCase()
    }
})

alert(("string: "+string+"\n updated string: "+temp.join("")))

}