const val = require('./validations')

exports.add = function(a,b){
    if(val.floatValidate(a,b))
        return a+b
    else
        resp.setCode()
}

exports.mul = function(a,b){
    if(val.floatValidate(a,b))
        return a*b
    else
    {}
}

exports.square = function(a){
    if(val.floatValidate(a))
        return a*a
    else
    {}
}

exports.power =   function(a,b){
    if(val.floatValidate(a,b) && b >= 0 )
        return a**b
    else
    {}
}

exports.cube = function(a){
    if(val.floatValidate(a))
        return a*a*a
}

exports.sqroot = function(a){
    if(val.intValidate(a))
        return a ** (0.5)
}
