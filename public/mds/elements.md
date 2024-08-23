# Elementos HTML más comunes

# Elementos HTML más comunes

## Encabezados

Los encabezados se utilizan para definir títulos y subtítulos de diferentes niveles de importancia. HTML proporciona seis niveles de encabezados, desde <h1> (el más importante) hasta <h6> (el menos 
importante). 

Ejemplos: 

``` html
<h1>Encabezado de Nivel 1</h1> 
<h2>Encabezado de Nivel 2</h2> 
<h3>Encabezado de Nivel 3</h3> 
<h4>Encabezado de Nivel 4</h4> 
<h5>Encabezado de Nivel 5</h5> 
<h6>Encabezado de Nivel 6</h6> 
```

## Párrafos 

El elemento <p> se utiliza para definir párrafos de texto. Es un contenedor de bloque que se utiliza para agrupar contenido textual. 

Ejemplo: 

``` html
<p>Este es un párrafo de texto. HTML es muy útil para estructurar documentos web.</p>
```

## Etiquetas de quiebre 

Los elementos <br /> y <hr /> son elementos de quiebre en HTML que se utilizan para controlar la disposición del contenido en una página web. 

### br (Break Line) 
El elemento <br /> se utiliza para insertar un salto de línea en el texto. Esto es útil cuando se desea que el contenido continúe en una nueva línea sin comenzar un nuevo párrafo. 

La sintaxis de <br /> es simple y no requiere una etiqueta de cierre.

Ejemplo:

``` html
Línea 1<br />  
Línea 2<br /> 
Línea 3<br /> 
```

### hr (Horizontal Rule) 
El elemento <hr /> se utiliza para insertar una regla horizontal en la página. Esto se usa típicamente para separar secciones de contenido visualmente. 

La sintaxis de <hr /> es también simple y no requiere una etiqueta de cierre. 

Ejemplo:

``` html
<hr /> 
<h1>Introducción</h1>  
<p>Párrafo 1</p> <hr />  
<h2>Desarrollo</h2> 
<p>Párrafo 2</p> <hr />  
<h3>Conclusión</h3>  
<p>Párrafo 3 </p> 
```

## Enlaces 

El elemento <a> se utiliza para crear hipervínculos, permitiendo la navegación entre diferentes páginas web o secciones de una misma página. El atributo href especifica la URL de destino. 

Ejemplo: 

``` html
<a href="https://www.example.com">Visita nuestro sitio web</a>
```

## Imágenes 

El elemento <img> se utiliza para insertar imágenes en una página web. Los atributos src y alt son 
esenciales; src especifica la URL de la imagen, y alt proporciona una descripción alternativa. 

Ejemplo: 

``` html
<img src="https://www.example.com/imagen.jpg" alt="Descripción de la imagen"> 
```

## Listas 

HTML admite listas ordenadas (<ol>) y no ordenadas (<ul>), con elementos de lista (<li>) para definir cada ítem. 

### Lista no ordenada:               

Ejemplo: 

``` html
<ul> 
<li>Elemento 1</li> 
<li>Elemento 2</li> 
<li>Elemento 3</li> 
</ul>
``` 

### Lista ordenada: 

Ejemplo:

``` html
<ol> 
<li>Primero</li> 
<li>Segundo</li> 
<li>Tercero</li> 
</ol> 
```

## Tablas 

Las tablas se crean utilizando una combinación de elementos como <table>, <tr>, <td>, y <th>. 

Ejemplo: 

``` html
<table> 
<tr> 
<th>Encabezado 1</th> 
<th>Encabezado 2</th> 
</tr> 
<tr> 
<td>Dato 1</td> 
<td>Dato 2</td> 
</tr> 
<tr> 
<td>Dato 3</td> 
<td>Dato 4</td> 
</tr> 
</table> 
```

## Formularios 

Los formularios permiten la interacción del usuario y la captura de datos. Se utilizan elementos como <form>, <input>, <textarea>, <button>, y <select>. 

Ejemplo: 

``` html
<form action="/submit" method="post"> 
<label for="nombre">Nombre:</label> 
<input type="text" id="nombre" name="nombre" required> 
<label for="email">Email:</label> 
<input type="email" id="email" name="email" required> 
<button type="submit">Enviar</button> 
</form>
```
 
## Divisiones y Secciones 

Los elementos <div> y <section> se utilizan para agrupar y estructurar contenido. Mientras que <div> es un contenedor genérico, <section> tiene un significado semántico específico. 

Ejemplo: 

``` html
<div> 
<div class="contenedor"> 
<p>Contenido dentro de un div.</p> 
</div> 
<section> 
<section> 
<h2>Sección de Contenido</h2> 
<p>Texto dentro de una sección.</p> 
</section>
```
