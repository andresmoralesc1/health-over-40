import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Users, FileText, Wrench, CheckCircle } from "lucide-react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

function AnimatedCounter({ end, suffix = "", label, icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const increment = end / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export default function AnimatedTrustSignals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <AnimatedCounter
        end={500}
        suffix="+"
        label="Research Papers Analyzed"
        icon={<FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />}
      />
      <AnimatedCounter
        end={25000}
        suffix="+"
        label="YouTube Community"
        icon={<Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      />
      <AnimatedCounter
        end={50}
        suffix="+"
        label="Products Tested"
        icon={<Wrench className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
      />
      <AnimatedCounter
        end={98}
        suffix="%"
        label="Satisfaction Rate"
        icon={<CheckCircle className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
      />
    </div>
  );
}