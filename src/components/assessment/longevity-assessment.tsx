import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Activity, Heart, Brain, Users, TrendingUp } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  options: { text: string; score: number }[];
  icon: React.ReactNode;
}

const questions: Question[] = [
  {
    id: 1,
    category: "Exercise & Movement",
    question: "How many days per week do you do moderate exercise (30+ minutes)?",
    icon: <Activity className="h-5 w-5" />,
    options: [
      { text: "0-1 days", score: 1 },
      { text: "2-3 days", score: 2 },
      { text: "4-5 days", score: 3 },
      { text: "6-7 days", score: 4 }
    ]
  },
  {
    id: 2,
    category: "Exercise & Movement", 
    question: "Do you incorporate strength training?",
    icon: <Activity className="h-5 w-5" />,
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely (1x/month)", score: 2 },
      { text: "Sometimes (1-2x/week)", score: 3 },
      { text: "Regularly (3+x/week)", score: 4 }
    ]
  },
  {
    id: 3,
    category: "Nutrition",
    question: "How many servings of vegetables do you eat daily?",
    icon: <Heart className="h-5 w-5" />,
    options: [
      { text: "0-1 servings", score: 1 },
      { text: "2-3 servings", score: 2 },
      { text: "4-5 servings", score: 3 },
      { text: "6+ servings", score: 4 }
    ]
  },
  {
    id: 4,
    category: "Nutrition",
    question: "How would you rate your protein intake?",
    icon: <Heart className="h-5 w-5" />,
    options: [
      { text: "Very low", score: 1 },
      { text: "Low", score: 2 },
      { text: "Adequate", score: 3 },
      { text: "Optimal (1.6-2.2g/kg)", score: 4 }
    ]
  },
  {
    id: 5,
    category: "Sleep & Recovery",
    question: "How many hours do you sleep per night?",
    icon: <Brain className="h-5 w-5" />,
    options: [
      { text: "<6 hours", score: 1 },
      { text: "6-7 hours", score: 2 },
      { text: "7-8 hours", score: 3 },
      { text: "8-9 hours", score: 4 }
    ]
  },
  {
    id: 6,
    category: "Sleep & Recovery",
    question: "How would you rate your sleep quality?",
    icon: <Brain className="h-5 w-5" />,
    options: [
      { text: "Poor - frequently wake up", score: 1 },
      { text: "Fair - some issues", score: 2 },
      { text: "Good - mostly restful", score: 3 },
      { text: "Excellent - deep, restorative", score: 4 }
    ]
  },
  {
    id: 7,
    category: "Social Connection",
    question: "How satisfied are you with your social connections?",
    icon: <Users className="h-5 w-5" />,
    options: [
      { text: "Very dissatisfied", score: 1 },
      { text: "Somewhat dissatisfied", score: 2 },
      { text: "Satisfied", score: 3 },
      { text: "Very satisfied", score: 4 }
    ]
  },
  {
    id: 8,
    category: "Stress Management",
    question: "How do you handle daily stress?",
    icon: <TrendingUp className="h-5 w-5" />,
    options: [
      { text: "Poorly - feel overwhelmed", score: 1 },
      { text: "Sometimes struggle", score: 2 },
      { text: "Usually manage well", score: 3 },
      { text: "Very well - have coping strategies", score: 4 }
    ]
  }
];

export default function LongevityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScores = () => {
    const categories = ["Exercise & Movement", "Nutrition", "Sleep & Recovery", "Social Connection", "Stress Management"];
    const categoryScores: { [key: string]: { score: number; max: number } } = {};
    
    categories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const totalScore = categoryQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      const maxScore = categoryQuestions.length * 4;
      categoryScores[category] = { score: totalScore, max: maxScore };
    });
    
    const totalScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.score, 0);
    const totalMax = Object.values(categoryScores).reduce((sum, cat) => sum + cat.max, 0);
    const percentage = Math.round((totalScore / totalMax) * 100);
    
    return { categoryScores, totalScore, totalMax, percentage };
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return "Excellent! You're building a strong foundation for longevity.";
    if (percentage >= 60) return "Good start! Focus on the areas below for optimal results.";
    return "Room for improvement. Small changes can make a big difference!";
  };

  if (showResults) {
    const { categoryScores, percentage } = calculateScores();
    
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Your Longevity Score</CardTitle>
            <CardDescription>Based on your lifestyle assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div classNametext-6xl font-bold mb-4 ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            <p className="text-lg text-gray-600 mb-6">{getScoreMessage(percentage)}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {Object.entries(categoryScores).map(([category, scores]) => (
                <Card key={category}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={(scores.score / scores.max) * 100} className="mb-2" />
                    <p className="text-sm text-gray-600">
                      {scores.score}/{scores.max} points
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {percentage < 80 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">🏃‍♂️ Movement Protocol</h4>
                      <p className="text-sm text-gray-600 mb-3">Build your aerobic foundation</p>
                      <Button variant="outline" size="sm">Zone 2 Cardio</Button>
                    </CardContent>
                  </Card>
                )}
                {percentage < 70 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">🥗 Nutrition Guide</h4>
                      <p className="text-sm text-gray-600 mb-3">Optimize your nutrition</p>
                      <Button variant="outline" size="sm">DREE Method</Button>
                    </CardContent>
                  </Card>
                )}
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">📊 Track Progress</h4>
                    <p className="text-sm text-gray-600 mb-3">Monitor your biomarkers</p>
                    <Button variant="outline" size="sm">Longevity Toolkit</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">🔄 Retake Assessment</h4>
                    <p className="text-sm text-gray-600 mb-3">In 30 days</p>
                    <Button variant="outline" size="sm" onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}>Retake Test</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Longevity Score</h1>
        <p className="text-gray-600">Discover how your current habits support your healthspan and lifespan</p>
        <Progress value={progress} className="mt-4" />
        <p className="text-sm text-gray-500 mt-2">Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {questions[currentQuestion].icon}
            <span className="text-sm font-medium text-gray-500">
              {questions[currentQuestion].category}
            </span>
          </div>
          <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto p-4"
              onClick={() => handleAnswer(option.score)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{option.text}</span>
                <Circle className="h-4 w-4 text-gray-400" />
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>This assessment takes 2 minutes and helps identify areas for improvement</p>
        <p className="mt-2">Your results are private and not stored</p>
      </div>
    </div>
  );
}
