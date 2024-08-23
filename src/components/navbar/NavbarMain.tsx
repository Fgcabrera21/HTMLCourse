"use client";
import classNames from 'classnames';
import { Avatar, Button, Dropdown, Navbar, useThemeMode } from 'flowbite-react';
import Image from 'next/image';

import React from 'react';
import { useEffect } from 'react';

const NavbarMain = () => {
    const { computedMode, setMode, mode } = useThemeMode();
    useEffect(() => {
        if (computedMode === "dark") {
            document.documentElement.style.colorScheme = "dark"
        } else {
            document.documentElement.style.colorScheme = "light"
        }
    }, [computedMode])
    return <div className="fixed top-0 w-full z-50 mx-auto border-b border-gray-100 dark:border-gray-700">
        <Navbar fluid rounded>
            <Navbar.Brand href="https://atenea.uno/">
                <Image
                    width={50}
                    height={50}
                    src={computedMode === "dark" ? "/html-white.svg" : "/html.svg"}
                    className="mr-3 h-6 sm:h-12"
                    alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HTML Course</span>
            </Navbar.Brand>

            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        computedMode === "dark" ? (<span className="icon-[ph--moon-fill] text-lg"></span>)
                            : (<span className="icon-[bxs--sun] text-lg"></span>)

                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Theme Mode</span>
                    </Dropdown.Header>
                    <Dropdown.Item
                        className={classNames({
                            'dark:bg-gray-600': mode === 'dark'
                        })}
                        onClick={() => {
                            setMode('dark');
                        }}>
                        Dark Mode
                    </Dropdown.Item>
                    <Dropdown.Item
                        className={classNames({
                            'bg-gray-100': mode === 'light'
                        })}
                        onClick={() => {
                            setMode('light');
                        }}>
                        Light Mode
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        className={classNames({
                            'bg-gray-100 dark:bg-gray-600': mode === 'auto'
                        })}
                        onClick={() => {
                            setMode('auto');
                        }}>
                        System
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/">Página principal</Navbar.Link>
                <Navbar.Link href="/docs/intro" active>
                    HTML Course
                </Navbar.Link>
                <Navbar.Link href="#">CSS Course</Navbar.Link>
                <Navbar.Link href="#">JavaScript Course</Navbar.Link>
                <Navbar.Link href="#">Editor de Código</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </div>;

}

export default NavbarMain;

