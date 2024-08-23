# HTML5 y Nuevos Elementos 

# Nuevos Elementos de HTML5

## Elementos Semánticos Nuevos 

HTML5 introdujo varios elementos semánticos que mejoran la estructura y la legibilidad del código, facilitando la comprensión tanto para los desarrolladores como para las máquinas. 

* <header>: Representa el encabezado de una sección o página, conteniendo típicamente el título, logo, y navegación. 

```html
<header> 
<h1>Título de la Página</h1> 
<nav> 
<ul> 
<li><a href="#home">Inicio</a></li> 
<li><a href="#about">Acerca de</a></li> 
<li><a href="#contact">Contacto</a></li> 
</ul> 
</nav> 
</header> 
```

* <footer>: Representa el pie de página de una sección o página, conteniendo típicamente información de contacto, derechos de autor, y enlaces secundarios. 

```html
<footer> 
<p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p> 
</footer> 
```

* <article>: Representa contenido independiente y autocontenido, como artículos de noticias, publicaciones de blog, comentarios, etc. 

```html
<article> 
<h2>Título del Artículo</h2> 
<p>Contenido del artículo.</p> 
</article> 
``` 

* <section>: Representa una sección de un documento, típicamente con un encabezado. 

```html
<section> 
<h2>Sección del Documento</h2> 
<p>Texto en la sección.</p> 
</section> 
``` 

* <nav>: Representa una sección de la navegación, conteniendo enlaces a otras partes del sitio web. 

```html
<nav> 
<ul> 
<li><a href="#home">Inicio</a></li> 
<li><a href="#about">Acerca de</a></li> 
<li><a href="#contact">Contacto</a></li> 
</ul> 
</nav> 
```

* <aside>: Representa contenido tangencialmente relacionado con el contenido principal, como barras laterales o bloques de anuncios. 

```html
<aside> 
<h2>Barra Lateral</h2> 
<p>Contenido de la barra lateral.</p> 
</aside> 
```

## Elementos Multimedia 

HTML5 mejoró significativamente el soporte para multimedia, haciendo más fácil la inclusión de audio y video en las páginas web. 

* <audio>: Permite la inclusión de contenido de audio. 

```html
<audio controls> 
<source src="audio.mp3" type="audio/mpeg"> 
Tu navegador no soporta el elemento de audio. 
</audio> 
```

* <video>: Permite la inclusión de contenido de video. 

```html
<video controls width="600"> 
<source src="video.mp4" type="video/mp4"> 
Tu navegador no soporta el elemento de video. 
</video> 
```

* <canvas>: Proporciona una superficie de dibujo bidimensional en la que se puede dibujar gráficos mediante scripts (normalmente JavaScript). 

```html
<canvas id="miCanvas" width="200" height="100"></canvas> 
```

## Formularios Mejorados 

HTML5 introdujo varias mejoras significativas en la creación y manejo de formularios web, incluyendo nuevos tipos de input y atributos. Estas mejoras hacen que los formularios sean más intuitivos, accesibles y fáciles de usar tanto para los desarrolladores como para los usuarios finales. A continuación, se detalla cada una de estas mejoras y cómo se utilizan. 

### Tipos de Input Nuevos 

* <input type="email"> 

Valida automáticamente la entrada para asegurarse de que es una dirección de correo electrónico válida. 

```html
<label for="correo">Correo Electrónico:</label> 
<input type="email" id="correo" name="correo"> 
```

* <input type="url"> 

Valida automáticamente la entrada para asegurarse de que es una URL válida. 

```html
<label for="sitio">Sitio Web:</label> 
<input type="url" id="sitio" name="sitio"> 
```

* <input type="number"> 

Permite la entrada de números, con opciones para definir un rango y paso. 

```html
<label for="edad">Edad:</label> 
<input type="number" id="edad" name="edad" min="1" max="120"> 
```

* <input type="range"> 

Proporciona una barra deslizante para seleccionar un valor dentro de un rango. 

