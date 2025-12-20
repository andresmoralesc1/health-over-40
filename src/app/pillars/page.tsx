"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Heart, Brain, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";
import { useState } from "react";

export default function PillarsPage() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      icon: <Shield className="h-8 w-8" />,
      title: "Resistance Training",
      subtitle: "Fundación de la Longevidad",
      description: "La masa muscular es el biomarcador más importante del envejecimiento biológico. Cada década después de los 30, perdemos 3-8% si no entrenamos.",
      image: "/images/pillars-strength.jpg",
      benefits: [
        "Previene la sarcopenia",
        "Mejora la sensibilidad a la insulina", 
        "Aumenta la densidad ósea",
        "Optimiza hormonas anabólicas"
      ],
      stats: [
        { label: "Longevidad +7 años", value: "Meta-análisis 2023" },
        { label: "Reducción de mortalidad", value: "-23%" },
        { label: "Calidad de vida", value: "+40%" }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      icon: <Zap className="h-8 w-8" />,
      title: "Metabolic Health",
      subtitle: "Energía Celular Optimizada",
      description: "El metabolismo celular determina tu edad biológica. Los protocols correctos pueden reducir tu edad metabólica en 10-15 años.",
      image: "/images/hormones-balance.jpg",
      benefits: [
        "Optimiza mitocondrias",
        "Reduce edad metabólica",
        "Mejora sensibilidad a la insulina",
        "Aumenta energía celular"
      ],
      stats: [
        { label: "Mitochondrial efficiency", value: "+22%" },
        { label: "Insulin sensitivity", value: "+35%" },
        { label: "Cellular energy", value: "+45%" }
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: <Heart className="h-8 w-8" />,
      title: "Hormonal Balance",
      subtitle: "Regulación Endocrina Precisa",
      description: "Las hormonas son los mensajeros químicos del envejecimiento. El balance óptimo retrasa el envejecimiento biológico.",
      image: "/images/hormones-balance.jpg",
      benefits: [
        "Optimiza testosterona/libido",
        "Equilibra cortisol/DHEA",
        "Mejora función tiroidea",
        "Regula estrógenos/progesterona"
      ],
      stats: [
        { label: "Vigor sexual", value: "+60%" },
        { label: "Manejo del estrés", value: "+45%" },
        { label: "Sueño profundo", value: "+35%" }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced Recovery",
      subtitle: "Regeneración Acelerada",
      description: "La recuperación determina los resultados. El 80% del progreso ocurre durante el sueño y descanso.",
      image: "/images/recovery-therapy.jpg",
      benefits: [
        "Optimiza sueño profundo",
        "Acelera recuperación muscular",
        "Reduce inflamación crónica",
        "Mejora plasticidad cerebral"
      ],
      stats: [
        { label: "Calidad del sueño", value: "+55%" },
        { label: "Recuperación", value: "+40%" },
        { label: "Función cognitiva", value: "+30%" }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Fundamentos Científicos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Los 4 Pilares de la 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Longevidad Óptima
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Basado en 10,000+ estudios revisados por pares. Estos son los únicos 4 pilares que 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> realmente importan </span>
              para revertir tu edad biológica después de los 40.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <Card 
                key={pillar.id}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  activePillar === pillar.id ? 'ring-2 ring-offset-2' : ''
                }`}
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                style={{ 
                  animationDelay: `${pillar.id * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Pillar Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>
                  
                  {/* Pillar Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                        {pillar.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-medium">
                      Pilar {pillar.id}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-2xl font-bold">{pillar.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">{pillar.subtitle}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group-hover:scale-110 transition-transform duration-300"
                    >
                      <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                        activePillar === pillar.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">{pillar.description}</p>
                  
                  {/* Expanded Content */}
                  {activePillar === pillar.id && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-emerald-600" />
                          Beneficios Comprobados
                        </h4>
                        <div className="grid gap-2">
                          {pillar.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          Resultados Comprobados
                        </h4>
                        <div className="grid gap-3">
                          {pillar.stats.map((stat, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">{stat.label}</span>
                              <span className="font-bold text-emerald-600">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Comienza tu Transformación Hoy
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada día que esperas, tu edad biológica avanza. Comienza con el pilar más importante 
              para tu situación actual y avanza paso a paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Iniciar Evaluación Gratuita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                Ver Protocolos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>
    </div>
  );
}