import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock } from "lucide-react";

const EarlyCTASection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-y border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground font-display mb-2">
              Pronto para investigar?
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Acesso imediato
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" />
                ~2h de investigação
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-muted-foreground line-through text-lg">R$ 29,90</span>
              <span className="text-3xl font-bold text-primary font-display">R$ 14,90</span>
            </div>
            <Button variant="hero" size="xl" className="min-w-[280px]">
              Comprar e Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyCTASection;
