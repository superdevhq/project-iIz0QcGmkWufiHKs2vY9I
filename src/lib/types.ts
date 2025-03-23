
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';

export type JobLocation = string;

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  location: string;
  industry: string;
  founded: number;
  employees: string;
  jobs?: Job[];
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  company?: Company;
  location: string;
  type: JobType;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: string;
  postedAt: string;
  featured: boolean;
}
