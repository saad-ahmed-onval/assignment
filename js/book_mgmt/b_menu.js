//required data files
var rl = require("readline")
var prompts = rl.createInterface(process.stdin, process.stdout)

//menu call
menu1()

//main menu call
function menu1()
{
    console.log("1. Create New Book")
    console.log("2. List Books")
    console.log("3. Exit")
    console.log("Please select a choice")

    //user console function start here...
    prompts.question("Your choice: ", function(choice){

        switch(choice)
        {
            case "1": //call file_create() function
                    console.log("in 1")
                break;
            case "2": //call b_list() function
                console.log("in 2")
                break;
            case "3": //call exit function
                console.log("in 3")
                break;
            default: menu2()
        }

    });

}


//second internal menu call
function menu2()
{
    console.log("1. Append data to book")
    console.log("2. Insert data to a particular line")
    console.log("3. Delete data from a particular line")
    console.log("4. Read Book")
    console.log("5. Delete Book")
    console.log("6. Exit")
    console.log("Please select a choice")

    prompts.question("Your choice: ", function(choice){

        switch(choice)
        {
            case "1": //call file_create() function
                console.log("in 1")
                break;
            case "2": //call b_list() function
                console.log("in 2")
                break;
            case "3": //call exit function
                console.log("in 3")
                break;
            case "4": //call b_read() function
                break;
            case "5": //call b_delete() function
                break;
            case "6": //call Exit() function
                break;
            default: "enter a correct choice"
        }

    });

}
