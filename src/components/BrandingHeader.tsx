import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";

const BrandingHeader = () => {
  const { isAuthenticated, setIsAuthenticated } = useAdmin();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleBadgeClick = () => {
    if (isAuthenticated) {
      toast.success("Welcome back, Admin!");
      return;
    }
    setIsDialogOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (password === "@Nhat10nk202591") {
      setIsAuthenticated(true);
      setIsDialogOpen(false);
      setPassword("");
      toast.success("Admin access granted!");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  return (
    <>
      <div className="w-full bg-gradient-primary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Badge 
              variant="secondary" 
              className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30 transition-colors cursor-pointer"
              onClick={handleBadgeClick}
            >
              Made by Nhatiscool {isAuthenticated && "👑"}
            </Badge>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handlePasswordSubmit} className="w-full">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BrandingHeader;