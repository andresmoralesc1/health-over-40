import LongevityAssessment from "@/components/assessment/longevity-assessment";

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Longevity Score
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take this quick assessment to evaluate your current health habits and get personalized recommendations
          </p>
        </div>
        
        <LongevityAssessment />
      </div>
    </div>
  );
}