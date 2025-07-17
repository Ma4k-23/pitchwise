import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart3 } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-success" />,
      title: "Privacy-First",
      description: "100% local processing with no data sent to external servers"
    },
    {
      icon: <Zap className="h-6 w-6 text-warning" />,
      title: "Lightning Fast",
      description: "Instant AI analysis powered by optimized local models"
    },
    {
      icon: <Users className="h-6 w-6 text-info" />,
      title: "Expert Insights",
      description: "AI trained on thousands of successful startup patterns"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-accent" />,
      title: "Actionable Data",
      description: "Detailed scoring with specific improvement recommendations"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-colors"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              {feature.icon}
              <CardTitle className="text-sm">{feature.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;