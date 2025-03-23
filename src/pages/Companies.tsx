
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building, MapPin, Users, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { companies } from '@/lib/mockData';

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter companies based on search query
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Discover Great Companies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Find the perfect company that aligns with your values and career goals
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search companies..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Companies List */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6">
              {filteredCompanies.length} Companies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="hover-scale overflow-hidden">
                  <CardContent className="p-0">
                    <Link to={`/company/${company.id}`} className="block p-6">
                      <div className="flex gap-4">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`} 
                          className="w-16 h-16 rounded-md object-cover"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-lg mb-1">{company.name}</h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {company.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-3.5 w-3.5" />
                              <span>{company.industry}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              <span>{company.location}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Users className="h-3.5 w-3.5" />
                              <span>{company.employees}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="px-6 py-3 bg-muted/30 border-t flex justify-between items-center">
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/company/${company.id}`}>
                          View Profile
                        </Link>
                      </Button>
                      
                      <Button asChild variant="ghost" size="sm">
                        <a 
                          href={company.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Website
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-12 border rounded-lg bg-card">
                <Building className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No companies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query to find more companies
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Companies;
