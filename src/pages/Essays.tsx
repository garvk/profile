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
        <h1 className="text-5xl font-serif font-semibold mb-6 pb-6 border-b border-border">
          Essays
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Long-form writing on design, technology, and the craft of building digital products.
        </p>
      </section>

      <section className="space-y-12">
        {essays.map((essay, index) => (
          <article 
            key={essay.title}
            className="group border-l-2 border-line-subtle hover:border-foreground transition-colors pl-8 py-4"
          >
            <div className="flex items-baseline gap-4 mb-2">
              <time className="text-xs uppercase tracking-wider text-muted-foreground">
                {essay.date}
              </time>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{essay.readTime} read</span>
            </div>
            
            <h2 className="text-2xl font-serif font-semibold mt-3 mb-4 group-hover:opacity-60 transition-opacity cursor-pointer">
              {essay.title}
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              {essay.excerpt}
            </p>
          </article>
        ))}
      </section>

      <section className="pt-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Looking for something specific? Essays are organized chronologically. 
          Older posts are archived and available upon request.
        </p>
      </section>
    </div>
  );
};

export default Essays;
