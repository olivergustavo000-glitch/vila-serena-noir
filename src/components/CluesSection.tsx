const clues = [
  {
    number: 1,
    title: "Xícara de Chá",
    description: "Uma xícara de chá pela metade foi encontrada sobre a mesa. Análises preliminares indicam a presença de substância não identificada no líquido restante.",
    status: "Em Análise"
  },
  {
    number: 2,
    title: "Porta Trancada",
    description: "O escritório estava completamente trancado por dentro. A chave foi encontrada no bolso da vítima. Não há sinais de arrombamento.",
    status: "Verificado"
  },
  {
    number: 3,
    title: "Janela Entreaberta",
    description: "A janela lateral estava entreaberta, porém as notas e documentos sobre a mesa permaneceram intactos, sem sinais de vento ou chuva.",
    status: "Suspeito"
  },
  {
    number: 4,
    title: "Documentos Financeiros",
    description: "O computador estava ligado com planilhas financeiras abertas. Mostram transferências suspeitas nos últimos meses totalizando R$ 2,3 milhões.",
    status: "Crítico"
  },
  {
    number: 5,
    title: "Relógio Parado",
    description: "O relógio de pulso da vítima parou às 23:47. O relógio de parede marca 23:52. Uma diferença de 5 minutos que pode ser crucial.",
    status: "Pista Chave"
  },
  {
    number: 6,
    title: "Última Ligação",
    description: "O celular da vítima registra uma ligação recebida às 22:30 com duração de 4 minutos. O número está registrado como 'Privado'.",
    status: "Investigando"
  }
];

const CluesSection = () => {
  return (
    <section className="py-20 lg:py-32 paper-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Evidências Coletadas
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pistas <span className="text-primary">Iniciais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seis pistas foram encontradas na cena do crime. Cada uma pode ser a chave 
            para desvendar o mistério.
          </p>
          <div className="section-divider max-w-md mx-auto mt-8"></div>
        </div>

        {/* Clues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clues.map((clue) => (
            <div 
              key={clue.number}
              className="evidence-card rounded-lg p-6 relative group hover:border-primary/50 transition-all duration-300"
            >
              {/* Evidence Marker */}
              <div className="absolute -top-3 -left-3 evidence-marker">
                {clue.number}
              </div>

              {/* Status Badge */}
              <div className="flex justify-end mb-4">
                <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold
                  ${clue.status === "Crítico" || clue.status === "Pista Chave" 
                    ? "bg-confidential/20 text-confidential" 
                    : clue.status === "Suspeito"
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/20 text-primary"
                  }`}
                >
                  {clue.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {clue.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {clue.description}
              </p>

              {/* Redacted Effect */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic">
                  ▓▓▓▓▓▓ informações adicionais disponíveis no caso completo ▓▓▓▓▓▓
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CluesSection;