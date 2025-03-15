import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
    const projects = [
        {
            title: "Proyecto 1",
            description: "Una aplicación web para gestionar tareas personales y profesionales.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["React", "Node.js", "MongoDB"],
            demoUrl: "#",
            repoUrl: "#",
        },
        {
            title: "Proyecto 2",
            description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pagos.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Next.js", "Tailwind CSS", "Stripe"],
            demoUrl: "#",
            repoUrl: "#",
        },
        {
            title: "Proyecto 3",
            description: "Dashboard para visualización de datos con gráficos interactivos.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Vue.js", "D3.js", "Firebase"],
            demoUrl: "#",
            repoUrl: "#",
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
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm" asChild>
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Código
                                </a>
                            </Button>
                            <Button size="sm" asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

