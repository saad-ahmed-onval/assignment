var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["st","nd","rd","th"]

for(let i=0; i<color.length; i++)
{
    if(i<3)
    {
        console.log(i+1+o[i]+" choice is "+color[i])
    }
    else
        console.log(i+1+o[3]+" choice is "+color[i])
}
