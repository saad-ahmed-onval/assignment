// Example program
#include <iostream>
#include <string>
#include <cstring>
#include <bits/stdc++.h>

using namespace std;


bool check(char [],char [],int , int);
int str_re(char [],int);
int conv(char [], int );
int val(char );
char check(int num);
char  conv2(char [], int , int );

int main()
{
  char name[30];
  std::cout << "What is your name? ";
  std::cin>>name;
  std::cout << "Hello, " << name << "!\n";
  
  //-------------------------------------------------------
  
  int Source_base,flag;
  int Destination_base;
  char Input_String[32]="";
  char Output_String[40]="";
  
  std::cout << "What is your Source Base Value? ";
  std::cin>>Source_base;
  std::cout << "What is your Destination Base Value? ";
  std::cin>>Destination_base;
  
  char Source_CharSet[40] = {};
  char Destination_CharSet[40] = {};
  
  
  
if(Source_base && Destination_base)
{
  
    char DataSet[50]={'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};  
  
    if((Source_base > 32) && (Destination_base > 32))
    std::cout<<"source base value entered is not valid.";
    
    else
    {
     //idhar aaega pura code...

        std::cout<<"\nEnter the Input: ";
        std::cin>>Input_String;

    //-----------------------------------------------------------------------------------

        //source char set generation

        for(int i=0;i<Source_base;i++)
        {
            Source_CharSet[i]=DataSet[i];
        }

        std::cout<<"\n\n--Source Num Set...\n";
        for(int i=0; i<Source_base;i++)
        {
            std::cout<<"-"<<Source_CharSet[i];
        }


    //-----------------------------------------------------------------------

        //destination char set generation

        for(int i=0;i<Destination_base;i++)
        {
            Destination_CharSet[i]=DataSet[i];
        }
        std::cout<<"\n\n--Destination Data Set...\n";
        for(int i=0; i<Destination_base;i++)
        {
            std::cout<<"-"<<Destination_CharSet[i];
        }


    //-------------------------------------------------------

        //checking for a valid string..
        int len=0;
        for(int i=0;Input_String[i]!='\0';i++)
          len+=1;
        //  int len2 = sizeof(Input_String)/sizeof(Input_String[0]);
        std::cout<<endl<<endl<<"Length of the input string "<<Input_String<<" is: "<<len<<endl;


        //-----------------------------------------------

        int m = sizeof(Source_CharSet)/sizeof(Source_CharSet[0]);
        int n = sizeof(DataSet)/sizeof(DataSet[0]);

        if(!(check(Source_CharSet,Input_String,m,n)))
        {
            std::cout<<"\n\nInput String is valid according to the Source_Base Value";

            //when the string is valid.....

            int deci=conv(Input_String, Source_base);


            std::cout<<"-\n\nDecimal Value----> "<<deci<<"\n";

            //char final2[45]="";
            //final2=con2(Output_String, Destination_base, deci);

            std::cout<<"Destination string is: "<<conv2(Output_String, Destination_base, deci);
        }
        else
        {
          std::cout<<"\n\n input string is invalid";
        }

      }

    //------------------------------------------------

}


  return 0;
}

bool check(char a1[],char a2[],int m, int n)
{
  int i = 0, j = 0;

    if (m < n)
       return 0;

    sort(a1, a1 + m);
    sort(a2, a2 + n);
    while (i < n && j < m )
    {
        if( a1[j] <a2[i] )
            j++;
        else if( a1[j] == a2[i] )
        {
            j++;
            i++;
        }
        else if( a1[j] > a2[i] )
            return 0;
    }

    return  (i < n)? false : true;
}

int str_re(char istring[],int len)
{
  int a = len;
  char rev_string[50],temp_string[50]={};

//  temp_string=reverse(istring.begin(),istring.end());

    for(int i=0;i<=a;i++)
  {
    temp_string[i] = istring[a-1- i];
  }

  cout<<"temp_string: "<<temp_string;
}

int conv(char str[], int base)
{
    int len=0;
    for(int i=0;str[i] != '\0';i++,len++);
    int powr = 1;
    int num = 0;
    int i;
    for (i = len - 1; i >= 0; i--)
    {
        if (val(str[i]) >= base)
        {
           printf("Invalid Number");
           exit(0);
        }

        num += val(str[i]) * powr;
        powr = powr * base;
    }
    return num;
}

int val(char c)
{
    if (c >= '0' && c <= '9')
        return (int)c - '0';
    else
        return (int)c - 'A' + 10;
}

char check(int num) 
{ 
    if (num >= 0 && num <= 9) 
        return (char)(num + '0'); 
    else
        return (char)(num - 10 + 'A'); 
}

char  conversion2(char str[], int base2, int dec) 
{ 
    int nu = 0;   
    while (dec > 0) 
    { 
        str[nu++] = check(dec % base2); 
        dec=dec/ base2; 
    } 
    int len=0;
    for(int i=0;str[i] != '\0';i++,len++);

    char str2[len];
    
    for(int i=0;i < len;i++)
      str2[i]=str[len-1-i];
    
    return str2; 
}