const About = () => {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-serif font-semibold mb-12 pb-6 border-b border-border">
          About
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl leading-relaxed">
            I'm a designer and technologist working at the intersection of digital products,
            systems thinking, and creative technology.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My work focuses on creating clarity from complexity—whether that's designing
            interfaces that feel intuitive, building systems that scale gracefully, or
            writing about the craft of making digital things.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I believe in the power of constraints, the importance of craft, and the idea
            that good design is often invisible. The best solutions emerge from deep
            understanding of problems, not from following trends or adding features.
          </p>
        </div>
      </section>

      <section className="pt-12 border-t border-border">
        <h2 className="text-2xl font-serif font-semibold mb-8">Currently</h2>
        
        <div className="space-y-6 text-muted-foreground">
          <div className="flex gap-4">
            <span className="text-foreground min-w-32">Work</span>
            <span>Leading design at [Company Name]</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-foreground min-w-32">Research</span>
            <span>Exploring computational design tools and AI-assisted creativity</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-foreground min-w-32">Reading</span>
            <span>Christopher Alexander, Donald Norman, Edward Tufte</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-foreground min-w-32">Building</span>
            <span>Open source design system components</span>
          </div>
        </div>
      </section>

      <section className="pt-12 border-t border-border">
        <h2 className="text-2xl font-serif font-semibold mb-8">Contact</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            The best way to reach me is via{" "}
            <a href="mailto:your@email.com" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
              email
            </a>
            . I'm also on{" "}
            <a href="https://twitter.com" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
              Twitter
            </a>
            {" "}and{" "}
            <a href="https://linkedin.com" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
              LinkedIn
            </a>
            .
          </p>
          
          <p className="text-sm">
            For project inquiries, please include details about timeline, scope, and budget.
            I typically respond within 2-3 business days.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
