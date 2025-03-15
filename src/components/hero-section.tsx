import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
    return (
        <section id="sobre-mi" className="py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="flex justify-center md:order-2">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
                        <Image src="/placeholder.svg?height=320&width=320" alt="Tu foto" fill className="object-cover" priority />
                    </div>
                </div>
                <div className="space-y-6 text-center md:order-1 md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Hola, soy <span className="text-primary">Franco Armando</span>
                    </h1>
                    <p className="text-xl text-muted-foreground md:text-2xl">Desarrollador Web Full Stack</p>
                    <p className="text-muted-foreground text-justify md:text-left">
                        Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN FRCU, con experiencia en
                        desarrollo web moderno y conocimientos en Programación Orientada a Objetos con Java.

                        Me especializo en tecnologías como JavaScript, React, TypeScript, TailwindCSS y Next.js,
                        siempre en busca de soluciones innovadoras. Me considero una persona comprometida, proactiva y en
                        constante aprendizaje, listo para afrontar nuevos desafíos en el mundo del desarrollo web.
                    </p>
                    <div className="flex justify-center gap-4 md:justify-start">
                        <Button asChild>
                            <a href="#proyectos">Ver proyectos</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#contacto">Contacto</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex justify-center">
                <Button variant="ghost" size="icon" asChild>
                    <a href="#tecnologias">
                        <ArrowDown className="h-6 w-6" />
                        <span className="sr-only">Desplazarse hacia abajo</span>
                    </a>
                </Button>
            </div>
        </section>
    )
}

