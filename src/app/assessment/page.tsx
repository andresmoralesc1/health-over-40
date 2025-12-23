import LongevityAssessment from "@/components/assessment/longevity-assessment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Longevity Score | Hacked Aging",
  description: "Take our 2-minute assessment to discover your longevity score and get personalized recommendations for extending your healthspan.",
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LongevityAssessment />
    </div>
  );
}
