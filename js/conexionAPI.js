//npx json-server --watch db.json --port 3001
async function listarProductos() {
    const conexion = await fetch("https://render-alurageekapi.onrender.com/productos");
    const conexionConvertida = await conexion.json();

    // console.log(conexion);
    // console.log(conexionConvertida);
    return  conexionConvertida;
}

async function enviarProducto(titulo,descripcion,imagen,precio){

    const conexion= await fetch("https://render-alurageekapi.onrender.com/productos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                titulo:titulo,
                descripcion:descripcion,
                imagen:imagen,
                precio:`S/.${precio}`
            })
    });

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) { 
    const conexion = await fetch(`https://render-alurageekapi.onrender.com/productos/${id}`, 
    { method: "DELETE" }); 
    if (!conexion.ok) { 
        throw new Error("No se pudo eliminar el producto"); 
    } } 
   

export const conexionAPI = {  
    listarProductos,enviarProducto, eliminarProducto }

    