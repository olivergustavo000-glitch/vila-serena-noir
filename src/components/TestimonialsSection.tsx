import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    location: "São Paulo, SP",
    rating: 5,
    text: "Incrível! Passei a noite toda tentando resolver. Quando descobri quem era o culpado, fiquei de queixo caído. Muito bem elaborado!",
    casesSolved: 4
  },
  {
    name: "Roberto Almeida",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Joguei com minha esposa e foi a melhor experiência de investigação que já tivemos. Os detalhes são impressionantes e as pistas realmente fazem sentido.",
    casesSolved: 7
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Sou fã de true crime e esse caso superou minhas expectativas. A imersão é total e você realmente se sente um detetive. Recomendo demais!",
    casesSolved: 2
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Investigadores <span className="text-primary">Satisfeitos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que outros detetives amadores acharam da experiência.
          </p>
          <div className="section-divider max-w-md mx-auto mt-8"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="evidence-card rounded-lg p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Casos resolvidos</p>
                  <p className="text-primary font-bold">{testimonial.casesSolved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;