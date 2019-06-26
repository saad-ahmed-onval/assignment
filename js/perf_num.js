var num = 500

for(var i=1;i<=num;i++)
{
    var sum =0
    a = i/2
    for(var j=1;j<= a;j++)
    {
        if(i%j == 0)
        {
            sum+=j
        }

    if(i == sum)
        console.log("perfect number: "+i)
    }
}