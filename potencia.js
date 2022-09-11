function potencia(a, b) {
    let variable = a; 
    for (let i = 0; i < b-1 ; i++) {
        variable= variable * a;
    }
    return variable

}

module.exports=potencia; 