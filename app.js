// mapa
document.addEventListener('DOMContentLoaded', function () {
    // Crear el mapa y establecer la vista inicial
    var map = L.map('map').setView([40.416775, -3.703790], 5); // Coordenadas centradas en España con un zoom inicial de 5
  
    // Añadir un mapa base desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Función para agregar un marcador con información sobre la gira
    function addTourLocation(lat, lng, title, description) {
        var marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${title}</b><br>${description}`);
    }
  
    // Agregar marcadores de ejemplo
    addTourLocation(40.416775, -3.703790, 'Madrid', 'Gira en Madrid: 1 de Octubre 2024');
    addTourLocation(41.385064, 2.173404, 'Barcelona', 'Gira en Barcelona: 5 de Octubre 2024');
    addTourLocation(48.856613, 2.352222, 'París', 'Gira en París: 10 de Octubre 2024');
  });

  document.addEventListener('DOMContentLoaded', function () {
    console.log("hola mundo");
})