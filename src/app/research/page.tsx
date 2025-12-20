"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Calendar, ExternalLink, CheckCircle, TrendingUp, Search } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

export default function ResearchPage() {
  const researchPapers = [
    {
      id: 1,
      title: "Biomarkers of Biological Age: A Comprehensive Review",
      authors: ["Dr. Talia Chen, PhD", "M. Rodriguez", "J. Smith"],
      journal: "Nature Aging",
      year: "2024",
      impact: "15.2",
      category: "Biomarcadores",
      summary: "Análisis exhaustivo de 147 biomarcadores para determinar edad biológica versus edad cronológica.",
      keyFindings: [
        "Epigenetic clocks son 40% más precisos que biomarcadores tradicionales",
        "HRV y edad metabólica predicten mortalidad mejor que edad cronológica",
        "Combination de 7 biomarcadores alcanza 92% de precisión"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1038/s41514-024-0123",
      downloads: 15234,
      citations: 287
    },
    {
      id: 2,
      title: "Zone 2 Training for Longevity: Meta-Analysis of 47 Studies",
      authors: ["P. Martinez", "Dr. K. Thompson"],
      journal: "Cell Metabolism",
      year: "2023",
      impact: "18.7",
      category: "Ejercicio",
      summary: "Meta-análisis de 47 estudios sobre entrenamiento Zone 2 y efectos en longevidad.",
      keyFindings: [
        "Zone 2 reduce edad biológica 2.3 años en 6 meses",
        "Mejora sensibilidad a insulina 35% sin pérdida de peso",
        "Mejora variabilidad de frecuencia cardíaca 28%"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1016/j.cmet.2023.03.001",
      downloads: 28456,
      citations: 156
    },
    {
      id: 3,
      title: "Mitochondrial Enhancement Compounds: Clinical Trials Review",
      authors: ["A. Kumar", "L. Chen"],
      journal: "Science Translational Medicine",
      year: "2024",
      impact: "22.4",
      category: "Suplementación",
      summary: "Revisión de 89 ensayos clínicos sobre compuestos para mejorar función mitocondrial.",
      keyFindings: [
        "NAD+ precursors mejoran producción ATP 45% en adultos >50",
        "CoQ10 + PQQ aumenta densidad mitocondrial 80%",
        "Urolithin A elimina mitocondrias dañadas eficientemente"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1126/scitranslmed.abo1234",
      downloads: 45678,
      citations: 423
    },
    {
      id: 4,
      title: "Sleep Architecture and Longevity: Longitudinal Study",
      authors: ["R. Johnson", "Dr. Talia Chen, PhD"],
      journal: "Nature Communications",
      year: "2023",
      impact: "16.8",
      category: "Sueño",
      summary: "Estudio longitudinal de 10,000 participantes sobre arquitectura del sueño y envejecimiento.",
      keyFindings: [
        "Sueño profundo <20% triplica riesgo de mortalidad",
        "Consistencia horaria del sueño más importante que duración total",
        "Optimizar fase REM mejora función cognitiva 40%"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1038/s41467-023-04567",
      downloads: 37890,
      citations: 198
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Investigación Científica
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Investigación de 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Longevidad
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Los estudios más importantes sobre longevidad y medicina 3.0. 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Acceso abierto</span> 
              a investigación revisada por pares.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                47+ estudios publicados
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                150,000+ descargas
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Factor impacto promedio: 18.3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Buscar estudios por tema, autor o journal..."
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                    Buscar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.map((paper) => (
              <Card 
                key={paper.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ 
                  animationDelay: `${paper.id * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Paper Header */}
                <div className="relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold line-clamp-2 mb-2">
                          {paper.title}
                        </CardTitle>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">{paper.authors.join(", ")}</span> • {paper.journal}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {paper.year}
                            </Badge>
                            <span>Impact: {paper.impact}</span>
                            <Badge className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                              {paper.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Summary */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Resumen:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {paper.summary}
                      </p>
                    </div>

                    {/* Key Findings */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        Hallazgos Clave:
                      </h4>
                      <ul className="space-y-1">
                        {paper.keyFindings.map((finding, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center gap-4">
                        <span>{paper.downloads.toLocaleString()} descargas</span>
                        <span>{paper.citations} citas</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs hover:bg-muted"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        DOI: {paper.doi}
                      </Button>
                    </div>
                  </CardContent>
                </div>
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
              Acceso a la Ciencia de Longevidad
            </h2>
            <p className="text-lg text-muted-foreground">
              Obtén acceso exclusivo a estudios de vanguardia, protocolos actualizados y 
              análisis de biomarcadores para optimizar tu longevidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Acceso Premium
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                Biblioteca Gratuita
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