const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea por hacer'

}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra una determinada tarea', {
        descripcion
    })
    .command('listarF', 'Lista segun el comando que le vayamos mandando true o false', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}