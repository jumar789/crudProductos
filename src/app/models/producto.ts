export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    presentacion: string;
    precio: number;
    tiempo: string;

    constructor(nombre: string, categoria: string, presentacion: string, precio: number, tiempo: string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.presentacion = presentacion;
        this.precio = precio;
        this.tiempo = tiempo;
    }
}