import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-cyan flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-sm text-foreground">
            dev<span className="text-gradient">.</span>portfolio
          </span>
        </div>

        <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
          Feito com <Heart className="w-3 h-3 text-cyan fill-cyan" /> e muito café · {new Date().getFullYear()}
        </p>

        <div className="flex gap-6">
          {["Sobre", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs text-muted-foreground hover:text-cyan transition-colors"
            >
              {item === "Sobre" ? "#about" : item === "Projetos" ? "#projects" : "#contact"}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