```html
<label for="volumen">Volumen:</label> 
<input type="range" id="volumen" name="volumen" min="0" max="100"> 
```

* <input type="search"> 

Un campo de búsqueda que puede incluir características como el botón de limpiar. 

```html
<label for="busqueda">Buscar:</label> 
<input type="search" id="busqueda" name="busqueda"> 
```

* <input type="tel"> 

Permite la entrada de números de teléfono, sin validación específica de formato. 

```html
<label for="telefono">Teléfono:</label> 
<input type="tel" id="telefono" name="telefono">
```

* <input type="date"> 

Proporciona un selector de fecha. 

```html
<label for="fecha">Fecha de Nacimiento:</label> 
<input type="date" id="fecha" name="fecha">
```

* <input type="time"> 

Proporciona un selector de tiempo. 

```html
<label for="hora">Hora:</label> 
<input type="time" id="hora" name="hora"> 
```

* <input type="datetime-local"> 

Permite la selección de una fecha y hora local. 

```html
<label for="fechahora">Fecha y Hora:</label> 
<input type="datetime-local" id="fechahora" name="fechahora"> 
```

* <input type="month"> 

Permite la selección de un mes y año. 

```html
<label for="mes">Mes y Año:</label> 
<input type="month" id="mes" name="mes"> 
```

* <input type="week"> 

Permite la selección de una semana y año. 

```html
<label for="semana">Semana y Año:</label> 
<input type="week" id="semana" name="semana"> 
```

## Atributos Mejorados 

* placeholder 

Proporciona un texto sugerido que desaparece cuando el usuario comienza a escribir en el campo. 

```html
<label for="nombre">Nombre:</label> 
<input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre"> 
```

* required 

Indica que el campo es obligatorio. 

```html
<label for="correo">Correo Electrónico:</label> 
<input type="email" id="correo" name="correo" required> 
```

* autofocus 

Hace que el campo obtenga automáticamente el enfoque cuando la página se carga. 

```html
<label for="nombre">Nombre:</label> 
<input type="text" id="nombre" name="nombre" autofocus> 
```

* pattern 

Permite definir una expresión regular que el valor del campo debe cumplir. 

```html
<label for="codigo">Código Postal:</label> 
<input type="text" id="codigo" name="codigo" pattern="[0-9]{5}"> 
```

* autocomplete 

Indica si el navegador puede autocompletar el campo basado en valores previamente ingresados. 

```html
<label for="direccion">Dirección:</label> 
<input type="text" id="direccion" name="direccion" autocomplete="on"> 
```

* min, max, step 

Define los valores mínimo y máximo permitidos, y el intervalo de los pasos. 

```html
<label for="edad">Edad:</label> 
<input type="number" id="edad" name="edad" min="18" max="99" step="1"> 
```

## Nuevas Etiquetas de Formularios 

* <datalist> 

Proporciona una lista de opciones predefinidas para un campo <input>. 

```html
<label for="navegador">Elige un navegador:</label> 
<input list="navegadores" id="navegador" name="navegador"> 
<datalist id="navegadores"> 
<option value="Chrome"> 
<option value="Firefox"> 
<option value="Safari"> 
<option value="Edge"> 
</datalist> 
```

* <output> 

Representa el resultado de un cálculo o acción del usuario. 

```html
<form 
oninput="resultado.value=parseInt(a.value)+parseInt(b.value)"> 
<input type="range" id="a" value="50"> + <input 
type="number" id="b" value="50"> 
<output name="resultado" for="a b">100</output> 
</form> 
```

* <progress> 

Representa el progreso de una tarea. 

```html
<label for="progreso">Progreso:</label> 
<progress id="progreso" value="70" max="100"></progress> 
```

* <meter> 

Representa un valor escalar dentro de un rango conocido. 

```html
<label for="bateria">Batería:</label> 
<meter id="bateria" min="0" max="100" 
value="75">75%</meter> 
```