import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight, Smartphone, Heart, GraduationCap, Leaf, DollarSign, Briefcase } from "lucide-react";

interface StartupIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
  market: string;
  trending: boolean;
}

interface StartupSuggestionsProps {
  onSelectIdea?: (idea: StartupIdea) => void;
}

const StartupSuggestions = ({ onSelectIdea }: StartupSuggestionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Ideas", icon: <Lightbulb className="h-4 w-4" /> },
    { id: "fintech", name: "FinTech", icon: <DollarSign className="h-4 w-4" /> },
    { id: "healthtech", name: "HealthTech", icon: <Heart className="h-4 w-4" /> },
    { id: "edtech", name: "EdTech", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "sustainability", name: "Green Tech", icon: <Leaf className="h-4 w-4" /> },
    { id: "saas", name: "SaaS", icon: <Briefcase className="h-4 w-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="h-4 w-4" /> }
  ];

  const startupIdeas: StartupIdea[] = [
    {
      id: "1",
      title: "AI-Powered Personal Finance Assistant",
      description: "A mobile app that uses AI to analyze spending patterns, provide personalized budgeting advice, and automatically categorize expenses with smart insights.",
      category: "fintech",
      icon: <DollarSign className="h-5 w-5" />,
      difficulty: "Medium",
      market: "Personal Finance",
      trending: true
    },
    {
      id: "2",
      title: "Remote Health Monitoring Platform",
      description: "IoT-enabled health monitoring system for elderly care that tracks vital signs and alerts family members and healthcare providers in real-time.",
      category: "healthtech",
      icon: <Heart className="h-5 w-5" />,
      difficulty: "Hard",
      market: "Healthcare",
      trending: true
    },
    {
      id: "3",
      title: "Micro-Learning Skills Platform",
      description: "5-minute daily skill learning app that uses spaced repetition and gamification to help professionals learn new skills during commute time.",
      category: "edtech",
      icon: <GraduationCap className="h-5 w-5" />,
      difficulty: "Medium",
      market: "Professional Development",
      trending: false
    },
    {
      id: "4",
      title: "Carbon Footprint Marketplace",
      description: "Platform connecting individuals and businesses to offset their carbon footprint through verified local environmental projects and tree planting.",
      category: "sustainability",
      icon: <Leaf className="h-5 w-5" />,
      difficulty: "Hard",
      market: "Environmental",
      trending: true
    },
    {
      id: "5",
      title: "No-Code Website Builder for Restaurants",
      description: "Specialized website builder for restaurants with integrated menu management, online ordering, and table reservation systems.",
      category: "saas",
      icon: <Briefcase className="h-5 w-5" />,
      difficulty: "Medium",
      market: "Restaurant Tech",
      trending: false
    },
    {
      id: "6",
      title: "Neighborhood Services Marketplace",
      description: "Hyperlocal mobile app connecting neighbors for services like dog walking, house sitting, tutoring, and small repairs.",
      category: "mobile",
      icon: <Smartphone className="h-5 w-5" />,
      difficulty: "Easy",
      market: "Local Services",
      trending: false
    },
    {
      id: "7",
      title: "AI Nutrition Coach",
      description: "App that scans food photos to provide instant nutritional analysis and personalized meal recommendations based on health goals.",
      category: "healthtech",
      icon: <Heart className="h-5 w-5" />,
      difficulty: "Hard",
      market: "Nutrition",
      trending: true
    },
    {
      id: "8",
      title: "Student Expense Sharing App",
      description: "Mobile app designed for college students to easily split expenses, track shared purchases, and manage group budgets for events and housing.",
      category: "fintech",
      icon: <DollarSign className="h-5 w-5" />,
      difficulty: "Easy",
      market: "Student Finance",
      trending: false
    }
  ];

  const filteredIdeas = selectedCategory === "all" 
    ? startupIdeas 
    : startupIdeas.filter(idea => idea.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-success";
      case "Medium": return "text-warning";
      case "Hard": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          <CardTitle>Startup Ideas</CardTitle>
        </div>
        <CardDescription>
          Explore trending startup ideas or get inspired for your next venture
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all ${
                selectedCategory === category.id 
                  ? "bg-gradient-primary" 
                  : "hover:bg-secondary/50"
              }`}
            >
              {category.icon}
              <span className="ml-1">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors group animate-fade-in"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    {idea.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-sm leading-tight">{idea.title}</h4>
                      {idea.trending && (
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          🔥 Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {idea.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs">
                  <Badge variant="outline" className={getDifficultyColor(idea.difficulty)}>
                    {idea.difficulty}
                  </Badge>
                  <span className="text-muted-foreground">{idea.market}</span>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onSelectIdea?.(idea)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Use Idea
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Lightbulb className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No ideas found in this category.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StartupSuggestions;