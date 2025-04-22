import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section id="sobre-mi" className="py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="flex justify-center md:order-2">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
                        <Image src="/perfil.png" alt="Tu foto" fill className="object-cover" priority />
                    </div>
                </div>
                <div className="space-y-6 text-center md:order-1 md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Hola, soy <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Franco Armando</span>

                    </h1>
                    <p className="text-xl text-muted-foreground md:text-2xl">Desarrollador Web Full Stack</p>
                    <p className="text-muted-foreground text-justify md:text-left">
                        Soy estudiante de la Tecnicatura Universitaria en Programación en la Universidad Tecnologica 
                        Nacional (sede Concepcion del Uruguay), con experiencia en
                        desarrollo web moderno y conocimientos en Programación Orientada a Objetos con Java.

                        Me especializo en tecnologías como React y Angular, tambien poseo conocimientos en el framework Spring para el desarrollo de API REST,
                        siempre en busca de soluciones innovadoras. Me considero una persona comprometida, proactiva y en
                        constante aprendizaje, listo para afrontar nuevos desafíos en el mundo del desarrollo web.
                    </p>
                    <div className="flex justify-center gap-4 md:justify-start">
                        <Button asChild>
                            <a href="#proyectos">Ver proyectos</a>
                        </Button>
                        <Button asChild>
                            <a href="#contacto">Contacto</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

