const About = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold mb-4">about</h1>
        <div className="space-y-4 max-w-2xl text-sm">
          <p>
            i'm garv khurana, working at the intersection of decentralized finance, 
            risk management, and artificial intelligence.
          </p>

          <p className="text-muted-foreground">
            background spans actuarial science, defi protocol design, and full-stack development. 
            i've built risk frameworks for lending protocols, designed oracle implementations, 
            and now lead architecture for multi-agentic ai systems at fractal.ai.
          </p>

          <p className="text-muted-foreground">
            i believe in rigorous thinking, elegant systems, and first principles. 
            whether analyzing protocol security, modeling economic attacks, or building ai platforms, 
            the goal is understanding complexity deeply enough to create clarity.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xs text-muted-foreground mb-6">currently</h2>
        
        <div className="space-y-4 text-sm max-w-2xl">
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">cogentiq</span>
            <span className="text-muted-foreground flex-1">
              lead architect at fractal.ai building multi-agentic platform for enterprise ai. 
              <a href="https://cogentiq.fractal.ai" className="text-foreground underline ml-1">
                cogentiq.fractal.ai
              </a>
            </span>
          </div>
          
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">underwriting</span>
            <span className="text-muted-foreground flex-1">
              lead tech and product for ai-powered underwriting risk assessment platform
            </span>
          </div>
          
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">insightsin5</span>
            <span className="text-muted-foreground flex-1">
              building ai assistant for shopify store owners to derive business insights
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-foreground min-w-32">aggrag</span>
            <span className="text-muted-foreground flex-1">
              framework to configure, run, compare, and deploy multiple rag pipelines
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-foreground min-w-32">research</span>
            <span className="text-muted-foreground flex-1">
              named entity recognition using llms/rag vs ml baseline models
            </span>
          </div>
        </div>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xs text-muted-foreground mb-6">background</h2>
        
        <div className="space-y-4 text-sm text-muted-foreground max-w-2xl">
          <p>
            <span className="text-foreground">defi & blockchain:</span> risk management frameworks for lending protocols, 
            oracle implementations, arbitrage strategies, protocol security analysis. previous work includes 
            euler risk framework, cost of attack analysis, early research for eulerswap.
          </p>

          <p>
            <span className="text-foreground">actuarial science:</span> cost of attack analysis, 
            risk modeling and assessment, financial risk frameworks applied to decentralized systems.
          </p>

          <p>
            <span className="text-foreground">software development:</span> full-stack development 
            with focus on python and javascript. six years running algorithmic trading platforms (gravyup, topgun). 
            built simulation tools for uniswapv3 and balancer protocols.
          </p>

          <p>
            <span className="text-foreground">freelance:</span> top rated on upwork with $250k+ 
            in combined earnings across defi, blockchain, and financial technology projects.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xs text-muted-foreground mb-6">contact</h2>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-muted-foreground">general: </span>
            <a href="mailto:khurana.garv@gmail.com" className="text-foreground underline">
              khurana.garv@gmail.com
            </a>
          </div>
          <div>
            <span className="text-muted-foreground">projects: </span>
            <a href="mailto:projects@garvkhurana.tech" className="text-foreground underline">
              projects@garvkhurana.tech
            </a>
          </div>
          <div>
            <span className="text-muted-foreground">linkedin: </span>
            <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
              linkedin.com/in/garvkhurana
            </a>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6 pt-6 border-t border-border">
          based in gurugram, india. working with in5 labs (formerly techmendous inc.) and fractal.ai.
        </p>
      </section>
    </div>
  );
};

export default About;
