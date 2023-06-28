const styles = `
.dropdown-menu.animate .dropdown-item {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.dropdown-menu.animate.show .dropdown-item {
  opacity: 1;
  transform: translateY(0);
}

.carousel-item h6,
.carousel-item p {
  opacity: 0;
  animation: fadeInUp 1s ease-in-out;
  animation-fill-mode: forwards;
}

.carousel-item.active h6,
.carousel-item.active p {
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.shoe-container {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.shoe-container img {
  transition: transform 0.3s ease;
}

.shoe-container:hover img {
  transform: scale(1.1);
}

.shoe-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: bold;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.shoe-container:hover .shoe-name {
  transform: translateY(0);
}
`;

// Obtén el elemento <head> del documento
const head = document.head || document.getElementsByTagName('head')[0];

// Crea una etiqueta <style> y establece el contenido de los estilos
const style = document.createElement('style');
style.appendChild(document.createTextNode(styles));

// Agrega la etiqueta <style> al elemento <head>
head.appendChild(style);

$(document).ready(function () {
  var myCarousel = document.getElementById('myCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 8000, // Cambiar cada 15 segundos
    wrap: true // Repetir al final del carrusel
  });
});


// Animación del footer
$(document).ready(function () {
  $('.footer').hide().fadeIn(1000);
});

// Expresiones regulares para verificar el formato del correo electrónico y del RUT
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

// Captura el evento de envío del formulario
$('#subscriptionForm').submit(function (event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente

  // Obtiene los valores de los campos del formulario
  const nombre = $('#subscriptionForm input[name="nombre"]').val();
  const apellidoPaterno = $('#subscriptionForm input[name="apellidoPaterno"]').val();
  const apellidoMaterno = $('#subscriptionForm input[name="apellidoMaterno"]').val();
  const rut = $('#subscriptionForm input[name="rut"]').val();
  const fechaNacimiento = $('#subscriptionForm input[name="fechaNacimiento"]').val();
  const correoElectronico = $('#subscriptionForm input[name="correoElectronico"]').val();
  const comentarios = $('#subscriptionForm textarea[name="comentarios"]').val();

  // Verifica el formato del correo electrónico y del RUT
  if (!emailRegex.test(correoElectronico)) {
    alert('El correo electrónico ingresado no es válido.');
    return;
  }

  if (!rutRegex.test(rut)) {
    alert('El número de documento (RUT) ingresado no es válido.');
    return;
  }

 

  // Restablece el formulario
  $('#subscriptionForm')[0].reset();

  alert('¡Gracias por suscribirte!');
});

$(document).ready(function () {
  // Aplicar estilos al contenedor del formulario
  $(".form-container").css({
    "border": "2px solid #ccc",
    "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "padding": "20px"
  });
});


$(document).ready(function () {
  // Filtro por colores
  $('#filter-color').on('change', function () {
    var selectedColor = $(this).val();
    $('.shoe-container').hide();
    $('.shoe-container[data-color="' + selectedColor + '"]').show();
  });

  // Filtro por nombre
  $('#filter-name').on('keyup', function () {
    var searchTerm = $(this).val().toLowerCase();
    $('.shoe-container').hide();
    $('.shoe-container:contains("' + searchTerm + '")').show();
  });
});






// Obtener los elementos del DOM
const filterColorSelect = document.getElementById('filter-color');
const filterNameInput = document.getElementById('filter-name');
const shoeList = document.getElementById('shoe-list');

// Manejar eventos de cambio en los filtros
filterColorSelect.addEventListener('change', filterShoes);
filterNameInput.addEventListener('input', filterShoes);

// Función para filtrar y mostrar los contenedores de zapatillas
function filterShoes() {
  const selectedColor = filterColorSelect.value.toLowerCase();
  const filterName = filterNameInput.value.toLowerCase();

  Array.from(shoeList.children)
    .sort((a, b) => a.querySelector('.shoe-name').textContent.localeCompare(b.querySelector('.shoe-name').textContent))
    .forEach(shoeContainer => {
      const shoeColor = shoeContainer.dataset.color.toLowerCase();
      const shoeName = shoeContainer.querySelector('.shoe-name').textContent.toLowerCase();
      const isVisible = (selectedColor === '' || shoeColor === selectedColor) && shoeName.includes(filterName);
      shoeContainer.style.display = isVisible ? 'block' : 'none';
    });
}


function initMap() {
  var mapOptions = {
    center: { lat: -34.397, lng: 150.644 }, // Coordenadas iniciales del mapa
    zoom: 8 // Nivel de zoom inicial del mapa
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Llama a la función initMap una vez que se haya cargado la API de Google Maps
google.maps.event.addDomListener(window, 'load', initMap);







