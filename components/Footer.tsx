import { Languages } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Languages className="h-8 w-8" />
              <span className="text-2xl font-bold">Se1a</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Empowering global communication through exceptional language education.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-muted-foreground hover:text-foreground">Courses</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/english" className="text-muted-foreground hover:text-foreground">English</Link></li>
              <li><Link href="/courses/spanish" className="text-muted-foreground hover:text-foreground">Spanish</Link></li>
              <li><Link href="/courses/french" className="text-muted-foreground hover:text-foreground">French</Link></li>
              <li><Link href="/courses/german" className="text-muted-foreground hover:text-foreground">German</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">123 Language Street</li>
              <li className="text-muted-foreground">Education City, ED 12345</li>
              <li className="text-muted-foreground">contact@se1a.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Se1a Language Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}