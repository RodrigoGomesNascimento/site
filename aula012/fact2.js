function factoria(n){
    var i, product = 1; //começa com 1
    for(i = 2; i <= n; i++){//incrementa i automaticamente de 2 até n
        product *=i;
     } //Faz isso a cada vez. {} não é necessario para laços.
    return product;

}
console.log(factoria(5))