import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-xl">
            Health Over 40
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/tools"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Longevity Lab
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Research
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Newsletter
          </Button>
          <Button size="sm">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}