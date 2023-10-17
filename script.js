listaTicket = document.getElementById("listaTicket");
campoArticulo = document.getElementById("articulo");
campoPrecio = document.getElementById("precio");
total = 0;

function agregar() {
    nuevoItem = document.createElement("li");
    nuevoItem.classList.add("agregarATicket");
    articulo = document.createElement('p');
    precio = document.createElement('p');
    articuloInput = document.getElementById("articulo").value;
    precioInput = parseFloat(document.getElementById("precio").value);

    articulo.innerText = articuloInput;
    precio.innerText = '$' + precioInput.toFixed(2);

    nuevoItem.append(articulo);
    nuevoItem.append(precio);

    listaTicket.append(nuevoItem);

    total += precioInput;
    limpiarCampos();
    mostrarTotal();
}

function mostrarTotal() {
    totalElement = document.getElementById("total");
    totalElement.innerText = "TOTAL: $" + total.toFixed(2);
}

function limpiarCampos(){
    campoArticulo.value = "";
    campoPrecio.value = "";
}