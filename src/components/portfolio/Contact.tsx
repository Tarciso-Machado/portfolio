import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Tarciso Machado",
    href: "https://github.com/Tarciso-Machado",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/tarcisomachado",
    href: "www.linkedin.com/in/tarciso-machado-7a16a32b0",
  },
  { icon: Twitter, label: "Twitter", handle: "@Tarcisodev", href: "#" },
  {
    icon: Mail,
    label: "Email",
    handle: "tarcisomachado935@gmail.com",
    href: "mailto:tarcisomachado@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan/4 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-cyan text-sm mb-3">// contato</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Tem um projeto em mente ou quer bater um papo sobre tecnologia?
            Estou sempre aberto a novas oportunidades.
          </p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-cyan to-transparent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: form */}
          <div className="p-8 rounded-2xl bg-gradient-card border border-border">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan" />
              <h3 className="font-display font-semibold text-foreground">
                Enviar Mensagem
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all font-body text-sm"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all font-body text-sm"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Conta-me sobre seu projeto..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-all font-body text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full py-3 rounded-lg bg-cyan text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 glow-primary transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  "✓ Mensagem Enviada!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: socials + info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                Outras formas de me encontrar
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
                Prefere redes sociais? Me manda uma mensagem em qualquer
                plataforma abaixo. Respondo sempre que posso!
              </p>

              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/20 hover:border-cyan/30 hover:bg-secondary/40 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-cyan/10 transition-colors">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan transition-colors" />
                    </div>
                    <div>
                      <div className="font-display font-medium text-foreground text-sm">
                        {label}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {handle}
                      </div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-cyan" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-cyan/5 border border-cyan/20">
              <p className="font-mono text-xs text-cyan mb-2">
                // disponibilidade
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Atualmente{" "}
                <span className="text-foreground font-medium">disponível</span>{" "}
                para projetos freelance e oportunidades fulltime remotas.
                Respondo em até 24h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
