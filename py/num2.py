'''
dict charSet={
    '0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'a':10,'b':11,
    'c':12,'d':13,'e':14,'f':15,'g':16,'h':17,'i':18,'j':19,'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
}
'''

s2 = {}

print("enter the no. values to be inserted dict s2::")
a = int(input())

ans= input()
while ans=='y' :

    print("enter the elements of dict:")
    for i in range(0,a):
        print("key: ")
        key1=input(s2['key'])
        print("value: ")
        value1=input(s2['value'])
        print("want to enter more?")
        ans=input()
        a += 1

