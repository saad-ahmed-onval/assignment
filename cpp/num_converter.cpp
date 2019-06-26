// Example program
#include <iostream>
#include <string>

int main()
{
  std::string name;
  std::cout << "What is your name? ";
  getline (std::cin, name);
  std::cout << "Hello, " << name << "!\n";
  
  //-------------------------------------------------------
  
  int Source_base;
  int Destination_base;
  
  std::cout << "What is your Source Base Value? ";
  std::cin>>Source_base;
  std::cout << "What is your Destination Base Value? ";
  std::cin>>Destination_base;
  
  std::string NumSet={'0','1','2','3','4','5','6','7','8','9'};
  std::string CharSet={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};  
  
  std::string Source_CharSet[26] = {};
  std::string Destination_CharSet[26] = {};
  
  std::string Source_NumSet[10] = {};
  std::string Destination_NumSet[10] = {};
  
  
  if(Source_base && Destination_base)
{
    if(Source_base > 32 && Destination_base > 32)
    std::cout<<"source base value entered is not valid.";
    
    else
    {
     //idhar aaega pura code...
    
        
    //-----------------------------------------------------------------------------------
        int s_val = Source_base - 10;
        
        for(int i=0;i<Source_base;i++)
        {
            Source_NumSet[i]=NumSet[i];
        }
        std::cout<<"\n\n--Source Num Set...\n";
        for(int i=0; i<Source_base;i++)
        {
            std::cout<<"-"<<Source_NumSet[i];
        }
        
      if(s_val)
        for(int i=0;i<s_val;i++)
        {
            Source_CharSet[i]=CharSet[i];
        }
        
        std::cout<<"\n\n--Source Character Set...\n";
        for(int i=0; i<s_val;i++)
        {
            std::cout<<"-"<<Source_CharSet[i];
        }
        
    //-----------------------------------------------------------------------

    

        int d_val = Destination_base - 10;
        
        
        for(int i=0;i<Destination_base;i++)
        {
            Destination_NumSet[i]=NumSet[i];
        }
        std::cout<<"\n\n--Source Num Set...\n";
        for(int i=0; i<Destination_base;i++)
        {
            std::cout<<"-"<<Destination_NumSet[i];
        }
        
        if(d_val)
        
        for(int i=0;i<d_val;i++)
        {
            Destination_CharSet[i]=CharSet[i];
        }
        
        std::cout<<"\n\n--Destination Character Set...\n";
        for(int i=0; i<d_val;i++)
        {
            std::cout<<"-"<<Destination_CharSet[i];
        }
        
    
    
    
    
    
    
    
    
    
    }
    
}
else
{
    std::cout<<"enter a valid number";
}

//-------------------------------------------------------------------------




// Example program
#include <iostream>
#include <string>


bool isSubset(std::string arr1, std::string arr2, int m, int n) 
{ 
    int i = 0; 
    int j = 0; 
    for (i = 0; i < n; i++) 
    { 
        for (j = 0; j < m; j++) 
        { 
            if(arr2[i] == arr1[j]) 
                break; 
        } 
          
        /* If the above inner loop was 
        not broken at all then arr2[i] 
        is not present in arr1[] */
        if (j == m) 
            return 0; 
    } 
      
    /* If we reach here then all 
    elements of arr2[] are present 
    in arr1[] */
    return 1; 
}

int main()
{
  std::string name;
  std::cout << "What is your name? ";
  getline (std::cin, name);
  std::cout << "Hello, " << name << "!\n";
  
  //-------------------------------------------------------
  
  int Source_base;
  int Destination_base;
  
  std::cout << "What is your Source Base Value? ";
  std::cin>>Source_base;
  std::cout << "What is your Destination Base Value? ";
  std::cin>>Destination_base;
  
  std::string DataSet={'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};  
  
  std::string Source_CharSet[32] = {};
  std::string Destination_CharSet[32] = {};
  
  std::string Input_String;
  
  if(Source_base && Destination_base)
{
    if(Source_base > 32 && Destination_base > 32)
    std::cout<<"source base value entered is not valid.";
    
    else
    {
     //idhar aaega pura code...
    
        
    //-----------------------------------------------------------------------------------

        //int s_val = Source_base - 10;
        
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


       // int d_val = Destination_base - 10;
        
        
        //if()
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
    
        std::cout<<"\nEnter the Input: ";
        std::cin>>Input_String;
        
    //----------------------------------------------
        //checking for a valid string..
        int len=0;
        for(int i=0;Input_String[i]!='/0';i++)
            len++;
            
        std::cout<<"Length of the input string -> "<<Input_String<<" <- is: "<<sizeof(Input_String)<<"/n";
        
        
        if(isSubset(Source_CharSet, Input_String, Source_base,len))
            {
                std::cout<<"Input String is valid according to the Source_Base Value";
                //reverse the input string....
                /*Input_String = istr;
                //std::string rev_str = strrev(istr);
                for()
        */        
                
                    
            }
            
            
        else
        {
            std::cout<<"Input String is not valid according to the Source_Base Value";
        }
        
        
        
        
        
        
            
    
    
    
    
    
    
    
    
    
    }
    
}
else
{
    std::cout<<"enter a valid number";
}

  return 0;
}

