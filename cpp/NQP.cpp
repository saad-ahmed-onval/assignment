// N- queen's problem

#include<iostream>

int main()
{
    int n;
    cout<<"enter the value of N: ";
    cin>>n;

    int A[n][n];

    for(int i=0;i<=n;i++)
    {
        for(int j=0;j<=n;j++)
        {
            A[i][j]=0;
        }
    } 

    for(int i=0;i<=n;i++)
    {
        for(int j=0;j<=n;j++)
        {
            cout<<A[i][j];
        }
        cout<<"/n";
    }

    return 0;
}