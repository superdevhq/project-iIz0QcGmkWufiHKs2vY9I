
import { Company, Job } from './types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Designify',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Designify is a leading design software company creating tools that empower creators worldwide. Our mission is to make design accessible to everyone, from professional designers to hobbyists.',
    website: 'https://designify.example.com',
    location: 'San Francisco, CA',
    industry: 'Design Software',
    founded: 2015,
    employees: '50-100',
  },
  {
    id: '2',
    name: 'TechNova',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'TechNova is a technology company specializing in artificial intelligence and machine learning solutions. We build products that help businesses automate processes and gain insights from their data.',
    website: 'https://technova.example.com',
    location: 'New York, NY',
    industry: 'Artificial Intelligence',
    founded: 2018,
    employees: '100-250',
  },
  {
    id: '3',
    name: 'GreenEarth',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'GreenEarth is an environmental technology company focused on sustainable solutions for businesses and consumers. Our products help reduce carbon footprints and promote eco-friendly practices.',
    website: 'https://greenearth.example.com',
    location: 'Portland, OR',
    industry: 'Environmental Technology',
    founded: 2010,
    employees: '25-50',
  },
  {
    id: '4',
    name: 'FinanceFlow',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'FinanceFlow provides financial technology solutions that simplify banking and investment for individuals and businesses. Our platform offers secure, user-friendly tools for managing finances.',
    website: 'https://financeflow.example.com',
    location: 'Chicago, IL',
    industry: 'Financial Technology',
    founded: 2016,
    employees: '100-250',
  },
  {
    id: '5',
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'HealthPlus is a healthcare technology company dedicated to improving patient care through innovative software solutions. We work with hospitals and clinics to streamline operations and enhance patient experiences.',
    website: 'https://healthplus.example.com',
    location: 'Boston, MA',
    industry: 'Healthcare Technology',
    founded: 2012,
    employees: '250-500',
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'UI/UX Designer',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for a talented UI/UX Designer to join our team. You will be responsible for designing intuitive and visually appealing user interfaces for our products.',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating UI/UX projects',
      'Understanding of user-centered design principles',
      'Excellent communication and collaboration skills'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with product managers and developers',
      'Maintain design systems and documentation',
      'Stay updated on design trends and best practices'
    ],
    salary: '$90,000 - $120,000',
    postedAt: '2023-05-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Frontend Developer',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are seeking a skilled Frontend Developer to help build and maintain our web applications. You will work closely with designers and backend developers to create responsive and interactive user interfaces.',
    requirements: [
      '2+ years of experience in frontend development',
      'Proficiency in HTML, CSS, JavaScript, and modern frameworks (React, Vue, or Angular)',
      'Experience with responsive design and cross-browser compatibility',
      'Knowledge of version control systems (Git)',
      'Understanding of web performance optimization'
    ],
    responsibilities: [
      'Implement user interfaces based on design specifications',
      'Ensure cross-browser compatibility and responsiveness',
      'Optimize applications for maximum speed and scalability',
      'Collaborate with backend developers for API integration',
      'Write clean, maintainable, and well-documented code'
    ],
    salary: '$85,000 - $115,000',
    postedAt: '2023-05-20',
    featured: false,
  },
  {
    id: '3',
    title: 'Machine Learning Engineer',
    companyId: '2',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'We are looking for a Machine Learning Engineer to develop and implement ML models and algorithms. You will work on cutting-edge AI projects that solve real-world problems.',
    requirements: [
      'MS or PhD in Computer Science, Machine Learning, or related field',
      '3+ years of experience in machine learning or deep learning',
      'Proficiency in Python and ML frameworks (TensorFlow, PyTorch)',
      'Experience with data processing and analysis',
      'Strong mathematical and statistical skills'
    ],
    responsibilities: [
      'Design and implement machine learning models',
      'Process and analyze large datasets',
      'Collaborate with data scientists and engineers',
      'Optimize and scale ML systems',
      'Stay updated on the latest ML research and techniques'
    ],
    salary: '$120,000 - $160,000',
    postedAt: '2023-05-18',
    featured: true,
  },
  {
    id: '4',
    title: 'Data Scientist',
    companyId: '2',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a Data Scientist to analyze complex data and extract valuable insights. You will use statistical methods and machine learning to solve business problems and drive decision-making.',
    requirements: [
      'MS or PhD in Statistics, Mathematics, Computer Science, or related field',
      '2+ years of experience in data science or analytics',
      'Proficiency in Python, R, or similar languages',
      'Experience with data visualization tools',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Analyze large datasets to extract insights',
      'Develop predictive models and algorithms',
      'Create data visualizations and reports',
      'Collaborate with cross-functional teams',
      'Communicate findings to non-technical stakeholders'
    ],
    salary: '$100,000 - $140,000',
    postedAt: '2023-05-25',
    featured: false,
  },
  {
    id: '5',
    title: 'Sustainability Consultant',
    companyId: '3',
    location: 'Portland, OR',
    type: 'Full-time',
    description: 'We are looking for a Sustainability Consultant to help our clients implement eco-friendly practices. You will assess environmental impact and recommend sustainable solutions.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Environmental Science or related field',
      '3+ years of experience in sustainability consulting',
      'Knowledge of environmental regulations and standards',
      'Experience with carbon footprint assessment',
      'Excellent communication and presentation skills'
    ],
    responsibilities: [
      'Conduct environmental impact assessments',
      'Develop sustainability strategies for clients',
      'Create reports and presentations',
      'Stay updated on environmental regulations',
      'Educate clients on sustainable practices'
    ],
    salary: '$75,000 - $95,000',
    postedAt: '2023-05-10',
    featured: false,
  },
  {
    id: '6',
    title: 'Environmental Engineer',
    companyId: '3',
    location: 'Remote',
    type: 'Contract',
    description: 'We are seeking an Environmental Engineer to work on sustainable product development. You will help design and implement eco-friendly solutions for our clients.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Environmental Engineering',
      '2+ years of experience in environmental engineering',
      'Knowledge of sustainable materials and processes',
      'Experience with life cycle assessment',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Design sustainable products and processes',
      'Conduct environmental impact assessments',
      'Collaborate with product development teams',
      'Research eco-friendly materials and technologies',
      'Ensure compliance with environmental regulations'
    ],
    salary: '$40 - $60 per hour',
    postedAt: '2023-05-22',
    featured: false,
  },
  {
    id: '7',
    title: 'Financial Analyst',
    companyId: '4',
    location: 'Chicago, IL',
    type: 'Full-time',
    description: 'We are looking for a Financial Analyst to join our team. You will analyze financial data, prepare reports, and provide insights to support business decisions.',
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      '2+ years of experience in financial analysis',
      'Proficiency in Excel and financial modeling',
      'Knowledge of financial statements and metrics',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Analyze financial data and performance',
      'Prepare financial reports and forecasts',
      'Conduct market research and analysis',
      'Support budgeting and planning processes',
      'Identify trends and opportunities for improvement'
    ],
    salary: '$70,000 - $90,000',
    postedAt: '2023-05-12',
    featured: false,
  },
  {
    id: '8',
    title: 'Software Engineer',
    companyId: '4',
    location: 'Chicago, IL',
    type: 'Full-time',
    description: 'We are seeking a Software Engineer to develop and maintain our financial technology platform. You will work on building secure and scalable applications for financial services.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in Java, Python, or similar languages',
      'Experience with database systems and API development',
      'Knowledge of security best practices'
    ],
    responsibilities: [
      'Design and develop software applications',
      'Write clean, maintainable, and well-tested code',
      'Collaborate with cross-functional teams',
      'Troubleshoot and debug issues',
      'Participate in code reviews and documentation'
    ],
    salary: '$90,000 - $120,000',
    postedAt: '2023-05-28',
    featured: true,
  },
  {
    id: '9',
    title: 'Healthcare Software Developer',
    companyId: '5',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'We are looking for a Healthcare Software Developer to build applications for healthcare providers. You will work on solutions that improve patient care and streamline clinical workflows.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2+ years of experience in software development',
      'Experience with healthcare systems or EMR/EHR',
      'Knowledge of HIPAA and healthcare regulations',
      'Proficiency in C#, .NET, or similar technologies'
    ],
    responsibilities: [
      'Develop healthcare software applications',
      'Ensure compliance with healthcare regulations',
      'Collaborate with healthcare professionals',
      'Implement security measures for patient data',
      'Maintain and improve existing systems'
    ],
    salary: '$85,000 - $110,000',
    postedAt: '2023-05-15',
    featured: false,
  },
  {
    id: '10',
    title: 'Clinical Data Analyst',
    companyId: '5',
    location: 'Remote',
    type: 'Part-time',
    description: 'We are seeking a Clinical Data Analyst to analyze healthcare data and generate insights. You will work with clinical data to improve patient outcomes and operational efficiency.',
    requirements: [
      'Bachelor\'s degree in Health Informatics, Statistics, or related field',
      '2+ years of experience in healthcare data analysis',
      'Proficiency in SQL and data visualization tools',
      'Knowledge of healthcare terminology and workflows',
      'Experience with electronic health records (EHR)'
    ],
    responsibilities: [
      'Analyze clinical data and generate reports',
      'Identify trends and patterns in healthcare data',
      'Support quality improvement initiatives',
      'Collaborate with healthcare professionals',
      'Ensure data accuracy and integrity'
    ],
    salary: '$35 - $45 per hour',
    postedAt: '2023-05-20',
    featured: false,
  },
];

