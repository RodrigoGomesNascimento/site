#include <stdio.h>

int soma(int x, int y){
    return(x+y);
}

int main(){
    int resultado=0, resultado2=0, x=3, y=5;

        _asm_(
            "mov1 %1,%%eax;"
            "mov1 %2,%%ebx;"
            "add1 %%ebx, %%eax;"
            : "=r"(resultado)
            : "a" (x), "b" (y)
        );
        _asm_(
            "add1 %%ebx, %%eax;"
             :"=r"(resultado)
             :"a" (x), "b" (y)
        );
    printf("resultdo = %d\n",resultado);
    printf("resultado2 = %d\n",resultado2);
    

    )

}