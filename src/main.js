export default class App {
    convertir(pesos) {
        let conversion;

        if(pesos < 2000) {
            conversion = pesos / 20.5;
        } else {
            conversion = pesos / 22.7;
        }

        return conversion;
    }

    costoRenta(kilometros) {
        let costo;

        if(kilometros < 50) {
            costo = 3 * kilometros;
        } else if(kilometros > 50 && kilometros < 100) {
            costo = 5 * kilometros;
        } else if(kilometros > 100 && kilometros < 200) {
            costo = 6 * kilometros;
        } else {
            costo = 6.5 * kilometros;
        }

        return costo;
    }

    puedeCircular(dia, terminacion) {
        let circulacion;
    }

}

let app = new App();

//Prueba de la función convertir()
console.log(app.convertir(1989));
console.log(app.convertir(2000));
console.log(app.convertir(4500));

//Prueba de la función costoRenta()
console.log(app.costoRenta(43));
console.log(app.costoRenta(86));
console.log(app.costoRenta(140));
console.log(app.costoRenta(304));