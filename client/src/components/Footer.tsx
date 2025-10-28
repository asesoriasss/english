import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Copyright */}
          <div className="flex flex-col justify-center">
            <p className="text-sm">
              © 2025 Eccommitted – Institución Educativa Camilo Torres
            </p>
            <p className="text-sm mt-1 opacity-90">
              Todos los derechos reservados.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-3">Navegación</h3>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/" className="hover:opacity-80 transition-opacity" data-testid="link-footer-inicio">
                Inicio
              </a>
              <a
                href="/consejos"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-footer-consejos"
              >
                Consejos
              </a>
              <a href="/prae" className="hover:opacity-80 transition-opacity" data-testid="link-footer-prae">
                PRAE
              </a>
              <a
                href="/acciones"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-footer-acciones"
              >
                Acciones
              </a>
              <a
                href="/nosotros"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-footer-nosotros"
              >
                Nosotros
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <h3 className="font-semibold mb-3">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:eccommitted@camilotorres.edu.co"
                className="hover:opacity-80 transition-opacity"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
