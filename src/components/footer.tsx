import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © {currentYear} Franco Armando. Todos los derechos reservados.
                    </p>
                    <nav className="flex gap-4 text-sm text-muted-foreground">
                        <Link href="#sobre-mi" className="hover:text-foreground">
                            Sobre mí
                        </Link>
                        <Link href="#proyectos" className="hover:text-foreground">
                            Proyectos
                        </Link>
                        <Link href="#contacto" className="hover:text-foreground">
                            Contacto
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

