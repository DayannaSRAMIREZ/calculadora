
const sumar = require('./sumar');
const restar = require('./restar'); 
const multiplicar = require('./multiplicar'); 
const dividir = require('./dividir'); 
const potencia = require('./potencia'); 
const verificacion= require('./verificar');


const miArray = verificacion(); 

function operar(){

if(!miArray){
    return 'REINTENTAR'; 
}else if(miArray[0] ==='sumar'){
    return sumar(miArray[1],miArray[2]); 
}else if (miArray[0] ==='restar'){
    return restar(miArray[1],miArray[2]); 
}else if (miArray[0]  ==='multiplicar'){
    return multiplicar(miArray[1],miArray[2]); 
}else if (miArray[0]  ==='dividir'){
    return dividir(miArray[1],miArray[2]); 
}else if (miArray[0]=== 'potencia'){
    return potencia(miArray[1],miArray[2]); 
}

}

module.exports = operar; 