//interface
interface CamisaBase{
    setColor(color);
    getColor();
}

function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de:" +logo);
        }
    }
}

// Clase (molde del objeto)
@estampar("Gucci")
class Camiseta implements CamisaBase{
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
    public getColor(){
        return this.color;
    }
}

// clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(cap:boolean){
        this.capucha = cap;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camisa = new Camiseta("sdas","sdas","sadf","sdasd",12);
console.log(camisa);

var sudadera_nike = new Sudadera("sdas","sdas","sadf","sdasd",12);

console.log(sudadera_nike,sudadera_nike.setCapucha(true));

