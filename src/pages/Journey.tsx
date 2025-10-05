const Journey = () => {
  const timeline = [
    {
      year: "2013",
      title: "the beginning",
      description: "graduated as an automobile engineer. started actuarial journey out of love for the syllabus.",
    },
    {
      year: "2014-2017",
      title: "foundation in actuarial science",
      description: "worked with rsa actuarial services on their group capital practice. studied the first 8 technical subjects, ct series. questioned why actuarial skills aren't employed outside insurance and pension — leading to a sabbatical year in march 2017.",
    },
    {
      year: "2017-2018",
      title: "self-learning & experimentation",
      description: "self-taught how to code. built algorithmic trading bots for crypto markets using google scripts, r, python, java. hired two engineers to help, but that didn't work out as intended. joined wework.",
    },
    {
      year: "2018-2019",
      title: "building the foundation",
      description: "laid the foundation of a full scale autonomous algorithmic trading system with a mentor.",
    },
    {
      year: "2019-2020",
      title: "validation & scale",
      description: "sold the trading system on upwork for $5000, proving the software works and adds value. this led to selling algo trading services on upwork. in less than two years, sold $250,000+ worth of services. all 5 star reviews. bootstrapped the development of the trading system.",
    },
    {
      year: "2020-2023",
      title: "establishing techmendous",
      description: "established techmendous as a tech service company to take on pioneering research and development initiatives across different domains, including actuarial science practice areas. enrolled 2 actuarial analysts who have gone on to be placed in bigger companies and universities.",
    },
    {
      year: "2021-2023",
      title: "deep dive into decentralized finance",
      description: "immersed in the defi ecosystem, applying actuarial and quantitative skills to blockchain protocols: risk management consultant & developer for euler protocol, developed euler risk framework, built euler scan protocol monitoring tool, conducted cost of attack analysis, created uniswapv3 offline simulator, worked on balancer protocol simulations, implemented ftso oracle integration, and continued algorithmic trading through topgun arbitrage platform.",
    },
    {
      year: "2023-present",
      title: "leading ai innovation",
      description: "took on role as lead architect at fractal.ai, leading the development of novel products using generative ai models. building cogentiq multi-agentic platform, underwriting risk product, and aggrag rag framework.",
    },
  ];

  return (
    <div className="space-y-16 max-w-3xl">
      <header>
        <h1 className="text-2xl font-semibold mb-4">journey</h1>
        <p className="text-sm text-muted-foreground">
          a personal narrative of transition from automobile engineering to actuarial science to technology and ai
        </p>
      </header>

      {/* The Hook */}
      <section className="line-frame p-8">
        <blockquote className="text-base leading-relaxed italic">
          "why are we not employing actuarial skills outside insurance and pension?"
        </blockquote>
        <p className="text-sm text-muted-foreground mt-4">
          this question sparked a sabbatical year in march 2017, leading to a complete transformation from actuarial science to self-taught software engineering, 
          defi protocol design, and ai systems architecture.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-0">
        {timeline.map((event, index) => (
          <div 
            key={event.year}
            className={`border-l-2 border-border pl-8 pb-12 relative ${
              index === timeline.length - 1 ? 'pb-0' : ''
            }`}
          >
            {/* Timeline marker */}
            <div className="absolute left-0 top-0 w-3 h-3 -ml-[7px] bg-primary rounded-full" />
            
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-medium">{event.year}</span>
                <h3 className="font-semibold">{event.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* What This Journey Reveals */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="text-lg font-semibold">what this journey reveals</h2>
        
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <div>
              <strong className="font-medium">self-taught excellence:</strong>
              <span className="text-sm text-muted-foreground"> transitioned from actuarial science to software engineering through self-learning</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <div>
              <strong className="font-medium">validation through market:</strong>
              <span className="text-sm text-muted-foreground"> built systems that clients were willing to pay for ($250k+ in services)</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <div>
              <strong className="font-medium">entrepreneurial spirit:</strong>
              <span className="text-sm text-muted-foreground"> founded and grew techmendous while maintaining technical excellence</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <div>
              <strong className="font-medium">innovation focus:</strong>
              <span className="text-sm text-muted-foreground"> constantly pushing boundaries — from traditional insurance to defi to ai</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <div>
              <strong className="font-medium">mentor & educator:</strong>
              <span className="text-sm text-muted-foreground"> enrolled and guided actuarial analysts who went on to bigger opportunities</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Journey;
