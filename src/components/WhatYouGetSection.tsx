import { 
  FileText, 
  Users, 
  Search, 
  Clock, 
  Trophy, 
  Lock,
  FolderOpen,
  Target
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Arquivos Confidenciais",
    description: "Acesso completo a todos os documentos do caso, incluindo laudos e relatórios policiais."
  },
  {
    icon: Users,
    title: "Perfil da Vítima",
    description: "Histórico detalhado de Ricardo Mendonça, seus negócios e relacionamentos."
  },
  {
    icon: Search,
    title: "Cena do Crime",
    description: "Descrição minuciosa do escritório, com fotos e diagramas da cena."
  },
  {
    icon: Target,
    title: "Pistas Interativas",
    description: "Seis pistas iniciais com elementos clicáveis e revelações ocultas."
  },
  {
    icon: FolderOpen,
    title: "Dossiês dos Suspeitos",
    description: "Perfis completos dos cinco suspeitos com motivos, álibis e conexões."
  },
  {
    icon: Clock,
    title: "Linha do Tempo",
    description: "Cronologia detalhada dos eventos na noite do crime."
  },
  {
    icon: Lock,
    title: "Desafios de Investigação",
    description: "Enigmas e quebra-cabeças que testam suas habilidades dedutivas."
  },
  {
    icon: Trophy,
    title: "Solução Final",
    description: "Desbloqueie a revelação do culpado ao concluir a investigação."
  }
];

const WhatYouGetSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Conteúdo Exclusivo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            O Que Você <span className="text-primary">Irá Receber</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acesso completo ao caso criminal interativo com todos os materiais necessários 
            para conduzir sua própria investigação.
          </p>
          <div className="section-divider max-w-md mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="evidence-card rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;