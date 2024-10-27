const { MongoClient } = require('mongodb');
const Task = require('../Modelo/Task');
// URL de conexión (ajusta según tu entorno)
const uri = 'mongodb+srv://yagorc04:hoytIzqfmuUEbaWs@cluster0.jeoix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // O usa la URL de MongoDB Atlas si es el caso

// Nombre de la base de datos y la colección
const dbName = 'Tareas';
const collectionName = 'UserPrueba';

// Objeto que queremos guardar en la base de datos
const objetoEjemplo = new Task('Prueba2','Finalizado');

// Función para conectar a la base de datos, guardar el objeto y consultar los datos
async function main() {
    const client = new MongoClient(uri);

    try {
        // Conectar al cliente de MongoDB
        await client.connect();
        console.log("Conexión a MongoDB exitosa");

        // Seleccionar la base de datos y la colección
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insertar el objeto en la colección
        const resultado = await collection.insertOne(objetoEjemplo);
        console.log("Objeto guardado con ID:", resultado.insertedId);

        // Consultar todos los documentos en la colección
        const documentos = await collection.find({}).toArray();
        console.log("Documentos en la colección:", documentos);

    } catch (error) {
        console.error("Error al conectar o al consultar la base de datos", error);
    } finally {
        // Cerrar la conexión a la base de datos
        await client.close();
    }
}

// Ejecutar la función principal
main();
