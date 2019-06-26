/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

var Source_base = 10
var Destination_base

var NumSet=[0,1,2,3,4,5,6,7,8,9]
var CharSet=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]


var Source_base_NumSet
var Source_base_CharSet

var Destination_base_NumSet
var Destination_base_CharSet

console.log("enter source base value")
readline(SB);

if(Number(SB))
{
    if(SB > 32)
    console.log("source base value entered is not valid.");
    else
    {
        console.log("how are")
    }
}
else
{
    console.log("hello")
}


/*rl.on('line', (SB) => {
        if(isNaN(SB))
        {
            console.log('Received: ${SB}`)
        }
        else
    rl.c
});
*/
