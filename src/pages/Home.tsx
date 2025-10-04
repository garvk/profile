import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-32">
      {/* Hero Section - One sentence identity */}
      <section className="py-8 border-b border-border">
        <p className="text-2xl font-serif leading-relaxed max-w-3xl">
          Building ideas at the intersection of DeFi, risk modeling, and AI systems — writing about technology, design, and how we build better systems.
        </p>
      </section>

      {/* Recent Writing */}
      <section>
        <div className="line-decoration mb-10">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Recent Writing
          </h2>
        </div>
        <div className="space-y-12">
          {[
            {
              title: "Building Multi-Agentic Systems for DeFi Analysis",
              date: "March 2025",
              excerpt: "How autonomous agents can work together to analyze complex DeFi protocols, assess risks, and provide actionable insights in real-time.",
            },
            {
              title: "Risk Frameworks in Decentralized Finance",
              date: "February 2025",
              excerpt: "Developing comprehensive risk assessment tools for lending protocols. A case study from building the Euler Risk Framework.",
            },
            {
              title: "From RAG to Production: Lessons in AI Engineering",
              date: "January 2025",
              excerpt: "What I learned building real-world AI applications — beyond the tutorials, into the messy reality of production systems.",
            },
          ].map((essay) => (
            <article key={essay.title} className="group">
              <time className="font-sans text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                {essay.date}
              </time>
              <h3 className="text-xl font-serif font-semibold mb-3 group-hover:opacity-60 transition-opacity cursor-pointer">
                {essay.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {essay.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section>
        <div className="line-decoration mb-10">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Selected Work
          </h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              title: "cogentiq",
              role: "Founder & Lead Engineer",
              year: "2025",
              description: "Multi-agentic system for deep research and analysis using collaborative autonomous agents. Built on CrewAI and powered by LLMs for complex reasoning tasks.",
              tags: ["AI", "Agents", "RAG"],
            },
            {
              title: "aggrag",
              role: "Creator",
              year: "2025",
              description: "Automated RAG pipeline that monitors RSS feeds and generates context-aware summaries. Streamlines information consumption for technical research.",
              tags: ["AI", "Automation", "NLP"],
            },
            {
              title: "Euler Risk Framework",
              role: "DeFi Risk Analyst",
              year: "2024",
              description: "Comprehensive risk assessment system for Euler Finance lending protocol. Analyzes collateral quality, liquidity, and systemic risk factors.",
              tags: ["DeFi", "Risk", "Analysis"],
            },
            {
              title: "UniswapV3 Offline Simulator",
              role: "Developer",
              year: "2024",
              description: "Custom backtesting engine for Uniswap V3 liquidity provision strategies using historical blockchain data and concentrated liquidity mathematics.",
              tags: ["DeFi", "Simulation", "Research"],
            },
          ].map((project) => (
            <article key={project.title} className="line-frame p-6 hover:bg-secondary transition-colors group">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-serif font-semibold group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h3>
                <div className="flex items-baseline gap-4 font-sans text-xs text-muted-foreground">
                  <span className="uppercase tracking-wider">{project.year}</span>
                  <span>·</span>
                  <span className="uppercase tracking-wider">{project.role}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
