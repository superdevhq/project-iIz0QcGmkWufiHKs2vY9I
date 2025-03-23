
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            JobBoard
          </Link>
          <p className="text-sm text-muted-foreground">
            Find your dream job today
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 text-sm">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-medium">For Job Seekers</h3>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Browse Jobs
            </Link>
            <Link to="/companies" className="text-muted-foreground hover:text-primary transition-colors">
              Companies
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Career Resources
            </Link>
          </div>
          
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-medium">For Employers</h3>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Post a Job
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Employer Resources
            </Link>
          </div>
          
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-medium">Company</h3>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t">
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear} JobBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
