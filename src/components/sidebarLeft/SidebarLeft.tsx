"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { SidebarTheme } from "../themes/SidebarTheme";
import Link from "next/link";

export function SidebarLeft() {
    return (
        <>
            <p className="text-base font-bold uppercase mx-8 mt-6">Guías y tutoriales:</p>
            <Sidebar theme={SidebarTheme} aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item as={Link} href="/docs/intro">
                            Intro
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/elements">
                            Elementos HTML comunes
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/attributes">
                            Atributos de las etiquetas HTML
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/newelements">
                            HTML5 y nuevos elementos
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/accessibility">
                            Accesibilidad en HTML
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/validation">
                            Validación y buenas prácticas en HTML
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/editors">
                            Herramientas y editores de HTML
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/integration">
                            Integración con CSS y JavaScript
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/seo">
                            SEO (Optimización para motores de búsqueda)
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/security">
                            Seguridad en HTML
                        </Sidebar.Item>                        
                        <Sidebar.Item as={Link} href="/docs/modernwebapp">
                            HTML en el contexto de Aplicaciones Web Modernas
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/glossary">
                            Glosario
                        </Sidebar.Item>
                        <Sidebar.Item as={Link} href="/docs/code">
                            Código de prueba
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    );
}
