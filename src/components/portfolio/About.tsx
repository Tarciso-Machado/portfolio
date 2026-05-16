import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+", label: "Anos de Experiência" },
  { value: "40+", label: "Projetos Entregues" },
  { value: "15+", label: "Clientes Satisfeitos" },
  { value: "99%", label: "Taxa de Sucesso" },
];

const timeline = [
  {
    icon: Briefcase,
    date: "2024 – 2026",
    title: "Senior Fullstack Developer",
    company: "TechCorp",
    desc: "Liderança técnica de squads, arquitetura de microsserviços e desenvolvimento de produtos SaaS com React e Node.js.",
  },
  {
    icon: Briefcase,
    date: "2023 – 2024",
    title: "Fullstack Developer",
    company: "Startup workly",
    desc: "Construção de plataforma B2B do zero, integrações com APIs de pagamento e entrega de features críticas.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1/30 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-cyan text-sm mb-3">// sobre mim</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Quem sou eu
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Sou um desenvolvedor fullstack apaixonado por criar soluções que
              unem design excepcional a uma engenharia robusta. Com mais de 3
              anos de experiência, transformo ideias complexas em produtos
              digitais que as pessoas amam usar.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Do frontend reativo ao backend escalável, gosto de ter visão
              completa do sistema. Acredito que o código limpo e a experiência
              do usuário não são opostos — são aliados.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: MapPin, text: "Luanda, Angola" },
                { icon: Calendar, text: "Disponível Freelance" },
                { icon: Briefcase, text: "Open to Remote" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-muted-foreground text-sm font-body"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan" />
                  {text}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-gradient-card border border-glow"
                >
                  <div className="font-display text-3xl font-bold text-gradient mb-1">
                    {value}
                  </div>
                  <div className="text-muted-foreground text-sm font-body">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-cyan/20 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-cyan" />
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-card border border-border hover:border-cyan/30 transition-all duration-300 group">
                    <span className="font-mono text-xs text-cyan mb-2 block">
                      {item.date}
                    </span>
                    <h3 className="font-display font-semibold text-foreground text-base mb-0.5 group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 font-body">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
