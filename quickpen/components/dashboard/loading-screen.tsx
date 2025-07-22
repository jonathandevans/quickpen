import { Loader2 } from "lucide-react";

interface LoadingScreenProps {
  label?: string;
}

export function LoadingScreen({ label }: LoadingScreenProps) {
  return (
    <div className="flex flex-col items-center mt-12 gap-2">
      <Loader2 className="size-10 text-blue-500/80 animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}
