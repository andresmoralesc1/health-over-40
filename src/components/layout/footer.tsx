import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Health Over 40</h3>
            <p className="text-sm text-muted-foreground">
              Your daily source for health news, research, and product reviews tailored for adults over 40.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Content</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-foreground transition-colors">
                  Longevity Lab
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/newsletter" className="hover:text-foreground transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-foreground transition-colors">
                  YouTube Channel
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <div className="text-sm text-muted-foreground space-y-1">
            <p className="font-medium text-foreground">Medical Disclaimer:</p>
            <p className="text-xs leading-relaxed">
              The content of Health Over 40 is for purely educational and informational purposes. 
              It does not constitute medical advice, diagnosis or treatment. Always seek the advice 
              of your physician or other qualified health provider.
            </p>
          </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Health Over 40. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}