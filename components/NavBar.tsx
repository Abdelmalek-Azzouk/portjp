'use client'

// --- START: Inlined SVG Icon Components ---
const ArrowRight = (props: any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const Code = (props: any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const Zap = (props: any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const Cpu = (props: any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 9h2"/><path d="M20 9h2"/></svg>);
const Aperture = (props: any) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12.07-5.74 9.94"/><path d="m17.5 12.07-5.74 9.94"/><path d="m7.38 12.07L2.14 3.12"/><path d="m14.31 16.03-5.74 9.94"/><path d="m9.69 16.03h11.48"/></svg>);
// --- END: Inlined SVG Icon Components ---

// Mock data for project cards
const projects = [
  {
    title: 'Real-Time Object Detection Pipeline',
    description: 'Developed a low-latency YOLOv8 model deployed via ONNX, integrated into a scalable cloud pipeline for processing live video feeds.',
    tags: ['Computer Vision', 'YOLOv8', 'ONNX', 'Python', 'Cloud'],
    icon: Aperture,
    link: '#', // Placeholder for project detail link
  },
  {
    title: 'Custom LLM Fine-Tuning for Finance',
    description: 'Fine-tuned a custom large language model on proprietary financial documentation to improve Q&A accuracy and reduce hallucination rate by 30%.',
    tags: ['NLP', 'LLMs', 'Fine-Tuning', 'PyTorch', 'Hugging Face'],
    icon: Cpu,
    link: '#',
  },
  {
    title: 'Generative AI Image Stylization',
    description: 'Created a diffusion model application allowing users to transform images into various artistic styles (black and white theme applied here!).',
    tags: ['Generative AI', 'Diffusion Models', 'PyTorch', 'Next.js'],
    icon: Zap,
    link: '#',
  },
  {
    title: 'Reinforcement Learning for Robotics',
    description: 'Implemented a Deep Q-Network (DQN) agent to optimize pathfinding efficiency for a simulated robotic arm in a dynamic environment.',
    tags: ['RL', 'DQN', 'Gym', 'TensorFlow'],
    icon: Code,
    link: '#',
  },
];

// Reusable Project Card Component (Black and White Theme)
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const Icon = project.icon;

  return (
    <div className="group flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      
      {/* Icon and Title */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-full bg-gray-900 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-snug">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Link */}
      <a 
        href={project.link}
        onClick={(e) => { e.preventDefault(); console.log(`Navigating to ${project.title} details`); }}
        className="mt-4 flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150"
      >
        View Details 
        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};


export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            My Portfolio of AI Systems
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            A curated collection of my most impactful projects in Deep Learning and MLOps.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
