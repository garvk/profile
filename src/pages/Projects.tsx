const Projects = () => {
  const projects = [
    {
      title: "cogentiq",
      year: "2024-present",
      status: "active",
      role: "lead architect",
      description: "multi-agentic ai platform at fractal.ai enabling enterprise-grade ai solutions. platform architecture, multi-agent orchestration, and enterprise integration strategy.",
      tags: ["ai/ml", "multi-agent", "enterprise"],
      link: "https://fractal.ai/products/cogentiq/",
    },
    {
      title: "aggrag",
      year: "2024-present",
      status: "active",
      role: "author",
      description: "framework to configure, run, compare, and deploy multiple rag pipelines in a unified experiment-to-production stack.",
      tags: ["rag", "ai/ml", "python", "open source"],
      link: "null",
    },
    {
      title: "underwriting risk (private to fractal)",
      year: "2024-present",
      status: "active",
      role: "lead tech & product",
      description: "vertical solution built on cogentiq for automated underwriting risk assessment. ai-powered risk analysis and integration with existing systems.",
      tags: ["ai/ml", "risk", "enterprise"],
      link: null,
    },
    {
      title: "insightsin5",
      year: "2024-present",
      status: "active",
      role: "founder",
      description: "ai assistant for shopify store owners to derive actionable business insights. automated analysis and natural language to sql.",
      tags: ["ai/ml", "analytics", "saas"],
      link: "https://in5yourideas.com/",
    },
    {
      title: "ner from research papers (private to nvidia)",
      year: "2024",
      status: "done",
      role: "researcher",
      description: "leveraging llms and rag to measure improvement against traditional ml baseline models for ner tasks.",
      tags: ["ai/ml", "nlp", "research"],
      link: null,
    },
    {
      title: "eulerswap",
      year: "2022-2025",
      status: "live",
      role: "early research",
      description: "automated market maker protocol. provided foundational research for protocol design, amm mechanism analysis, and risk modeling during early phase.",
      tags: ["defi", "amm", "protocol"],
      link: "https://euler.finance/blog/introducing-eulerswap",
    },
    {
      title: "euler risk framework",
      year: "2022-2023",
      status: "archived",
      role: "risk consultant",
      description: "comprehensive risk management framework for euler protocol (defi lending). collateral risk assessment, liquidity modeling, oracle risk evaluation.",
      tags: ["defi", "risk", "security"],
      link: "https://app.euler.finance/?network=ethereum",
    },
    {
      title: "uniswapv3 simulator",
      year: "2022",
      status: "archived",
      role: "co-researcher",
      description: "offline simulation tool for uniswapv3 combined with security research analyzing economic cost of attacking defi protocols.",
      tags: ["defi", "security", "simulation"],
      link: "https://www.upwork.com/freelancers/~017ed41056604e814a?p=1657984625103192064",
      collaborator: "ravjot singh anand",
    },
    {
      title: "ftso oracle",
      year: "2023",
      status: "archived",
      role: "developer",
      description: "oracle implementation and integration for flare time series oracle. data provider implementation and smart contract integration.",
      tags: ["blockchain", "oracle", "infrastructure"],
      link: null,
    },
    {
      title: "balancer simulations",
      year: "2022",
      status: "archived",
      role: "researcher",
      description: "protocol simulation and analysis tools for balancer defi platform. pool simulation, liquidity provider analysis, price impact modeling.",
      tags: ["defi", "simulation", "python"],
      link: null,
    },
    {
      title: "gravyup",
      year: "2017-2023",
      status: "archived",
      role: "founder",
      description: "algorithmic trading platform for cryptocurrency and stock markets. six years of operation providing automated trading services.",
      tags: ["trading", "algorithms", "crypto"],
      link: null,
    },
    {
      title: "topgun",
      year: "2017-2020",
      status: "archived",
      role: "founder",
      description: "cryptocurrency arbitrage platform identifying and executing profitable opportunities across exchanges.",
      tags: ["trading", "arbitrage", "crypto"],
      link: null,
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold mb-4">work</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          selected projects spanning defi protocol design, ai systems architecture, 
          risk management frameworks, and algorithmic trading.
        </p>
      </section>

      <section className="space-y-6">
        {projects.map((project) => (
          <article 
            key={project.title}
            className="line-frame p-6 hover:border-strong transition-colors group"
          >
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <h2 className="text-lg font-semibold">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <div className="flex items-baseline gap-3 text-xs text-muted-foreground">
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.status}</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mb-3">{project.role}</div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            {project.collaborator && (
              <p className="text-xs text-muted-foreground mb-3">
                collaborator: {project.collaborator}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs text-muted-foreground"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="pt-8 border-t border-border text-xs text-muted-foreground">
        <p>
          for detailed case studies or collaboration:{" "}
          <a href="mailto:projects@garvkhurana.tech" className="text-foreground underline">
            projects@garvkhurana.tech
          </a>
        </p>
      </section>
    </div>
  );
};

export default Projects;
