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
    title: "Resistance Training",
    description: "Protect your bone density and muscle mass (the longevity organ)",
    icon: <Dumbbell className="h-6 w-6" />,
    gradient: "from-emerald-600 to-blue-600"
  },
  {
    id: "2", 
    title: "Metabolic Health",
    description: "Strategies to improve your VO₂ Max and insulin sensitivity",
    icon: <Heart className="h-6 w-6" />,
    gradient: "from-emerald-600 to-blue-600"
  },
  {
    id: "3",
    title: "Hormonal Balance", 
    description: "Navigating perimenopause and testosterone optimization",
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-emerald-600 to-blue-600"
  },
  {
    id: "4",
    title: "Advanced Recovery",
    description: "Applied biohacking: from red light therapy to sleep optimization",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-emerald-600 to-blue-600"
  }
];

export default function LongevityPillars() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              The 4 Pillars of Longevity
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Based on the latest Medicine 3.0 science, these pillars form the foundation 
              of your health protocol for after 40.
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
                Download Quick Start Protocol
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                5 habits to reclaim your energy in 30 days based on scientific evidence
              </p>
              <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-emerald-600 to-blue-600">
                Download FREE Protocol
              </Button>
              <p className="text-xs text-muted-foreground">
                ✅ No cost • ✅ Peer-reviewed studies • ✅ Immediate application
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}