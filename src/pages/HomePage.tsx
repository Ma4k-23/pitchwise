import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Calculator, Lightbulb, Shield, Zap, Users, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Manual Evaluation",
      description: "Rate your startup on key metrics with our comprehensive scoring system",
      link: "/manual-evaluation"
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "AI Evaluation", 
      description: "Get intelligent insights powered by local AI analysis",
      link: "/ai-evaluation"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-warning" />,
      title: "Startup Ideas",
      description: "Explore curated startup ideas across different industries",
      link: "/startup-ideas"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-success" />,
      title: "100% Privacy-First",
      description: "All processing happens locally on your device"
    },
    {
      icon: <Zap className="h-6 w-6 text-warning" />,
      title: "Lightning Fast",
      description: "Instant analysis with optimized local models"
    },
    {
      icon: <Users className="h-6 w-6 text-info" />,
      title: "Expert Insights",
      description: "AI trained on thousands of successful startups"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-accent" />,
      title: "Actionable Results",
      description: "Detailed scoring with improvement recommendations"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Method",
      description: "Select manual scoring or AI-powered evaluation"
    },
    {
      number: "02", 
      title: "Input Your Idea",
      description: "Rate parameters or describe your startup concept"
    },
    {
      number: "03",
      title: "Get Insights",
      description: "Receive detailed analysis and improvement suggestions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              🚀 Next-Gen Startup Evaluation
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Evaluate Your Startup with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get comprehensive startup evaluation through manual scoring and AI-powered analysis, 
              all running locally for complete privacy and independence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Link to="/manual-evaluation">
                  Start Manual Evaluation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50 hover:bg-secondary/50">
                <Link to="/ai-evaluation">
                  Try AI Analysis
                  <Brain className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span>Powered by Ollama • 100% Local • Zero API Dependencies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Evaluation Method</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to analyze your startup potential with professional-grade tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-secondary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="w-full group-hover:bg-gradient-primary transition-all">
                    <Link to={feature.link}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple 3-step process to evaluate your startup idea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PitchWise?</h2>
            <p className="text-xl text-muted-foreground">
              Built for entrepreneurs who value privacy, speed, and accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-secondary/50 w-fit">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Evaluate Your Startup?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join entrepreneurs worldwide who trust PitchWise for startup evaluation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
              <Link to="/manual-evaluation">
                Start Your Evaluation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50 hover:bg-secondary/50">
              <Link to="/startup-ideas">
                Browse Startup Ideas
                <Lightbulb className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;