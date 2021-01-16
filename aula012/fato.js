function factorial(n){ //Uma função para o fatorial.
    var product = 1; //começa com o produto de 1;
    while (n > 1){
        product *= n;
        n --;

    }
    return product;
}
console.log(factorial(2))