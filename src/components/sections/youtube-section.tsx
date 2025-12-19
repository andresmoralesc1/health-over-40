import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const recentVideos: Video[] = [
  {
    id: "1",
    title: "VO₂ Max: El Mejor Predictor de Longevidad",
    description: "Análisis completo de por qué el VO₂ Max es crucial para tu salud después de los 40 y cómo mejorarlo.",
    thumbnail: "/api/placeholder/320/180",
    duration: "12:34",
    views: "15.2K"
  },
  {
    id: "2", 
    title: "Terapia de Luz Roja: ¿Realmente Funciona?",
    description: "Revisión de estudios clínicos sobre los efectos de la terapia de luz roja en la producción de ATP y longevidad.",
    thumbnail: "/api/placeholder/320/180",
    duration: "18:45",
    views: "8.7K"
  },
  {
    id: "3",
    title: "NAD+ y Longevidad: Mitos vs Evidencia",
    description: "Desmitificando los suplementos de NAD+ y analizando si realmente apoyan la longevidad celular.",
    thumbnail: "/api/placeholder/320/180", 
    duration: "22:18",
    views: "12.4K"
  }
];

export default function YouTubeSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Lo Último en YouTube
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Análisis profundo basado en evidencia científica. No superficialidades, solo contenido que transforma tu comprensión de la salud.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentVideos.map((video) => (
            <Card key={video.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="h-5 w-5 text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                  NEW
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm line-clamp-2 leading-tight">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {video.views} views
                  </span>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group">
            Suscribirse al Canal
            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            🔔 Activa las notificaciones para no perderte ningún análisis científico
          </p>
        </div>
      </div>
    </section>
  );
}