function numeros(){
    let number;

    while (true) {
        let imputs = prompt("Por favor, ingresa un número:");
        number = parseFloat(imputs);
        
        if (!isNaN(number)) {
            break;
        } else {
            alert("Entrada no válida. Por favor, ingresa un número válido.");
        }
        
    }

    if (number > 0) {
        alert("El número es positivo");
    } else if (number < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es igual a cero");
    }
}

numeros();