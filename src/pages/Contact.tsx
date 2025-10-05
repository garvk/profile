import { ResumeDownload } from "@/components/ResumeDownload";

const Contact = () => {
  return (
    <div className="space-y-16 max-w-2xl">
      <header>
        <h1 className="text-2xl font-semibold mb-4">contact</h1>
        <p className="text-sm text-muted-foreground">
          if my work or philosophy resonates with you, let's connect
        </p>
      </header>

      {/* Contact Information */}
      <section className="space-y-6">
        <div className="space-y-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">personal</div>
            <a 
              href="mailto:khurana.garv@gmail.com" 
              className="text-sm hover:opacity-60 transition-opacity underline"
            >
              khurana.garv@gmail.com
            </a>
          </div>
          
          <div>
            <div className="text-xs text-muted-foreground mb-1">projects & collaboration</div>
            <a 
              href="mailto:projects@garvkhurana.tech" 
              className="text-sm hover:opacity-60 transition-opacity underline"
            >
              projects@garvkhurana.tech
            </a>
          </div>
          
          <div>
            <div className="text-xs text-muted-foreground mb-1">professional network</div>
            <a 
              href="https://linkedin.com/in/garvkhurana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity underline"
            >
              linkedin.com/in/garvkhurana
            </a>
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="border-t border-border pt-12">
        <div className="space-y-4">
          <div>
            <div className="text-xs text-muted-foreground mb-3">resume</div>
            <ResumeDownload variant="primary" />
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="border-t border-border pt-12">
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground">current role</div>
          <div className="space-y-2">
            <p className="text-sm">lead architect at fractal.ai</p>
            <p className="text-sm text-muted-foreground">building multi-agentic platforms for enterprise ai solutions</p>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="border-t border-border pt-12">
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground">company</div>
          <div className="space-y-2">
            <p className="text-sm">in5 labs (formerly techmendous)</p>
            <p className="text-sm text-muted-foreground">invention laboratory focused on commercializing academic research</p>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="border-t border-border pt-12">
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground">collaboration areas</div>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">defi protocol design & risk management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">multi-agent ai systems architecture</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">rag pipelines & llm applications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">algorithmic trading & quantitative finance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground">•</span>
              <span className="text-sm">actuarial applications in technology</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-border pt-12">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">location</div>
          <p className="text-sm">gurugram, india</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
