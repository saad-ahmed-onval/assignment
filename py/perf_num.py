print("enter the value for n: ")
num = int(input())

for i in range(0,num):
    sum = 0
    a = int(i/2)
    for j in range(1,a):
        if(i % j == 0):
            sum=sum+j
        j+=1
    if(sum==i):
        print("perfect number: ", i)