"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Shield, Heart, ExternalLink, Phone, Mailbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-muted/30 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-from)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-to)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-5 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent hover-lift">
                Hacked Aging
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Science-backed longevity protocols translating Medicine 3.0 breakthroughs 
                into daily actionable steps for high-performance adults over 40.
              </p>
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://youtube.com/@hackedaging" 
                  className="p-2 bg-muted/50 rounded-lg hover:bg-muted hover-lift transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                </a>
                <a 
                  href="https://twitter.com/hackedaging" 
                  className="p-2 bg-muted/50 rounded-lg hover:bg-muted hover-lift transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </a>
                <a 
                  href="https://facebook.com/hackedaging" 
                  className="p-2 bg-muted/50 rounded-lg hover:bg-muted hover-lift transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
                <a 
                  href="https://linkedin.com/company/hacked-aging" 
                  className="p-2 bg-muted/50 rounded-lg hover:bg-muted hover-lift transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Protocols */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-600" />
              Protocols
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/pillars", label: "4 Pilares" },
                { href: "/protocols", label: "Protocolos" },
                { href: "/recovery", label: "Recuperación" },
                { href: "/research", label: "Investigación" },
                { href: "/blog", label: "Blog" },
                { href: "/tools", label: "Herramientas" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground hover-lift inline-flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              Aprendizaje
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Sobre Nosotros" },
                { href: "/blog", label: "Blog Científico" },
                { href: "/assessment", label: "Evaluación Gratuita" },
                { href: "/community", label: "Comunidad Discord" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground hover-lift inline-flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="h-4 w-4 text-red-500" />
              Soporte
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contacto Directo", icon: <Mailbox className="h-4 w-4" /> },
                { href: "/faq", label: "Preguntas Frecuentes", icon: <Shield className="h-4 w-4" /> },
                { href: "/consultation", label: "Consulta Personalizada", icon: <Phone className="h-4 w-4" /> },
                { href: "/refund", label: "Política de Reembolso", icon: <Shield className="h-4 w-4" /> }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground hover-lift inline-flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-600" />
              Newsletter Semanal
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe protocolos exclusivos y últimos avances en longevidad.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background text-sm"
                />
                <Button 
                  className="absolute right-1 top-1 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 h-10 w-10 p-0 transition-all duration-300 hover-lift"
                  aria-label="Suscribirse"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                ✨ Unete a 25,000+ optimizadores de salud
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Legal Section */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Medical Disclaimer */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-emerald-600" />
                Aviso Médico
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                La información proporcionada tiene <span className="font-semibold">propósitos educativos únicamente</span> 
                y no constituye consejo médico profesional. 
                <span className="font-medium text-foreground"> Siempre consulte</span> a su médico 
                antes de iniciar cualquier protocolo.
              </p>
            </div>

            {/* Affiliate Disclosure */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-red-500" />
                Divulgación Afiliada
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Este sitio contiene enlaces de afiliados. Podemos ganar 
                <span className="font-semibold text-foreground"> comisiones sin costo adicional</span> 
                para usted, apoyando nuestra investigación independiente y 
                <span className="font-medium text-emerald-600"> contenido gratuito</span>.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Phone className="h-4 w-4 text-blue-600" />
                Contacto Rápido
              </h5>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">📧 soporte@hackedaging.com</p>
                <p className="font-medium text-foreground">💬 Discord: /hackedaging</p>
                <p className="font-medium text-foreground">📺 YouTube: @hackedaging</p>
                <p className="font-medium text-foreground">🕒 Lunes-Viernes, 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-6 mt-8 text-center">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 Hacked Aging. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              🧬 Basado en evidencia • 🔬 Investigado independientemente • 🌟 Comunidad confiable
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacidad
              </Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Términos
              </Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}