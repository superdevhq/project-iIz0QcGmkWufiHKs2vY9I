
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">JobBoard</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Jobs
          </Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">
            Companies
          </Link>
          <form onSubmit={handleSearch} className="relative w-64">
            <Input
              type="search"
              placeholder="Search jobs..."
              className="pr-8 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                to="/companies" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search jobs..."
                  className="pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
