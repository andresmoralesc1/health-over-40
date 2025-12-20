"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Zap, Shield, CheckCircle, Users, TrendingUp, Play, Clock } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

export default function RecoveryPage() {
  const recoveryProtocols = [
    {
      id: 1,
      icon: <Brain className="h-6 w-6" />,
      title: "Sleep Optimization",
      description: "El 80% de la recuperación ocurre durante el sueño. Protocolos basados en neurociencia para maximizar reparación celular.",
      image: "/images/recovery-therapy.jpg",
      duration: "8 semanas",
      difficulty: "Principiante",
      benefits: ["Hormona de crecimiento", "Reparación celular", "Plasticidad cerebral", "Memoria"],
      stats: [
        { metric: "Horas sueño profundo", improvement: "+45%" },
        { metric: "Recuperación muscular", improvement: "+60%" },
        { metric: "Función cognitiva", improvement: "+35%" }
      ],
      protocol: "sleep-optimization",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      icon: <Zap className="h-6 w-6" />,
      title: "Mitochondrial Enhancement",
      description: "Optimiza las centrales de energía celular. Protocolos para revertir el envejecimiento mitocondrial y aumentar ATP.",
      image: "/images/protocols-medical.jpg",
      duration: "12 semanas",
      difficulty: "Intermedio",
      benefits: ["Energía celular", "Longevidad", "Función metabólica", "Rendimiento"],
      stats: [
        { metric: "Producción ATP", improvement: "+120%" },
        { metric: "Eficiencia mitocondrial", improvement: "+80%" },
        { metric: "Oxidación reducida", improvement: "-65%" }
      ],
      protocol: "mitochondrial-enhancement",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: <Heart className="h-6 w-6" />,
      title: "Inflammation Control",
      description: "La inflamación crónica acelera el envejecimiento. Protocolos para reducir marcadores inflamatorios sistémicos.",
      image: "/images/recovery-therapy.jpg",
      duration: "6 semanas",
      difficulty: "Principiante",
      benefits: ["Salud cardiovascular", "Salud cerebral", "Articulaciones", "Sistema inmune"],
      stats: [
        { metric: "CRP inflamatorio", improvement: "-70%" },
        { metric: "Dolor crónico", improvement: "-55%" },
        { metric: "Energía diaria", improvement: "+40%" }
      ],
      protocol: "inflammation-control",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      icon: <Shield className="h-6 w-6" />,
      title: "Hormone Reset",
      description: "Optimización hormonal específica para mayores de 40. Restaura niveles óptimos para longevidad.",
      image: "/images/hormones-balance.jpg",
      duration: "16 semanas",
      difficulty: "Avanzado",
      benefits: ["Vigor", "Composición corporal", "Estado de ánimo", "Libido"],
      stats: [
        { metric: "Testosterona libre", improvement: "+85%" },
        { metric: "Balance cortisol/DHEA", improvement: "+90%" },
        { metric: "Función tiroidea", improvement: "+50%" }
      ],
      protocol: "hormone-reset",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Laboratorio de Recuperación
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Protocolos de 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Recuperación Avanzada
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Basado en neurociencia del sueño y metabolismo celular. 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Recupera más rápido</span>, 
              rinde más alto y envejece más lento.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Basado en evidencia
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                6-16 semanas
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                10,000+ usuarios
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Protocols */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {recoveryProtocols.map((protocol) => (
              <Card 
                key={protocol.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ 
                  animationDelay: `${protocol.id * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Protocol Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={protocol.image}
                    alt={protocol.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Protocol Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${protocol.color} text-white text-xs font-medium`}>
                      {protocol.duration}
                    </Badge>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs">
                      {protocol.difficulty}
                    </Badge>
                  </div>

                  {/* Protocol Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg`}>
                      <div className={`bg-gradient-to-r ${protocol.color} bg-clip-text text-transparent`}>
                        {protocol.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{protocol.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {protocol.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Beneficios Principales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {protocol.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      Mejoras Comprobadas:
                    </h4>
                    <div className="space-y-2">
                      {protocol.stats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{stat.metric}</span>
                          <span className="font-bold text-sm text-emerald-600">{stat.improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className={`w-full bg-gradient-to-r ${protocol.color} hover:opacity-90 transition-all duration-300 group-hover:scale-105`}>
                    <Play className="h-4 w-4 mr-2" />
                    Comenzar Protocolo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Recuperación es la Clave del Rendimiento
            </h2>
            <p className="text-lg text-muted-foreground">
              El 80% del progreso ocurre durante la recuperación. Nuestros protocolos 
              están diseñados para maximizar cada minuto de descanso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Evaluación Personalizada
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                Todos los Protocolos
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