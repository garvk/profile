import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Essays", path: "/essays" },
  { name: "Projects", path: "/projects" },
  { name: "Notes", path: "/notes" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <nav className="flex items-baseline justify-between">
            <Link 
              to="/" 
              className="text-2xl font-serif font-semibold tracking-tight hover:opacity-60 transition-opacity"
            >
              Your Name
            </Link>
            
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-opacity ${
                      location.pathname === item.path
                        ? "opacity-100 border-b border-foreground"
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
      <main className="max-w-4xl mx-auto px-6 py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 Your Name</p>
            <div className="flex gap-6">
              <a href="mailto:your@email.com" className="hover:text-foreground transition-colors">
                Email
              </a>
              <a href="https://twitter.com" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
