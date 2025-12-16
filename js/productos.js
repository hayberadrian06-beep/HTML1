
function cargarProductos() {
    var carga = new XMLHttpRequest();
    carga.open("GET", "productos.txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Productos").innerHTML="<option>seleccione un producto </option>"+getOpciones(this.responseText);
        }
    }
    carga.send();
}


function getOpciones(cadena) {
    var Opciones = "";
    var productos = cadena.split("\n");
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].split(":");
        Opciones += "<option value='"+producto[1]+"'>"+producto[0]+"</option>";
    }
    return Opciones;
}

function calcularPago() {
    var productoSeleccionado = document.getElementById("Productos").value;
    var cantidad = document.getElementById("cantidad").value;
    alert(productoSeleccionado);
    var pagoTotal = productoSeleccionado * cantidad;
    document.getElementById("resultado").innerText = "$" + pagoTotal.toFixed(2);
}
