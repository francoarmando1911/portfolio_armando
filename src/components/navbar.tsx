"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold">
                    Franco Armando - Portfolio
                </Link>

                <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                <div className="hidden space-x-4 md:flex">
                    <Link href="#sobre-mi" className="text-sm font-medium transition-colors hover:text-primary">
                        Sobre mí
                    </Link>
                    <Link href="#tecnologias" className="text-sm font-medium transition-colors hover:text-primary">
                        Tecnologías
                    </Link>
                    <Link href="#proyectos" className="text-sm font-medium transition-colors hover:text-primary">
                        Proyectos
                    </Link>
                    <Link href="#educacion" className="text-sm font-medium transition-colors hover:text-primary">
                        Educación
                    </Link>
                    <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
                        Contacto
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="container mx-auto px-4 pb-4 md:hidden">
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="#sobre-mi"
                            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={toggleMenu}
                        >
                            Sobre mí
                        </Link>
                        <Link
                            href="#tecnologias"
                            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={toggleMenu}
                        >
                            Tecnologías
                        </Link>
                        <Link
                            href="#proyectos"
                            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={toggleMenu}
                        >
                            Proyectos
                        </Link>
                        <Link
                            href="#educacion"
                            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={toggleMenu}
                        >
                            Educación
                        </Link>
                        <Link
                            href="#contacto"
                            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            onClick={toggleMenu}
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

