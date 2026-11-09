// ALL PORTFOLIO CONTENT LIVES IN THIS FILE. Every page reads from here, so change a detail once and it updates everywhere.

export const profile = {
  name: 'Muhammad Mudassir',
  role: 'Software and Machine Learning Engineer',
  shortRole: 'Software and ML Engineer',
  // Put your image in the public folder and write its path here. It updates Home, Résumé and the browser-tab icon.
  photo: '/profile.png',
  intro: "I'm Mudassir, a machine learning engineer who likes making AI work outside the lab. I've built computer vision for driver assistance and surveillance, and today I teach speech models to understand languages most AI overlooks.",
  tagline: 'Software and machine learning engineer building computer vision and LLM systems in Islamabad.',
  summary: 'Software and machine learning engineer with over three years building computer vision systems for driver assistance and surveillance, and retrieval-augmented LLM applications. I take models from raw data to deployed, production APIs.',
  email: 'muhammadmudassir981@gmail.com',
  phone: '+92 308 3976682',
  location: 'Islamabad, Pakistan',
  website: 'mudassir.nucleartech.online',
  github: { url: 'https://github.com/Muhammadmudassir180', label: 'Muhammadmudassir180' },
  linkedin: { url: 'https://www.linkedin.com/in/muhammad-mudassir-/', label: 'in/muhammad-mudassir-' },
  resumeUrl: 'https://drive.google.com/file/d/1jhlXJzGVFMxPbAOXEIGWgW0UY_QWIhTE/view?usp=sharing'
};

export const availability = {
  tag: 'Open to opportunities',
  freelance: 'Available',
  heading: "Let's work together",
  text: "I'm available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat, I'd love to hear from you.",
  freelanceBadge: 'Available for freelance',
  fullTimeBadge: 'Open to full-time'
};

// Paragraphs on the About page
export const about = [
  "I'm Mudassir, a machine learning engineer based in Islamabad. I studied electrical engineering, and curiosity about building things that help people pulled me toward AI.",
  'At NASTP I spent two and a half years on computer vision for driver assistance and surveillance. Now at Rapidev, I work on speech recognition for regional languages that have very little data behind them.',
  "What I enjoy most is cleaning up messy data, working out why a model fails, and sitting with the people who use it until it works for them. Alongside work, I'm doing my MS in Computer Science at NUST."
];

// Headings and short intro text for each page
export const pages = {
  home: { ctaTitle: 'Ready to start a project?', ctaText: "Let's work together to bring your ideas to life. I'm always excited to take on new challenges." },
  experience: { heading: 'Work experience', intro: "My professional journey and the impact I've made." },
  education: { heading: 'Education', intro: 'My academic background in computer science and electrical engineering.' },
  projects: {
    heading: 'Projects',
    intro: 'Work that shows how I take models from data to deployment.',
    ctaTitle: 'Interested in working together?',
    ctaText: "I'm always open to discussing new opportunities and exciting projects."
  },
  about: { heading: 'About me', intro: 'Get to know me and my journey in technology.' },
  contact: { heading: 'Get in touch', intro: "I'm always interested in hearing about new opportunities and exciting projects." },
  resume: { heading: 'Résumé' }
};

