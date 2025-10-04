import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/projects" },
  { name: "Writing", path: "/essays" },
  { name: "Now", path: "/now" },
  { name: "Notes", path: "/notes" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <Link 
              to="/" 
              className="font-sans text-base font-medium tracking-tight hover:opacity-50 transition-opacity uppercase"
            >
              Garv Khurana
            </Link>
            
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`font-sans text-sm font-light tracking-wider transition-opacity uppercase ${
                      location.pathname === item.path
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
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
      <main className="max-w-5xl mx-auto px-8 py-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-32">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <div className="flex justify-between items-center font-sans text-xs text-muted-foreground">
            <p className="tracking-wide">© 2025 Garv Khurana</p>
            <div className="flex gap-8">
              <a href="mailto:khurana.garv@gmail.com" className="hover:text-foreground transition-colors tracking-wide uppercase">
                Email
              </a>
              <a href="mailto:projects@garvkhurana.tech" className="hover:text-foreground transition-colors tracking-wide uppercase">
                Collaborate
              </a>
              <a href="https://linkedin.com/in/garvkhurana" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors tracking-wide uppercase">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
