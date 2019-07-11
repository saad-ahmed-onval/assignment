var array = [1,2,'3',4,5,6]

var rl = require("readline-sync")

var element = parseInt(rl.question("enter the element to find: "))

//element = element

contains(array,element)
function contains(array,element)
{
    var result = array.includes(element)
    console.log(result)
}