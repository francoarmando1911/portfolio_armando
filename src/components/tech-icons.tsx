import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaGithub } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript, SiAngular, SiSass } from "react-icons/si"

export function Html5(props: React.ComponentProps<typeof FaHtml5>) {
    return <FaHtml5 className="h-full w-full" {...props} />
}

export function Css3(props: React.ComponentProps<typeof FaCss3Alt>) {
    return <FaCss3Alt className="h-full w-full" {...props} />
}

export function Javascript(props: React.ComponentProps<typeof FaJs>) {
    return <FaJs className="h-full w-full" {...props} />
}

export function ReactLogo(props: React.ComponentProps<typeof FaReact>) {
    return <FaReact className="h-full w-full" {...props} />
}

export function TailwindLogo(props: React.ComponentProps<typeof SiTailwindcss>) {
    return <SiTailwindcss className="h-full w-full" {...props} />
}

export function NextLogo(props: React.ComponentProps<typeof SiNextdotjs>) {
    return <SiNextdotjs className="h-full w-full" {...props} />
}

export function AngularLogo(props: React.ComponentProps<typeof SiAngular>) {
    return <SiAngular className="h-full w-full" {...props} />
}

export function SassLogo(props: React.ComponentProps<typeof SiSass>) {
    return <SiSass className="h-full w-full" {...props} />
}

export function Nodejs(props: React.ComponentProps<typeof FaNodeJs>) {
    return <FaNodeJs className="h-full w-full" {...props} />
}

export function Database(props: React.ComponentProps<typeof FaDatabase>) {
    return <FaDatabase className="h-full w-full" {...props} />
}

export function Mongo(props: React.ComponentProps<typeof SiMongodb>) {
    return <SiMongodb className="h-full w-full" {...props} />
}

export function Git(props: React.ComponentProps<typeof FaGitAlt>) {
    return <FaGitAlt className="h-full w-full" {...props} />
}

export function GitHub(props: React.ComponentProps<typeof FaGithub>) {
    return <FaGithub className="h-full w-full" {...props} />
}

export function Java(props: React.ComponentProps<typeof FaJava>) {
    return <FaJava className="h-full w-full" {...props} />
}

export function TypeScript(props: React.ComponentProps<typeof SiTypescript>) { // Componente para TypeScript  
    return <SiTypescript className="h-full w-full" {...props} />
}
