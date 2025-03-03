#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int main(int argc, char* argv[]){
	int first = atoi(argv[1]);
	int second = atoi(argv[3]);
	char sign = argv[2][0];
	int res = 0;
	if(sign == '+'){
		res = first+second;
	}else if(sign == '-'){
		res = first-second;
	}else if(sign == '*'){
		res = first*second;
	}else if(sign == '/'){
		res = first/second;
	}
	printf("%d\n",res);
	return 0;
}
