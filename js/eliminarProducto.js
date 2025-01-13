import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

async function eliminarProducto(evento) {
    if (evento.target.classList.contains("delete-btn")) {
        const id = evento.target.getAttribute("data-id");
        console.log("ID a eliminar:", id); 

        if (!id) {
            console.error("ID no válido:", id);
            alert("No se encontró el ID del producto. Por favor, intenta nuevamente.");
            return;
        }

        // Mostrar el mensaje de confirmación
        const productTitle = evento.target.closest('.product-card').querySelector('h2').innerText;
        const isConfirmed = window.confirm(`¿Estás seguro de eliminar el producto: ${productTitle}?`);

        if (isConfirmed) {
            try {
                const response = await conexionAPI.eliminarProducto(id);
                console.log("Respuesta del servidor al eliminar:", response);
                evento.target.closest(".product-card").remove();
                alert("Producto eliminado con éxito");
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
                alert("Hubo un error al eliminar el producto. Por favor, intenta nuevamente más tarde.");
            }
        } else {
            console.log("Eliminación cancelada");
        }
    }
}

lista.addEventListener("click", eliminarProducto);
