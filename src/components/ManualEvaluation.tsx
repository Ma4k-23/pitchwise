import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Users, Lightbulb, DollarSign, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface EvaluationCriteria {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  score: number;
}

const ManualEvaluation = () => {
  const [criteria, setCriteria] = useState<EvaluationCriteria[]>([
    {
      id: "innovation",
      name: "Innovation",
      description: "How unique and novel is your solution?",
      icon: <Lightbulb className="h-5 w-5" />,
      score: 5
    },
    {
      id: "scalability",
      name: "Scalability",
      description: "Can your business grow rapidly?",
      icon: <TrendingUp className="h-5 w-5" />,
      score: 5
    },
    {
      id: "market",
      name: "Market Demand",
      description: "Is there a strong market need?",
      icon: <Target className="h-5 w-5" />,
      score: 5
    },
    {
      id: "revenue",
      name: "Revenue Potential",
      description: "How strong is the monetization model?",
      icon: <DollarSign className="h-5 w-5" />,
      score: 5
    },
    {
      id: "team",
      name: "Team Capability",
      description: "How capable is your founding team?",
      icon: <Users className="h-5 w-5" />,
      score: 5
    }
  ]);

  const updateScore = (id: string, newScore: number) => {
    setCriteria(prev => prev.map(item => 
      item.id === id ? { ...item, score: newScore } : item
    ));
  };

  const averageScore = criteria.reduce((sum, item) => sum + item.score, 0) / criteria.length;
const generatePDFReport = () => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("PitchWise - Manual Evaluation Report", 20, 20);
  
  doc.setFontSize(12);
  let y = 40;

  criteria.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name}: ${item.score}/10`, 20, y);
    y += 10;
    doc.text(`    ↪ ${item.description}`, 25, y);
    y += 10;
  });

  doc.text(`\nOverall Score: ${averageScore.toFixed(1)}/10`, 20, y + 5);
  doc.text(`Rating: ${getScoreLabel(averageScore)}`, 20, y + 15);

  doc.save("PitchWise_Evaluation_Report.pdf");
};

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 8) return "Excellent";
    if (score >= 6) return "Good";
    if (score >= 4) return "Average";
    return "Needs Work";
  };
const { toast } = useToast();

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-primary" />
          <CardTitle>Manual Evaluation</CardTitle>
        </div>
        <CardDescription>
          Rate your startup idea on key parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {criteria.map((item) => (
          <div key={item.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-secondary/50">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <Badge variant="outline" className={getScoreColor(item.score)}>
                {item.score}/10
              </Badge>
            </div>
            <Slider
              value={[item.score]}
              onValueChange={(value) => updateScore(item.id, value[0])}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
        ))}
        
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Overall Score</h3>
            <div className="text-right">
              <div className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                {averageScore.toFixed(1)}/10
              </div>
              <div className="text-sm text-muted-foreground">
                {getScoreLabel(averageScore)}
              </div>
            </div>
          </div>
          
 <Button
  onClick={generatePDFReport}
  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
>
  Generate Detailed Report
</Button>


        </div>
      </CardContent>
    </Card>
  );
};

export default ManualEvaluation;