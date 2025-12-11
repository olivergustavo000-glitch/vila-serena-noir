import { Laptop, Smartphone, Brain, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Laptop,
    title: "Acesse o Caso",
    description: "Após a compra, você receberá acesso imediato à plataforma interativa com todos os arquivos do caso."
  },
  {
    number: "02",
    icon: Brain,
    title: "Analise as Pistas",
    description: "Examine cada evidência, interrogue mentalmente os suspeitos e conecte os pontos da investigação."
  },
  {
    number: "03",
    icon: Zap,
    title: "Tome Decisões",
    description: "Ao longo do caso, você fará escolhas que podem abrir ou fechar caminhos de investigação."
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Revele o Culpado",
    description: "Quando tiver certeza, apresente sua teoria. Acerte e desbloqueie a solução completa do caso."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32 paper-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Experiência Imersiva
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma experiência 100% digital e interativa. Jogue no celular ou computador, 
            no seu ritmo.
          </p>
          <div className="section-divider max-w-md mx-auto mt-8"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Number */}
              <div className="font-display text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-px bg-border"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground text-sm">Digital</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">1-3h</p>
            <p className="text-muted-foreground text-sm">Tempo Médio</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary mb-2">∞</p>
            <p className="text-muted-foreground text-sm">Acesso Vitalício</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;