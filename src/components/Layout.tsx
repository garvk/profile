import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "work", path: "/projects" },
  { name: "journey", path: "/journey" },
  { name: "philosophy", path: "/philosophy" },
  { name: "company", path: "/company" },
  { name: "now", path: "/now" },
  { name: "contact", path: "/contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

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
            
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
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
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center font-mono text-xs text-muted-foreground">
            <p>© 2025</p>
            <div className="flex gap-6">
              <a href="mailto:khurana.garv@gmail.com" className="hover:text-foreground transition-colors">
                email
              </a>
              <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
