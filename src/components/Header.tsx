import { Brain, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-gradient-secondary backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-sm opacity-50"></div>
              <div className="relative bg-gradient-primary p-2 rounded-lg">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PitchWise
              </h1>
              <p className="text-sm text-muted-foreground">
                Next-gen startup evaluation with Local AI
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-accent" />
            <span>Powered by Local AI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;