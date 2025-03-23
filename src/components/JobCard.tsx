
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Job } from '@/lib/types';
import { companies } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const company = companies.find(c => c.id === job.companyId);
  
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

  return (
    <Card className={`hover-scale ${job.featured ? 'border-primary/20 bg-primary/5' : ''}`}>
      <CardContent className="p-0">
        <Link to={`/job/${job.id}`} className="block p-5">
          <div className="flex items-start gap-4">
            {company && (
              <div className="hidden sm:block flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-12 h-12 rounded-md object-cover"
                />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-lg truncate">{job.title}</h3>
                {job.featured && (
                  <Badge variant="default" className="bg-primary/90">Featured</Badge>
                )}
              </div>
              
              <p className="text-muted-foreground mb-2 truncate">
                {company?.name}
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{job.location}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{job.type}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{formatPostedDate(job.postedAt)}</span>
                </div>
              </div>
              
              {job.salary && (
                <div className="mt-2 text-sm font-medium">
                  {job.salary}
                </div>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default JobCard;
