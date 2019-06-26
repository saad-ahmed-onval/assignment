{
var opstr=" "

for(var i=0;i<5;i++)
{
    opstr=opstr+" "
    d(i)
}
function d(j)
{
    switch(j)
    {
        case 1: opstr=opstr+" "+"hey" 
        break;
        case 2: opstr=opstr+" "+"hello"

    }
}
console.log(opstr)
}