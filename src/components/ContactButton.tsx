import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Twitter } from "lucide-react";

const ContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="hero" 
          size="lg"
          className="fixed bottom-6 right-6 z-50 shadow-glow"
        >
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Get in Touch</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-3"
            onClick={() => window.open("https://discord.com/invite/Qu39FZnqf8", "_blank")}
          >
            <MessageCircle className="h-5 w-5" />
            Join Discord Server
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-3"
            onClick={() => window.open("https://x.com/nhatiscool", "_blank")}
          >
            <Twitter className="h-5 w-5" />
            Follow on X (Twitter)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;