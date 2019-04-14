
var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe';

class ConnectionFactory {

    constructor() {

        throw Error('Não é permitido criar instâncias de ConnectionFactory.')
    }

    static getConnection() {

        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {


            };

            openRequest.onsuccess = e =>  {

            };

            openRequest.error = e => {


            };
        });
    }
}

