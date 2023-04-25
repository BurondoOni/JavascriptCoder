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


const listaProductos = [{ id: 1, producto: "Whiskey", precio: 2500 },
    { id: 2, producto: "Gin", precio: 3400 },
    { id: 3, producto: "Vodka", precio: 2300 }
];
class producto {
    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }
    informarProducto() {
        console.log("El producto elegido es " + this.marca + "Precio: " + this.precio);
    }
}
const producto1 = new producto("Whiskey ", 2500);
const producto2 = new producto("Gin ", 3500);
const producto3 = new producto("Vodka ", 2300);
producto1.informarProducto();
console.log(producto1);
producto2.informarProducto();
console.log(producto2);
producto3.informarProducto();
console.log(producto3);

//Interacción con el usuario//

let bebidas = prompt("Escriba // ver // para ver los productos y sus precios");
if (bebidas == "ver") {
    console.log("Productos")
    for (let i = 0; i < listaProductos.length; i++) {
        console.log(listaProductos[i]);
    }
} else {
    alert("Error");
}

//Suma de los productos elegidos.
alert("Elija los productos");

function suma() {
    precioTotal = listaProductos[parseInt(prompt("Elija un producto // 0: Whiskey - 1: Gin - 2: Vodka"))].precio + listaProductos[parseInt(prompt("Elija otro producto // 0: Whiskey - 1: Gin - 2: Vodka"))].precio + listaProductos[parseInt(prompt("Elija el último producto// 0: Whiskey - 1: Gin - 2: Vodka"))].precio;
    alert("El precio sin iva de los productos elegidos es: $" + precioTotal);
}
suma();

function calcularTotalcIva() {
    totalCIva = precioTotal * 1.21;
    alert("El precio total a pagar con Iva incluído es:" + " " + totalCIva);
}
calcularTotalcIva();