const Company = () => {
  return (
    <div className="space-y-16 max-w-3xl">
      <header>
        <h1 className="text-2xl font-semibold mb-4">techmendous & in5 labs</h1>
        <p className="text-sm text-muted-foreground">
          the evolution of a vision — from service company to invention laboratory
        </p>
      </header>

      {/* Core Philosophy */}
      <section className="line-frame p-8 space-y-4">
        <h2 className="text-lg font-semibold">invention for invention's sake</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          at the deepest level, in5 is driven by an intrinsic desire to <strong>invent</strong>. 
          not to build products for market demand. not to solve predefined problems. 
          but to <strong>invent for the pure joy and challenge of invention itself</strong>.
        </p>
        
      </section>

      {/* Evolution Timeline */}
      <section className="space-y-8">
        <h2 className="text-lg font-semibold">the evolution</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-border pl-6">
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-medium">may 2020</span>
                <h3 className="font-semibold">techmendous founded</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                established as a tech service company to take on pioneering research and development initiatives 
                across different domains, including actuarial science practice areas.
              </p>
              <p className="text-sm font-medium">"we provide r&d as a service"</p>
            </div>
          </div>

          <div className="border-l-2 border-border pl-6">
            <div className="space-y-3">
              <h3 className="font-semibold">in5. = inv. (invention)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                the company name <strong>in5.</strong> is shorthand for <strong>inv.</strong> — invention at its core.
                representing the practical application of a deeper drive to enable inventions and bring them to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statements */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="text-lg font-semibold">mission statements</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">01</span>
            <p className="text-sm">make existing science easy to comprehend</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">02</span>
            <p className="text-sm">make inventions</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="text-lg font-semibold">core values & guiding principles</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. uncompromising quality</h3>
            <p className="text-sm text-muted-foreground">pursue quality in everything throughout company's lifespan.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">2. focus on client</h3>
            <p className="text-sm text-muted-foreground">always do what's best for client and deliver beyond expectations.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">3. think unconventionally and act boldly</h3>
            <p className="text-sm text-muted-foreground">challenge the status quo, enter with boldness and execute with speed.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">4. learn and grow</h3>
            <p className="text-sm text-muted-foreground">nurture and grow exceptional professionals within team.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">5. build extreme trust and unshakable accountability</h3>
            <p className="text-sm text-muted-foreground">assume positive intent of others and hold each other accountable.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="text-lg font-semibold">what we do</h2>
        
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">prototype fabrication for others</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">proof-of-concept fabrication for others</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">•</span>
            <span className="text-sm">r&d as a service</span>
          </li>
        </ul>
      </section>

      {/* Long-Term Vision */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="text-lg font-semibold">long-term vision</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">01</span>
            <p className="text-sm">train scientists that become the best in the world</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">02</span>
            <p className="text-sm">always follow multidisciplinary approach; don't chase a tool but a moral vision</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">03</span>
            <p className="text-sm">provide world-class support and facilities</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">04</span>
            <p className="text-sm">pursue new areas of science — with an overall long-term vision to alleviate humans understanding of sciences viz. natural, formal and social</p>
          </div>
        </div>
      </section>

      {/* The Community */}
      <section className="border-t border-border pt-12 space-y-4">
        <h2 className="text-lg font-semibold">the community we build</h2>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          "we want to attract and expand a community of deep-thinking, scientific-minded, and mindfully-aware people who are street smarts"
        </p>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          we are a team of deep-thinkers, scientific-minded, and mindfully-aware people who are street smarts 
          and can empower most other communities to do whatever they want.
        </p>
      </section>

      {/* Embracing Foolhardy Ideas */}
      <section className="border-t border-border pt-12">
        <div className="line-frame p-6 space-y-4">
          <p className="text-sm leading-relaxed">
            "embracing foolhardy ideas to bring existing and revolutionary inventions to the market, 
            we are building a platform for the boundless exploration of academics, science, spirituality, and technology."
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            driven by a passion for knowledge and a desire to make a lasting impact, 
            we are committed to fostering a community of diverse individuals who are inspired to pursue their dreams 
            and push the boundaries of what is possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Company;
