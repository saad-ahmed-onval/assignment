function a8(){
var string = document.getElementById("a8").value
//document.getElementById("a7").value
var length = string.length
var temp = string.split("")

temp = temp.map(function(a){

    if(a == NaN)
    {
        a = "-"
        return a
    }
    else
        a = parseInt(a)
        return a*a*a

})

alert(temp)

}