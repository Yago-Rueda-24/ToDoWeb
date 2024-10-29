const { MongoClient } = require('mongodb');
const Task = require('./Task');

class BDTunnel {
    url = 'mongodb+srv://yagorc04:hoytIzqfmuUEbaWs@cluster0.jeoix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    constructor(dbname, collectionname) {
        this.dbname = dbname;
        this.collectionname = collectionname;
        this.client = new MongoClient(this.url);
    }

    async conectar() {
        try {
            await this.client.connect();
            console.log("Conexión a MongoDB exitosa");
        } catch (error) {
            console.error("Error al conectar a MongoDB:", error);
        }
    }
    
    async desconectar() {
        await this.client.close();
        console.log("Se cerró la conexión a MongoDB");
    }

    async insert(task) { // Recibe un objeto `task` como parámetro
        try {

            
            this.conectar();
            // Seleccionar la base de datos y la colección
            const db = this.client.db(this.dbname);
            const collection = db.collection(this.collectionname);
            // Insertar el objeto en la colección
            const resultado = await collection.insertOne(task);
            console.log("Objeto guardado con ID:", resultado.insertedId);
        } catch (error) {
            console.error("Error al insertar el objeto en la colección:", error);
        }finally{
            this.desconectar();
        }
    }

    
}

// Uso de la clase BDTunnel
/*
(async () => {
    const bdTunnel = new BDTunnel('Tareas', 'UserPrueba');
    await bdTunnel.conectar();

    const objetoEjemplo = new Task('Prueba33', 'Finalizado');
    await bdTunnel.insert(objetoEjemplo);

    await bdTunnel.desconectar();
})();
*/
module.exports = BDTunnel;