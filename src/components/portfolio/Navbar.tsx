import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Sobre", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-md bg-cyan flex items-center justify-center glow-soft group-hover:animate-pulse-glow transition-all">
            <Code2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground text-lg">
            dev<span className="text-gradient">.</span>portfolio
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-sm text-muted-foreground hover:text-cyan transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 px-5 py-2 rounded-full border border-cyan text-cyan text-sm font-display font-medium hover:bg-cyan hover:text-primary-foreground transition-all duration-200 glow-soft hover:glow-primary"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollTo(link.id);
                setMenuOpen(false);
              }}
              className="text-muted-foreground hover:text-cyan transition-colors font-body text-sm text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("contact");
              setMenuOpen(false);
            }}
            className="px-5 py-2 rounded-full border border-cyan text-cyan text-sm font-display font-medium w-fit hover:bg-cyan hover:text-primary-foreground transition-all"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
