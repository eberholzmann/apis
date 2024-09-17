//elemento del DOM donde se muestran los tragos
const contenedorTragos = document.getElementById('contenedorTragos');

//buscar los datos de la api
async function obtenerTragos() {
    try {
        const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        const datos = await respuesta.json();

        //La api tiene una llave drink y adentro el array de tragos
        mostrarTragos(datos.drinks);
    } catch (error) {
        console.error('Error al obtener los Tragos:', error);
    }
}

function mostrarTragos(tragos) {
    tragos.forEach(trago => {
        const tarjetaTrago = document.createElement('div');
        tarjetaTrago.classList.add('tarjeta_Trago');

        // Usa la primera imagen del trago 
        const imagenTrago = trago.strDrinkThumb;

        tarjetaTrago.innerHTML = `
            <img src="${imagenTrago}" alt="${trago.strDrink}" class="imagenTrago">
            <div class="informacionTrago">
                <h2>${trago.strDrink} (${trago.idDrink})</h2>
                <p><strong>Categoría:</strong> ${trago.strCategory}</p>
                <p>${trago.strInstructions}</p>
            </div>
        `;

        contenedorTragos.appendChild(tarjetaTrago);
    });
}

//llamada para obtener los tragos al cargar la pagina
obtenerTragos();
