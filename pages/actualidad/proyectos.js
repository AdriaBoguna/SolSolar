const proyectos = [
    { titulo: 'Unifamiliar', imagen: 'src/proyecto1.jpg', descripcion: 'Descripción del Proyecto Unifamiliar.' },
    { titulo: 'Edificio productor de ACS centralizado', imagen: 'src/proyecto2.jpg', descripcion: 'Descripción del Proyecto de edificio productor de ACS centralizado.' },
    { titulo: 'Edificio productor de ACS centralizado con calefacción', imagen: 'src/proyecto3.png', descripcion: 'Descripción del Proyecto de edificio productor de ACS centralizado con calefacción.' },
    // Añade aquí más proyectos según sea necesario
];

const projectContainer = document.getElementById('projectContainer');

for (const proyecto of proyectos) {
    projectContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${proyecto.titulo}</h5>
                    <p class="card-text">${proyecto.descripcion}</p>
                </div>
            </div>
        </div>
    `;
}