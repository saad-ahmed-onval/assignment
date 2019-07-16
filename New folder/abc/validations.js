//checking if the inputs are float value or not
//if the inputs are float return true
//if not return false
exports.floatValidate = function(a,b)
{
    //checking if the inputs are string
    if(!(/^\d*\.?\d*$/.test(a) && /^\d*\.?\d*$/.test(b)))
    {
        return false
    }
    else
        return true
}


exports.floatValidate = function(a)
{
    //checking if the inputs are string
    if(!(/^\d*\.?\d*$/.test(a)))
    {
        return false
    }
    else
        return true
}

//checking if the inputs are pure integer value or not
//if the inputs are integer return true
//if not return false
exports.intValidate = function (a,b)
{
    //checking if the inputs are string
    if(!(/\d./.test(a) && /\d./.test(b)))
    {
        return false //({err:1, result:"ERROR: Not a correct value type, Enter correct INT value"})
    }
    else
        return true
}

exports.intValidate = function (a)
{
    //checking if the inputs are string
    if(!(/\d/.test(a)))
    {
        return false //({err:1, result:"ERROR: Not a correct value type, Enter correct INT value"})
    }
    else
        return true
}

