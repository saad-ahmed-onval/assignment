var inp = "1234567890"
//var st = toString(inp)
var str = parseInt(inp)
var abc = inp.split("").reverse().join("");

console.log("abc:" +abc)
var out=""

var num=abc.split("")
console.log("num: "+num)
var i;
var temp = sep(num,3);


function sep(num, c){
    var index = 0;
    var arrayLength = num.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += c) 
    {
        myChunk = num.slice(index, index+c);
        tempArray.push(myChunk);
    }

    return tempArray;
}

//-----------------------------------------------------------------------------

function A(y)
{
    var out=""
    switch(y)
    {
        case 1: out=out+" one"
        break;
        case 2: out=out+" two"
        break;
        case 3: out=out+" three"
        break;
        case 4: out=out+" four"
        break;
        case 5: out=out+" five"
        break;
        case 6: out=out+" six"
        break;
        case 7: out=out+" seven"
        break;
        case 8: out=out+" eight"
        break;
        case 9: out=out+" nine"
        break;
        default: out=out+" "
    }
    return out
}

function B(y)
{
    var out = ""
    switch(y)
    {
        case 10:out=out+" ten"
        break;
        case 11:out=out+" eleven"
        break;
        case 12:out=out+" twelve"
        break;
        case 13:out=out+" thirteen"
        break;
        case 14:out=out+" fourteen"
        break;
        case 15:out=out+" fifteen"
        break;
        case 16:out=out+" sixteen"
        break;
        case 17:out=out+" seventeen"
        break;
        case 18:out=out+" eighteen"
        break;
        case 19:out=out+" nineteen"
        break;
        default:out=out+" "
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
        case 4: out=out+" forty"
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

function placeholder(y)
{
    var out=""
    switch(y)
    {
        case 1: out=out+"thousand"+out
        break;
        case 2: out=out+"million"+out
        break;
        case 3: out=out+"billion"+out
        break;
        case 4: out=out+"trillion"+out
        break;
        case 5: out=out+"quadrillion"+out
        break;
        case 6: out=out+"quintillion"+out
        break;
        case 7: out=out+"septillion"
        break;
        case 8: out=out+"8illions"+out
        break;
        case 9: out=out+"9illions"
        break;
        default: out=" "+out
    }
    return out
}



//----------------------------------------------------------------------


console.log("length of main array: "+temp.length)
//console.log("length of internal array: "+length.temp)
var ctr =0
//var st2=""
for(i=temp.length;i<0;i--)
{
    var tempA = temp[i]
    //console.log(tempA)
}
 console.log(temp);

for(var i=0;i<temp.length;i++)
{   
    ctr = i
    for(var j=0;j<3;j++)
    {
        if((j==2))
        {
            var y = temp[i][j]
            out = out+A(parseInt(y))+" hundred "+placeholder(ctr)
            console.log("flag 1 "+ y +"-> "+out)
            
        }
        else
        {
            var y = (temp[i][j+1]+temp[i][j])
       //--------------------------
            if(y>0 && y<10)
            {

                console.log(A(y)+" --- ")
            }
            else if(y>9 && y<20)
            {
                out= out+B(y)
                console.log("flag 2 "+ y +"-> "+out)
                j+=1
            }
            else if(y>19)
            {
                t2 = y.toString()
                console.log()
                l=parseInt(t2[0])
                m=parseInt(t2[1])
                out = out+" "+C(l)+A(m)
                console.log("flag 3 "+ y +"->"+out)
                // console.log()
                j+=1
            }
            
        }
    }

}
var a = out.split(" ")
console.log("final: "+out)




