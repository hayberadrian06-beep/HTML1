var total = 0;
var numProductos = 0;

function addfila() {
    var tabla = document.getElementById("tblfactura").getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow(-1);
    console.log(tabla);
    var celda1 = fila.insertCell(0) ;
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);
    celda1.innerHTML = '<input width ="211px" type="text" id="producto' + numProductos + '" name="producto' + numProductos + '" class="form-control" />';
}