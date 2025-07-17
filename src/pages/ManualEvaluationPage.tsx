import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ManualEvaluation from "@/components/ManualEvaluation";

const ManualEvaluationPage = () => {
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
              Manual Startup Evaluation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rate your startup idea across key parameters to get a comprehensive score and insights
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <ManualEvaluation />
        </div>
      </div>
    </div>
  );
};

export default ManualEvaluationPage;