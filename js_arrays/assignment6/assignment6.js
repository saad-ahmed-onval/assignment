function a6()
{
    var array = document.getElementById("inp").value
    //alert("hey")
    var wr = document.getElementById("res")
    var swap = array.split("")
    var resultArray=[]
    //alert(swap.length)
    for(let i=0; i<swap.length; i++)
    {
        if((swap[i]%2==0) && (swap[i+1]%2==0))
        {
            resultArray.push(swap[i])
            resultArray.push("-")
        }
        else
        {
            resultArray.push(swap[i])
        }
    }

     alert(resultArray.join(""))
}