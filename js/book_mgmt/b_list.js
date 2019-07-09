//function b_list()
var count=0
{
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'files/');
//passsing directoryPath and callback function
console.log("flag 1")
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        count++
        console.log(file); 
    });
});
}
console.log("count: "+count)