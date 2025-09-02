// Clase (molde del objeto)
class Camiseta{
// Propiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

// Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color: string){
        this.color = color;
    }
    public getcolor(){
        return this.color;
    }
}


