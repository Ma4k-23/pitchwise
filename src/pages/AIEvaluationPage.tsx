import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AIEvaluation from "@/components/AIEvaluation";

const AIEvaluationPage = () => {
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
              AI-Powered Startup Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get intelligent insights and comprehensive analysis powered by local AI technology
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <AIEvaluation />
        </div>
      </div>
    </div>
  );
};

export default AIEvaluationPage;