// Newest first. Put your strongest bullets first: the Résumé page shows the first 4.
// companyShort is optional and used on the About timeline.
export const experience = [
  {
    title: 'AI Engineer',
    company: 'Rapidev',
    location: 'Islamabad, Pakistan',
    period: 'April 2026 to present',
    type: 'Full-time',
    description: 'Leading development of AI and machine learning applications and mentoring junior developers.',
    achievements: [
      'Architected and optimized end-to-end ASR solutions, achieving a 40% increase in system performance through advanced debugging, inference optimization, and infrastructure enhancements.',
      'Designed and deployed scalable AI inference infrastructure using vLLM and SG-Lang, enabling high-concurrency and low-latency model serving, significantly improving system responsiveness and resource utilization for enterprise AI workloads',
      'Prepared, cleaned, and augmented large-scale low-resource regional language speech datasets for ASR training, including data validation, preprocessing, normalization, and quality filtering.',
      'Fine-tuned state-of-the-art Transformer-based ASR models on low-resource regional languages, optimizing training configurations and evaluation pipelines to improve speech-to-text transcription accuracy.',
      'Conducted face-to-face client interactions to diagnose and resolve product-related issues, ensuring timely resolution and a positive customer experience.'
    ],
    technologies: ['Automatic Speech Recognition (ASR)', 'Large Language Models', 'NLP', 'Docker']
  },
  {
    title: 'Software and Machine Learning Engineer',
    company: 'National Aerospace Science and Technology Park',
    companyShort: 'NASTP',
    location: 'Islamabad, Pakistan',
    period: 'September 2023 to March 2026',
    type: 'Full-time',
    description: 'Leading development of AI and machine learning applications and mentoring junior developers.',
    achievements: [
      'Designed and developed AI-driven computer vision systems for autonomous platforms and ADAS applications, focusing on real-time performance and robustness',
      'Designed and deployed LLM-powered applications integrating retrieval, reasoning, and generation for domain-specific knowledge access.',
      'Implemented and optimized deep learning–based object detection and tracking pipelines, improving detection accuracy by 15% in operational scenarios',
      'Developed a 360-degree AI surveillance system using multi-camera inputs, ML-based object detection, and multi-object tracking for enhanced situational awareness.',
      'Applied transfer learning with YOLO models, reducing training time by 20% while increasing detection accuracy by 10%.',
      'Engineered a hybrid semantic search and retrieval system combining FAISS Vector Database to support context-aware LLM prompting.'
    ],
    technologies: ['Computer Vision', 'Machine Learning', 'Large Language Models', 'NLP', 'FAISS', 'Docker']
  }
];

// Result cards on the Experience page. Add onHome: true to also show one on Home.
export const impact = [
  { value: '+15%', label: 'Detection accuracy, ADAS and autonomous systems' },
  { value: '−20%', label: 'Model training time' },
  { value: '+10%', label: 'Accuracy from YOLO transfer learning' }
];

// Newest first. institutionShort is optional and used on the Résumé and About timeline.
export const education = [
  {
    degree: 'Master of Science in Computer Science',
    short: 'MS Computer Science',
    institution: 'National University of Sciences and Technology (NUST)',
    institutionShort: 'NUST',
    location: 'Islamabad, Pakistan',
    period: '2024 to present',
    gpa: '3.5 / 4.0',
    description: 'Specializing in artificial intelligence and machine learning, with a focus on deep learning applications and large language models.',
    courses: ['Advanced Algorithms', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Natural Language Processing'],
    icon: 'graduation-cap'
  },
  {
    degree: 'Bachelor of Science in Electrical Engineering',
    short: 'BS Electrical Engineering',
    institution: 'Institute of Space Technology',
    location: 'Islamabad, Pakistan',
    period: '2019 to 2023',
    gpa: '3.0 / 4.0',
    description: 'Electrical engineering fundamentals with emphasis on signals and systems, control systems and software engineering.',
    courses: ['Signals and Systems', 'Digital Signal Processing', 'Control Systems', 'System Architecture', 'System Design'],
    icon: 'building-columns'
  }
];

// Shown on Home, About and Résumé
export const skills = [
  { title: 'Computer vision', icon: 'eye', items: ['YOLOv8', 'YOLOv10', 'Object Segmentation', 'Object tracking', 'Transfer learning'] },
  { title: 'NLP and LLMs', icon: 'brain', items: ['Large Language Models', 'Automatic Speech Recognition(ASR)', 'RAG', 'Embeddings', 'Fine-tuning'] },
  { title: 'ML frameworks', icon: 'layer-group', items: ['PyTorch', 'TensorFlow', 'Scikit-learn'] },
  { title: 'Languages', icon: 'code', items: ['Python', 'JavaScript', 'C++'] },
  { title: 'Backend and data', icon: 'server', items: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'FAISS'] },
  { title: 'CI/CD and tools', icon: 'cloud', items: ['Docker', 'Git'] }
];

