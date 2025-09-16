import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "About", href: "/about", type: "route" },
    { name: "Projects", href: "/projects", type: "route" },
    { name: "Skills", href: "#skills", type: "anchor" },
    { name: "Contact", href: "#contact", type: "anchor" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === "anchor" && location.pathname !== "/") {
      // If we're not on homepage and clicking an anchor link, go to homepage first
      window.location.href = "/" + item.href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-primary hover:text-primary-dark transition-colors">
            AJ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={location.pathname === "/" ? item.href : "/" + item.href}
                  className="text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={location.pathname === "/" ? item.href : "/" + item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors font-medium"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}