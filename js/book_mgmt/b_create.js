var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline")
var f="" //file name to be set
var data= ""
var flg=0
var msg="kg"
var prompts = rl.createInterface(process.stdin, process.stdout)

prompts.question("enter the book name: ", function(f){
 

  f="D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+f+".txt" // appending extension to the file name
  fs.stat(f, (err, stats) => {
    if (err)
    {
      console.log("file does not exist!")
      flg=0
    }
    prompts.question("enter the book data: ", function(data){

      fs.writeFile(f, data, {overwrite:false}, function(err) {
        if (err) console.log(err);
        console.log("Successfully Written to File. ");
        });
    
      });
  });
});
function open1()
  {
    fs.open(f, "w", function(err) {
      if (err) console.log(err);
      console.log("Successfully Create to File. "+msg);
    });
  }

function write2File(f){
  prompts.question("enter the book data: ", function(data){

    fs.writeFile(f, data, {overwrite:false}, function(err) {
      if (err) console.log(err);
      console.log("Successfully Written to File. ");
      });
  
    });
}