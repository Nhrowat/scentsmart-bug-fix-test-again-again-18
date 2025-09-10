import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to ScentSmart! 🧴",
      description: "You'll receive clone updates, seasonal picks, and budget-friendly finds.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading font-bold text-primary-foreground mb-4">
            Stay In The Loop
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Want clone updates, seasonal picks, or blind-buy-safe lists?<br />
            Drop your email and stay in the loop — because smelling iconic doesn't have to cost a fortune.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white/40"
              required
            />
            <Button 
              type="submit" 
              variant="luxury" 
              size="lg"
              disabled={isLoading}
              className="shrink-0"
            >
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </form>
          
          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam, just scent-sational deals and updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;