const process = require('process');

// verifica el largo del array obtenido

function verificacionLargo() {
    if (process.argv.length === 5) {
        return true;
    }
    console.log('CANTIDAD DE PARAMETROS ERRONEA');
    return false;
}

// verifica que los ultimos dos parametros obtenidos sean numeros validos

function verificacionTipos() {
    if (Number.isNaN(+process.argv[3]) || Number.isNaN(+process.argv[4])) {
        console.log('UNO DE LOS PARAMETROS NO ES UN NUMERO');
        return false;
    }
    return true;

}

// verifica que el operador sea de una cuenta valida
function verificarOperador(){
    let operador =  process.argv[2].toLowerCase(); 
    let operaciones = ['sumar', 'restar', 'dividir', 'multiplicar', 'potencia']; 
    if(operaciones.includes(operador)){
      return true; 
    }
    console.log('OPERADOR INVALIDO');
    return false; 
}

// llena el array cuando todo esta ok y lo exporta 

function llenarArray() {
    if (verificacionLargo()&& verificarOperador()&& verificacionTipos()) {
        const miArray = [process.argv[2].toLowerCase(), +process.argv[3], +process.argv[4]];
        return miArray;
    }

    return false;
}
module.exports = llenarArray;