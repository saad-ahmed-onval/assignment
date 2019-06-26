//matrix multiplication

#include "stdlib.h"



using namespace std;

int main()
{
  
    int a=1,b=2,m=2,n=1;
    int A[a][b],B[m][n];
    int C[a][n];
    for(int i=0;i<=a;i++)
    {
        for(int j=0;j<=b;j++)
        {
            std::cout<<"A["<<i<<"]["<<j<<"]";
            std::cin>>A[i][j];
        }   
    }

    for(int i=0;i<=a;i++)
    {
        for(int j=0;j<=b;j++)
        {
            std::cout<<"B["<<i<<"]["<<j<<"]";
            std::cin>>B[i][j];
        }   
    }


    if(a!=n)
    {
        std::cout<<"multiplication not possible, check dimensions!";

    }
    else
    {   
        

        for(int i=0;i<=a;i++)
        {
            
            for(int j=0;j<=n;j++)
            {
                C[i][j]=0;
                for (int k = 0; k <=n; k++)
                {
                    C[i][j] = A[i][k]*B[k][n] +  A[k][j]*B[m][k] ; 
                }
            }       
        }
    }

    for(int i=0;i<=a;i++)
        {
            for(int j=0;j<=n;j++)
            {
                std::cout<<C[i][j]<<"\t"; 
            }       
            std::cout<<"\n";
        }
    

    return 0;
}

}
