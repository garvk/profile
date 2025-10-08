import { Link } from "react-router-dom";
import { ResumeDownload } from "@/components/ResumeDownload";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero/Intro */}
      <section className="py-4 space-y-6">
        <p className="text-base leading-relaxed max-w-2xl">
          i believe good systems outlast trends.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          whether in ai, risk, or design, i have built structures that turn complexity into clarity.
          <br />
          my work lives at the intersection of math, science, engineering clarity and aesthetic intent, where logic feels human and design feels inevitable.
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

      {/* Currently / Selected Work */}
      <section className="border-t border-border pt-12">
        <div className="text-xs text-muted-foreground mb-6">currently</div>
        
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
          ai engineering leader and architect at <a href="https://fractal.ai/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors underline">fractal.ai</a>, building ai frameworks for evaluation, guardrails and vertical solutions across different domains
          <br /><br />
          previously: risk frameworks for lending protocols, oracle implementations, and algorithmic trading systems generating $250k+ in services.
        </p>

        <div className="space-y-4 text-sm max-w-2xl">
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">cogentiq</span>
            <span className="text-muted-foreground flex-1">
              multi-agent platform for enterprise ai. 
              <a href="https://cogentiq.fractal.ai" target="_blank" rel="noopener noreferrer" className="text-foreground underline ml-1">
                cogentiq.fractal.ai
              </a>
            </span>
          </div>
          
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">underwriting</span>
            <span className="text-muted-foreground flex-1">
              ai-powered risk assessment for underwriting property insurance 
            </span>
          </div>
          
          <div className="flex gap-6">
            <span className="text-foreground min-w-32">insightsin5</span>
            <span className="text-muted-foreground flex-1">
              agents for shopify store owners to derive actionable data insights in minutes
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-foreground min-w-32">aggrag</span>
            <span className="text-muted-foreground flex-1">
              framework to configure, evaluate, and deploy ai workflows
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-foreground min-w-32">research</span>
            <span className="text-muted-foreground flex-1">
              entity recognition using llms/rag vs traditional ml models
            </span>
          </div>
        </div>
      </section>


      {/* Quick Links */}
      <section className="border-t border-border pt-12">
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
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
