import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingDown, Wallet, DollarSign, Target, Award } from "lucide-react";

const BudgetComparison = () => {
  // Enhanced calculations with more details
  const totalOriginal = 5550;
  const totalClones = 872;
  const totalMixed = 6422;
  const maxSavings = Math.round(((totalOriginal - totalClones) / totalOriginal) * 100);
  const moneySaved = totalOriginal - totalClones;
  const averageClonePrice = Math.round(totalClones / 21);
  const averageOriginalPrice = Math.round(totalOriginal / 21);
  
  // Number of available fragrances with clones
  const availableClones = 21;

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1 border-primary/50">
            💰 Smart Shopping Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-gradient">
            Budget Breakdown & Savings Analysis
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Discover how choosing smart alternatives can save you thousands while enjoying luxury scents
          </p>
        </div>

        {/* Main Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* All Originals */}
          <Card className="relative overflow-hidden border-destructive/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-lg flex items-center justify-between">
                <span className="flex items-center gap-2 text-destructive">
                  <DollarSign className="h-5 w-5" />
                  All Originals
                </span>
                <Badge variant="destructive" className="text-xs">Luxury</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-destructive">
                  €{totalOriginal.toLocaleString()}
                </div>
                <Progress value={100} className="h-3 bg-destructive/10" />
                <div className="pt-2 space-y-1">
                  <p className="text-sm text-muted-foreground font-medium">
                    💎 The ultimate luxury collection
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avg: €{averageOriginalPrice}/bottle
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* All Clones - Highlighted */}
          <Card className="relative overflow-hidden border-success/30 hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-success/30 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-success via-success/50 to-success" />
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-success/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-lg flex items-center justify-between">
                <span className="flex items-center gap-2 text-success">
                  <Target className="h-5 w-5" />
                  All Clones
                </span>
                <Badge className="text-xs bg-success hover:bg-success">Best Value</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-success">
                  €{totalClones.toLocaleString()}
                </div>
                <Progress value={16} className="h-3 [&>div]:bg-success" />
                <div className="pt-2 space-y-1">
                  <p className="text-sm font-medium text-success">
                    ⭐ Smart & affordable luxury
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avg: €{averageClonePrice}/bottle ({availableClones} fragrances)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mixed Approach */}
          <Card className="relative overflow-hidden border-accent/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-lg flex items-center justify-between">
                <span className="flex items-center gap-2 text-accent">
                  <Wallet className="h-5 w-5" />
                  Mixed Collection
                </span>
                <Badge variant="outline" className="text-xs border-accent text-accent">Balanced</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-accent">
                  €{totalMixed.toLocaleString()}
                </div>
                <Progress value={35} className="h-3 [&>div]:bg-accent" />
                <div className="pt-2 space-y-1">
                  <p className="text-sm text-muted-foreground font-medium">
                    ⚖️ Clones + select originals
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Best of both worlds
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Savings Highlights */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main Savings Banner */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-10 animate-gradient" />
            <Card className="relative border-2 border-primary/30 shadow-glow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                      <Sparkles className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Maximum Savings Potential</p>
                      <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {maxSavings}%
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground mb-2">That's a total saving of</p>
                    <p className="text-3xl font-bold text-success">
                      €{moneySaved.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">on {availableClones} fragrances!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Quality Match</h3>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">85-95%</p>
                <p className="text-xs text-muted-foreground">Similar scent profile to originals</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingDown className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Price Per ML</h3>
                </div>
                <p className="text-2xl font-bold text-accent mb-1">€0.40</p>
                <p className="text-xs text-muted-foreground">Average for clone fragrances</p>
              </CardContent>
            </Card>

            <Card className="border-success/20 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-success" />
                  <h3 className="font-semibold">Collection Value</h3>
                </div>
                <p className="text-2xl font-bold text-success mb-1">{availableClones}+</p>
                <p className="text-xs text-muted-foreground">Luxury alternatives available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetComparison;