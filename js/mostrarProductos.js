import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(id, titulo, imagen, precio) {
    const producto = document.createElement("li");
    producto.className = "product-card";
    producto.innerHTML = `
        <a href="#" aria-label="Más información sobre ${titulo}">
                <img src="${imagen}">
        </a>
            <div class="product-card-h2">
                <h2>${titulo}</h2>
            </div>

            <div class="product-card-p-btn">
                <p>${precio}</p>
                    <button class="delete-btn" aria-label="Eliminar ${titulo}" data-id="${id}">🗑️</button>
             </div>
    `;
    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => {
        

        lista.appendChild(crearCard(producto.id, producto.titulo, producto.imagen, producto.precio));
    });
}

listarProductos();
