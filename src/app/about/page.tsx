import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Nuestra Misión: Democratizar la Ciencia de la Longevidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En Health Over 40, creemos que la mediana edad es el comienzo de tu "segundo acto" 
              de máximo rendimiento.
            </p>
          </div>

          {/* Main Content */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">
                Transformamos el Ruido en Señal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos un equipo de investigadores y entusiastas de la salud digital dedicados 
                a filtrar el ruido del marketing y entregarte soluciones basadas en datos.
              </p>
              <p className="leading-relaxed">
                La industria de la salud está saturada de "soluciones rápidas" y marketing engañoso. 
                Nosotros nos sumergimos en los estudios primarios, analizamos los datos y traducimos 
                la compleja ciencia de la longevidad en protocolos prácticos que puedes implementar hoy mismo.
              </p>
            </CardContent>
          </Card>

          {/* Differentiators */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Basado en Evidencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No promovemos "hacks" temporales. Citamos estudios revisados por pares 
                  y voces líderes en Medicina 3.0 como Peter Attia, Huberman, y Rhonda Patrick.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Transparencia de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizamos dispositivos de seguimiento (CGM, wearables, Oura) 
                  para validar lo que recomendamos con datos reales de nuestra comunidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Enfoque en el "Healthspan"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nuestro objetivo no es solo vivir más años, sino que esos años sean 
                  funcionales, sin dolor y con claridad cognitiva.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Methodology */}
          <Card className="bg-muted/50 border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Nuestra Metodología</CardTitle>
              <p className="text-muted-foreground">
                Cada pieza de contenido pasa por nuestro riguroso proceso de verificación
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Investigación de Fuentes Primarias</h4>
                    <p className="text-sm text-muted-foreground">
                      Solo utilizamos bases de datos acreditadas como PubMed, el NIH 
                      y revistas de medicina deportiva de alto impacto.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Actualización Constante</h4>
                    <p className="text-sm text-muted-foreground">
                      La ciencia de la salud cambia. Auditamos nuestro contenido 
                      trimestralmente para reflejar los nuevos hallazgos sobre longevidad.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Transparencia de Afiliación</h4>
                    <p className="text-sm text-muted-foreground">
                      Declaramos honestamente nuestras relaciones comerciales. 
                      Solo recomendamos lo que hemos probado o la ciencia respalda.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Stats */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Únete a Nuestra Comunidad</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-muted-foreground">Miembros Activos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm text-muted-foreground">Artículos Científicos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-muted-foreground">Protocolos Validados</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}