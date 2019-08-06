
$( document ).ready( function(){
  generarPaleta();
  generarGrilla()
});  


var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paletaColores = document.getElementById("paleta");

var grillaPixels = document.getElementById("grilla-pixeles");

var mouseApretado = false;

var colorPersonalizado = document.getElementById('color-personalizado');

var indicadorDeColor = document.getElementById("indicador-de-color");


// Genera la Paleta
function generarPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = nombreColores[i];
    var nuevoColor = document.createElement("div");
    nuevoColor.style.backgroundColor = color;    
    nuevoColor.classList.add("color-paleta");
    paletaColores.appendChild(nuevoColor);
  }
}

// Genera la Grilla
function generarGrilla() {
  for (var i = 0; i < 1751; i++) {
    var pixel = document.createElement("div");
    grillaPixels.appendChild(pixel);
  }  
}

// Cambiar Color usando la Rueda
colorPersonalizado.addEventListener('change', 
  (function() {
    var colorActual = colorPersonalizado.value;
    return indicadorDeColor.style.backgroundColor= colorActual;
  })
);

// Cambiar Color
paletaColores.addEventListener('click', 
  (function(e) {
    var colorElegido = e.target.style.backgroundColor;
    return indicadorDeColor.style.backgroundColor= colorElegido;
  })
 );

// Detecta si el Mouse esta apretado
document.addEventListener("mousedown",(function() {
  return mouseApretado = true;
  })
);

document.addEventListener("mouseup",(function() {
  return mouseApretado = false;
  })
);

// Pinta mintras este apretado el mouse
grillaPixels.addEventListener("mouseover", 
  (function(e) {
    if (mouseApretado) {
      return e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    }
  })
 );

 // Pintar pixeles de la Grilla
 grillaPixels.addEventListener("click", 
  (function(e) {
    return e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  })
 );

// Borra toda la Grilla
$("#borrar").click( function() {
  var $grilla = $("#grilla-pixeles")
  $grilla.children().animate({"background-color": "#fffff"}, 1200);

  }
);

// Guarda la imagen
$("#guardar").click(function () {
  guardarPixelArt();
  alert("¡Dibujo Guardado!");
});


// Carga los Superheroes

$("#batman").click(function (){
  cargarSuperheroe(batman);
});

$("#wonder").click(function (){
  cargarSuperheroe(wonder);
});

$("#flash").click(function (){
  cargarSuperheroe(flash);
});

$("#invisible").click(function (){
  cargarSuperheroe(invisible);
});

