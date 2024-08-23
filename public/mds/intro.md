# Introducción a HTML

# Introducción a HTML

## ¿Qué es HTML?

HTML, siglas de HyperText Markup Language, es el lenguaje estándar utilizado para crear y diseñar 
páginas web. Fue desarrollado inicialmente por Tim Berners-Lee en 1991. HTML define la estructura y el 
contenido de una página web mediante el uso de elementos y atributos, que son interpretados por los 
navegadores para presentar información de manera visual.

## Historia de HTML

La evolución de HTML ha sido marcada por varias versiones significativas: 
* HTML 1.0 (1993): La primera versión pública de HTML, creada por Tim Berners-Lee. Permitía la 
creación de documentos con texto, enlaces y encabezados simples. 
* HTML 2.0 (1995): Estandarizado por el IETF (Internet Engineering Task Force), esta versión 
mejoró las capacidades de HTML, incluyendo formularios y tablas básicas. 
* HTML 3.2 (1997): Introducido por el W3C (World Wide Web Consortium), esta versión añadió 
soporte para tablas avanzadas, applets de Java y estilos de texto. 
* HTML 4.01 (1999): Una versión clave que introdujo mejoras en la semántica y la accesibilidad. 
Incluyó tres versiones: Strict, Transitional y Frameset. 
* XHTML 1.0 (2000): Una reformulación de HTML 4.01 utilizando XML (Extensible Markup 
Language), lo que impuso reglas más estrictas de sintaxis. 
* HTML5 (2014): La versión más reciente y ampliamente utilizada. Introdujo nuevos elementos, 
atributos y comportamientos, mejorando el soporte multimedia y la interoperabilidad.

## Estructura de un Documento HTML

Un documento HTML se estructura mediante una serie de elementos anidados que definen la 
disposición y el contenido de la página web. La estructura básica de un documento HTML es la siguiente: 

### Declaración del DOCTYPE

La declaración del DOCTYPE es una instrucción especial que indica al navegador la versión de HTML que 
se está utilizando. Es esencial para asegurar que el documento se renderice correctamente. La 
declaración DOCTYPE para HTML5 es:

``` html
 <!DOCTYPE html>
```

### Elemento html

El elemento *<html>* es el contenedor raíz de todo el documento HTML. Debe incluir el atributo lang para 
especificar el idioma del contenido del documento. Por ejemplo:

``` html
 <html lang="es">
```

### Elemento head

El elemento *<head>* contiene metadatos, enlaces a hojas de estilo, scripts y el título del documento. Los 
metadatos no son visibles directamente en la página, pero proporcionan información importante sobre 
el documento. Un ejemplo de contenido del *<head>* es: 

``` html
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Título del Documento</title> 
  <link rel="stylesheet" href="styles.css"> 
  <script src="script.js"></script> 
 </head>
```

## Conclusión
HTML (HyperText Markup Language) es el lenguaje fundamental para la creación y estructuración de páginas web. Desde su desarrollo inicial por Tim Berners-Lee en 1991, HTML ha evolucionado significativamente para satisfacer las necesidades cambiantes de la web. Cada versión ha introducido mejoras y nuevas funcionalidades, permitiendo una mayor flexibilidad y capacidad para crear sitios web complejos y funcionales.

La estructura básica de un documento HTML incluye elementos clave como *<!DOCTYPE html>*, *<html>*, *<head>*, y *<body>*. La declaración DOCTYPE asegura la correcta interpretación del documento por el navegador, mientras que el elemento <html> sirve como contenedor principal. El *<head>* contiene metadatos cruciales para el funcionamiento del sitio, como la codificación de caracteres y enlaces a hojas de estilo y scripts.

Con el avance hacia HTML5, se han añadido numerosos elementos y atributos nuevos que mejoran la semántica, accesibilidad y capacidad multimedia de las páginas web. Esto ha facilitado la creación de sitios más interactivos y multimedia, que se adaptan a diferentes dispositivos y necesidades