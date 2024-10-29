const BDTunnel = require('../Modelo/BDTunnel');
const Task = require('../Modelo/Task');


async function main() {
    (async () => {
        const bdTunnel = new BDTunnel('Tareas', 'UserPrueba');
        await bdTunnel.conectar();
    
        const objetoEjemplo = new Task('Prueba33', 'Finalizado');
        await bdTunnel.insert(objetoEjemplo);
    
        await bdTunnel.desconectar();
    })();
    
}
main();