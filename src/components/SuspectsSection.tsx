import { User, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const suspects = [
  {
    name: "Helena Mendonça",
    age: 48,
    relation: "Esposa da vítima",
    occupation: "Ex-advogada",
    background: "Casados há 25 anos. Recentemente descobriu possíveis casos extraconjugais do marido. Beneficiária principal do seguro de vida.",
    motive: "Traição e herança milionária",
    alibiStatus: "verified" as const,
    alibi: "Estava em jantar de caridade com 30 testemunhas"
  },
  {
    name: "Bruno Mendonça",
    age: 26,
    relation: "Filho da vítima",
    occupation: "Diretor Comercial",
    background: "Único filho do casal. Conflitos frequentes com o pai sobre a gestão da empresa. Dívidas de jogo não declaradas.",
    motive: "Conflitos empresariais e dívidas",
    alibiStatus: "questionable" as const,
    alibi: "Afirma estar em casa, mas vizinhos ouviram carro saindo"
  },
  {
    name: "Carla Figueiredo",
    age: 35,
    relation: "Sócia de negócios",
    occupation: "CEO da TechStart",
    background: "Parceira em startup de tecnologia. Investimento de R$ 5 milhões em jogo. Tensões recentes sobre direção da empresa.",
    motive: "Disputa empresarial de milhões",
    alibiStatus: "unverified" as const,
    alibi: "Viagem de negócios a São Paulo - passagens confirmadas"
  },
  {
    name: "Dr. Marcelo Reis",
    age: 55,
    relation: "Médico pessoal",
    occupation: "Cardiologista",
    background: "Médico da família há 15 anos. Acesso a medicamentos controlados. Empréstimo de R$ 800 mil com Ricardo.",
    motive: "Dívida significativa",
    alibiStatus: "questionable" as const,
    alibi: "Plantão no hospital, mas ausente por 2 horas"
  },
  {
    name: "Juliana Santos",
    age: 29,
    relation: "Assistente pessoal",
    occupation: "Secretária Executiva",
    background: "Trabalha com Ricardo há 3 anos. Última pessoa a vê-lo vivo. Conhecida por ter acesso irrestrito ao escritório.",
    motive: "Acesso e oportunidade",
    alibiStatus: "unverified" as const,
    alibi: "Saiu do escritório às 21:30 segundo câmeras"
  }
];

const SuspectsSection = () => {
  const getStatusIcon = (status: "verified" | "questionable" | "unverified") => {
    switch (status) {
      case "verified":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "questionable":
        return <AlertTriangle className="w-4 h-4 text-accent" />;
      case "unverified":
        return <XCircle className="w-4 h-4 text-confidential" />;
    }
  };

  const getStatusText = (status: "verified" | "questionable" | "unverified") => {
    switch (status) {
      case "verified":
        return "Álibi Verificado";
      case "questionable":
        return "Álibi Questionável";
      case "unverified":
        return "Não Verificado";
    }
  };

  const getStatusColor = (status: "verified" | "questionable" | "unverified") => {
    switch (status) {
      case "verified":
        return "bg-green-500/10 text-green-500";
      case "questionable":
        return "bg-accent/10 text-accent";
      case "unverified":
        return "bg-confidential/10 text-confidential";
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-confidential uppercase tracking-widest text-sm font-semibold mb-4 block">
            Arquivos Confidenciais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Os Cinco <span className="text-primary">Suspeitos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada um tinha motivo e oportunidade. Mas apenas um é o assassino.
          </p>
          <div className="section-divider max-w-md mx-auto mt-8"></div>
        </div>

        {/* Suspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {suspects.map((suspect, index) => (
            <div 
              key={index}
              className="suspect-file rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-muted/50 p-4 border-b border-border flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center border-2 border-border">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {suspect.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {suspect.age} anos • {suspect.relation}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Ocupação</p>
                  <p className="text-foreground font-medium">{suspect.occupation}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Histórico</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{suspect.background}</p>
                </div>

                <div className="mb-4 p-3 bg-confidential/10 rounded-lg border border-confidential/20">
                  <p className="text-xs uppercase tracking-wider text-confidential mb-1">Possível Motivo</p>
                  <p className="text-sm text-foreground font-medium">{suspect.motive}</p>
                </div>

                {/* Alibi Status */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Status do Álibi</p>
                      <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(suspect.alibiStatus)}`}>
                        {getStatusIcon(suspect.alibiStatus)}
                        {getStatusText(suspect.alibiStatus)}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 italic">"{suspect.alibi}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuspectsSection;