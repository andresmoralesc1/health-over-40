import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                Trusted Health Information
              </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Optimiza tu Vitalidad:{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ciencia y Estrategia para la Salud después de los 40
              </span>
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              No se trata de "no envejecer", sino de envejecer con fuerza. 
              Transformamos la investigación clínica en protocolos de estilo de vida para tu mejor década.
            </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Get Daily Updates
              </Button>
              <Button variant="outline" size="lg">
                Watch Our Videos
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span>Research-Based</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-blue-600" />
                <span>50K+ Community</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4 text-purple-600" />
                <span>Expert Reviewed</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid gap-4">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Today's Health Tip
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Regular cardiovascular exercise can reduce heart disease risk by up to 35% 
                    in adults over 40. Even 30 minutes of daily walking makes a difference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}