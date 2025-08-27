var bicicleta = {
    color:'rojo',
    modelo:'BMX',
    frenos:'De disco',
    velocidadMaxima:'60km',
    cambiaColor: function(new_color){
        // bicicleta.color = new_color
        this.color = new_color
        console.log(this);
    }
};
bicicleta.cambiaColor("azul")