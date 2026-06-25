for (let numero = 0; numero <= 100; numero++) {

    if (numero >= 0 && numero <= 100) {

        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else {
            console.log(numero + " é ímpar");
        }

    } else {
        console.log(numero + " está fora do intervalo");
    }

}