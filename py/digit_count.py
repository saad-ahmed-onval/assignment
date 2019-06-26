val = int(input())
temp = 0

"""
def counter2(va):
    length = len(va)
    return length
"""
def counter(va):
    n = va
    cnt = 0
    while (n != 0):
       cnt += 1
       n = int(n / 10)

    return cnt


print("----")
print("length of the input is: ", counter(val))
