import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary' | 'inline';
  showIcon?: boolean;
  className?: string;
}

export const ResumeDownload = ({ 
  variant = 'primary', 
  showIcon = true,
  className 
}: ResumeDownloadProps) => {
  // Resume is in public/ directory
  const resumeUrl = '/Garv Khurana Resume 2025 V2.pdf';
  
  return (
    <a 
      href={resumeUrl}
      download="Garv-Khurana-Resume-2025.pdf"
      className={cn(
        "inline-flex items-center gap-2 transition-colors font-mono text-sm",
        variant === 'primary' && "line-frame px-6 py-3 hover:bg-primary hover:text-primary-foreground",
        variant === 'secondary' && "text-sm underline hover:opacity-60",
        variant === 'inline' && "underline hover:no-underline",
        className
      )}
    >
      {showIcon && <Download className="w-4 h-4" />}
      download resume
    </a>
  );
};
