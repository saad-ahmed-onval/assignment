{
    var num1 = 12
    var ctr =  1
    var place =  1
    var rem=0,multiplier=0
    var opstr=" "
    var num2 = parseInt(num1)
        console.log("flag 1: ")
    while(num1 != 0)
    {
        rem = num1 %10
        num1 =num1/10
//        multiplier = (10 ** ctr)
//        console.log("  "+multiplier)
        //console.log("flag 2: ")
        opstr = opstr+ " "+numeric(rem)+placeval(ctr)
        ctr +=1
        console.log("="+opstr)
    }

    console.log("flag 3: ")
    console.log(" --- "+num1+" ==> "+ opstr)
}
    function numeric(r)
    {
        switch(r)
        {
            case 1:
                    return opstr=opstr+" "+"one"
                    break;
            case 2:
                    return opstr=opstr+"two"
                    break;
            case 3:
                    opstr=opstr+"three"
                    break;
            case 4:
                opstr=opstr+" "+"four"
                break;
            case 5:
                opstr=opstr+" "+"five"
                break;
            case 6:
                opstr=opstr+" "+"six"
                break;
            case 7:
                opstr=opstr+" "+"seven"
                break;
            case 8:
                opstr=opstr+" "+"eight"
                break;
            case 9:
                opstr=opstr+" "+"nine"
                break;
            default:opstr=opstr+" "+" "
        }
        //return opstr
    }

    function placeval(c)
    {
        switch(c-1)
        {
            case 1: numeric(rem)
            break;
            case 2: return opstr=opstr+" hundred "
            break;
            case 3: return opstr=opstr+" thousand "
            break;
            default: opstr=opstr+" "
        }
    }
