var array = [0, 15, false, -22, '',undefined, 47, null]

var exception = ['null', '0', ' ', 'false', 'undefined',false,undefined,null]


var resultArray = new Array();

function manipulate(array, exception)
{
    var resultArray = []
    var length1 = array.length
    console.log("length1: "+length1)
    var length2 = exception.length
    console.log("length2: "+length2)
    var abc

    for(let i=0;i<length1;i++)
    {
        for(let j=0;j<length2;j++)
        {
            if(exception[j] === array[i])
            {
                //resultArray = array.splice()
            }
            else
            {
                resultArray.push(array[i])
            }
        }
    }

    return resultArray
}


resultArray = manipulate(array,exception)

console.log("manipulated: "+resultArray)