var proyectos = [
    { titulo: 'Calella', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto1.jpg' },
    { titulo: 'Título del Proyecto 2', descripcion: 'Descripción del Proyecto 2', imagen: 'src/proyecto2.jpg' },
    { titulo: 'Título del Proyecto 1', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto3.jpg' },
    { titulo: 'Balmes', descripcion: 'Descripción del Proyecto 2', imagen: 'src/proyecto4.jpg' },
    { titulo: 'Título del Proyecto 1', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto5.jpg' },
    { titulo: 'CanToda', descripcion: 'Descripción del Proyecto 2', imagen: 'src/proyecto6.jpg' },
    { titulo: 'Car de Sant Cugat', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto7.jpg' },
    { titulo: 'Codorniu', descripcion: 'Descripción del Proyecto 2', imagen: 'src/proyecto8.jpg' },
    { titulo: 'Sagrada Familia', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto9.jpg' },
    { titulo: 'Sants', descripcion: 'Descripción del Proyecto 2', imagen: 'src/proyecto10.jpg' },
    { titulo: 'Terrassa', descripcion: 'Descripción del Proyecto 1', imagen: 'src/proyecto11.jpg' },
];

var contenedorProyectos = document.getElementById('proyectos');

proyectos.forEach(function(proyecto, i) {
    var tarjetaProyecto = document.createElement('div');
    tarjetaProyecto.className = 'col-lg-3 col-md-6 mb-4';
    tarjetaProyecto.innerHTML = `
        <div class="card">
            <img src="${proyecto.imagen}" class="card-img-top" alt="Proyecto ${i+1}">
            <div class="card-body">
                <h5 class="card-title">${proyecto.titulo}</h5>
                <p class="card-text">${proyecto.descripcion}</p>
            </div>
        </div>
    `;

    contenedorProyectos.appendChild(tarjetaProyecto);
});
