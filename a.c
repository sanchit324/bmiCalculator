#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
    int first;
    int second;
    char sign;
    int res = 0;
    scanf("%d %c %d", &first, &sign, &second);
    if(sign == '+'){
        res = first+second;
    }else if(sign == '-'){
        res = first-second;
    }else if(sign == '*'){
        res = first*second;
    }else if(sign == '/'){
        res = first/second;
    }
    printf("%d", res);
    return 0;
}
