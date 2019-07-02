function b_delete(a)
{
    var fs = require('fs');
    var file_name = "a"
    file_name = file_name+".txt"

    var dir = "D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+file_name
// include node fs module

// delete file named 'sample.txt'
    fs.unlink(dir, function (err) {
        if (err)
            console.log("Required file does not exist.")
            //throw err
        else
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    });

}