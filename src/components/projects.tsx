import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
    const projects = [
        {
            title: "FitTrack app",
            description: "FitTrack es una aplicación web diseñada para el seguimiento de rutinas de gimnasio y el registro de calorías consumidas y quemadas. Permite visualizar los días de la semana, agregar ejercicios con detalles personalizados y llevar un control de la ingesta calórica y el gasto energético a través de una interfaz intuitiva.",
            image: "/fitTrackNuevo.png",
            tags: ["Typescript", "Tailwind", "Next js"],
            demoUrl: "https://fit-track-next.vercel.app/",
            repoUrl: "https://github.com/francoarmando1911/FitTrack-next",
        },
        {
            title: "Menu Klug Gebräu",
            description: "Desarrollo de aplicacion para visualizar menu de la cerveceria Klug Gebräu. Tecnologias utilizadas: Next.js, Typescript, Tailwind (Proyecto de mi emprendimiento personal)",
            image: "/klug.png",
            tags: ["Typescript", "Tailwind", "Next js"],
            demoUrl: "https://menu-klug-next-js.vercel.app/",
            repoUrl: "https://github.com/francoarmando1911/menuKlug-next",
        },
        {
            title: "Control de pacieintes veterinaria",
            description: "Aplicación web para gestionar pacientes y sus dueños en una veterinaria. La aplicación permite registrar, editar y eliminar registros de manera eficiente, asignando a cada paciente un ID único para mantener la organización y el control de la información. (Proyecto personal)",
            image: "/veterinaria.png",
            tags: ["React", "Typescript", "Tailwind"],
            demoUrl: "https://controlpacientesveterinaria.netlify.app/",
            repoUrl: "https://github.com/francoarmando1911/pacientes-zustand",
        },
        {
            title: "E-commerce productos de refrigeración",
            description: "E-commerce para empresa de refrigeracion de la ciudad, desarrollado con React, TypeScript y Tailwind. (Proyecto de mi emprendimiento personal)",
            image: "/refrigeracion2.png",
            tags: ["Next js", "Typescript", "Tailwind", "Postgres"],
            demoUrl: "https://cecchinirefrigeracion.netlify.app/",
            repoUrl: "https://github.com/francoarmando1911/refrigeracion",
        },
        {
            title: "Intra Software",
            description: "Landing page para emprendimiento personal. (Proyecto de mi emprendimiento personal)",
            image: "/intraNuevo.png",
            tags: ["Next js", "Typescript", "Tailwind"],
            demoUrl: "https://intra-software-next.vercel.app/",
            repoUrl: "https://github.com/francoarmando1911/IntraSoftwareNext",
        },
        {
            title: "Gestor de gastos",
            description: "Aplicacion para gestionar gastos mensuales desarrollada con React, TypeScript y Tailwind. (Proyecto personal)",
            image: "/GestorGastos.png",
            tags: ["React", "Typescript", "Tailwind"],
            demoUrl: "https://control-gestor-gastos.netlify.app/",
            repoUrl: "https://github.com/francoarmando1911/control-gastos-contextApi",
        },
        {
            title: "Calculadora de consumos y propinas",
            description: "",
            image: "/ConsumosPropinas.png",
            tags: ["React", "Typescript", "Tailwind"],
            demoUrl: "https://calculadoraconsumos.netlify.app/",
            repoUrl: "https://github.com/francoarmando1911/CalculadoraConsumosPropinas",
        },
        {
            title: "Totalimp",
            description: "La aplicación permite a los usuarios seleccionar los productos que desean comprar y agregarlos a un carrito de compras. En el carrito, se puede incrementar la cantidad de productos y calcular el total a pagar. Además, incluye un botón que, al hacer clic, redirige automáticamente al chat de WhatsApp, llevando consigo toda la información del carrito para que los clientes puedan realizar el pedido directamente a través de la plataforma. (Proyecto personal)",
            image: "/totalimp.png",
            tags: ["React", "Typescript", "Tailwind"],
            demoUrl: "https://66f4a14b161dc40eeea5fa2b--totalimp.netlify.app/",
            repoUrl: "https://github.com/francoarmando1911/TotalimpNuevo",
        },

    ]

    return (
        <section id="proyectos" className="py-20">
            <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mis Proyectos</h2>
                <p className="mx-auto max-w-3xl text-muted-foreground">
                    Estos son algunos de los proyectos en los que he trabajado. Cada uno representa diferentes habilidades y
                    tecnologías.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button size="sm" asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Prueba proyecto
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

