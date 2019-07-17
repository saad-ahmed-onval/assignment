const val = require('./validations')

var response = {
    status: [],
    error: [],
    input:[],
    output:[]
}



exports.add = function(a,b){
    response.status.pop()
    response.error.pop()
    response.output.pop()
    response.input.pop()
    response.input.pop()

    if(isNaN(a) && isNaN(b))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a, b)
    }
    else{
        let res = a+b;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a, b)
    }
    return response;

}

function clear(){
    response.status.pop()
    response.error.pop()
    response.output.pop()
    response.input.pop()
    response.input.pop()

}

exports.mul = function(a,b){
    clear()
    if(isNaN(a) && isNaN(b))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a, b)
    }
    else{
        let res = a*b;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a, b)
    }
    return response;
}

exports.square = function(a){
    clear()

    if(isNaN(a))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a)
    }
    else{
        let res = a*a;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a)
    }
    return response;
}

exports.power =   function(a,b){
    clear()

    if(isNaN(a) && isNaN(b))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a, b)
    }
    else{
        let res = a**b;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a, b)
    }
    return response;
}

exports.cube = function(a){
    clear()

    if(isNaN(a))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a)
    }
    else{
        let res = a*a*a;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a)
    }
    return response;
}

exports.sqroot = function(a){
    clear()

    if(isNaN(a))
    {
        response.status.push("Not Okay")
        response.error.push("1000: Not a number" )
        response.input.push(a)
    }
    else{
        let res = a**0.5;
        response.status.push("Okay")
        response.output.push(res)
        response.input.push(a)
    }
    return response;
}
