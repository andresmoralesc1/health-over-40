import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dumbbell, Heart, Brain, Zap } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const pillars: Pillar[] = [
  {
    id: "1",
    title: "Entrenamiento de Resistencia",
    description: "Protege tu densidad ósea y masa muscular (el órgano de la longevidad)",
    icon: <Dumbbell className="h-6 w-6" />,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: "2", 
    title: "Salud Metabólica",
    description: "Estrategias para mejorar tu VO₂ Max y sensibilidad a la insulina",
    icon: <Heart className="h-6 w-6" />,
    gradient: "from-red-600 to-pink-600"
  },
  {
    id: "3",
    title: "Equilibrio Hormonal", 
    description: "Navegando la perimenopausia y la optimización de la testosterona",
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    id: "4",
    title: "Recuperación Avanzada",
    description: "Biohacking aplicado: desde terapia de luz roja hasta optimización del sueño",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-yellow-600 to-orange-600"
  }
];

export default function LongevityPillars() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Los 4 Pilares de la Longevidad
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Basado en la ciencia más reciente de Medicina 3.0, estos pilares forman la base 
              de tu protocolo de salud para después de los 40.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Card key={pillar.id} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${pillar.gradient} text-white`}>
                  {pillar.icon}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-dashed">
            <CardHeader>
              <CardTitle className="text-2xl">
                Descarga el Protocolo de Inicio Rápido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                5 Hábitos para recuperar tu energía en 30 días basados en evidencia científica
              </p>
              <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600">
                Descargar Protocolo GRATIS
              </Button>
              <p className="text-xs text-muted-foreground">
                ✅ Sin coste • ✅ Basado en estudios revisados por pares • ✅ Aplicable inmediatamente
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}