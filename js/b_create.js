var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline")
var f="" //file name to be set
var data= "abcd"

var prompts = rl.createInterface(process.stdin, process.stdout)

prompts.question("enter the book name: ", function(f){
  var msg="kg"

  f="D:\\training-workspace\\assignment\\js\\files\\"+f+".txt" // appending extension to the file name
   //data to be entered into the file...

//-----------------------------------
fs.writeFile(f, data, {overwrite:false}, function(err) {
  if (err) console.log(err);
  console.log("Successfully Written to File. "+msg);
});

//process.exit() // to exit process
});