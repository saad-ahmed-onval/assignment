console.log("--"+10**2+"...")

var opstr = ""
var sp = " "
var symdb = { 0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",
              9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",
              17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"fourty",50:"fifty",60:"sixty",
              70:"seventy",80:"eighty",90:"ninety","00":"hundred","000":"thousand","00000":"lakh","0000":"thousand","0000000":"crore"}

{


var sArray = [" ","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var tArray = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]

let num = 192

let str = num.toString()

let digit = str.length

console.log("flag 1")

if(digit >= 7)
{
    console.log("cannot process more than 7 digits")
}
else
{
    for(i=digit-1;i >= 0; i--)
        console.log(str[i])


    let y=0

    for(i=digit-1;i >= 0; i--)
        {
            y= parseInt(str[i]+str[i-1])
            if(y>9 && y<20)
            {
                console.log("....>"+sArray[y])
            }
            else
            {
                y = parseInt(str[i]+"0")
                console.log("....->"+tArray[y])
                call(y)
            }

        }

}

function call(y)
{
    if(y<20)
    {
        console.log("....>"+sArray[y])
    }
    else
    {
        let r = (y %10)-2
        console.log("....->"+tArray[r])
    }
}
}