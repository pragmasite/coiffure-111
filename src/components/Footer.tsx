import { useLanguage } from "@/hooks/useLanguage";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Coiffure 111</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-background/70 hover:text-background transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-background/70 hover:text-background transition">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-background/70 hover:text-background transition">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41324667778" className="text-background/70 hover:text-background transition">
                  +41 32 466 77 78
                </a>
              </li>
              <li>
                <a href="mailto:coiffure.centonze@gmail.com" className="text-background/70 hover:text-background transition">
                  coiffure.centonze@gmail.com
                </a>
              </li>
              <li className="text-background/70 text-xs mt-4">
                Rue de la Chaumont 13<br />
                2900 Porrentruy, CH
              </li>
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <h4 className="font-medium mb-4">Nos avantages</h4>
            <ul className="space-y-2 text-xs text-background/70">
              <li>• {t.footer.discounts}</li>
              <li>• {t.footer.extras}</li>
              <li className="mt-4">
                <a href="https://www.facebook.com/Coiffure111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-background transition mb-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/coiffure_111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-background transition">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>
              &copy; {new Date().getFullYear()} Coiffure 111. {t.footer.copyright}
            </p>
            <p className="mt-4 md:mt-0 text-xs">
              Designed & built with <span className="text-accent">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
