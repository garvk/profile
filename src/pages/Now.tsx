const Now = () => {
  return (
    <div className="space-y-16">
      <section>
        <div className="line-decoration mb-8">
          <h1 className="text-4xl font-serif font-semibold">
            What I'm doing now
          </h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          This is a living document of my current focus areas — what I'm building, 
          learning, and exploring. Updated regularly.
        </p>
      </section>

      <section className="space-y-12">
        <article className="pb-8 border-b border-border">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Building
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">cogentiq</h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing a multi-agentic research system where AI agents collaborate 
                to conduct deep analysis. Currently refining the agent coordination layer 
                and optimizing for complex reasoning tasks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">Underwriting Risk Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building automated underwriting analysis tools that combine traditional 
                actuarial models with machine learning. Working on document intelligence 
                and risk scoring algorithms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">insightsin5</h3>
              <p className="text-muted-foreground leading-relaxed">
                An AI-powered news analysis platform that distills complex stories into 
                five key insights. Experimenting with summarization models and information extraction.
              </p>
            </div>
          </div>
        </article>

        <article className="pb-8 border-b border-border">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Learning
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Deep diving into agentic AI architectures — studying ReAct, AutoGPT, and 
              CrewAI patterns. Exploring how agents can maintain context and collaborate 
              effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Reading extensively about risk modeling in DeFi — especially around 
              oracle manipulation, liquidation cascades, and protocol composability risks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Studying information architecture and how to build better knowledge systems. 
              Currently reading "How to Take Smart Notes" by Sönke Ahrens.
            </p>
          </div>
        </article>

        <article className="pb-8 border-b border-border">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Research Interests
          </h2>
          <ul className="space-y-3">
            <li className="text-muted-foreground leading-relaxed">
              • How multi-agent systems can augment human decision-making in complex domains
            </li>
            <li className="text-muted-foreground leading-relaxed">
              • Risk assessment frameworks for novel DeFi primitives
            </li>
            <li className="text-muted-foreground leading-relaxed">
              • Building better tools for thought — personal knowledge management and note-taking systems
            </li>
            <li className="text-muted-foreground leading-relaxed">
              • The intersection of actuarial science and machine learning for automated underwriting
            </li>
          </ul>
        </article>

        <article>
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Location & Availability
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Currently based in India, working remotely on various projects. Open to 
            consulting opportunities in DeFi risk analysis, AI system design, and 
            technical advisory roles.
          </p>
          <p className="text-sm text-muted-foreground">
            <em>Last updated: March 2025</em>
          </p>
        </article>
      </section>

      <section className="pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Inspired by Derek Sivers' <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">/now page movement</a>. 
          This is a snapshot of my current priorities — not a comprehensive list of everything I do, 
          but rather what deserves my focused attention right now.
        </p>
      </section>
    </div>
  );
};

export default Now;
