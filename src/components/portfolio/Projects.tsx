import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "Plataforma de analytics em tempo real com gráficos interativos, filtros avançados e exportação de relatórios. Suporta +10k eventos/segundo.",
    image: project1,
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "E-Commerce Mobile",
    description:
      "Aplicação de e-commerce completa com catálogo de produtos, carrinho, pagamentos via Stripe e painel administrativo.",
    image: project2,
    tags: ["React Native", "Expo", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Chat em Tempo Real",
    description:
      "Sistema de chat com salas, mensagens diretas, presença em tempo real e histórico de mensagens com busca full-text.",
    image: project3,
    tags: ["Next.js", "Socket.io", "Prisma", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="font-mono text-cyan text-sm mb-3">// projetos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Trabalhos em Destaque
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan to-transparent rounded-full" />
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-cyan transition-colors group"
          >
            Ver todos no GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured project */}
        {projects.filter((p) => p.featured).map((project) => (
          <div
            key={project.title}
            className="mb-8 rounded-2xl border border-border hover:border-cyan/30 overflow-hidden bg-gradient-card group transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 lg:from-transparent lg:to-card hidden lg:block" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-xs text-cyan mb-3">// projeto em destaque</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono text-cyan border border-cyan/20 bg-cyan/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                    <Github className="w-4 h-4" /> Código
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-cyan hover:opacity-80 transition-opacity font-body">
                    <ExternalLink className="w-4 h-4" /> Demo ao Vivo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-border hover:border-cyan/30 overflow-hidden bg-gradient-card group transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-foreground text-xl mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono text-cyan border border-cyan/20 bg-cyan/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                    <Github className="w-3.5 h-3.5" /> Código
                  </a>
                  <a href={project.demo} className="flex items-center gap-1.5 text-xs text-cyan hover:opacity-80 transition-opacity font-body">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
