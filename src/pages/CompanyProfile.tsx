
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building, 
  Users, 
  Calendar, 
  MapPin, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import { Company } from '@/lib/types';
import { getCompanyWithJobs } from '@/lib/mockData';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const companyData = getCompanyWithJobs(id);
        setCompany(companyData || null);
        setLoading(false);
      }, 300);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The company you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
          
          {/* Company Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="w-20 h-20 rounded-md object-cover"
            />
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{company.industry}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Founded in {company.founded}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{company.employees} employees</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          {/* Tabs */}
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="jobs">
                Jobs ({company.jobs?.length || 0})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {company.description}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Open Positions at {company.name}
                </h2>
                
                {company.jobs && company.jobs.length > 0 ? (
                  <div className="grid gap-4">
                    {company.jobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border rounded-lg bg-card">
                    <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No open positions</h3>
                    <p className="text-muted-foreground">
                      {company.name} doesn't have any open positions at the moment.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyProfile;
