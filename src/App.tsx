import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ManualEvaluationPage from "./pages/ManualEvaluationPage";
import AIEvaluationPage from "./pages/AIEvaluationPage";
import StartupIdeasPage from "./pages/StartupIdeasPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/manual-evaluation" element={<ManualEvaluationPage />} />
            <Route path="/ai-evaluation" element={<AIEvaluationPage />} />
            <Route path="/startup-ideas" element={<StartupIdeasPage />} />
            {/* Legacy route for existing functionality */}
            <Route path="/legacy" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
