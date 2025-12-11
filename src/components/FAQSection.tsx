import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o acesso ao caso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link e instruções de acesso. O processo é instantâneo e você já pode começar a investigar!"
  },
  {
    question: "Posso jogar no celular?",
    answer: "Sim! A experiência é 100% responsiva e funciona perfeitamente em smartphones, tablets e computadores. Você pode começar no celular e continuar no computador, ou vice-versa."
  },
  {
    question: "O caso é difícil?",
    answer: "O caso foi criado para ser desafiador, mas acessível. Não precisa ter experiência prévia com jogos de investigação. As pistas estão todas lá, você só precisa conectar os pontos!"
  },
  {
    question: "Quanto tempo demora para resolver?",
    answer: "O tempo médio é de 1 a 3 horas, dependendo do seu ritmo de investigação. Algumas pessoas gostam de ir devagar, analisando cada detalhe, enquanto outras preferem seguir a intuição."
  },
  {
    question: "É adequado para todas as idades?",
    answer: "O caso contém elementos de crime e mistério, mas sem cenas explícitas de violência ou conteúdo adulto. Recomendamos para maiores de 14 anos ou com supervisão dos pais."
  },
  {
    question: "Posso jogar com amigos ou família?",
    answer: "Com certeza! Muitos jogadores adoram investigar em grupo. É uma ótima atividade para casais, famílias ou amigos que gostam de desafios de lógica e mistério."
  },
  {
    question: "E se eu ficar travado em alguma parte?",
    answer: "O caso possui um sistema de dicas progressivas que você pode acessar se sentir que está preso. Mas recomendamos tentar por conta própria primeiro – a sensação de descobrir sozinho é incrível!"
  },
  {
    question: "Posso jogar mais de uma vez?",
    answer: "Sim, seu acesso é vitalício! Porém, como você já saberá a solução, recomendamos convidar amigos e familiares para jogarem enquanto você observa – é divertido ver outras pessoas investigando!"
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 paper-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <div className="section-divider max-w-md mx-auto"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="evidence-card rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;