
function dividir (a,b){
    if(a===0||b===0){
        return 'Error : No se puede dividir por cero'; 
    }
    return a/b; 
}
module.exports= dividir; 