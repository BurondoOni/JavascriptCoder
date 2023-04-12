function Usuario (nombre,contrasena){
    //propiedad =parametro
    this.nombre = nombre;
    this.contrasena = contrasena;
}
const usuario1 = new Usuario("Lucas","777")
console.log(usuario1)

const usuario2 = new Usuario("Homero", "888")
console.log(usuario2)