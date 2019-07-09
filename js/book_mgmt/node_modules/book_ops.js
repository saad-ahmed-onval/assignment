var arr = ["Hi My name is ","Jibrish","What? ","Hi My name is ","Who? "]
var data = "Slim Shady"
print(arr)
console.log("append: "+b_append(arr,3))
console.log("insert to line: "+b_insert(arr,2,41))
console.log("delete from line: "+b_del(arr,1))
console.log("read: "+b_read(arr))
console.log("array: "+arr)


function print() {
    for (let i = 0; i < arr.length; i++) {
        console.log("[" + i + "] " + arr[i]);
    }
}

function b_append(arr,line)        //To append line to array (book)
{
    line_exist(arr,line_no)
    var tmp = Array.from(arr)
    tmp.push(line)
    arr = tmp
    return tmp
}


function b_insert(arr,line_no,data)
{
    line_exist(arr,line_no)
    var tmp = Array.from(arr)
    tmp.splice(line_no-1,0,data)
    return tmp
}

function b_del(arr,line_no)
{   
    line_exist(arr,line_no)
    var tmp = Array.from(arr)
    tmp.splice(line_no-1,1)
    return tmp
}

function b_read(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i])
    }
}


function line_exist(arr,line_no)
{
    if(line_no < arr.length && line_no > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log("After : ");
b_append(arr,data)
arr = b_del(arr,2)
print()

//console.log("read : ")
//b_read(arr)