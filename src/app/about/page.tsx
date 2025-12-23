import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Target, Users } from "lucide-react";

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hacked-aging.vercel.app#organization",
        name: "Hacked Aging",
        url: "https://hacked-aging.vercel.app",
        description: "Expert-led longevity platform translating cutting-edge longevity science into personalized protocols for optimal healthspan and lifespan",
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-12 md:py-24">
          {/* Hero Tagline Section */}
          <div className="text-center mb-12 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's turn complexity into clarity with smart AI digital solutions.
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Comprehensive Health Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform provides in-depth health analysis using advanced AI algorithms 
                  to interpret your health data and provide personalized recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Personalized Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get customized health protocols designed specifically for your unique 
                  biological profile and health goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access our network of longevity experts who guide you through your 
                  health optimization journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}