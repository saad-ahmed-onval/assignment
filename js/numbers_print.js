var i = 1;
var j = 1;
var temp=0;

for(i=1;i<11;i++)
    {
        var string=" "
        for(j=1;j<11;j++)
            {
                temp = i*j;
                
                string =string+ temp+ "\t"
            }
            console.log(string)
    }