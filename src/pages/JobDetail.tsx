
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  Building, 
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Job } from '@/lib/types';
import { getJobWithCompany } from '@/lib/mockData';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const jobData = getJobWithCompany(id);
        setJob(jobData || null);
        setLoading(false);
      }, 300);
    }
  }, [id]);
  
  // Format the posted date to show how long ago
  const formatPostedDate = (dateString: string) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };
  
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
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist or has been removed.
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Job Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{job.title}</h1>
                  {job.featured && (
                    <Badge variant="default" className="bg-primary/90">Featured</Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  {job.company && (
                    <Link to={`/company/${job.companyId}`} className="hover:text-primary transition-colors">
                      {job.company.name}
                    </Link>
                  )}
                  <span>•</span>
                  <span>{formatPostedDate(job.postedAt)}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  
                  {job.salary && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <Separator />
              
              {/* Job Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="text-muted-foreground whitespace-pre-line mb-6">
                  {job.description}
                </p>
              </div>
              
              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Button */}
              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <Button className="w-full mb-4">Apply Now</Button>
                <p className="text-sm text-muted-foreground text-center">
                  Apply before {new Date(job.postedAt).toLocaleDateString()}
                </p>
              </div>
              
              {/* Company Info */}
              {job.company && (
                <div className="bg-card border rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={job.company.logo} 
                      alt={`${job.company.name} logo`} 
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{job.company.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company.industry}
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="mb-4" />
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{job.company.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Founded</p>
                        <p className="text-muted-foreground">{job.company.founded}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-muted-foreground">{job.company.employees}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/company/${job.companyId}`}>
                      View Company Profile
                    </Link>
                  </Button>
                  
                  {job.company.website && (
                    <Button variant="ghost" asChild className="w-full mt-2">
                      <a 
                        href={job.company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
