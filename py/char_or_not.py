print("enter a single character: ")
inp={input()}

DataSet={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'}

if(inp.issubset(DataSet)):
    flag=1
else:
    flag=0

if (flag):
    print("the input is a character")
else:
    print("the input is not a character")
