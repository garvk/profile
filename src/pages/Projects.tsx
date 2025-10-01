const Projects = () => {
  const projects = [
    {
      title: "cogentiq",
      year: "2024-Present",
      status: "🟢 Active",
      role: "Lead Architect",
      description: "Multi-agentic AI platform at Fractal.ai enabling enterprise-grade AI solutions. Platform architecture, multi-agent orchestration, and enterprise integration strategy. Serves as foundation for multiple vertical solutions including underwriting risk products.",
      tags: ["AI/ML", "Multi-Agent Systems", "Enterprise", "Architecture"],
      link: "https://cogentiq.fractal.ai",
    },
    {
      title: "aggrag",
      year: "2024-Present",
      status: "🟢 Active",
      role: "Author",
      description: "Framework to configure, run, compare, and deploy multiple RAG (retrieval-augmented generation) pipelines in a unified experiment-to-production stack. Enables rapid experimentation and benchmarking of different RAG approaches.",
      tags: ["RAG", "AI/ML", "Framework", "Python"],
      link: null,
    },
    {
      title: "Underwriting Risk Product",
      year: "2024-Present",
      status: "🟢 Active",
      role: "Lead Tech & Product Owner",
      description: "Vertical solution built on cogentiq for automated underwriting risk assessment. AI-powered risk analysis, multi-factor assessment, and integration with existing underwriting systems. Streamlines underwriting processes with improved accuracy.",
      tags: ["AI/ML", "Risk Management", "Enterprise", "Product"],
      link: null,
    },
    {
      title: "insightsin5",
      year: "2024-Present",
      status: "🟢 Active",
      role: "Founder",
      description: "AI assistant for Shopify store owners to derive actionable business insights. Automated analysis, performance analytics, natural language to SQL, and customized recommendations for store optimization.",
      tags: ["AI/ML", "Business Analytics", "Shopify", "SaaS"],
      link: null,
    },
    {
      title: "Named Entity Recognition from News",
      year: "2024",
      status: "🟢 Done",
      role: "Researcher",
      description: "Leveraging LLMs and RAG to measure improvement against traditional ML baseline models for NER tasks. Comparing accuracy, cost-performance tradeoffs, and analyzing when LLMs should be preferred over traditional approaches.",
      tags: ["AI/ML", "NLP", "Research", "RAG"],
      link: null,
    },
    {
      title: "EulerSwap",
      year: "2022-2025",
      status: "🟢 Live",
      role: "Early Research",
      description: "Automated market maker (AMM) protocol. Provided foundational research for protocol design, AMM mechanism analysis, and risk modeling during early phase (Dec 2022 - May 2023). Protocol launched June 2025.",
      tags: ["DeFi", "AMM", "Protocol Design", "Risk"],
      link: null,
    },
    {
      title: "Euler Risk Framework",
      year: "2022-2023",
      status: "🔴 Archived",
      role: "Risk Consultant & Developer",
      description: "Comprehensive risk management framework for Euler Protocol (DeFi lending). Collateral risk assessment, liquidity modeling, oracle risk evaluation, smart contract analysis. Developed Euler Scan monitoring tool and cost of attack analysis framework.",
      tags: ["DeFi", "Risk Management", "Security", "Protocol"],
      link: null,
    },
    {
      title: "UniswapV3 Offline Simulator & Cost of Attack",
      year: "2022",
      status: "🔴 Archived",
      role: "Co-Researcher",
      description: "Offline simulation tool for UniswapV3 combined with security research analyzing economic cost of attacking DeFi protocols. Position modeling, price impact analysis, attack vector identification, and security margin calculation.",
      tags: ["DeFi", "Security", "Simulation", "Research"],
      link: "https://www.upwork.com/freelancers/~017ed41056604e814a?p=1657984625103192064",
      collaborator: "Ravjot Singh Anand",
    },
    {
      title: "FTSO Oracle",
      year: "2023",
      status: "🔴 Archived",
      role: "Developer",
      description: "Oracle implementation and integration for Flare Time Series Oracle (FTSO). Data provider implementation, smart contract integration, price feed reliability analysis, and data submission optimization.",
      tags: ["Blockchain", "Oracle", "Infrastructure"],
      link: null,
    },
    {
      title: "Balancer Simulations",
      year: "2022",
      status: "🔴 Archived",
      role: "Researcher",
      description: "Protocol simulation and analysis tools for Balancer DeFi platform. Pool simulation, liquidity provider analysis, price impact modeling, fee optimization, and impermanent loss calculations.",
      tags: ["DeFi", "Simulation", "Research", "Python"],
      link: null,
    },
    {
      title: "Gravyup",
      year: "2017-2023",
      status: "🔴 Archived",
      role: "Founder",
      description: "Algorithmic trading platform for cryptocurrency and stock markets. Six years of operation providing automated trading services with sophisticated algorithms, real-time market analysis, and automated execution across multiple market conditions.",
      tags: ["Trading", "Algorithms", "Crypto", "Stocks"],
      link: null,
    },
    {
      title: "Topgun - Arbitrage Trading",
      year: "2017-2020",
      status: "🔴 Archived",
      role: "Founder",
      description: "Cryptocurrency arbitrage platform identifying and executing profitable opportunities across exchanges. Multi-exchange monitoring, real-time price comparison, automated trade execution, and risk management.",
      tags: ["Trading", "Arbitrage", "Crypto", "Automation"],
      link: null,
    },
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-5xl font-serif font-semibold mb-8 pb-6 border-b border-border">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Selected work spanning DeFi protocol design, AI systems architecture, risk management frameworks, 
          and algorithmic trading. From early arbitrage systems to enterprise multi-agent platforms.
        </p>
      </section>

      <section className="space-y-12">
        {projects.map((project, index) => (
          <article 
            key={project.title}
            className="group"
          >
            <div className="border border-border p-8 hover:border-foreground transition-colors">
              <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.role}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs">{project.status}</span>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-semibold mb-4 group-hover:opacity-60 transition-opacity">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-foreground">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              {project.collaborator && (
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="text-foreground">Collaborator:</span> {project.collaborator}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-3 py-1.5 border border-border font-medium"
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
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            For detailed case studies, technical documentation, or collaboration inquiries, 
            reach out via{" "}
            <a href="mailto:projects@garvkhurana.tech" className="text-foreground border-b border-foreground hover:opacity-60 transition-opacity">
              projects@garvkhurana.tech
            </a>
          </p>
          <p className="text-sm">
            Additional projects and research available on request. Open to consulting on DeFi risk, 
            protocol design, AI systems architecture, and actuarial applications in blockchain.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;