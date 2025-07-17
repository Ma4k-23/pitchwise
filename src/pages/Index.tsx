import { useState } from "react";
import ManualEvaluation from "@/components/ManualEvaluation";
import AIEvaluation from "@/components/AIEvaluation";
import FeatureCards from "@/components/FeatureCards";
import StartupSuggestions from "@/components/StartupSuggestions";

const Index = () => {
  const [selectedIdea, setSelectedIdea] = useState<string>("");

  const handleIdeaSelect = (idea: any) => {
    setSelectedIdea(idea.description);
  };

  return (
    <div className="min-h-screen bg-background">      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Evaluate Your Startup with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get comprehensive startup evaluation through manual scoring and AI-powered analysis, 
            all running locally for complete privacy and independence.
          </p>
          
          <FeatureCards />
        </div>

        {/* Startup Suggestions */}
        <div className="mb-8">
          <StartupSuggestions onSelectIdea={handleIdeaSelect} />
        </div>

        {/* Evaluation Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ManualEvaluation />
          <AIEvaluation selectedIdea={selectedIdea} />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Powered by Ollama • 100% Local • Zero API Dependencies
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