// Each project's category must match a key in projectFilters. featured: shows on Home. onResume: shows on Résumé.
// Give a project githubUrl for a source link, or note for a private one.
export const projects = [
  {
    title: 'Speech recognition for regional languages',
    description: 'A speech-to-text system for regional languages that have very little training data.',
    icon: 'brain',
    category: 'nlp',
    onResume: true,
    technologies: ['ASR', 'Transformers', 'vLLM'],
    features: [
      'Built large regional-language speech datasets and fine-tuned Transformer-based ASR models on them.',
      'Raised system performance by 40% through debugging, inference optimization and infrastructure work.',
      'Set up inference serving for high-concurrency, low-latency use.'
    ],
    note: 'Private, built at Rapidev'
  },
  {
    title: 'Infrared search and tracking system',
    description: 'A surveillance system that uses IR cameras to detect and track threats at the border.',
    icon: 'crosshairs',
    category: 'cv',
    featured: true,
    onResume: true,
    technologies: ['Computer Vision', 'Deep Learning', 'YOLOv8', 'YOLOv10'],
    features: [
      'Optimized YOLOv8 and YOLOv10 detection with deep learning trackers, improving accuracy by 25%.',
      'Integrated with a pan-tilt unit for control and flexibility.'
    ],
    note: 'Private, built at NASTP'
  },
  {
    title: 'LLM-powered hybrid RAG system',
    description: 'An end-to-end NLP system that combines semantic search with LLMs for answers grounded in authentic sources.',
    icon: 'magnifying-glass',
    category: 'nlp',
    featured: true,
    onResume: true,
    technologies: ['FAISS', 'MongoDB', 'Mistral-7B', 'Transformers'],
    features: [
      'Designed custom datasets from scratch and optimized embeddings.',
      'Fine-tuned transformer models for relevance and factual accuracy.',
      'Bridged structured and unstructured retrieval with FAISS and MongoDB.'
    ],
    note: 'Private'
  },
  {
    title: 'Data manager backend application',
    description: 'A secure REST backend for storing and updating data, built on Express and MongoDB.',
    icon: 'database',
    category: 'backend',
    onResume: true,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
    features: [
      'Routes for updating data, secured with JWT authentication.',
      'Passwords hashed with Bcrypt.',
      'Error-handling middleware for smooth operation.'
    ],
    githubUrl: 'https://github.com/Muhammadmudassir180/Data-Backend-Manager'
  },
  {
    title: 'Portfolio website',
    description: 'This site: a responsive React portfolio showcasing projects and skills.',
    icon: 'laptop-code',
    category: 'web',
    technologies: ['React', 'CSS', 'JavaScript'],
    features: ['Responsive across phone, tablet and desktop.', 'Project showcase with filtering.'],
    githubUrl: 'https://github.com/Muhammadmudassir180/Portfoliov2'
  }
];

export const projectFilters = [
  { key: 'all', label: 'All projects' },
  { key: 'cv', label: 'Computer vision' },
  { key: 'nlp', label: 'NLP and LLMs' },
  { key: 'backend', label: 'Backend' },
  { key: 'web', label: 'Web' }
];

// The About timeline is built automatically from the years in each job's and degree's period. No need to edit this.
const yearsIn = (period) => period.match(/\d{4}/g) || [];

export const buildJourney = (jobs, degrees) => [
  // Lists are newest-first, so reverse them: entries in the same year then read oldest to newest
  ...[...jobs].reverse().flatMap((job) => {
    const [start] = yearsIn(job.period);
    return start ? [{ year: start, icon: 'briefcase', title: `Joined ${job.companyShort || job.company}`, text: job.title }] : [];
  }),
  ...[...degrees].reverse().flatMap((edu) => {
    const [start, end] = yearsIn(edu.period);
    return [
      ...(start ? [{ year: start, icon: 'building-columns', title: `Started ${edu.short}`, text: edu.institutionShort || edu.institution }] : []),
      ...(end ? [{ year: end, icon: 'graduation-cap', title: 'Graduated', text: `${edu.short}, GPA ${edu.gpa}` }] : [])
    ];
  })
].sort((a, b) => a.year - b.year);

export const journey = buildJourney(experience, education);
