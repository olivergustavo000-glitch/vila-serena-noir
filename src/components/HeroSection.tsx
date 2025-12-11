import heroImage from "@/assets/hero-crime-scene.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCase = () => {
    document.getElementById("sobre-caso")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        <div className="absolute inset-0 vignette"></div>
      </div>

      {/* Police Tape Top */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <div className="police-tape text-center text-sm md:text-base py-3">
          ⚠️ NÃO ULTRAPASSE – ÁREA RESTRITA – NÃO ULTRAPASSE – ÁREA RESTRITA ⚠️
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center mt-20">
        {/* Case Number */}
        <div className="inline-block mb-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="stamp-confidential text-xs md:text-sm">
            CASO VS-2024-0847
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Mistério em{" "}
          <span className="text-primary animate-flicker">Vila Serena</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Você consegue descobrir quem matou{" "}
          <span className="text-foreground font-semibold">Ricardo Mendonça</span>?
        </p>

        {/* Tagline */}
        <p 
          className="font-body text-base md:text-lg text-foreground/70 mb-10 animate-slide-in-up max-w-2xl mx-auto"
          style={{ animationDelay: "0.7s" }}
        >
          Um empresário morto. Escritório trancado por dentro. Seis pistas. Cinco suspeitos.
        </p>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="xl" onClick={scrollToCase}>
            🔍 Quero Investigar Agora
          </Button>
          <Button variant="heroOutline" size="xl" onClick={scrollToCase}>
            Ver Detalhes do Caso
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToCase}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Police Tape Bottom */}
      <div className="absolute bottom-32 left-0 right-0 z-10">
        <div className="police-tape-right text-center text-sm md:text-base py-3">
          ⚠️ CENA DO CRIME – ACESSO RESTRITO – CENA DO CRIME – ACESSO RESTRITO ⚠️
        </div>
      </div>
    </section>
  );
};

export default HeroSection;