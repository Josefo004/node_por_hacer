const fs = require('fs');

let ListadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la tarea', err);
        console.log('La tarea fue Guardada');
    });
}

const cargarDB = () => {

    try {
        ListadoPorHacer = require('../db/data.json');

    } catch (error) {
        ListadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {

    cargarDB();
    return ListadoPorHacer;
}

const actualizarDB = (descripcion, completado = true) => {
    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    //console.log(index);

    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        guardarDB();
        console.log('Tarea Actualizada'.green);
        return true
    } else {
        console.log('TAREA NO ENCONTRADA'.red);
        return false;
    }
}

const borrarDB = (descripcion) => {
    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        //delete ListadoPorHacer[index];
        ListadoPorHacer.splice(index, 1)
        guardarDB();
        console.log(`Tarea : ${descripcion} BORRADA CORRECTAMENTE`.green);
        return true
    } else {
        console.log('TAREA NO ENCONTRADA'.red);
        return false;
    }
}

const getListadoF = (completado) => {

    cargarDB();
    let nuevoListado = [];
    nuevoListado = ListadoPorHacer.filter(tarea => {
        return tarea.completado === completado
    })
    return nuevoListado;
}

module.exports = {
    crear,
    getListado,
    actualizarDB,
    borrarDB,
    getListadoF
}