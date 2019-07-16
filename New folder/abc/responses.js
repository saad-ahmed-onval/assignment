const resp_format = {
    "STATUS" : "OK" | "FAIL",
    "ERROR" : [{"CODE":"DESC"}],
    "OUTPUT" : {
        "OPERATION" : "",
        "INPUT" : [],
        "RESULT" : ""
    }
}

var err = new Map();

err.set(000, " " )
err.set(101, "Error")
err.set(102, "FLOAT Error")
err.set(103, "INT Error")
err.set(104, "Check Parameters")


setCode(101)

function setCode(err_code){
    var res = ""
    res = err.get(err_code)
    resp_format.OUTPUT.RESULT.set(res)

    console.log(resp_format.OUTPUT.RESULT)

}
