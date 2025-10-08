import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
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

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Link 
              to="/" 
              className="font-mono text-sm font-medium hover:opacity-50 transition-opacity"
            >
              garv khurana
            </Link>
            
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
              
              <button
                onClick={cycleTheme}
                className="font-mono text-xs px-3 py-1 border border-border hover:bg-accent transition-colors"
                title="Cycle theme: light → dark → system"
              >
                {theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'system'}
              </button>
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
            <p>© 2025</p>
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
        </div>
      </footer>
    </div>
  );
};
