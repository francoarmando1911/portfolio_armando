import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <HeroSection/>
        <TechStack/>
        <Projects/>
      </main>
      <Footer />
    </div>
  );
}
