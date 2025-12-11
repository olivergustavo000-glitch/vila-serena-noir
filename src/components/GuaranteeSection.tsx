import { Shield, RefreshCcw, Mail } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shield Icon */}
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Garantia <span className="text-primary">Sem Risco</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Estamos tão confiantes na qualidade do caso que oferecemos 
            garantia total de satisfação.
          </p>

          {/* Guarantee Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <RefreshCcw className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">7 Dias de Garantia</h3>
              <p className="text-sm text-muted-foreground">
                Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Acesso Vitalício</h3>
              <p className="text-sm text-muted-foreground">
                O caso é seu para sempre. Jogue quantas vezes quiser.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg mb-2">Suporte por E-mail</h3>
              <p className="text-sm text-muted-foreground">
                Dúvidas? Nossa equipe está pronta para ajudar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;