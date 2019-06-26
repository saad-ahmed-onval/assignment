print("Hello\n")
print("enter source value: ")
source_input = int(input())

print("enter destination value: ")
destination_input = int(input())


print("source value entered: ",source_input,"\n")
print("destination value entered: ",destination_input,"\n")

source_data = {}
destination_data = {}
src_ip_string = {}


DataSet=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
#source_data = {'1','2','3','4','5','6','7','8','9','a'}

if (int == type(source_input) and int == type(destination_input)):

    if (source_input < 32 and destination_input<32):

#generating source data set...
        for i in range(0,int(source_input)):
            source_data[i] = DataSet[i]

        print("hey...\n Source Data Set Generated")

        for i in range(0,int(source_input)):
            print(source_data[i],end=' ')

        #for i in range(5):
         #   print(src_ip_string[i], end="")

#generating destination data set...
        for i in range(0,int(destination_input)):
            destination_data[i] = DataSet[i]

        print("\nhey...\n Destination Data Set Generated")

        for i in range(0,int(destination_input)):
            print(destination_data[i],end=' ')


#now take string  to convert input from the user

        print("\nenter the source base string: ")
        src_string = input()

        length = len(src_string)

        for i in range(0,length):
            src_ip_string[i] = src_string[i]

        print("\nsource input...\n")
        for i in range(0,length):
            print(src_ip_string[i], end=' ')

        print("\n")
        #check if the input string is the subset of the character base set...
        flag =0
        #if(all(set(src_ip_string).subset(set(source_data)))):
         #       flag=1

        if (flag):
            print("valid string...")
        else:
            print("invalid string...")
#
        print("flag= ",flag)

#







    else:
        print("value greater than 32..\n\n")

else:
    print("\n\tplease check input base values...\n")