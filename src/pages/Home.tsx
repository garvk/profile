import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="py-4">
        <p className="text-base leading-relaxed max-w-2xl">
          building at the intersection of defi, risk, and ai systems.
          <br />
          <br />
          lead architect at fractal.ai working on multi-agent platforms. 
          previously: risk frameworks for euler, protocol simulations, algorithmic trading.
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
          to="/now" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">02</div>
          <div className="font-medium mb-2">now</div>
          <div className="text-xs text-muted-foreground">current focus</div>
        </Link>
        
        <Link 
          to="/notes" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">03</div>
          <div className="font-medium mb-2">notes</div>
          <div className="text-xs text-muted-foreground">thoughts & ideas</div>
        </Link>
        
        <Link 
          to="/about" 
          className="line-frame p-4 hover:bg-secondary transition-colors group"
        >
          <div className="text-xs text-muted-foreground mb-1">04</div>
          <div className="font-medium mb-2">about</div>
          <div className="text-xs text-muted-foreground">background & contact</div>
        </Link>
      </section>

      {/* Recent Activity */}
      <section className="border-t border-border pt-12">
        <div className="text-xs text-muted-foreground mb-6">recent</div>
        <div className="space-y-4 max-w-2xl">
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">mar 2025</span>
            <span className="text-sm">launched cogentiq multi-agent platform</span>
          </div>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">feb 2025</span>
            <span className="text-sm">research: ner with llms vs traditional ml</span>
          </div>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground min-w-24">jan 2025</span>
            <span className="text-sm">released aggrag rag framework</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border pt-12">
        <div className="text-xs text-muted-foreground mb-6">connect</div>
        <div className="space-y-2 text-sm">
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
          <div>
            <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors underline">
              linkedin.com/in/garvkhurana
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
