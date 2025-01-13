import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

// async function crearProducto(titulo, descripcion, imagen, precio) {

//     evento.preventDefault();

//     const titulo= document.querySelector("[data-titulo]").value;
//     const descripcion= document.querySelector("[data-descripcion]").value;
//     const imagen= document.querySelector("[data-imagen]").value;

//     //por revisar si se agrega decimales
//     // const precio= document.querySelector("[data-precio]").value;
//     const precio= (document.querySelector("[data-precio]").value);

//     await conexionAPI.enviarProducto(titulo,descripcion,imagen,precio);
//     //agregar un alert que diga envio conl exito
//     alert("Producto enviado con éxito");
 
// }

async function crearProducto(evento) {
    evento.preventDefault();

    try {
        const titulo = document.querySelector("[data-titulo]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
        const imagen = document.querySelector("[data-imagen]").value;
        //el precio se guarda como string
        const precio = parseFloat(document.querySelector("[data-precio]").value).toFixed(2);

        await conexionAPI.enviarProducto(titulo, descripcion, imagen, precio);
        alert("Producto enviado con éxito");
        window.location.reload();

    } catch (error) {
        console.error("Error al enviar el producto:", error);
        
    }
}


formulario.addEventListener("submit",evento =>crearProducto(evento)); 