
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import SearchFilters from '@/components/SearchFilters';
import { Job, JobType } from '@/lib/types';
import { filterJobs } from '@/lib/mockData';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  
  // Get initial filters from URL params
  const initialFilters = {
    search: searchParams.get('search') || '',
    location: searchParams.get('location') || '',
    type: (searchParams.get('type') as JobType) || '',
  };
  
  // Handle filter changes
  const handleFilterChange = (filters: {
    search: string;
    location: string;
    type: JobType | '';
  }) => {
    // Update URL params
    const newParams = new URLSearchParams();
    if (filters.search) newParams.set('search', filters.search);
    if (filters.location) newParams.set('location', filters.location);
    if (filters.type) newParams.set('type', filters.type);
    setSearchParams(newParams);
    
    // Filter jobs
    const jobs = filterJobs({
      search: filters.search,
      location: filters.location || undefined,
      type: filters.type || undefined,
    });
    
    setFilteredJobs(jobs);
  };
  
  // Handle search from navbar
  const handleSearch = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('search', query);
    setSearchParams(newParams);
  };
  
  // Initialize filtered jobs
  useEffect(() => {
    handleFilterChange(initialFilters);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Find Your Dream Job Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Discover opportunities that match your skills and aspirations
              </p>
            </div>
          </div>
        </section>
        
        {/* Filters and Job Listings */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <SearchFilters 
                onFilterChange={handleFilterChange}
                initialFilters={initialFilters}
              />
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {filteredJobs.length} Jobs Found
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search filters to find more opportunities
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

export default Index;
