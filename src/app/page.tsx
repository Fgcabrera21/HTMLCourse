
import { SidebarRight } from "@/components/sidebarRight/SidebarRight";
import { Button } from "flowbite-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex py-20">
        <div className="flex-1 py-4 px-14">
          <article className="prose lg:prose-base dark:prose-invert mx-auto max-w-none">
            <h1>¡Bienvenido al emocionante mundo del desarrollo web!</h1>

            <p>
              Te invitamos a sumergirte en nuestro curso de HTML, el lenguaje de marcado fundamental 
              que constituye la columna vertebral de la web moderna. HTML, o HyperText Markup Language, 
              es el lenguaje que te permitirá estructurar y presentar contenido en la web de manera 
              efectiva y accesible. Desde crear simples páginas estáticas hasta desarrollar aplicaciones 
              web complejas, HTML es la base sobre la cual se construyen todas las experiencias digitales.
            </p>
            <p>
              En este curso, descubrirás cómo utilizar HTML para definir el contenido de una página web, 
              estructurar texto, imágenes y enlaces, y trabajar con formularios y tablas. Aprenderás las 
              mejores prácticas y técnicas esenciales para construir páginas web bien organizadas y 
              semánticas. No importa si eres nuevo en el desarrollo web o si ya tienes algo de experiencia, 
              nuestro curso está diseñado para proporcionarte los conocimientos y habilidades necesarios 
              para dominar HTML y comenzar a crear contenido web impresionante.
            </p>
            <p>
              ¡Únete a nosotros y da el primer paso hacia la creación de páginas web increíbles con HTML!
            </p>

          </article>
        </div>
        <div className="border-l border-gray-100 dark:border-gray-700 h-[calc(100vh-70px)] sticky top-[54px]">
          {/* <SidebarRight markdown={data}/> */}
        </div>
      </div>

    </>
  );
}
