const BDTunnel = require('../src/Modelo/BDTunnel');
const Task = require('../src/Modelo/Task');


async function main() {
    
    
        const bdTunnel = new BDTunnel('Tareas', 'UserPrueba');
        const objetoEjemplo = new Task('Prueba33', 'Finalizado');
        await bdTunnel.insert(objetoEjemplo);
  

}
main();