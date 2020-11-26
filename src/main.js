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

}

let app = new App();

//Prueba de la función convertir()
