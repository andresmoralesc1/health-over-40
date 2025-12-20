"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight, Heart, TrendingUp, MessageCircle } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Zone 2 Training Reduces Biological Age 2.3 Years: Meta-Analysis",
      author: "Dr. Talia Chen, PhD",
      date: "15 Diciembre 2024",
      readTime: "8 min",
      category: "Ejercicio",
      image: "/images/pillars-strength.jpg",
      excerpt: "Análisis exhaustivo de 47 estudios demuestra que el entrenamiento Zone 2 puede revertir el envejecimiento biológico. Los resultados muestran mejoras significativas en marcadores de longevidad.",
      content: "Investigación detallada sobre protocolos de entrenamiento de baja intensidad...",
      tags: ["zone2", "entrenamiento", "longevidad", "meta-análisis"],
      stats: {
        views: 15234,
        shares: 892,
        comments: 127
      }
    },
    {
      id: 2,
      title: "NAD+ Precursors: El Futuro de la Optimización Mitocondrial",
      author: "Andrés Morales",
      date: "12 Diciembre 2024",
      readTime: "12 min",
      category: "Suplementación",
      image: "/images/protocols-medical.jpg",
      excerpt: "Los precursores de NAD+ están revolucionando la optimización mitocondrial. Descubre cómo estos compuestos pueden aumentar tu producción de ATP hasta en un 45%.",
      content: "Análisis completo de los precursores de NAD+ más efectivos...",
      tags: ["nad+", "mitocondrias", "suplementos", "energía celular"],
      stats: {
        views: 24567,
        shares: 1543,
        comments: 234
      }
    },
    {
      id: 3,
      title: "Sleep Architecture: La Arquitectura del Sueño que Revierte el Envejecimiento",
      author: "Dr. Talia Chen, PhD",
      date: "10 Diciembre 2024",
      readTime: "10 min",
      category: "Recuperación",
      image: "/images/recovery-therapy.jpg",
      excerpt: "La arquitectura del sueño es más importante que la duración. Optimiza las 5 fases del sueño para maximizar hormonas de crecimiento y reparación celular.",
      content: "Guía completa para optimizar tu arquitectura del sueño...",
      tags: ["sueño", "recuperación", "hormonas", "longevidad"],
      stats: {
        views: 19876,
        shares: 1205,
        comments: 189
      }
    },
    {
      id: 4,
      title: "Medición Biométrica: De Datos a Longevidad Medible",
      author: "Andrés Morales",
      date: "8 Diciembre 2024",
      readTime: "15 min",
      category: "Tecnología",
      image: "/images/research-lab.jpg",
      excerpt: "Deja de adivinar y empieza a medir. Descubre los biomarcadores clave que predicen tu longevidad mejor que tu edad cronológica.",
      content: "Tutorial completo sobre implementación de seguimiento biométrico...",
      tags: ["biomarcadores", "medición", "wearables", "datos"],
      stats: {
        views: 31245,
        shares: 2103,
        comments: 345
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Blog Científico
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {" "}Investigación y 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Protocolos Validados
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Artículos basados en <span className="font-semibold text-emerald-600 dark:text-emerald-400">evidencia científica</span> 
              escritos por expertos en longevidad. 
              <span className="font-semibold">Sin marketing, solo ciencia.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Publicado semanalmente
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Escrito por expertos
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5-15 min lectura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
                style={{ 
                  animationDelay: `${post.id * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-xs font-medium">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Reading Time */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-white text-xs">
                      {post.readTime} lectura
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {post.date}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold line-clamp-2 hover:text-foreground transition-colors">
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {post.stats.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.stats.comments}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-muted hover-lift transition-all duration-300"
                    >
                      <ArrowRight className="h-3 w-3 mr-1" />
                      Leer más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">
                {" "}No te Pierdas la Última Investigación
              </h2>
              <p className="text-lg text-muted-foreground">
                Recibe artículos exclusivos y protocolos actualizados 
                directamente en tu bandeja de entrada cada semana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="h-5 w-5 mr-2" />
                Suscribirse Gratis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                Ver Todos los Artículos
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                <span>25,000+ suscriptores</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
                <span>Publicación semanal</span>
              </div>
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