const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 80 },
      { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Prisma ORM", level: 87 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker / K8s", level: 80 },
      { name: "AWS / GCP", level: 78 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Linux", level: 82 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
  "GraphQL", "Prisma", "Tailwind", "Git", "Figma",
  "Jest", "Vitest", "Kubernetes", "Nginx", "Linux",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-cyan text-sm mb-3">// habilidades</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tech Stack
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan to-transparent rounded-full" />
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-cyan/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-cyan transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-accent transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="text-center">
          <p className="font-mono text-xs text-muted-foreground mb-6">// ferramentas & tecnologias</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-mono text-muted-foreground border border-border bg-secondary/30 hover:border-cyan/50 hover:text-cyan transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
