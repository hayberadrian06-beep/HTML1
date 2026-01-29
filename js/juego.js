function seleccionarOpcion(opcion) {

   
    const opciones = ["piedra", "papel", "tijeras"];
    const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    var mensaje = "";


    if (opcion === jugadaMaquina) {
        mensaje = "Empate! ";
    } else if (
        (opcion === "piedra" && jugadaMaquina === "tijeras") ||
        (opcion === "papel" && jugadaMaquina === "piedra") ||   
        (opcion === "tijeras" && jugadaMaquina === "papel")

    ) {
        mensaje = "¡Ganaste! ";
    } else {
        mensaje = "¡Perdiste! ";
    }

    document.getElementById('resultado').innerHTML = mensaje  + "La máquina eligió: " + jugadaMaquina;

}