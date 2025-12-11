import { Clock, MapPin, Calendar, Skull } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-caso" className="py-20 lg:py-32 paper-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-confidential uppercase tracking-widest text-sm font-semibold mb-4 block">
            Relatório Preliminar
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sobre o <span className="text-primary">Caso</span>
          </h2>
          <div className="section-divider max-w-md mx-auto"></div>
        </div>

        {/* Case Overview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="evidence-card rounded-lg p-8 md:p-12">
            {/* Confidential Stamp */}
            <div className="flex justify-end mb-6">
              <span className="stamp-confidential text-xs">CONFIDENCIAL</span>
            </div>

            {/* Victim Info */}
            <div className="mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                Vítima: Ricardo Mendonça
              </h3>
              <p className="text-muted-foreground text-lg">
                Empresário, 52 anos • Proprietário da Mendonça Incorporações
              </p>
            </div>

            {/* Case Details */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                O empresário <strong className="text-primary">Ricardo Mendonça</strong>, 52 anos, 
                foi encontrado morto em seu escritório particular na manhã de terça-feira. 
                O corpo foi descoberto às <strong>07h15</strong> pela empregada doméstica, 
                que imediatamente acionou as autoridades.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                A cena apresenta características intrigantes: o escritório estava 
                <strong className="text-confidential"> trancado por dentro</strong>, 
                sem sinais de arrombamento. A causa preliminar da morte aponta para 
                <strong className="text-confidential"> envenenamento</strong>. 
                Na noite anterior, uma forte tempestade atingiu a região.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Descoberto</p>
                <p className="font-semibold text-foreground">07h15</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Relógio Parado</p>
                <p className="font-semibold text-foreground">23h47</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Skull className="w-6 h-6 text-confidential mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Causa</p>
                <p className="font-semibold text-foreground">Envenenamento</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Pistas</p>
                <p className="font-semibold text-foreground">6 encontradas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;