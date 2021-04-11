#include <stdio.h>

//prototipo da função para dizer que ela existe

int sum(int x, int y);


int main(){
    printf("%d\n", sum(3, 7));
    return 0;
}

_asm_(
    "sum:\n"
    "   movl %edi, %eax\n"
    "   addl %esi, %eax\n"
    "   ret"

);