function check(){
    var email=document.getElementById("email").value;

    var ch=[];
    ch=email.split("")

    var len=ch.length
    var a_flag=0
    var s_flag
    var p_flag=0
    var regex = /[0-9]/g;

    if(ch[0].match(regex))
    {
        alert("invalid email id....(1)")
        process.exit();
    }

    for(let i=0;i<len;i++)
    {
        if(ch[i]==".")
            {
                if(i<len-3)
                p_flag+=1
            }
        else
            flag=0;
    }

    for(let i=0;i<len;i++)
    {
        if(ch[i]=="@")
            {a_flag+=1
             if(a_flag>1)
             {
                 alert("invalid email id...(2)")
                 process.exit()
             }
            }       //i<(len-2))
    }

    if((a_flag==1) && (p_flag))
        {alert("niceeeeee brooooooooooo!!")}
    else
        alert("galat email id hai broooooooo!!")

    }