// Helper function to get a job with company details
export const getJobWithCompany = (jobId: string): Job | undefined => {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return undefined;
  
  const company = companies.find(c => c.id === job.companyId);
  return { ...job, company };
};

// Helper function to get a company with its jobs
export const getCompanyWithJobs = (companyId: string): Company | undefined => {
  const company = companies.find(c => c.id === companyId);
  if (!company) return undefined;
  
  const companyJobs = jobs.filter(j => j.companyId === companyId);
  return { ...company, jobs: companyJobs };
};

// Helper function to filter jobs
export interface JobFilters {
  search?: string;
  location?: string;
  type?: JobType;
}

export const filterJobs = (filters: JobFilters): Job[] => {
  return jobs.filter(job => {
    // Search filter (title or company name)
    if (filters.search) {
      const company = companies.find(c => c.id === job.companyId);
      const searchLower = filters.search.toLowerCase();
      const matchesTitle = job.title.toLowerCase().includes(searchLower);
      const matchesCompany = company?.name.toLowerCase().includes(searchLower);
      
      if (!matchesTitle && !matchesCompany) return false;
    }
    
    // Location filter
    if (filters.location && job.location !== filters.location) {
      return false;
    }
    
    // Job type filter
    if (filters.type && job.type !== filters.type) {
      return false;
    }
    
    return true;
  });
};

// Get unique locations for filter options
export const getUniqueLocations = (): string[] => {
  const locations = new Set(jobs.map(job => job.location));
  return Array.from(locations);
};

// Get job types for filter options
export const getJobTypes = (): string[] => {
  return ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
};
