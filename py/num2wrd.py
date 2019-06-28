symdb = { 
        0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",
        9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",
        17:"seventeen",18:"eighteen",19:"nineteen",
        20:"twenty",30:"thirty",40:"fourty",50:"fifty",60:"sixty",
        70:"seventy",80:"eighty",90:"ninety",
        "00":"hundred","000":"thousand","00000":"lakh","0000":"thousand","0000000":"crore"
        }

st = "1234"

y=int(st)
output=""

for i in range(0,len(st)):
    output = " {0[st[i]]}".format(symdb)

print("-->",output)