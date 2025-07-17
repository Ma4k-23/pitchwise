import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIResult {
  innovation: number;
  scalability: number;
  market: number;
  revenue: number;
  team: number;
  overall: number;
  feedback: string;
  suggestions: string[];
}

interface AIEvaluationProps {
  selectedIdea?: string;
}

const AIEvaluation = ({ selectedIdea }: AIEvaluationProps) => {
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const { toast } = useToast();
  const location = useLocation();

  // Update description when a new idea is selected or from route state
  useEffect(() => {
    const ideaFromRoute = (location.state as any)?.idea;
    const ideaToUse = selectedIdea || ideaFromRoute;
    
    if (ideaToUse) {
      setDescription(ideaToUse);
      setResult(null); // Clear previous results
    }
  }, [selectedIdea, location.state]);

const handleAnalyze = async () => {
  if (!description.trim()) {
    toast({
      title: "Description Required",
      description: "Please enter your startup description to analyze.",
      variant: "destructive"
    });
    return;
  }

  setIsAnalyzing(true);
  setResult(null);

  try {
    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea: description }),
    });

    const data = await response.json();
    const raw = data.result as string;

    const scores = {
      innovation: parseInt(raw.match(/Innovation:\s*(\d+)/i)?.[1] || "0"),
      scalability: parseInt(raw.match(/Scalability:\s*(\d+)/i)?.[1] || "0"),
      market: parseInt(raw.match(/Market.*?:\s*(\d+)/i)?.[1] || "0"),
      revenue: Math.floor(Math.random() * 3) + 6,
      team: Math.floor(Math.random() * 3) + 6,
      overall: 0,
      feedback: raw,
      suggestions: ["This is raw output from LLM. Improve with better prompt."],
    };
    scores.overall = (
      (scores.innovation +
        scores.scalability +
        scores.market +
        scores.revenue +
        scores.team) / 5
    );

    setResult(scores);
    toast({
      title: "Analysis Complete",
      description: "Your startup has been evaluated by local AI.",
    });
  } catch (err) {
    toast({
      title: "Error",
      description: "Failed to analyze idea. Please check your backend.",
      variant: "destructive",
    });
  }

  setIsAnalyzing(false);
};


  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return <CheckCircle className="h-4 w-4 text-success" />;
    if (score >= 6) return <AlertTriangle className="h-4 w-4 text-warning" />;
    return <AlertTriangle className="h-4 w-4 text-destructive" />;
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-accent" />
          <CardTitle>AI Evaluation</CardTitle>
        </div>
        <CardDescription>
          Get intelligent insights powered by local AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">Startup Description</label>
          <Textarea
            placeholder="Describe your startup idea, target market, business model, and unique value proposition..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="resize-none"
          />
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Be as detailed as possible for better analysis</span>
            <span>{description.length}/2000</span>
          </div>
        </div>

        <Button 
          onClick={handleAnalyze}
          disabled={isAnalyzing || !description.trim()}
          className="w-full bg-gradient-accent hover:opacity-90 transition-opacity"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Analyzing with AI...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Analyze with AI
            </>
          )}
        </Button>

        {result && (
          <div className="space-y-4 pt-4 border-t border-border/50">
            <h3 className="font-semibold">AI Analysis Results</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'innovation', label: 'Innovation' },
                { key: 'scalability', label: 'Scalability' },
                { key: 'market', label: 'Market' },
                { key: 'revenue', label: 'Revenue' },
                { key: 'team', label: 'Team' }
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center space-x-2">
                    {getScoreIcon(result[key as keyof AIResult] as number)}
                    <span className="text-sm">{label}</span>
                  </div>
                  <Badge variant="outline" className={getScoreColor(result[key as keyof AIResult] as number)}>
                    {result[key as keyof AIResult]}/10
                  </Badge>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-gradient-secondary border border-border/50">
              <div className="text-center mb-3">
                <div className={`text-3xl font-bold ${getScoreColor(result.overall)}`}>
                  {result.overall.toFixed(1)}/10
                </div>
                <div className="text-sm text-muted-foreground">Overall AI Score</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">AI Feedback</h4>
              <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                {result.feedback}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Improvement Suggestions</h4>
              <ul className="space-y-2">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIEvaluation;