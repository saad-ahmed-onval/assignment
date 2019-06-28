var inp = "1234567890"
//var st = toString(inp)
var str = parseInt(inp)
var abc = inp.split("").reverse().join("");
console.log("abc:" +abc)
var out=""



for(var i=0;i<abc.length;i++)
{
    if(abc[i+1] == null)
    {
        abc[i+1] = "0";
    }
    var y = parseInt(abc[i+1]+abc[i])
    var temp=""
    var l,m=0

    if(y>0 && y<10)
    {
        console.log(A(y))
    }
    else if(y>9 && y<20)
    {
        console.log(B(y+"kjk"))
        i+=1
    }
    else if(y>19)
    {
        temp = y.toString()
        console.log("flag"+temp+" ")
        l=parseInt(temp[0])
        m=parseInt(temp[1])
        console.log(C(l))
        console.log(A(m))
        i+=1
    }
    else
    {
        out=out+" --"
    }
    

}

console.log(inp+" .->. "+out+" ... ")

function A(y)
{
    var out=""
    switch(y)
    {
        case 1: out=" one"+out
        break;
        case 2: out=" two"+out
        break;
        case 3: out=" three"+out
        break;
        case 4: out=" four"+out
        break;
        case 5: out=" five"+out
        break;
        case 6: out=" six"+out
        break;
        case 7: out=" seven"+out
        break;
        case 8: out=" eight"+out
        break;
        case 9: out=" nine"+out
        break;
        default: out=" "+out
    }
    return out
}

function B(y)
{
    var out = ""
    switch(y)
    {
        case 10:out=out+" ten"+out
        break;
        case 11:out=out+" eleven"+out
        break;
        case 12:out=out+" twelve"+out
        break;
        case 13:out=out+" thirteen"+out
        break;
        case 14:out=out+" fourteen"+out
        break;
        case 15:out=out+" fifteen"+out
        break;
        case 16:out=out+" sixteen"+out
        break;
        case 17:out=out+" seventeen"+out
        break;
        case 18:out=out+" eighteen"+out
        break;
        case 19:out=out+" nineteen"+out
        break;
        default:out=out+" "+out
    }
    return out
}

function C(l)
{
    var out = ""
    switch(l)
    {
        case 2: out=out+" twenty"
        break;
        case 3: out=out+" thirty"
        break;
        case 4: out=out+"forty"
        break;
        case 5: out=out+" fifty"
        break;
        case 6: out=out+" sixty"
        break;
        case 7: out=out+" seventy"
        break;
        case 8: out=out+" eighty"
        break;
        case 9: out=out+" ninety"
        break;
        default: out=out+""
    }
    return out
}




//-----------------------------------------------

var func1=["one","two","three","four","five","six","seven","eight","nine"];
var func2=["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var func3=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var th=["thousand","million","billion","trillion","quantillion"];


for()
