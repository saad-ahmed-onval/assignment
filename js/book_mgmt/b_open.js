var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline")
var prompts = rl.createInterface(process.stdin, process.stdout)

//var f="zz" //file name

prompts.question("enter the book name: ", function(f){
    var msg="kg"

    f="D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+f+".txt" // appending extension to the file name

fs.readFile(f, "utf-8", (err, data) => {
    console.log("File Data: ")
    console.log(data);
});
});