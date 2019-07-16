const express = require("express");
const math = require("./maths");
const val = require('./validations');

var app = express();


var server = app.listen(8000, function(){
    console.log("started...");
})

app.get("/mul/:_1/:_2", function(req, res){
    let _a = (req.param("_1"))
    let _b = (req.param("_2"))

    console.log("validating...");
    if(val.intValidate(_a,_b))
    {
        var a = math.mul(_a,_b)
        res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a,_b] ,output:a}})
    }
    else
        res.json({err:1, result:"ERROR: Not a correct value type, Enter correct INT value"})
})


app.get("/sqrt/:_1", function(req, res){
    let _a = (req.param("_1"))

    console.log("validating...");
    if(val.intValidate(_a))
    {
        var a = math.sqroot(_a)
        res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a] ,output:a}})
    }
    else
        res.json({err:1, result:"ERROR: Not a correct value type, Enter correct INT value"})

})


app.get('/sq/:_1', function(req, res) {
    let _a = (req.param("_1"))

    if(val.floatValidate(_a))
    {
        var a = math.square(_a)
        res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a,_b] ,output:a}})
    }
    else
        res.json({err:1, result:"ERROR: Not a correct value type, Enter correct FLOAT value"})

  });

  app.get('/cub/:_1', function(req, res) {
    let _a = (req.param("_1"))

    if(val.floatValidate(_a))
    {
        var a = math.cube(_a)
        res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a,_b] ,output:a}})
    }
    else
        res.json({err:1, result:"ERROR: Not a correct value type, Enter correct FLOAT value"})

  });


app.get('/pw/:_1/:_2', function(req, res){
    let _a = (req.param("_1"))
    let _b = (req.param("_2"))

    if(val.floatValidate(_a,_b))
    {
        var a = math.power(_a,_b)
        res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a,_b] ,output:a}})
    }
    else
        res.json({err:1, result:"ERROR: Not a correct value type, Enter correct FLOAT value"})
  });

  app.get("/add/:_1/:_2",(req,res) => {
      let _a = req.param("_1")
      let _b = req.param("_2")
      if(val.floatValidate(_a,_b))
      {
          var a = math.add(_a,_b)
          res.json({home : app.path()=="" ? true:false, response:{ inputs:[_a,_b] ,output:a}})
      }
      else
          res.json({err:1, result:"ERROR: Not a correct value type, Enter correct FLOAT value"})

  })