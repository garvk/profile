const Projects = () => {
  const projects = [
    {
      title: "Design System Architecture",
      year: "2024-Present",
      type: "Framework",
      description: "A scalable approach to building and maintaining design systems for growing teams. Includes token architecture, component API design, and governance models.",
      tags: ["Design Systems", "Architecture", "Documentation"],
    },
    {
      title: "Minimal CMS",
      year: "2024",
      type: "Product",
      description: "Content management stripped to its essence. Built for writers, not marketers. Focuses on the writing experience and content structure over feature bloat.",
      tags: ["Product Design", "Content", "UX"],
    },
    {
      title: "Typography System for Digital Interfaces",
      year: "2023",
      type: "Research",
      description: "A comprehensive study of typographic systems optimized for screen reading. Explores responsive type scales, reading comfort, and accessibility.",
      tags: ["Typography", "Research", "Accessibility"],
    },
    {
      title: "Component Library Generator",
      year: "2023",
      type: "Tool",
      description: "Open-source tool for scaffolding component libraries with built-in documentation, testing, and accessibility standards. Over 2k GitHub stars.",
      tags: ["Development", "Open Source", "Tools"],
    },
    {
      title: "Editorial Design Templates",
      year: "2022",
      type: "Design",
      description: "A collection of minimalist templates for long-form content. Used by publications and individual writers for essays, research, and documentation.",
      tags: ["Templates", "Editorial", "Typography"],
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-serif font-semibold mb-6 pb-6 border-b border-border">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Selected work spanning product design, research, and open-source contributions.
        </p>
      </section>

      <section className="space-y-16">
        {projects.map((project, index) => (
          <article 
            key={project.title}
            className="group"
          >
            <div className="border border-border p-8 hover:border-foreground transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.type}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-semibold mb-4 group-hover:opacity-60 transition-opacity">
                {project.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-3 py-1 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="pt-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          For case studies, code samples, or collaborative inquiries, please reach out via email.
        </p>
      </section>
    </div>
  );
};

export default Projects;
