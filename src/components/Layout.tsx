import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const primaryNavItems = [
  { name: "work", path: "/projects" },
  { name: "journey", path: "/journey" },
  { name: "philosophy", path: "/philosophy" },
  { name: "company", path: "/company" },
];

const secondaryNavItems = [
  { name: "now", path: "/now" },
  { name: "contact", path: "/contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [debugMode, setDebugMode] = useState(() => {
    const saved = localStorage.getItem('debugMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('debugMode', JSON.stringify(debugMode));
  }, [debugMode]);

  const toggleDebugMode = () => {
    setDebugMode(!debugMode);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/"
                className="font-mono text-sm font-medium hover:opacity-50 transition-opacity"
              >
                garv khurana
              </Link>
              <a
                href="https://wa.me/919810641489?text=Hi%20Garv%2C%20I%20found%20you%20through%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Garv on WhatsApp at +91 98106 41489"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 fill-current text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>+91 98106 41489</span>
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {primaryNavItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`font-mono text-sm transition-opacity ${
                        location.pathname === item.path
                          ? "opacity-100 underline"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {secondaryNavItems.map((item) => (
                  <li key={item.path} className="hidden md:inline-block">
                    <Link
                      to={item.path}
                      className={`font-mono text-sm transition-opacity ${
                        location.pathname === item.path
                          ? "opacity-100 underline"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* <button
                onClick={toggleDebugMode}
                className="font-mono text-xs px-3 py-1 border border-border hover:bg-accent transition-colors"
                title="Toggle monospace grid"
              >
                {debugMode ? "Grid: ON" : "Grid: OFF"}
              </button> */}
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className={`max-w-4xl mx-auto px-6 py-12 relative ${debugMode ? 'monospace-grid-bg' : ''}`}>
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 font-mono text-xs text-muted-foreground">
            <p>© 2026</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
              <Link to="/now" className="hover:text-foreground transition-colors">
                now
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                contact
              </Link>
              <span>·</span>
              <a href="mailto:khurana.garv@gmail.com" className="hover:text-foreground transition-colors">
                email
              </a>
              <span>·</span>
              <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                linkedin
              </a>
              <span>·</span>
              <a href="https://github.com/garvk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                github
              </a>
            </div>
          </div>
          <div className="mt-4 text-center font-mono text-xs text-muted-foreground opacity-60">
            <p>built with ai assistance from project notes and working history</p>
            <p className="mt-1">last update sep 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
