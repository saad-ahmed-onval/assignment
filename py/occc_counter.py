print("enter the number: ")
inp= input()

length = len(inp)

def counter(argument):
    dict ={}
    for n in argument:
        keys=dict.keys()
        if n in keys:
            dict[n] += 1
        else:
            dict[n] = 1
    
    print(dict)

counter(inp)