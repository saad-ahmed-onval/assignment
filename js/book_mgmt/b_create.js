var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline")
var f="" //file name to be set
var data= ""
var flg=0

var prompts = rl.createInterface(process.stdin, process.stdout)

prompts.question("enter the book name: ", function(f){
  var msg="kg"

  f="D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+f+".txt" // appending extension to the file name
   //data to be entered into the file...
//-----------------------------------
  /*fs.open(f, "na", function(err) {
    if (err) console.log(err);
    console.log("Successfully Create to File. "+msg);
  });*/
  fs.stat(f, (err, stats) => {
    if (err) 
      {console.log("file does not exist!")
      flg=0}
    //throw err;
    else
      {flg=1
      console.log("file present");}

    if(flg==0){
      process.abort()
    }
    else
    writeFile()
  });



//process.exit() // to exit process
});
function open()
  {
    fs.open(f, "w", function(err) {
      if (err) console.log(err);
      console.log("Successfully Create to File. "+msg);
    });
  }

function writeFile(){
  prompts.question("enter the book data: ", function(data){

    fs.writeFile(f, data, {overwrite:false}, function(err) {
      if (err) console.log(err);
      console.log("Successfully Written to File. ");
      });
  
    });
}