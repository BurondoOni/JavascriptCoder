class Usuario1 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrar() {
        alert("Hola " + "" + this.nombre)
    }
}


let usuario1 = new Usuario1(
    prompt("Ingrese nombre"),
    prompt("Ingrese edad")
);
console.log(usuario1.mostrar());

/*const usuario1 = new Usuario("Lucas","777")
console.log(usuario1)

const usuario2 = new Usuario("Homero", "888")
console.log(usuario2)*/