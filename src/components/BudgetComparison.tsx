import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const BudgetComparison = () => {
  // Calculate totals based on available fragrances (including new additions)
  const totalOriginal = 5550; // Sum of all original prices for available fragrances
  const totalClones = 872;    // Sum of all clone prices for available fragrances  
  const totalMixed = 6422;    // All fragrances (some originals + some clones)
  const maxSavings = Math.round(((totalOriginal - totalClones) / totalOriginal) * 100);

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-heading font-bold text-foreground mb-4">
            Budget Breakdown
          </h2>
          <p className="text-muted-foreground text-lg">
            See the incredible savings when you choose smart alternatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Original Prices */}
          <Card className="border-destructive/20 hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-destructive flex items-center gap-2">
                💸 All Originals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive mb-2">
                €{totalOriginal.toLocaleString()}
              </div>
              <Progress value={100} className="h-2 bg-destructive/10" />
              <p className="text-sm text-muted-foreground mt-2">
                The luxury dream list
              </p>
            </CardContent>
          </Card>

          {/* All Clones */}
          <Card className="border-success/20 hover:shadow-card-hover transition-all duration-300 ring-2 ring-success/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-success flex items-center gap-2">
                🎯 All Clones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">
                €{totalClones.toLocaleString()}
              </div>
              <Progress value={9} className="h-2 [&>div]:bg-success" />
              <p className="text-sm text-muted-foreground mt-2">
                Smart & affordable
              </p>
            </CardContent>
          </Card>

          {/* Mixed Approach */}
          <Card className="border-accent/20 hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-accent flex items-center gap-2">
                ⚖️ All Fragrances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent mb-2">
                €{totalMixed.toLocaleString()}
              </div>
              <Progress value={20} className="h-2 [&>div]:bg-accent" />
              <p className="text-sm text-muted-foreground mt-2">
                Clones + select originals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Savings Highlight */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg shadow-glow">
            <span className="text-2xl">🚀</span>
            <div>
              <span className="text-lg font-medium">Maximum Savings: </span>
              <span className="text-2xl font-bold">{maxSavings}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetComparison;