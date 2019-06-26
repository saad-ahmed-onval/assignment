var inp = 1234

function counter(val)
{
    var count = 0;
    while(val != 0)
    {
        count += 1;
        val = parseInt(val / 10);
    }
    console.log("no. of digits = "+ count);
}

counter(inp);

numeric