const Essays = () => {
  const essays = [
    {
      title: "On the nature of good design systems",
      date: "March 2025",
      excerpt: "Design systems are not just component libraries—they're living agreements about how we build together. This essay explores what makes a design system truly effective.",
      readTime: "8 min",
    },
    {
      title: "Technology as a medium for thought",
      date: "February 2025",
      excerpt: "The tools we use shape the thoughts we can think. A reflection on computational media and how software can extend human cognition.",
      readTime: "12 min",
    },
    {
      title: "Why simplicity is so complex",
      date: "January 2025",
      excerpt: "True simplicity comes from understanding complexity deeply enough to hide it effectively. On the craft of reduction and clarity.",
      readTime: "6 min",
    },
    {
      title: "The tyranny of metrics",
      date: "December 2024",
      excerpt: "How data-driven design can paradoxically make products worse. On balancing quantitative insights with qualitative judgment.",
      readTime: "10 min",
    },
    {
      title: "In defense of slow design",
      date: "November 2024",
      excerpt: "Speed is often celebrated in product development, but the best work requires time to think, experiment, and refine.",
      readTime: "7 min",
    },
    {
      title: "What designers can learn from architecture",
      date: "October 2024",
      excerpt: "Architects have been solving complex system problems for centuries. Their principles of modularity, hierarchy, and human-centered space apply directly to digital design.",
      readTime: "9 min",
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <div className="line-decoration mb-8">
          <h1 className="text-4xl font-serif font-semibold">
            Writing
          </h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Long-form essays on design, technology, risk, and how we build better systems. 
          Each piece aims for depth over breadth — slow, considered thinking.
        </p>
      </section>

      <section className="space-y-16">
        {essays.map((essay, index) => (
          <article 
            key={essay.title}
            className="group pb-12 border-b border-border last:border-0"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <time className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                {essay.date}
              </time>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="font-sans text-xs tracking-wider text-muted-foreground">{essay.readTime} read</span>
            </div>
            
            <h2 className="text-2xl font-serif font-semibold mb-4 group-hover:opacity-60 transition-opacity cursor-pointer leading-tight">
              {essay.title}
            </h2>
            
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {essay.excerpt}
            </p>
          </article>
        ))}
      </section>

      <section className="pt-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Essays are organized chronologically. Older pieces are archived and available on request. 
          If something here resonates with you, I'd enjoy hearing your thoughts.
        </p>
      </section>
    </div>
  );
};

export default Essays;
