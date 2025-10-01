const About = () => {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-serif font-semibold mb-12 pb-6 border-b border-border">
          About
        </h1>
        
        <div className="space-y-8 max-w-none">
          <p className="text-xl leading-relaxed">
            I'm Garv Khurana, working at the intersection of decentralized finance, 
            risk management, and artificial intelligence.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My background spans actuarial science, DeFi protocol design, and full-stack development. 
            I've built risk frameworks for lending protocols, designed oracle implementations, 
            and now lead architecture for multi-agentic AI systems at Fractal.ai.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I believe in rigorous thinking, elegant systems, and the power of first principles. 
            Whether analyzing protocol security, modeling economic attacks, or building AI platforms, 
            I focus on understanding complexity deeply enough to create clarity.
          </p>
        </div>
      </section>

      <section className="pt-12 border-t border-border">
        <h2 className="text-3xl font-serif font-semibold mb-10">Currently</h2>
        
        <div className="space-y-8 text-muted-foreground">
          <div className="flex gap-6 border-l-2 border-line-subtle pl-6">
            <span className="text-foreground font-medium min-w-40">cogentiq</span>
            <span className="leading-relaxed">
              Lead Architect at Fractal.ai building multi-agentic platform for enterprise AI solutions. 
              <a href="https://cogentiq.fractal.ai" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity ml-1">
                cogentiq.fractal.ai
              </a>
            </span>
          </div>
          
          <div className="flex gap-6 border-l-2 border-line-subtle pl-6">
            <span className="text-foreground font-medium min-w-40">Underwriting Risk</span>
            <span className="leading-relaxed">
              Lead Tech and Product Owner for AI-powered underwriting risk assessment platform built on cogentiq
            </span>
          </div>
          
          <div className="flex gap-6 border-l-2 border-line-subtle pl-6">
            <span className="text-foreground font-medium min-w-40">insightsin5</span>
            <span className="leading-relaxed">
              Building AI assistant for Shopify store owners to derive actionable business insights
            </span>
          </div>

          <div className="flex gap-6 border-l-2 border-line-subtle pl-6">
            <span className="text-foreground font-medium min-w-40">aggrag</span>
            <span className="leading-relaxed">
              Authored framework to configure, run, compare, and deploy multiple RAG pipelines in unified stack
            </span>
          </div>

          <div className="flex gap-6 border-l-2 border-line-subtle pl-6">
            <span className="text-foreground font-medium min-w-40">Research</span>
            <span className="leading-relaxed">
              Named Entity Recognition using LLMs/RAG, measuring improvements against ML baseline models
            </span>
          </div>
        </div>
      </section>

      <section className="pt-12 border-t border-border">
        <h2 className="text-3xl font-serif font-semibold mb-10">Background</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">DeFi & Blockchain:</span> Risk management frameworks for lending protocols, 
            oracle implementations, arbitrage strategies, and protocol security analysis. Previous work includes 
            Euler Risk Framework, Cost of Attack Analysis, and early research for EulerSwap.
          </p>

          <p>
            <span className="text-foreground font-medium">Actuarial Science:</span> Cost of attack analysis, 
            risk modeling and assessment, financial risk frameworks applied to decentralized systems.
          </p>

          <p>
            <span className="text-foreground font-medium">Software Development:</span> Full-stack development 
            with focus on Python and JavaScript. Six years running algorithmic trading platforms (Gravyup, Topgun). 
            Built simulation tools for UniswapV3 and Balancer protocols.
          </p>

          <p>
            <span className="text-foreground font-medium">Freelance:</span> Top Rated on Upwork with $250K+ 
            in combined earnings across DeFi, blockchain, and financial technology projects.
          </p>
        </div>
      </section>

      <section className="pt-12 border-t border-border">
        <h2 className="text-3xl font-serif font-semibold mb-10">Contact</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <p className="mb-2">
              <span className="text-foreground font-medium">General inquiries:</span>{" "}
              <a href="mailto:khurana.garv@gmail.com" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
                khurana.garv@gmail.com
              </a>
            </p>
            <p>
              <span className="text-foreground font-medium">Project requests:</span>{" "}
              <a href="mailto:projects@garvkhurana.tech" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
                projects@garvkhurana.tech
              </a>
            </p>
          </div>
          
          <p>
            Also on{" "}
            <a href="https://linkedin.com/in/garvkhurana" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
              LinkedIn
            </a>
            .
          </p>
          
          <p className="text-sm pt-4 border-t border-border">
            Based in Gurugram, India. Working with{" "}
            <span className="text-foreground">In5 Labs</span> (formerly Techmendous Inc.) and{" "}
            <span className="text-foreground">Fractal.ai</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;