import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Zap } from "lucide-react";

const benefits = [
  "Acesso completo ao caso interativo",
  "Todos os arquivos e documentos",
  "Perfis detalhados dos suspeitos",
  "Desafios de investigação",
  "Solução final desbloqueável",
  "Acesso vitalício"
];

const PricingSection = () => {
  return (
    <section id="comprar" className="py-20 lg:py-32 paper-texture relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-confidential rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Oferta Especial
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Inicie Sua <span className="text-primary">Investigação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acesse agora o caso completo e prove suas habilidades de detetive.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="evidence-card rounded-2xl p-8 md:p-10 relative border-2 border-primary/50">
            {/* Stamp */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                Acesso Imediato
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-muted-foreground text-2xl line-through">R$ 29,90</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-7xl font-display font-bold text-primary">
                  R$ 14
                </span>
                <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                  ,90
                </span>
              </div>
              <p className="text-muted-foreground mt-2">Pagamento único • Sem mensalidades</p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full text-lg">
              🔍 Comprar e Começar Agora
            </Button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;