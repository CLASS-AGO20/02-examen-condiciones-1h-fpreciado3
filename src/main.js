export default class App {
    convertir(pesos) {
        let conversion;

        if(pesos < 2000) {
            conversion = pesos * 20.5;
        } else {
            conversion = pesos * 22.7;
        }
    }

}

let app = new App();
