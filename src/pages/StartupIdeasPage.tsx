import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StartupSuggestions from "@/components/StartupSuggestions";

const StartupIdeasPage = () => {
  const [selectedIdea, setSelectedIdea] = useState<any>(null);

  const handleIdeaSelect = (idea: any) => {
    setSelectedIdea(idea);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Startup Ideas & Inspiration
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore curated startup ideas across different industries or find inspiration for your next venture
            </p>

            {selectedIdea && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-2">Selected Idea:</p>
                <p className="font-medium text-accent mb-4">{selectedIdea.title}</p>
                <div className="flex gap-2 justify-center">
                  <Button asChild size="sm" className="bg-gradient-primary">
                    <Link 
                      to="/manual-evaluation" 
                      state={{ idea: selectedIdea.description }}
                    >
                      Evaluate Manually
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link 
                      to="/ai-evaluation" 
                      state={{ idea: selectedIdea.description }}
                    >
                      Analyze with AI
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <StartupSuggestions onSelectIdea={handleIdeaSelect} />
        </div>
      </div>
    </div>
  );
};

export default StartupIdeasPage;