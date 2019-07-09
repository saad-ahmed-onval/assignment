var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline-sync");
//var prompts = rl.createInterface(process.stdin, process.stdout)
var arr = []
 function test(arr,input)
 {
     console.log(arr.push(input.toString()))
 }
//var f="zz" //file name

var c=rl.question("enter the book name: ")

c="D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+c+".txt"
// appending path and extension to the file name
var contents = fs.readFileSync(c, "utf8");

console.log(contents);
