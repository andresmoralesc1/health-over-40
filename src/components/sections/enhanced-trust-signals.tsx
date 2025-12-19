import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle, ExternalLink } from "lucide-react";
import AnimatedTrustSignals from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";

export default function EnhancedTrustSignals() {
  return (
    <section className="py-16 bg-muted/50 border-t">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Trusted by Health Optimizers Worldwide</Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              Science-Backed, Community-Approved
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow Google's E-E-A-T standards: Expertise, Authoritativeness, and Trustworthiness in all our health content.
            </p>
          </div>

          {/* Animated Counters */}
          <div className="mb-16">
            <AnimatedTrustSignals />
          </div>

          {/* Trust Badges Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            {/* Evidence-Based Content */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evidence-Based Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Peer-reviewed sources only
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "PubMed & NIH cross-referenced studies",
                    "Updated quarterly with latest research", 
                    "No marketing hype, just science",
                    "200+ journals analyzed monthly"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expert Backing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Backed</h3>
                    <p className="text-sm text-muted-foreground">
                      Reviewed by leading longevity physicians
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Clinical validation protocols",
                    "Professional medical advisory board",
                    "Lab-tested product recommendations",
                    "Real-world outcome tracking"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Publication Badges */}
          <Card className="max-w-4xl mx-auto border-0 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center mb-6">Featured In Leading Publications</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "📚 Nature Medicine",
                  "🔬 Cell Metabolism", 
                  "📖 NEJM",
                  "🏥 JAMA",
                  "🧬 Science",
                  "💊 Nature Reviews"
                ].map((badge, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700 px-4 py-2"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced CTA */}
          <Card className="max-w-3xl mx-auto border-2 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20">
            <CardContent className="p-8 text-center">
              <div className="h-20 w-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Join 25,000+ Health Optimizers
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get our weekly protocol digest, exclusive research breakdowns, 
                and priority access to new recovery tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Subscribe to Research Digest
                </Button>
                <Button variant="outline" size="lg">
                  Join Discord Community
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
                <span>🔔 No spam, unsubscribe anytime</span>
                <span>📊 Weekly research summaries</span>
                <span>🎥 Exclusive video content</span>
                <span>💡 Protocol updates</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}