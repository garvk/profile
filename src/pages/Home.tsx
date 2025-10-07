import { Link } from "react-router-dom";
import { ResumeDownload } from "@/components/ResumeDownload";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="py-4 space-y-6">
        <p className="text-base leading-relaxed max-w-2xl">
          building at the intersection of finance, risk, and ai systems.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          ai engineering leader and architect <a href="https://fractal.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">fractal.ai</a> working on multi-agent platforms. 
          <br />
          previously: risk frameworks for <a href="https://euler.finance/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">euler</a>, solopreneur behind a tech r&d service business, $250k+ in algorithmic trading product and services.
        </p>
        
        {/* CTA */}
        <div className="flex gap-4 pt-4">
          <ResumeDownload variant="primary" />
          <Link 
            to="/projects" 
            className="line-frame px-6 py-3 hover:bg-secondary transition-colors text-sm"
          >
            view projects
          </Link>
        </div>
      </section>

      {/* The Hook */}
      <section className="border-t border-border pt-12">
        <blockquote className="text-base leading-relaxed italic max-w-2xl">
          "why are we not employing actuarial skills outside insurance and pension?"
        </blockquote>
        <p className="text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          this question sparked a journey from actuarial science to self-taught coding to defi to ai. 
          each phase validated by market: $250k in services, protocol security work, enterprise ai platforms.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 gap-4 max-w-2xl">
        <Link 
          to="/projects" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">01</div>
          <div className="font-medium mb-2">work</div>
          <div className="text-xs text-muted-foreground">projects & experience</div>
        </Link>
        
        <Link 
          to="/journey" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">02</div>
          <div className="font-medium mb-2">journey</div>
          <div className="text-xs text-muted-foreground">2013 → 2025 timeline</div>
        </Link>
        
        <Link 
          to="/philosophy" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">03</div>
          <div className="font-medium mb-2">philosophy</div>
          <div className="text-xs text-muted-foreground">beliefs & approach</div>
        </Link>
        
        <Link 
          to="/company" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">04</div>
          <div className="font-medium mb-2">company</div>
          <div className="text-xs text-muted-foreground">in5 labs & vision</div>
        </Link>
      </section>

      {/* Recent Activity */}
      <section className="border-t border-border pt-12">
        <div className="text-xs text-muted-foreground mb-6">recent</div>
        <div className="space-y-4 max-w-2xl">
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">july 2025</span>
            <span className="text-sm">launched cogentiq multi-agent platform</span>
          </div>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">may 2025</span>
            <span className="text-sm">insightsin5: data insights for shopify store owners</span>
          </div>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">aug 2024</span>
            <span className="text-sm">released aggrag rag framework</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border pt-12">
        <div className="text-xs text-muted-foreground mb-6">connect</div>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">email</div>
            <div className="space-y-1 text-sm">
              <div>
                <a href="mailto:khurana.garv@gmail.com" className="hover:text-muted-foreground transition-colors underline">
                  khurana.garv@gmail.com
                </a>
              </div>
              <div>
                <a href="mailto:projects@garvkhurana.tech" className="hover:text-muted-foreground transition-colors underline">
                  projects@garvkhurana.tech
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-muted-foreground mb-1">professional</div>
            <div className="space-y-1 text-sm">
              <div>
                <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors underline">
                  linkedin.com/in/garvkhurana
                </a>
              </div>
              <div>
                <a href="https://github.com/garvk" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors underline">
                  github.com/garvk
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-muted-foreground mb-1">social</div>
            <div className="space-y-1 text-sm">
              <div>
                <a href="https://x.com/graveeup" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors underline">
                  x.com/graveeup
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/garvkhurana/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors underline">
                  instagram.com/garvkhurana
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
