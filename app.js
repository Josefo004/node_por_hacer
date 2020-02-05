//const argv = require('yargs').argv;
const argv = require('./config/yargas').argv;
const colors = require('colors');
const porHacer = require('./por_hacer/por_hacer')

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        let estadito = '';

        for (let tarea of listado) {

            console.log('==== Por Hacer ====='.green);
            console.log('Tarea : ', tarea.descripcion);
            if (tarea.completado) { estadito = 'COMPLETADO'.bgGreen; } else { estadito = 'NO COMPLETADO'.bgRed; }
            console.log('Estado : ', estadito);
            console.log('===================='.green);

        }
        //console.log(listado);
        //console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizarDB(argv.descripcion, argv.completado);
        console.log(actualizado);
        //console.log('actualizar una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrarDB(argv.descripcion);
        console.log(borrado);
        break;

    case 'listarF':
        let listadoF = porHacer.getListadoF(argv.completado)
        let estaditoF = '';

        if (listadoF.length > 0) {
            for (let tarea of listadoF) {
                console.log('==== Por Hacer ====='.green);
                console.log('Tarea : ', tarea.descripcion);
                if (tarea.completado) { estaditoF = 'COMPLETADO'.bgGreen; } else { estaditoF = 'NO COMPLETADO'.bgRed; }
                console.log('Estado : ', estaditoF);
                console.log('===================='.green);
            }
        } else {
            console.log('==== NO HAY TAREAS POR MOSTRAR ====='.bgRed.yellow);
        }
        break;
    default:
        console.log('Comando no reconocido');

}