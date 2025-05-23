import { Card, CardContent } from "@/components/ui/card"
import { Html5, Css3, Javascript, ReactLogo, Database, Git, Java, TailwindLogo, TypeScript, AngularLogo, SassLogo, Mongo, GitHub } from "@/components/tech-icons"

export default function TechStack() {
    const technologies = [
        { name: "HTML5", icon: <Html5 className="h-12 w-12" /> },
        { name: "CSS3", icon: <Css3 className="h-12 w-12" /> },
        { name: "Java POO", icon: <Java className="h-12 w-12" /> },
        { name: "JavaScript", icon: <Javascript className="h-12 w-12" /> },
        { name: "React", icon: <ReactLogo className="h-12 w-12" /> },
        { name: "Typescript", icon: <TypeScript className="h-12 w-12" /> },
        { name: "Tailwind CSS", icon: <TailwindLogo className="h-12 w-12" /> },
        { name: "Angular v18", icon: <AngularLogo className="h-12 w-12" /> },
        { name: "Sass", icon: <SassLogo className="h-12 w-12" /> },
        { name: "SQL", icon: <Database className="h-12 w-12" /> },
        { name: "MongoDB", icon: <Mongo className="h-12 w-12" /> },
        { name: "Git", icon: <Git className="h-12 w-12" /> },
        { name: "GitHub", icon: <GitHub className="h-12 w-12" /> },
    ]

    return (
        <section id="tecnologias" className="py-20">
            <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tecnologías</h2>
                <p className="mx-auto max-w-3xl text-muted-foreground">
                    Estas son las tecnologías con las que he trabajado para desarrollar aplicaciones web modernas y eficientes.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 justify-items-center">
                {technologies.map((tech, index) => (
                    <Card key={index} className="h-32 w-32 border-none bg-accent/50 transition-all hover:bg-accent">
                        <CardContent className="h-full w-full flex flex-col items-center justify-center p-6">
                            <div className="h-12 w-12 flex items-center justify-center">
                                {tech.icon}
                            </div>
                            <h3 className="mt-4 font-medium text-center text-sm">{tech.name}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
