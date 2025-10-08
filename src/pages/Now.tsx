const Now = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold mb-4">now</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          what i'm currently focused on — updated regularly.
        </p>
      </section>

      <section className="space-y-8">
        <article className="pb-6 border-b border-border">
          <h2 className="text-xs text-muted-foreground mb-4">building</h2>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium mb-1">cogentiq</div>
              <p className="text-muted-foreground">
                developed multi-agentic system where ai agents can be configured for business intelligence workflows.
              </p>
            </div>
            <div>
              <div className="font-medium mb-1">underwriting risk platform</div>
              <p className="text-muted-foreground">
                building automated underwriting risk analysis agents combining traditional 
                actuarial models with ml. working on implementing the solution using deep agents architecture, including chat/agent mode, file tools, mcp tools etc.
              </p>
            </div>
            <div>
              <div className="font-medium mb-1">insightsin5</div>
              <p className="text-muted-foreground">
                ai-powered business intelligence platform distilling complex data into simple actionable insights for shopify store owners.
              </p>
            </div>
          </div>
        </article>

        {/* <article className="pb-6 border-b border-border">
          <h2 className="text-xs text-muted-foreground mb-4">learning</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              deep diving into agentic ai architectures — studying react, autogpt, 
              and crewai patterns.
            </p>
            <p>
              reading extensively about risk modeling in defi — especially oracle 
              manipulation, liquidation cascades, and protocol composability risks.
            </p>
            <p>
              studying information architecture and building better knowledge systems. 
              currently reading "how to take smart notes" by sönke ahrens.
            </p>
          </div>
        </article> */}

        {/* <article className="pb-6 border-b border-border">
          <h2 className="text-xs text-muted-foreground mb-4">research interests</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>→ multi-agent systems augmenting human decision-making</li>
            <li>→ risk assessment frameworks for novel defi primitives</li>
            <li>→ tools for thought and personal knowledge management</li>
            <li>→ actuarial science meets ml for automated underwriting</li>
          </ul>
        </article> */}

        <article>
          <h2 className="text-xs text-muted-foreground mb-4">location & availability</h2>
          <p className="text-sm text-muted-foreground mb-3">
            currently based in india, working remotely. open to consulting in 
            defi risk analysis, ai system design, and technical advisory roles.
          </p>
          <p className="text-xs text-muted-foreground">
            last updated: march 2025
          </p>
        </article>
      </section>

      <section className="pt-6 border-t border-border text-xs text-muted-foreground">
        <p>
          inspired by{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline">
            /now page movement
          </a>
          . snapshot of current priorities, not comprehensive list.
        </p>
      </section>
    </div>
  );
};

export default Now;
