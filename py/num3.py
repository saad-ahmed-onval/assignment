import math

istring = "123a"
ostring = ""
#base=10
temp_string=""

rev_string = "".join(reversed(istring))
print(rev_string)
a = len(rev_string)

#base = 16
for i in range(0,a):
    print(ascii(rev_string[i]))

for i in range(0,a):
    temp_string = (int(istring[i]) * math.pow(8,i))

for i in range (0,a):
    print(rev_string[i])