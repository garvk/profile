import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="pt-12 pb-16 border-b border-border">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-8">
          DeFi, Risk, and
          <br />
          AI Systems
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          I work at the intersection of decentralized finance, risk management, and artificial intelligence. 
          Currently building multi-agentic AI platforms at Fractal.ai and exploring how LLMs can transform 
          traditional actuarial and financial systems.
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
              title: "Building Multi-Agentic Systems for Enterprise",
              date: "Coming Soon",
              excerpt: "Lessons from architecting cogentiq, a production-grade multi-agent platform serving enterprise clients.",
            },
            {
              title: "Risk Frameworks in DeFi",
              date: "Coming Soon",
              excerpt: "How traditional actuarial science applies to decentralized finance protocols, and where it breaks down.",
            },
            {
              title: "From RAG to Production",
              date: "Coming Soon",
              excerpt: "A practitioner's guide to building, comparing, and deploying retrieval-augmented generation pipelines at scale.",
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
              title: "cogentiq",
              type: "Active • Lead Architect",
              description: "Multi-agentic AI platform at Fractal.ai enabling enterprise AI solutions. Building the foundation for sophisticated AI-powered workflows.",
            },
            {
              title: "aggrag",
              type: "Active • Author",
              description: "Framework to configure, run, compare, and deploy multiple RAG pipelines. Unified experiment-to-production stack for retrieval systems.",
            },
            {
              title: "Euler Risk Framework",
              type: "Archived • Risk Consultant",
              description: "Comprehensive risk management framework for DeFi lending protocols. Security research and protocol monitoring tools.",
            },
            {
              title: "UniswapV3 Simulator",
              type: "Archived • Research",
              description: "Offline simulation tool and cost of attack analysis for DeFi protocols. Economic security modeling and risk assessment.",
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
