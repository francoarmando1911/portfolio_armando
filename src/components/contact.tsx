import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
    return (
        <section id="contacto" className="py-20">
            <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contacto</h2>
                <p className="mx-auto max-w-3xl text-muted-foreground">
                    ¿Interesado en trabajar juntos? Puedes contactarme a través de las siguientes plataformas.
                </p>
            </div>
            <div className="mt-12">
                <Card className="mx-auto max-w-2xl">
                    <CardHeader>
                        <CardTitle>Conectemos</CardTitle>
                        <CardDescription>
                            Estoy abierto a oportunidades de trabajo o colaboraciones.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" asChild>
                                <a href="https://github.com/francoarmando1911" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="h-8 w-8" />
                                    <span>GitHub</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" asChild>
                                <a href="https://www.linkedin.com/in/franco-armando/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="h-8 w-8" />
                                    <span>LinkedIn</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" asChild>
                                <a href="mailto:francoarmando2002@gmail.com">
                                    <Mail className="h-8 w-8" />
                                    <span>Email</span>
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

