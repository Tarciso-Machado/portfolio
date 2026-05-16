import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          Disponível para novos projetos
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          Tarciso <span className="text-gradient">Machado</span>
        </h1>

        {/* Title */}
        <div
          className="font-mono text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in cursor-blink"
          style={{ animationDelay: "0.3s" }}
        >
          Fullstack Developer
        </div>

        {/* Description */}
        <p
          className="max-w-xl mx-auto text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          Construo experiências digitais de ponta a ponta — do banco de dados ao
          pixel perfeito. Especializado em React, Node.js e arquitetura cloud.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-cyan text-primary-foreground font-display font-semibold text-sm hover:opacity-90 glow-primary transition-all duration-200 hover:scale-105"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border bg-secondary/50 text-foreground font-display font-semibold text-sm hover:border-cyan/50 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            <Download className="w-4 h-4 inline mr-2" />
            Baixar CV
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/Tarciso-Machado",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "www.linkedin.com/in/tarciso-machado-7a16a32b0",
              label: "LinkedIn",
            },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan transition-colors animate-bounce"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
