# Atributos de las Etiquetas HTML 

# Atributos de las Etiquetas HTML

Las etiquetas HTML pueden tener atributos que proporcionan información adicional sobre el elemento. 

Algunos atributos comunes son: 
* <id>: Identificador único del elemento. 
* <class>: Clase del elemento, utilizada para aplicar estilos CSS. 
* <src>: Fuente de un archivo externo, comúnmente usado en <img>, <script>, y <iframe>. 
* <alt>: Texto alternativo para imágenes, utilizado en <img>. 

``` html
<img 
src="https://www.example.com/imagen.jpg"  
alt="Descripción de la imagen"  
title="Título de la Imagen"  
id="imagen-ejemplo"  
class="clase-imagen"  
/> 
```

## Atributos Globales 

Los atributos globales pueden ser utilizados con cualquier elemento HTML para proporcionar información adicional o mejorar la funcionalidad. 

### Style

* style: Aplica estilos CSS directamente al elemento. 

Ejemplo:

``` html
<p style="color: red;">Texto en rojo</p> 
```

### Title

* title: Proporciona información adicional que se muestra como una herramienta de información emergente. 

Ejemplo:

``` html
<abbr title="HyperText Markup Language">HTML</abbr> 
```

### Lang

* lang: Especifica el idioma del contenido del elemento. 

Ejemplo:

``` html
<p lang="es">Texto en español</p> 
```

## Atributos Específicos 

Algunos atributos son específicos de ciertos elementos y proporcionan funcionalidades adicionales. 

### href

* <href> (para <a> y <link>): Especifica la URL de destino. 

Ejemplo: 

``` html
<a href="https://www.example.com">Visita nuestro sitio web</a> 
```

* type (para <input> y <button>): Define el tipo de entrada o botón. 

Ejemplo:

``` html
<input type="text" name="nombre"> 
```

## Atributos de Eventos 

Los atributos de eventos permiten que los elementos HTML respondan a acciones del usuario, activando scripts JavaScript. 

* onclick: Ejecuta un script cuando se hace clic en el elemento. 

``` html
<button onclick="alert('Botón clickeado')">Haz clic aquí</button> 
```

* onmouseover: Ejecuta un script cuando el puntero del mouse se coloca sobre el elemento. 

Ejemplo:

``` html
<div onmouseover="cambiarColor(this)">Pasa el mouse sobre este texto</div> 
```

* onchange: Ejecuta un script cuando el valor de un elemento de formulario cambia. 

Ejemplo: 

``` html
<input type="text" onchange="validarTexto(this)">
```