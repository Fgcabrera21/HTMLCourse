# Anexo 

# Anexo

La siguiente página web es un sitio de ejemplo que sigue buenas prácticas de HTML para demostrar cómo estructurar y presentar contenido de manera efectiva. La página está dividida en varias secciones: un encabezado, un área principal con varias subsecciones y un pie de página. Incluye navegación, contenido informativo y un formulario de contacto. 

## Secciones Principales 

### Encabezado (header) 

Contiene el título del sitio web y una barra de navegación. Implementa una lista no ordenada (<ul>) para los enlaces de navegación, lo que es una práctica estándar para menús de navegación. 

### Contenido Principal (main) 

Está dividido en tres secciones principales: "Inicio", "Sobre Nosotros" y "Contacto". Cada sección está claramente definida con etiquetas <section>, mejorando la semántica y accesibilidad. 

### Pie de Página (footer) 

Contiene un mensaje de derechos reservados. 

## Buenas Prácticas Implementadas 

### Uso de Metadatos en head 

* Define el conjunto de caracteres como UTF-8. 

* Configura la vista para que sea responsiva utilizando la etiqueta <meta name="viewport">. 

* Incluye metadatos para SEO con etiquetas <meta name="description"> y <meta name="keywords">. 

### Estructura Semántica 

* Uso de etiquetas semánticas como <header>, <nav>, <main>, <section>, <article> y <footer> para definir claramente las diferentes partes de la página. 

* Mejora la accesibilidad y la optimización en motores de búsqueda. 

## Accesibilidad 

* Etiquetas <label> asociadas a los campos de formulario para mejorar la accesibilidad. 

* Atributos required en los campos de formulario para asegurar que se llenen antes de enviar. 

## SEO 

* Uso adecuado de encabezados (<h1>, <h2>, <h3>) para estructurar el contenido. 

* Títulos descriptivos y atributos title en los enlaces para proporcionar información adicional a los usuarios y motores de búsqueda. 

## Formularios 

Implementa un formulario de contacto con campos de entrada bien definidos (<input>, <textarea>) y un botón de envío (<button>). 

# Código 

```html
<!DOCTYPE html> 
<html lang="es"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Mi Sitio Web</title> 
    <meta name="description" content="Este es un ejemplo de un sitio web siguiendo buenas 
prácticas de HTML."> 
    <meta name="keywords" content="HTML, CSS, buenas prácticas"> 
</head> 
<body> 
    <header> 
        <h1>Mi Sitio Web</h1> 
        <nav> 
            <ul> 
                <li><a href="#inicio" title="Ir al Inicio">Inicio</a></li> 
                <li><a href="#about" title="Saber más Sobre Nosotros">Sobre Nosotros</a></li> 
                <li><a href="#contacto" title="Ponte en Contacto con Nosotros">Contacto</a></li> 
            </ul> 
        </nav> 
    </header> 
    <main> 
        <section id="inicio"> 
            <h2>Bienvenido</h2> 
            <p>Bienvenido a mi sitio web. Aquí encontrarás información sobre HTML, CSS y buenas 
prácticas de desarrollo web.</p> 
        </section> 
        <section id="about"> 
            <h2>Sobre Nosotros</h2> 
            <article> 
                <h3>Nuestra Historia</h3> 
                <p>Nos dedicamos al desarrollo web desde 2020, proporcionando soluciones 
innovadoras y eficientes.</p> 
            </article> 
            <article> 
                <h3>Nuestro Equipo</h3> 
                <p>Contamos con un equipo de profesionales apasionados por la tecnología y el 
desarrollo web.</p> 
            </article> 
        </section> 
        <section id="contacto"> 
            <h2>Contacto</h2> 
            <form action="/submit" method="post"> 
                <label for="nombre">Nombre:</label> 
                <input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre" 
required> 
                 
                <label for="correo">Correo Electrónico:</label> 
                <input type="email" id="correo" name="correo" placeholder="correo@ejemplo.com" 
required> 
                 
                <label for="mensaje">Mensaje:</label> 
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea> 
                 
                <button type="submit">Enviar</button> 
            </form> 
        </section> 
    </main> 
    <footer> 
        <p>Derechos reservados &copy; 2024 Mi Sitio Web</p> 
    </footer> 
</body> 
</html>
```