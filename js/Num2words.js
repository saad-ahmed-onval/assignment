//--------------------------------------------
var inp = "123456789012"
if(inp == 0){
    console.log("zero only")
    return 0
}
var l=inp.length
console.log("")
var st = toString(inp)
var str = parseInt(inp)
var abc = inp.split("").join("");
console.log("abc: "+abc)

if(l>20)
{
    console.log("\tinput length = "+l)
    console.log("\tSorry cannot process value with more than 20 digits.")
    console.log()
    process.exit()
}

else
{

console.log("Input: " +inp)
console.log("\tinput length = "+l)
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

console.log("tempARr: "+temp)
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
    console.log("in fun B()")
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
        case 1: out=out+" thousand"+out
        break;
        case 2: out=out+" million"+out
        break;
        case 3: out=out+" billion"+out
        break;
        case 4: out=out+" trillion"+out
        break;
        case 5: out=out+" quadrillion"+out
        break;
        case 6: out=out+" quintillion"+out
        break;
        case 7: out=out+" septillion"
        break;
        case 8: out=out+" octillions"+out
        break;
        case 9: out=out+" 9illions"
        break;
        case 10: out=out+" 10illions"
        break;
        case 11: out=out+" 11illions"
        break;
        default: out=" "+out
    }
    return out
}



//----------------------------------------------------------------------
var z= temp.length

console.log("length of main array: "+z)
//console.log("length of internal array: "+length.temp)
var ctr =0
//var st2=""
for(i=temp.length;i<0;i--)
{
    var tempA = temp[i]
    //console.log(tempA)
}

console.log("flag main!")
//print sliced array
console.log(temp);

//-----------------main code starts from here-----------------

for(var i=0;i<temp.length;i++)
{   
    ctr = i
    var z =temp[i]
    console.log(z)
    if(temp[i].join('')=="000")
    {
        continue
    }
    
    for(var j=0;j<z.length;j++)
    {
        
        if((z[j+1]==null))
        {
            var y = z[j]
            if(j==2&&y!=0)
                {

                    out = A(parseInt(y))+" hundred"+out
                    console.log("flag A")
                }
            else
            {
                out = A(parseInt(y))+placeholder(ctr)+out
                //console.log("-f")
                {
                    var y = (z[j]+z[j-1])
       //--------------------------
                     if(y>0 && y<10)
                    {

                        console.log(A(y)+" --- ")
                    }
                    else if(y>9 && y<20)
                    {
                        if(y!=0)
                        {out= B(parseInt(y))+placeholder(ctr)+out
                        console.log("flag 1 "+ y +"-->> "+out)}
                    }
                    else if(y>19&&y!=0)
                    {
                        t2 = y.toString()
                        console.log()
                        l=parseInt(t2[0])
                        m=parseInt(t2[1])
                        out =" "+C(l)+A(m)+placeholder(ctr)+out

                        console.log("flag 2 "+ y +"->"+out)
                    }

                    else if(y==0)
                    {
                        out= " "+out+placeholder(" ")
                        console.log("flag B "+y)
                        console.log("--")
                        j=j+1
                    }
                }
            out=out+" "
            console.log("flag C"+y)
            }


            //console.log("flag 3 "+ y +"-> "+out)

        }
        else
        {
            var y = (z[j+1]+z[j])
       //--------------------------
            if(y>0 && y<10)
            {

                console.log(A(y)+" --- ")
            }
            else if(y>9 && y<20 && y!=0)
            {
                if(y!=0)
                {
                    out= B(parseInt(y))+placeholder(ctr)+out
                    console.log("flag 4 "+ y +"--> "+out)
                    j+=1
                }
                else{
                    console.log(".....")
                }
            }
            else if(y>19)
            {
                t2 = y.toString()
                console.log()
                l=parseInt(t2[0])
                m=parseInt(t2[1])
                out =" "+C(l)+A(m)+placeholder(ctr)+out
                //out=out
                console.log("flag 5 "+ y +"->"+out)
                j+=1
            }

        }
    }


}

//console.log(temp);
var a = out.split(" ")
console.log("\n\n\n\nNum:"+inp+"\nfinal: "+out+" only")

}