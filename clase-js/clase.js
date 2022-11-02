class Estudiante {
    nombre = "Jazmin";
    asignaturas = ["Javascript", "HTML", "CSS"];

    obtenDatos() {
        return {
            nombre : this.nombre,
            asignaturas : this.asignaturas
        }
    }
}

let estudiante = new Estudiante()
console.log(estudiante.obtenDatos())