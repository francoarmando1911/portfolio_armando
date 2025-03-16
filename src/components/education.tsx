import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, GraduationCap, Award } from "lucide-react"

export default function Education() {
    const education = [
        {
            type: "education",
            title: "Tecnicatura Universitaria en Programación",
            institution: "Universidad Tecnologica Nacional (UTN FRCU)",
            date: "2024 - 2026",
            description: "Especialización en desarrollo de software y sistemas de información.",
        },
        {
            type: "certification",
            title: "Curso inglés programación",
            institution: "Universidad Tecnologica Nacional",
            date: "2025",
            description: "Curso de ingles para programadores",
        },
        {
            type: "certification",
            title: "Certificado EF SET Inglés 51/100 (B2 Intermedio Alto)",
            institution: "EF SET",
            date: "2025",
            description: "Examen de ingles online EF SET",
        },
        {
            type: "certification",
            title: "Diplomatura en Marketing Digital",
            institution: "Universidad Tecnologica Nacional",
            date: "2024",
            description: "Diplomatura en Marketing Digital, duracion 6 meses.",
        },
        {
            type: "certification",
            title: "Spring Framework 6 y Spring Boot 3",
            institution: "Udemy",
            date: "2024",
            description: "Curso de Spring Boot completo",
        },
        {
            type: "certification",
            title: "Principios Solid and Clean Code",
            institution: "Udemy",
            date: "2024",
            description: "Fundamentos de los principios Solid",
        },
    ]

    return (
        <section id="educacion" className="py-20">
            <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Educación y Certificaciones</h2>
                <p className="mx-auto max-w-3xl text-muted-foreground">
                    Mi formación académica y certificaciones profesionales que respaldan mis habilidades técnicas.
                </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {education.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <Badge variant={item.type === "education" ? "default" : "secondary"}>
                                    {item.type === "education" ? "Educación" : "Certificación"}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CalendarDays className="mr-1 h-4 w-4" />
                                    {item.date}
                                </div>
                            </div>
                            <CardTitle className="mt-2">{item.title}</CardTitle>
                            <CardDescription className="flex items-center">
                                {item.type === "education" ? (
                                    <GraduationCap className="mr-1 h-4 w-4" />
                                ) : (
                                    <Award className="mr-1 h-4 w-4" />
                                )}
                                {item.institution}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

