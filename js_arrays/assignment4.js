var rl = require("readline-sync")

//var base = parseInt(rl.question("enter the lower number: "))
//var top = parseInt(rl.question("enter the top number: "))

function rangeBetween(base,top)
{
    var result = []
    for(let i = base; i<=top; i++)
    {
        result.push(i)
    }
    return result
}

var result = rangeBetween(-4 ,7)
console.log(result)