import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Confidential Stamp */}
        <div className="inline-block mb-8">
          <span className="stamp-confidential text-sm">
            CASO ABERTO
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Você Tem o Que Precisa Para{" "}
          <span className="text-primary">Resolver o Caso</span>?
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Ricardo Mendonça espera por justiça. As pistas estão no lugar. 
          Os suspeitos têm suas histórias. Só falta você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="text-lg" asChild>
            <a href="https://pay.cakto.com.br/bbp6d7x_684969" target="_blank" rel="noopener noreferrer">
              🔍 Iniciar Investigação Agora
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Por apenas <span className="text-primary font-bold">R$ 14,90</span> • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;