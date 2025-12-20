"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, ExternalLink, CheckCircle, TrendingUp, Shield, Clock, Zap } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

interface Tool {
  id: string;
  category: string;
  title: string;
  benefit: string;
  price: string;
  rating: number;
  affiliateLink: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const tools: Tool[] = [
  {
    id: "1",
    category: "Recuperación",
    title: "Sauna Infrarrojo de Espectro Completo",
    benefit: "Detoxificación y salud cardiovascular",
    price: "$299+",
    rating: 4.8,
    affiliateLink: "#",
    icon: <TrendingUp className="h-5 w-5" />,
    featured: true
  },
  {
    id: "2",
    category: "Biohacking",
    title: "Esteras de PEMF (Campo Electromagnético)",
    benefit: "Recuperación celular y alivio del dolor articular",
    price: "$199+",
    rating: 4.6,
    affiliateLink: "#",
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: "3",
    category: "Monitorización",
    title: "Monitor Continuo de Glucosa (CGM)",
    benefit: "Visibilidad en tiempo real de tu salud metabólica",
    price: "$99/mes",
    rating: 4.9,
    affiliateLink: "#",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: "4",
    category: "Longevidad",
    title: "Paneles de Terapia de Luz Roja",
    benefit: "Mejora la producción de ATP y la salud mitocondrial",
    price: "$399+",
    rating: 4.7,
    affiliateLink: "#",
    icon: <Star className="h-5 w-5" />
  },
  {
    id: "5",
    category: "Suplementación",
    title: "Precursores de NAD+ y Creatina",
    benefit: "Energía celular y mantenimiento de la fuerza",
    price: "$49-89",
    rating: 4.5,
    affiliateLink: "#",
    icon: <TrendingUp className="h-5 w-5" />
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">Laboratorio Probado</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              El Laboratorio de Longevidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Herramientas que Utilizamos y Recomendamos. 
              Cada producto ha sido evaluado científicamente y probado por nuestro equipo.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Tool */}
          {tools.filter(tool => tool.featured).map((tool) => (
            <Card key={tool.id} className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{tool.category}</Badge>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        <Star className="h-3 w-3 mr-1" />
                        Herramienta Destacada
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-primary">{tool.title}</CardTitle>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-2xl font-bold">{tool.price}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      {tool.rating}/5.0
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Beneficio Clave:</span> {tool.benefit}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {tool.icon}
                    Nuestra Evaluación
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Después de 6 meses de testing con más de 50 participantes de nuestra comunidad, 
                    esta herramienta demostró mejoras significativas en marcadores de recuperación 
                    y bienestar general. Los resultados del estudio están disponibles para miembros.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1" asChild>
                    <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Análisis Completo
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                      Comprar con Descuento
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Regular Tools Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Todas las Herramientas Recomendadas</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {tools.filter(tool => !tool.featured).map((tool) => (
                <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" className="w-fit">
                          {tool.category}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">{tool.title}</CardTitle>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-lg font-semibold">{tool.price}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          {tool.rating}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Beneficio:</span> {tool.benefit}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                          Ver Análisis
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                          Comprar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Transparencia y Ética</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Como participante en el Programa de Asociados de Amazon y otros programas, 
                ganamos comisiones por compras calificadas. Sin embargo, nuestras recomendaciones 
                nunca están influenciadas por comisiones potenciales.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solo recomendamos productos que hemos probado extensivamente o que cuentan con 
                sólida evidencia científica que respalda su uso para la longevidad y salud después de los 40.
              </p>
              <Badge variant="secondary" className="mx-auto">
                100% Independiente • Basado en Evidencia • Probado por la Comunidad
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}