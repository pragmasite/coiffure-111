import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, lang, allLangs, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#a-propos", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#horaires", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Coiffure 111
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled
                  ? "text-foreground"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/10">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <select
              value={lang}
              onChange={(e) => {
                const newLang = e.target.value as any;
                window.location.href = getLangPath(newLang);
              }}
              className={`bg-transparent border-0 text-sm font-medium cursor-pointer outline-none ${
                isScrolled
                  ? "text-foreground"
                  : "text-white"
              }`}
            >
              {allLangs.map((l) => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Call Button */}
          <Button
            asChild
            size="sm"
            className={isScrolled ? "" : "bg-primary hover:bg-primary/90"}
          >
            <a href="tel:+41324667778">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <select
                  value={lang}
                  onChange={(e) => {
                    const newLang = e.target.value as any;
                    window.location.href = getLangPath(newLang);
                  }}
                  className="flex-1 bg-muted border-0 text-sm font-medium cursor-pointer rounded outline-none px-2 py-1"
                >
                  {allLangs.map((l) => (
                    <option key={l} value={l}>
                      {l.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <Button asChild className="w-full">
                <a href="tel:+41324667778">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
