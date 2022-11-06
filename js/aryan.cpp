


#include <iostream>
using namespace std;

int main(){ 
      int a, b, c;
      cout << "enter the first number "<<endl;
      cin >> a;

      cout << "enter the second number "<<endl;
      cin >> b;

      cout << "enter the third number "<<endl;
      cin >> c;

      if(a>b && b>c){
        cout << "the greatest number is"<<a<<endl;
      }

      if(b>c && c>a){
        cout << "the greatest is"<<b<<endl;
      }

      if(c>b && b>a){
        cout << "the greatest number is"<<c<<endl;
      }
        return 0;
}