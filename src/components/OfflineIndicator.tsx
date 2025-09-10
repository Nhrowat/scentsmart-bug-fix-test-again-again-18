import { useOfflineStatus } from "@/hooks/useOfflineStatus";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wifi, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

const OfflineIndicator = () => {
  const { isOnline, wasOffline } = useOfflineStatus();
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    if (isOnline && wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <Alert className={`${
        isOnline 
          ? 'bg-success/90 border-success text-success-foreground' 
          : 'bg-destructive/90 border-destructive text-destructive-foreground'
        } backdrop-blur-sm`}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
          <AlertDescription>
            {isOnline 
              ? '✅ Back online! All features restored.' 
              : '📱 Offline mode - Cached fragrances available'
            }
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};

export default OfflineIndicator;