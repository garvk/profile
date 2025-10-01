import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="pt-12 pb-16 border-b border-border">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6">
          Thoughts on design,
          <br />
          technology, and craft
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I write about digital product design, emerging technologies, and the intersection
          of creativity and systems thinking. This is my space for essays, projects, and notes.
        </p>
      </section>

      {/* Recent Essays */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-serif font-semibold">Recent Essays</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        
        <div className="space-y-8">
          {[
            {
              title: "On the nature of good design systems",
              date: "March 2025",
              excerpt: "Design systems are not just component libraries—they're living agreements about how we build together.",
            },
            {
              title: "Technology as a medium for thought",
              date: "February 2025",
              excerpt: "The tools we use shape the thoughts we can think. A reflection on computational media.",
            },
            {
              title: "Why simplicity is so complex",
              date: "January 2025",
              excerpt: "True simplicity comes from understanding complexity deeply enough to hide it effectively.",
            },
          ].map((essay) => (
            <article key={essay.title} className="group border-l-2 border-line-subtle hover:border-foreground transition-colors pl-6 py-2">
              <time className="text-xs uppercase tracking-wider text-muted-foreground">
                {essay.date}
              </time>
              <h3 className="text-xl font-serif font-semibold mt-2 mb-3 group-hover:opacity-60 transition-opacity">
                {essay.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {essay.excerpt}
              </p>
              <Link 
                to="/essays" 
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        <Link 
          to="/essays" 
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium border-b border-foreground hover:opacity-60 transition-opacity"
        >
          View all essays
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Selected Projects */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-serif font-semibold">Selected Projects</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Design System Architecture",
              type: "Framework",
              description: "A scalable approach to building and maintaining design systems for growing teams.",
            },
            {
              title: "Minimal CMS",
              type: "Product",
              description: "Content management stripped to its essence. Built for writers, not marketers.",
            },
          ].map((project) => (
            <article key={project.title} className="group border border-border p-6 hover:border-foreground transition-colors">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {project.type}
              </span>
              <h3 className="text-xl font-serif font-semibold mt-3 mb-3 group-hover:opacity-60 transition-opacity">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium border-b border-foreground hover:opacity-60 transition-opacity"
        >
          View all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
