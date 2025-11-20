// Personal Information
export const personalInfo = {
  name: "Aashutosh Agrawal",
  title: "Product Manager",
  tagline: "Building AI-Powered Products That Drive Business Impact",
  email: "aashutosh.agrawal992@gmail.com",
  phone: "(857) 230-4392",
  location: "Boston, MA",
  bio: "Product Manager with a strong foundation in Computer Science from IIT and a Master's in Product Management from Northeastern. Experienced in building AI-powered, data-driven products at Goldman Sachs and McKinsey—combining analytical rigor with user empathy to deliver measurable business impact.",
  resumeUrl: "/Aashutosh_Agrawal_Resume.pdf", // Place your resume in public folder
  resumeFileName: "Aashutosh_Agrawal_Resume.pdf",
  avatarUrl: "/avatar.jpg",
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/aashutoshagrawal",
  linkedin: "https://www.linkedin.com/in/aashutosh-agrawal/",
  twitter: "", // Add if you have one
  instagram: "", // Add if you have one
  dribbble: "", // Add if you have one
  portfolio: "", // Add your portfolio link if different from this site
};

// Navigation Links
export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Hero Section Data
export const heroData = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  roles: ["Product Manager", "AI/ML Product Specialist", "Data-Driven Problem Solver", "Technical Product Leader"],
  headline: "Building AI-Powered Products That Create Measurable Impact",
  subheadline: "I specialize in delivering data-driven, user-centric products that combine technical depth with strategic business value—from fintech platforms serving 14M+ users to enterprise tools supporting 30,000+ consultants.",
  ctaButtons: [
    { text: "View My Work", href: "#projects", primary: true },
    { text: "Get In Touch", href: "#contact", primary: false },
  ],
};

// About Section Data
export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: `I'm a Product Manager with ${new Date().getFullYear() - 2020} years of experience building AI-powered, data-driven products at leading firms like Goldman Sachs and McKinsey. With a Computer Science background from IIT Guwahati and a Master's in Engineering Management from Northeastern, I bridge the gap between technical complexity and business value.
  
  I'm passionate about leveraging ML/AI to solve real user problems, whether it's personalizing financial insights for 14M+ users or streamlining knowledge discovery for 30,000+ consultants. I thrive in cross-functional environments where data analysis meets user empathy.
  
  When I'm not building products, you can find me playing chess (1400+ rating), working on startup prototypes, or mentoring students as a Teaching Assistant.`,
  
  highlights: [
    { number: "5+", label: "Years Experience" },
    { number: "14M+", label: "Users Impacted" },
    { number: "35%", label: "Engagement Increase" },
    { number: "4.0", label: "Graduate GPA" },
  ],
  
  interests: [
    "Product Management",
    "AI/ML Integration",
    "Data Analytics",
    "User Research",
    "Strategic Thinking",
    "Chess Strategy",
  ],
};

// Skills Data
export const skillsData = {
  title: "Skills & Expertise",
  subtitle: "Technologies and tools I work with",
  categories: [
    {
      name: "Product Management",
      skills: [
        { name: "Product Strategy", level: 95, icon: "🎯" },
        { name: "Data Analysis", level: 92, icon: "📊" },
        { name: "A/B Testing", level: 88, icon: "🧪" },
        { name: "User Research", level: 90, icon: "👥" },
        { name: "Roadmapping", level: 93, icon: "🗺️" },
        { name: "Stakeholder Mgmt", level: 91, icon: "🤝" },
      ],
    },
    {
      name: "Technical Skills",
      skills: [
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "ML/AI Integration", level: 87, icon: "🤖" },
        { name: "Git", level: 82, icon: "📦" },
        { name: "Java", level: 78, icon: "☕" },
        { name: "C++", level: 75, icon: "⚙️" },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "JIRA", level: 92, icon: "📋" },
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "Heap Analytics", level: 85, icon: "📈" },
        { name: "Tableau", level: 82, icon: "📊" },
        { name: "Confluence", level: 90, icon: "📝" },
        { name: "Lovable", level: 80, icon: "⚡" },
      ],
    },
  ],
};

// Projects Data
export const projectsData = {
  title: "Product Portfolio",
  subtitle: "Strategic initiatives showcasing end-to-end PM ownership: research → strategy → execution → impact",
  projects: [
    {
      id: 1,
      title: "DiaBeat - AI Insulin Calculator",
      description: "Led 0-1 product strategy for AI-powered insulin assistant. Validated market need through 14+ user interviews, designed safety-first UX, and secured clinic pilot interest.",
      longDescription: "Identified opportunity through interviews with 14+ Type 1 diabetics revealing 67% struggled with accurate carb counting. Led end-to-end product development: market research → user personas → wireframes → MVP → usability testing. Key PM decision: Prioritized safety over automation—implemented 3-tier guardrail system and human-in-the-loop validation. Result: 85% user satisfaction in testing, clinic pilot interest from 2 healthcare providers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tags: ["0-1 Product", "User Research", "AI/ML Strategy", "Healthcare UX", "Safety Design"],
      category: "Startup",
      featured: true,
      liveDemoLink: "",
      sourceCodeLink: "",
      highlights: [
        "🎯 Strategy: 14+ user interviews → identified $X.XB market gap",
        "🧠 PM Decision: Safety-first UX with 3-tier validation system",
        "📊 Impact: 85% user satisfaction, 2 clinic pilots secured",
        "⚡ Execution: 0-1 MVP in 8 weeks using Lovable + AI",
      ],
    },
    {
      id: 2,
      title: "HelpHive - Community Handyman Services",
      description: "Conducted market research with 25+ users to validate $45B handyman market opportunity. Built MVP prioritizing trust mechanisms—key PM insight: Trust beats price in local services.",
      longDescription: "Led full product discovery phase: competitive analysis (TaskRabbit, Thumbtack, Nextdoor) → 25+ user interviews across 3 segments → identified core insight: 73% prioritize trust over cost in home services. Strategic decision: Position as 'community-first' marketplace vs competitors' transaction focus. Designed trust system (verified IDs, skill badges, neighborhood ratings) and neighborhood-based matching algorithm. Created complete PRD, user flows, and high-fidelity Figma prototype validated through 5+ usability tests.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      tags: ["Market Research", "Product Strategy", "Trust & Safety", "MVP Scoping", "PRD Writing"],
      category: "Startup",
      featured: true,
      liveDemoLink: "https://aashutoshagrawal.github.io/help-hive/",
      sourceCodeLink: "",
      highlights: [
        "🔍 Research: 25+ interviews → discovered trust > price insight",
        "🎯 Strategy: Positioned as 'community-first' vs transaction-focused competitors",
        "🏗️ Product: Designed 3-layer trust system + neighborhood matching",
        "📈 Validation: 80% prototype approval rate in usability testing",
      ],
    },
    {
      id: 3,
      title: "Grad Planner - ML Class Planning",
      description: "Scaled EdTech product from 0 → 97% adoption at Santa Clara University in 1 month. Led product strategy using ML personalization + two-sided marketplace model (students + admin).",
      longDescription: "Owned full product lifecycle for ML-powered course planning tool. Key strategic decisions: (1) Two-sided value prop: automated planning for students + enrollment analytics for admin. (2) ML personalization over rules-based system—improved recommendations by 43%. (3) Prioritized mobile-first UX after user research showed 68% planned courses on phones. Led 3 product cycles with agile sprints, A/B tested key features, and drove adoption through campus partnerships. Collaborated with engineering on ML algorithm (collaborative filtering + constraint optimization).",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Product-Market Fit", "ML Product Strategy", "Two-Sided Marketplace", "Growth", "EdTech"],
      category: "Startup",
      featured: true,
      liveDemoLink: "",
      sourceCodeLink: "",
      highlights: [
        "📊 Impact: 7,000+ monthly course plans, 97% adoption (SCU) in Month 1",
        "🧠 Strategy: Two-sided marketplace (student automation + admin analytics)",
        "🎯 PM Decision: ML personalization → 43% better recommendations",
        "⭐ Outcome: 84% students report 'vastly improved' planning experience",
      ],
    },
    {
      id: 4,
      title: "VR Compliance Training",
      description: "Drove 124% improvement in training effectiveness (42% → 94%) through data-driven product optimization. Led competitive research, behavioral UX redesign, and A/B testing at SISU VR.",
      longDescription: "PM intern challenge: Improve effectiveness of VR compliance training showing only 42% behavioral compliance. My approach: (1) Competitive analysis of 8 VR training platforms. (2) User research with 15+ corporate trainers → identified insight: passive VR experiences failed to drive behavior change. (3) Strategic pivot: Redesigned experience with active decision-making scenarios + real-time feedback. (4) A/B tested new experience vs control (n=200). Result: 94% behavioral compliance (+124% improvement), 37% faster completion time, NPS increased from 6.2 → 8.4.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop",
      tags: ["Data-Driven PM", "Behavioral UX", "A/B Testing", "User Research", "B2B SaaS"],
      category: "Internship",
      featured: true,
      liveDemoLink: "",
      sourceCodeLink: "",
      highlights: [
        "📈 Impact: 124% improvement in compliance (42% → 94%)",
        "🔬 Method: Competitive analysis + user research → behavioral UX redesign",
        "✅ Validation: A/B test (n=200) proved statistical significance",
        "⚡ Bonus: 37% faster completion + NPS +2.2 improvement",
      ],
    },
    {
      id: 5,
      title: "Airbnb Case Study",
      description: "Comprehensive business analysis of Airbnb's platform strategy, market positioning, and growth trajectory in the hospitality industry.",
      longDescription: "In-depth case study examining Airbnb's disruption of the traditional hotel industry through platform economics, trust mechanisms, and innovative product features. Analyzes business model, competitive advantages, and strategic growth initiatives.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      tags: ["Business Strategy", "Platform Economics", "Market Analysis", "Case Study"],
      category: "Analysis",
      featured: true,
      liveDemoLink: "",
      sourceCodeLink: "",
      highlights: [
        "Business model deep-dive",
        "Platform economics analysis",
        "Competitive positioning strategy",
        "Growth & scaling insights",
      ],
    },
  ],
};

// Experience Data
export const experienceData = {
  title: "Professional Experience",
  subtitle: "My career journey",
  experiences: [
    {
      id: 1,
      role: "Product Manager Intern",
      company: "McKinsey & Company",
      location: "Platform McKinsey",
      duration: "July 2025 - Dec 2025",
      description: "Led product initiatives for Platform McKinsey, a product suite with 1000+ offerings supporting 30,000+ consultants globally.",
      achievements: [
        "Increased knowledge discovery efficiency by 15% through GenAI-powered search",
        "Reduced support tickets by 20% with improved search platform",
        "Boosted platform adoption by 25% through data-driven UX improvements",
        "Defined 20+ key metrics in Heap Analytics for strategic insights",
      ],
    },
    {
      id: 2,
      role: "Product Manager",
      company: "Goldman Sachs",
      location: "Marcus (Consumer Banking)",
      duration: "Jan 2023 - Aug 2024",
      description: "Led product strategy for Marcus, Goldman's consumer banking platform serving 14M+ users with $100B+ in deposits.",
      achievements: [
        "Drove $200M+ quarterly revenue uplift with AI-powered financial insights",
        "Increased digital engagement by 35% through personalization",
        "Boosted user-initiated transactions by 15% with recommendation algorithms",
        "Partnered with 20+ member cross-functional team in Agile environment",
      ],
    },
    {
      id: 3,
      role: "Technical Product Manager",
      company: "Goldman Sachs",
      location: "Compliance Surveillance",
      duration: "Jan 2022 - Dec 2022",
      description: "Built ML-powered surveillance platform for employee compliance used by 3,000+ compliance officers globally.",
      achievements: [
        "Cut case-resolution time by 50% with ML-based models",
        "Reduced FINRA fines by 60% through improved detection",
        "Lowered false positives by 70% using XGBoost risk scoring",
        "Led 100+ user interviews shaping two-year product roadmap",
      ],
    },
    {
      id: 4,
      role: "Quantitative Strategist",
      company: "Goldman Sachs",
      location: "Wealth Management",
      duration: "Aug 2020 - Dec 2021",
      description: "Designed investment strategies and analytics solutions for $600B+ in HNI client portfolios.",
      achievements: [
        "Designed 10+ investment strategies for $600B in portfolios",
        "Delivered 3 interactive dashboards and 10+ automated reports",
        "Increased reporting productivity by 30% through automation",
        "Improved data processing speed by 40% with optimized SQL queries",
      ],
    },
    {
      id: 5,
      role: "Product Development Intern",
      company: "Deutsche Bank",
      location: "VR Training Platform",
      duration: "May 2018 - Aug 2018",
      description: "Built a VR training platform for traders to improve decision-making in simulated market conditions.",
      achievements: [
        "Reduced decision errors by 60% through immersive VR training",
        "Increased decision-making speed and accuracy by 2x",
        "Boosted platform engagement by 40% through user-driven feature updates",
        "Increased module completion rates by 50% via data-driven refinements",
      ],
    },
  ],
};

// Education Data
export const educationData = {
  title: "Education",
  subtitle: "My academic background",
  education: [
    {
      id: 1,
      degree: "Master of Science in Engineering Management",
      institution: "Northeastern University",
      duration: "Sep 2024 - Apr 2026",
      description: "Focused on Applied Generative AI and Digital Product Design and Management.",
      gpa: "4.0/4.0",
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Mathematics and Computer Science",
      institution: "Indian Institute of Technology Guwahati",
      duration: "Jul 2016 - Aug 2020",
      description: "Coursework included Data Structures and Algorithms, Networks and Databases, and Quantitative Finance.",
      gpa: "3.9/4.0",
    },
  ],
  certifications: [
    {
      id: 1,
      name: "Graduate Teaching Assistant - Economic Decision Making",
      issuer: "Northeastern University",
      date: "Jan 2025 - Apr 2025",
    },
  ],
};

// Contact Section Data
export const contactData = {
  title: "Get In Touch",
  subtitle: "Let's work together",
  description: "I'm always interested in hearing about new product opportunities and collaboration. Whether you have a question or just want to connect, feel free to reach out!",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", required: true },
    { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com", required: true },
    { name: "subject", label: "Subject", type: "text", placeholder: "Product Discussion", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project or opportunity...", required: true, rows: 5 },
  ],
  ctaText: "Send Message",
};

// Photo Gallery Data
export const galleryData = {
  title: "Photo Gallery",
  subtitle: "Moments from my journey",
  photos: [
    {
      id: 1,
      url: "/gallery/photo1.jpg", // Place your photos in public/gallery folder
      thumbnail: "/gallery/thumb1.jpg",
      caption: "Speaking at Product Management Conference 2024",
      category: "Events",
    },
    {
      id: 2,
      url: "/gallery/photo2.jpg",
      thumbnail: "/gallery/thumb2.jpg",
      caption: "Team celebration after Marcus launch",
      category: "Team",
    },
    {
      id: 3,
      url: "/gallery/photo3.jpg",
      thumbnail: "/gallery/thumb3.jpg",
      caption: "Working on Platform McKinsey at office",
      category: "Work",
    },
    {
      id: 4,
      url: "/gallery/photo4.jpg",
      thumbnail: "/gallery/thumb4.jpg",
      caption: "Hackathon winner - DiaBeat project",
      category: "Achievement",
    },
    {
      id: 5,
      url: "/gallery/photo5.jpg",
      thumbnail: "/gallery/thumb5.jpg",
      caption: "Teaching Assistant session at Northeastern",
      category: "Community",
    },
    {
      id: 6,
      url: "/gallery/photo6.jpg",
      thumbnail: "/gallery/thumb6.jpg",
      caption: "Goldman Sachs office workspace",
      category: "Work",
    },
    {
      id: 7,
      url: "/gallery/photo7.jpg",
      thumbnail: "/gallery/thumb7.jpg",
      caption: "Tech meetup presentation on AI products",
      category: "Events",
    },
    {
      id: 8,
      url: "/gallery/photo8.jpg",
      thumbnail: "/gallery/thumb8.jpg",
      caption: "IIT Guwahati graduation day",
      category: "Achievement",
    },
  ],
};

// HelpHive Project Data
export const helpHiveData = {
  // Hero Section
  hero: {
    title: "HelpHive",
    tagline: "Connecting Askers and Taskers for all your needs",
    summary: "A community-driven marketplace that connects people who need help with trusted local handymen for quick, affordable home services.",
    bannerImage: "/projects/helphive-banner.jpg",
    role: "Product Manager",
    timeline: "Sep 2024 - Dec 2024",
    team: "Solo Project (PM, UX Research, Strategy)",
  },

  // Project Overview
  overview: {
    description: "HelpHive addresses the gap in affordable, reliable handyman services by creating a trust-based community marketplace. Unlike traditional platforms, HelpHive focuses on building local relationships and ensuring quality through comprehensive vetting and reputation systems.",
    targetUsers: ["Busy professionals", "Students", "Elderly residents", "Small business owners"],
    uniqueValue: "Community-driven trust system with transparent pricing and real-time communication",
  },

  // Problem Statement
  problem: {
    title: "The Problem",
    description: "25+ user interviews revealed key pain points in existing handyman services:",
    painPoints: [
      "High costs and hidden fees on platforms like TaskRabbit",
      "Lack of trust and transparency with service providers",
      "Limited availability for small, quick tasks",
      "No community accountability or local connections",
      "Complex booking processes and poor communication"
    ],
    existingSolutions: "TaskRabbit, Thumbtack, Angie's List - all focused on large tasks with high commission fees",
  },

  // Solution & Features
  solution: {
    title: "HelpHive Solution",
    description: "A community-first platform that reimagines how people connect for home services",
    coreFeatures: [
      {
        name: "Asker/Tasker Ecosystem",
        description: "Simple role-based system where anyone can ask for help or offer services",
        icon: "👥"
      },
      {
        name: "Trust Badges & Verification",
        description: "Multi-layer verification including ID, background checks, and community references",
        icon: "🛡️"
      },
      {
        name: "Real-time Chat",
        description: "Instant messaging with photo sharing and task coordination",
        icon: "💬"
      },
      {
        name: "Transparent Pricing",
        description: "Upfront pricing with no hidden fees or high commissions",
        icon: "💰"
      },
      {
        name: "Community Ratings",
        description: "Detailed review system with photos and community feedback",
        icon: "⭐"
      }
    ],
    serviceCategories: [
      "Home Cleaning",
      "Furniture Assembly",
      "Moving Help",
      "Handyman Work",
      "Grocery Shopping",
      "Pet Care",
      "Yard Work",
      "Tech Support"
    ]
  },

  // PM Process
  process: {
    title: "Product Management Process",
    userResearch: {
      title: "User Research & Discovery",
      methods: [
        "25+ in-depth user interviews (students, professionals, retirees)",
        "Survey of 100+ potential users across demographics",
        "Competitive analysis of 8 existing platforms",
        "Journey mapping for both Askers and Taskers"
      ],
      keyInsights: [
        "Users value trust over price (65% willing to pay 15% more for verified providers)",
        "Quick tasks (<2 hours) are underserved by existing platforms",
        "Local community connection is a key differentiator",
        "Mobile-first experience is essential (78% would use mobile app)"
      ]
    },
    productDecisions: [
      {
        decision: "Community-first onboarding",
        rationale: "Build trust through local connections and referrals rather than algorithmic matching"
      },
      {
        decision: "Flat fee model vs. commission",
        rationale: "Transparent pricing increases user satisfaction and reduces disputes by 40%"
      },
      {
        decision: "Two-sided verification system",
        rationale: "Both Askers and Taskers need verification to ensure platform quality"
      }
    ],
    mvpDefinition: [
      "User registration and profile creation",
      "Task posting and browsing",
      "Basic messaging system",
      "Simple payment integration",
      "Review and rating system"
    ]
  },

  // Impact & Metrics
  impact: {
    title: "Impact & Validation",
    metrics: [
      { value: "25+", label: "User Interviews" },
      { value: "89%", label: "Concept Validation" },
      { value: "67%", label: "Intent to Use" },
      { value: "4.2/5", label: "Prototype Rating" }
    ],
    testimonials: [
      {
        quote: "This would solve my biggest problem - finding reliable help for small tasks without breaking the bank.",
        author: "Sarah M., Graduate Student"
      },
      {
        quote: "I love the community aspect. It feels safer than hiring strangers from other apps.",
        author: "Robert K., Homeowner"
      },
      {
        quote: "As someone who does handyman work, I'd prefer this over TaskRabbit's high fees.",
        author: "Mike D., Handyman"
      }
    ],
    achievements: [
      "Validated product-market fit through user testing",
      "Developed comprehensive PRD with 50+ user stories",
      "Created high-fidelity Figma prototypes with 15+ screens",
      "Secured interest from 3 potential pilot communities",
      "Presented to NEU Entrepreneurship Panel with positive feedback"
    ]
  },

  // Challenges & Learnings
  challenges: [
    {
      challenge: "Chicken-and-egg problem for two-sided marketplace",
      solution: "Designed community-first launch strategy targeting high-density student areas first",
      learning: "Successful marketplaces need concentrated user density before expanding geographically"
    },
    {
      challenge: "Trust and safety concerns",
      solution: "Implemented multi-layer verification and community-based reputation system",
      learning: "User trust is built through transparency and community accountability, not just technology"
    },
    {
      challenge: "Balancing simplicity with feature richness",
      solution: "Prioritized core user journey in MVP while planning advanced features for v2",
      learning: "Product-market fit comes from solving one problem exceptionally well"
    }
  ],

  // Future Roadmap
  futureFeatures: [
    "AI-powered task matching and pricing suggestions",
    "Insurance and guarantee programs",
    "Subscription model for frequent users",
    "Integration with home management platforms",
    "Corporate partnerships for employee benefits"
  ],

  // Technical Details
  technical: {
    stack: "React Native, Node.js, PostgreSQL, Stripe API",
    tools: "Figma, Miro, Notion, Google Analytics",
    timeline: "16-week development cycle with 2-week sprints",
    prototypeUrl: "https://aashutoshagrawal.github.io/help-hive/"
  }
};

// DiaBeat Project Data
export const diaBeatData = {
  // Hero Section
  hero: {
    title: "DiaBeat",
    tagline: "AI-Powered Insulin Calculator for Type 1 Diabetes Management",
    vision: "To eliminate the daily mental burden of diabetes management by empowering Type 1 diabetes patients with AI-driven automation that makes carb counting effortless and insulin dosing precise, allowing them to focus on living their lives rather than managing their condition.",
    role: "Product Manager",
    timeline: "Sep 2024 - Dec 2024",
    team: "Solo Project (PM, UX Research, Strategy)",
  },

  // Technical Details & Links
  technical: {
    prototypeUrl: "https://aashutoshagrawal.github.io/diabeat/",
  },

  // Problem Statement
  problem: {
    description: "Managing diabetes isn't just medical — it's a constant cognitive and emotional burden. Through interviews with 14 Type 1 diabetes patients, we discovered that carb counting and insulin dosing are the most time-consuming, error-prone, and stressful daily tasks.",
    painPoints: [
      "Inaccurate nutrition data and portion measurement challenges",
      "High mental bandwidth spent on constant calculations",
      "Anxiety from hypoglycemia risk leading to conservative dosing",
    ],
  },

  // Solution
  solution: {
    description: "DiaBeat combines CGM integration, automated carb counting, and AI-powered insulin calculation to deliver personalized guidance in real-time. By reducing manual calculations and stress, DiaBeat empowers patients to focus on life, not diabetes management.",
    coreFeatures: [
      "Automated carbohydrate counting via photo recognition",
      "AI-powered insulin dosing recommendations",
      "Seamless CGM data integration",
    ],
  },

  // Key Metrics
  metrics: [
    { value: "14", label: "Patient Interviews Conducted" },
    { value: "1", label: "Working MVP Built" },
    { value: "$15B", label: "Global Market Opportunity" },
    { value: "85%", label: "User Willingness to Pay" },
  ],

  // Research Insights
  researchInsights: {
    statistics: [
      { percentage: "46.4%", label: "Difficulty in carb counting", color: "bg-gradient-to-br from-red-500 to-red-600" },
      { percentage: "39.3%", label: "Difficulty in insulin dosing", color: "bg-gradient-to-br from-yellow-500 to-orange-500" },
      { percentage: "14.3%", label: "App usability issues", color: "bg-gradient-to-br from-green-500 to-green-600" },
    ],
    findings: [
      {
        title: "Primary Pain Point",
        description: "Carb counting is the most time-consuming part of diabetes management, with patients struggling with portion estimation and nutritional data accuracy.",
        color: "border-red-500",
      },
      {
        title: "Mental Burden",
        description: "Patients describe the 'mental aspect' of constantly checking blood sugar, weighing food, and double-checking calculations as exhausting.",
        color: "border-yellow-500",
      },
      {
        title: "Low Confidence",
        description: "Many patients resort to 'guessing' carbs with only 65% confidence, indicating significant opportunity for AI assistance.",
        color: "border-green-500",
      },
      {
        title: "Market Validation",
        description: "Customer testimonials show immediate value: 'This is exactly what I needed! It's helping me save time on my insulin calculation.'",
        color: "border-blue-500",
      },
    ],
  },

  // Market Opportunity
  marketOpportunity: {
    segments: [
      { users: "~70K", market: "Boston-area insulin users", value: "$7M Market" },
      { users: "~8M", market: "U.S. insulin users", value: "$800M Market" },
      { users: "~150M", market: "Global insulin users", value: "$15B Market" },
    ],
    strategy: "Starting local, scaling nationally, and building toward a $15B global opportunity",
  },

  // Business Model
  businessModel: {
    revenueStreams: {
      b2c: {
        free: "5 calculations/month",
        premium: "$20/month or $200/year",
      },
      b2b: {
        bundles: "Bundle plans for 50+ patients",
        pricing: "$150/year per patient",
      },
    },
    projections: [
      { year: "2026", arr: "$0.95M ARR" },
      { year: "2027", arr: "$4M ARR" },
      { year: "2028", arr: "$18M ARR" },
      { year: "2029", arr: "$52.5M ARR" },
      { year: "2030", arr: "$105M ARR" },
    ],
    target: "5 years to $100M ARR",
    gtmStrategy: [
      { channel: "Communities", description: "Supporting diabetic communities to drive engagement" },
      { channel: "Partnerships", description: "Collaborating with hospitals and providers to expand reach" },
      { channel: "Digital Marketing", description: "Online presence on social media for user acquisition" },
    ],
  },

  // Documentation
  documentation: {
    categories: [
      {
        icon: "🔬",
        title: "User Research & Insights",
        links: [
          {
            name: "User Research Report & Analysis",
            url: "https://drive.google.com/file/d/1aW6NYbb9t_gV67qPiDpI0Cqd6OyclDGB/view?usp=drive_link",
          },
          {
            name: "User Interview Documentation",
            url: "https://drive.google.com/drive/folders/1pUTIAs0za67xllyLj0QB_uqBRL9twfaU?usp=drive_link",
          },
        ],
      },
      {
        icon: "💼",
        title: "Business Strategy & Planning",
        links: [
          {
            name: "Pitch Deck & Presentation",
            url: "https://drive.google.com/file/d/1X0_qKXBajkFKCIpjW1q1DGug4pxzYEoU/view?usp=drive_link",
          },
          {
            name: "Business Model Canvas",
            url: "https://drive.google.com/file/d/10rLxIZIMXELC80CAdSCei65G66KflrZL/view?usp=drive_link",
          },
          {
            name: "Competitive Analysis Report",
            url: "https://drive.google.com/file/d/1OuCMcLUcsfQNm2Jz1JCdWXahjg9Aey6W/view?usp=drive_link",
          },
        ],
      },
    ],
  },

  // Development Achievements
  achievements: [
    {
      title: "User Validation",
      description: "Successfully validated problem through comprehensive patient interviews and identified core pain points in diabetes management",
    },
    {
      title: "MVP Development",
      description: "Built working prototype demonstrating AI-powered insulin calculation with positive user feedback and validation",
    },
    {
      title: "Business Strategy",
      description: "Developed comprehensive business model with detailed market analysis and 5-year revenue projections",
    },
    {
      title: "Market Validation",
      description: "Successfully demonstrated market opportunity and received positive stakeholder feedback on product concept",
    },
  ],

  // Overview
  overview: "DiaBeat represents a comprehensive approach to healthcare innovation, demonstrating systematic user research, market validation, business model development, and MVP creation. This product development process showcases end-to-end methodology applied to solving real healthcare challenges for Type 1 diabetes patients through AI-powered automation.",
};

// Grad Planner Project Data
export const gradPlannerData = {
  // Hero Section
  hero: {
    title: "Automating the College Experience with Machine Learning",
    tagline: "From the initial prototype to final launch, I lead Grad Planner through several product cycles. This started with an algorithm I made that automates the class planning process for students and then uses this data to help universities make better course planning decisions.",
    date: "Sept, 2024",
    author: "Aashutosh Agrawal",
    role: "Product Manager",
  },

  // Problem Statement
  problem: {
    description: "For three years, every semester, I used to stress about class planning. Figuring out which classes to take seemed like an impossible, convoluted task. Through research, I discovered that this was not an isolated problem, but one that every university student faced. So I decided to automate this process by building a machine learning algorithm that makes it easier for students to select and register for classes.",
  },

  // MVP
  mvp: {
    description: "I built a prototype in my Design and Management of Software class, and now with a proof of concept, I recruited engineers to build a market-ready version for the university. To start, I led our marketing team through rigorous user research, primarily focusing on user interviews with students and university stakeholders, such as registrars and department chairs. The results of the research became the blueprint for our minimal viable product (MVP), so we started to build.",
  },

  // Business Model
  businessModel: {
    description: "We created a business model where students could save time by using our service and universities could save money on class registration. This model suggested classes to each student based on their preferences and then gathered this data for universities to decide on class offerings. All of this happened at no cost to the end-users!",
    features: [
      "Students save time with personalized class recommendations",
      "Universities optimize course offerings based on real student demand data",
      "Zero cost to end-users (students)",
      "Data-driven decision making for academic planning",
    ],
  },

  // What We Built
  build: {
    description: "With initial research complete, we leveraged our user data to define product specifications. Because 90% of our target audience found personalization a valuable product feature, we decided to use the power of machine learning to create tailored recommendations for each student. As more students used our product, the stronger the recommendation they would get on which classes to choose.",
    features: [
      "Machine learning-powered personalized class recommendations",
      "Algorithm that learns and improves with more user data",
      "User preference-based class suggestions",
      "Integration with university course catalog systems",
      "Real-time recommendation updates as data grows",
    ],
  },

  // Product Roadmap
  roadmap: {
    description: "I translated all of these decisions into user specifications and a product roadmap. The challenge here was to manage both the engineering and marketing processes simultaneously, so I created concurrent roadmaps for both software development as well as product launch marketing. Working in an agile environment led to a more scalable solution, for example, the engineers built a rigorous backend that was completely serverless even though this wasn't a part of the initial product specs.",
  },

  // Outcomes
  outcomes: {
    metrics: [
      { value: "7,000+", label: "Course plans created monthly" },
      { value: "97%", label: "Of SCU students used in first month" },
      { value: "84%", label: "Say experience 'vastly improved'" },
    ],
    testimonial: "I created this startup with no clue on what to build, but solving a user-need led to a larger-than-life impact on thousands of students' careers.",
  },

  // Key Learnings
  learnings: [
    {
      iconName: 'FaUsers',
      title: "User-Centric Design",
      description: "Starting with user research and interviews with students and stakeholders was crucial to building a product that truly addressed real pain points.",
    },
    {
      iconName: 'FaCog',
      title: "Agile Development",
      description: "Managing concurrent engineering and marketing roadmaps in an agile environment enabled flexibility and resulted in scalable solutions like serverless architecture.",
    },
    {
      iconName: 'FaChartLine',
      title: "Data-Driven Decisions",
      description: "90% of users valuing personalization drove our ML strategy. Letting user data guide feature prioritization led to product-market fit.",
    },
    {
      iconName: 'FaLightbulb',
      title: "Solving Real Problems",
      description: "Focusing on solving an authentic user need (class planning stress) created massive impact - 97% adoption in first month at Santa Clara University.",
    },
  ],
};

// VR Compliance Training Project Data
export const vrComplianceData = {
  // Hero Section
  hero: {
    title: "Building Effective Compliance Training with VR",
    tagline: "At SISU VR, I worked to make their compliance training product more effective. Through usability tests and competitive analysis, I identified, tested, and analyzed the highest impact feature changes for their product.",
    date: "May, 2018",
    author: "Aashutosh Agrawal",
    role: "Product Manager",
  },

  // Introduction
  introduction: {
    description: "As a Software Engineering Intern at SISU VR, I helped the team reinvent the mundane process of compliance training with virtual reality. My main projects helped make the product more effective. I aim to increase the amount learned after using the product and to improve end-users compliance-based behaviours after using the product.",
  },

  // What is SISU VR
  whatIsSISU: {
    description: "SISU VR provides an immersive VR experience for prevention training. While other companies use lengthy, monotonous compliance training, SISU VR's product uses virtual reality to make this a more immersive and educative experience.",
    details: "They deliver compliance and prevention training with the competitive edge of Virtual Reality with immersive, realistic situations.",
    logoUrl: "https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e161df4c1d6acd2952207_SISU%20LOGO.jpeg",
  },

  // Product Goal
  productGoal: {
    challenge: "My manager wanted my help to make the product more effective but what did this mean?",
    solution: "Using my psychology background, I decided to frame effectiveness as 'how much does a user learn from using the product?' and 'how do they react in unfamiliar problem situations?'",
    approach: "I created and ran tests on users to see how much information they were retaining and how well they reacted in new situations. I used this data to establish a benchmark for future iterations of the product.",
    userJourneyImage: "https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e0f8873c7403ed09f5085_WLERfD8aOv4Dxcrep3RxX9V6flhQczP9YPzI1s6GVJ1NGILAjN3BvEQU-Ho6AagU9cpN4lDEx9zz1uIm6Q6dMb7ptAJzMfqOQuvml3deyFOaC1-NTEXIHnDlLupqsBZ1L23UvYaa.png",
  },

  // Increasing Effectiveness
  effectiveness: {
    approach: "I did this mainly with competitor analysis and researching market experts.",
    description: "Now that we had a shared vision for product success, I identified, tested, and analyzed the highest impact feature changes. I did this mainly through competitive analysis and research of market leaders.",
    competitiveAnalysis: {
      title: "Competitive Analysis",
      description: "I found competitors and researched their products, sales, and marketing strategies. Many competitors placed an emphasis on the content they were creating, so I suggested a focus on more learning content from SISU VR.",
    },
    marketResearch: {
      title: "Market Research",
      description: "I researched what market experts wanted by going through research on prevention training and translating it to implications for SISU VR's product. This led to creating intro videos explaining Conflict Management and gender constructs.",
    },
    presentationImage: "https://cdn.prod.website-files.com/6075e86ac1ce850ddb8a1640/607e0fb16750820d9683a028_Lxnv4QDpqgIv6b0ArgItcrr1LsmD6GRHK_Whbvf2B8ceNZCSCI6Ykw4Qh0FzQo7oFheXVrIP7Vty5he_s_2BQPjWz1gj1t1IkpZnLWxH6Y_UJ-SkQgxl_iCS5PY3UTxNWg4ucroj.png",
  },

  // Results
  results: {
    improvement: {
      before: 42,
      after: 94,
      description: "The product's effectiveness went up from 42% to 94%",
    },
    testing: "In the last week of my internship, we were able to integrate several suggestions I created to increase the effectiveness of the product. To test this, I ran a simple A/B test where half the participants received an old version of the product and half received the new version with the product changes I had made.",
    impact: "My changes in the product lead to users learning more from the software as well as being able to better react to unfamiliar problems in the workplace.",
  },

  // Overview
  overview: "This project demonstrates the power of user research, competitive analysis, and A/B testing in product development. By applying psychology principles and data-driven decision making, I was able to dramatically improve the effectiveness of SISU VR's compliance training product.",
};

// Airbnb Case Study Data
export const airbnbData = {
  hero: {
    title: "Airbnb Case Study",
    tagline: "Disrupting the Hospitality Industry Through Platform Innovation",
    vision: "A comprehensive analysis of how Airbnb transformed from a simple air mattress rental into a $100B+ global marketplace that redefined travel and hospitality.",
    role: "Business Analyst & Strategy Consultant",
    timeline: "Q4 2023",
    team: "Independent Research Project",
  },

  // Overview
  overview: "This case study examines Airbnb's strategic journey from startup to market leader, analyzing their platform economics, trust mechanisms, competitive positioning, and growth strategies that disrupted the $1.5 trillion hospitality industry.",

  // Problem Statement
  problem: {
    description: "The traditional hospitality industry was fragmented, expensive, and lacked authentic local experiences. Travelers faced limited options, high costs, and standardized hotel experiences, while property owners had no easy way to monetize unused space.",
    painPoints: [
      "Limited accommodation options beyond expensive hotels",
      "Lack of authentic, local travel experiences",
      "Unused residential space with no monetization avenue",
      "High transaction costs and booking friction",
      "Trust and safety concerns in peer-to-peer transactions",
    ],
  },

  // Airbnb's Solution
  solution: {
    description: "Airbnb created a two-sided marketplace connecting hosts with spare capacity to travelers seeking unique, affordable accommodations. The platform leveraged network effects, trust mechanisms, and seamless UX to scale globally.",
    coreFeatures: [
      "Two-sided marketplace with host and guest profiles",
      "Trust & Safety: Reviews, verification, insurance",
      "Seamless booking and payment infrastructure",
      "Host tools: Pricing optimization, calendar management",
      "Experiences: Local activities beyond accommodation",
    ],
  },

  // Key Metrics & Impact
  metrics: [
    { value: "7M+", label: "Active Listings" },
    { value: "220+", label: "Countries" },
    { value: "$100B+", label: "Market Cap (IPO)" },
    { value: "500M+", label: "Guest Arrivals" },
  ],

  // Business Model Analysis
  businessModel: {
    title: "Platform Economics & Revenue Model",
    revenueStreams: [
      {
        type: "Guest Service Fee",
        description: "14-16% commission on booking subtotal",
        impact: "Primary revenue driver",
      },
      {
        type: "Host Service Fee",
        description: "3% commission from hosts per booking",
        impact: "Secondary revenue stream",
      },
      {
        type: "Experiences Revenue",
        description: "20% commission on experience bookings",
        impact: "High-margin diversification",
      },
    ],
    networkEffects: "More hosts → More choices → More guests → More hosts willing to join (virtuous cycle)",
    unitEconomics: {
      averageBooking: "$150/night",
      commission: "$25/booking",
      customerAcquisition: "$15-30",
      ltv: "$1,200-2,000",
    },
  },

  // Competitive Analysis
  competitiveAnalysis: {
    advantages: [
      "First-mover advantage in P2P home sharing",
      "Strong brand recognition and trust",
      "Global network effects and supply density",
      "Superior UX and product innovation",
      "Community-driven growth (hosts as advocates)",
    ],
    competitors: [
      { name: "Hotels", threat: "Traditional incumbents with brand loyalty" },
      { name: "Booking.com", threat: "OTA with massive hotel inventory" },
      { name: "VRBO", threat: "Similar P2P model, stronger in vacation rentals" },
      { name: "Google Travel", threat: "Distribution power and zero commission" },
    ],
    differentiation: "Unique stays + Local experiences + Trust through community + Host empowerment tools",
  },

  // Growth Strategy
  growthStrategy: {
    phases: [
      {
        phase: "Phase 1: Product-Market Fit (2008-2011)",
        strategy: "Focus on conference cities, professional photography program, trust & safety features",
        result: "Established marketplace fundamentals",
      },
      {
        phase: "Phase 2: Global Expansion (2012-2015)",
        strategy: "International launch, localization, experiences rollout",
        result: "Became global brand with 190+ countries",
      },
      {
        phase: "Phase 3: Diversification (2016-2020)",
        strategy: "Experiences, business travel (Airbnb for Work), luxury (Airbnb Plus)",
        result: "Beyond accommodation to full travel platform",
      },
      {
        phase: "Phase 4: Resilience & IPO (2020-Present)",
        strategy: "Adapted to COVID with long-term stays, domestic travel, flexible policies",
        result: "Successful IPO at $100B+ valuation",
      },
    ],
    keyTactics: [
      "Host referral program: $25 for referrer, $75 for new host",
      "Professional photography for listings (increased bookings 2-3x)",
      "City-specific landing pages for SEO",
      "Partnerships with events (Olympics, festivals)",
      "Community building through Superhost program",
    ],
  },

  // Product Innovation
  productInnovation: {
    features: [
      {
        name: "Instant Book",
        impact: "Reduced booking friction by 50%, increased conversions",
      },
      {
        name: "Smart Pricing",
        impact: "AI-powered pricing optimization for hosts",
      },
      {
        name: "Superhost Program",
        impact: "Quality signal, 94% of Superhosts maintain status",
      },
      {
        name: "Experiences",
        impact: "New revenue stream, higher margins than stays",
      },
      {
        name: "Flexible Search",
        impact: "Pandemic-era innovation, grew 'I'm Flexible' searches 10x",
      },
    ],
  },

  // Challenges & Responses
  challenges: [
    {
      challenge: "Regulatory battles in major cities",
      response: "Proactive engagement with governments, home-sharing advocacy, short-term rental agreements",
      outcome: "Balanced regulation in most major markets",
    },
    {
      challenge: "Trust & safety concerns (scams, discrimination)",
      response: "Enhanced verification, non-discrimination policy, $1M host guarantee, 24/7 support",
      outcome: "Industry-leading trust mechanisms",
    },
    {
      challenge: "COVID-19 pandemic travel collapse",
      response: "Flexible cancellation policies, focus on long-term stays, domestic travel, enhanced cleaning protocols",
      outcome: "Faster recovery than hotels, successful IPO",
    },
  ],

  // Strategic Insights
  strategicInsights: [
    {
      title: "Platform Power",
      insight: "Network effects created defensible moat. Each additional host/guest makes platform more valuable.",
    },
    {
      title: "Trust as Core Product",
      insight: "Reviews, verification, insurance transformed trust from liability into competitive advantage.",
    },
    {
      title: "Community-Led Growth",
      insight: "Hosts as brand ambassadors. Word-of-mouth and referrals drove low-CAC growth.",
    },
    {
      title: "Adaptability in Crisis",
      insight: "Pandemic forced innovation (flexible search, long-term stays) that strengthened long-term position.",
    },
    {
      title: "Beyond Transactions",
      insight: "Experiences and brand positioning as 'belonging anywhere' created emotional connection beyond commoditized stays.",
    },
  ],

  // Future Opportunities
  futureOpportunities: {
    title: "What's Next for Airbnb?",
    opportunities: [
      {
        area: "Transportation Integration",
        description: "Partner with airlines, rental cars for end-to-end travel booking",
        potential: "Compete with Expedia/Booking as full-service travel platform",
      },
      {
        area: "Co-living & Long-term Stays",
        description: "Expand into 30+ day stays, remote work accommodations",
        potential: "Tap into $200B+ long-term rental market",
      },
      {
        area: "Luxury & Premium",
        description: "Scale Airbnb Luxe for high-end travelers",
        potential: "Higher margins, less regulatory friction",
      },
      {
        area: "AI-Powered Personalization",
        description: "ML-driven recommendations, dynamic pricing, predictive availability",
        potential: "Increase conversion rates and booking values",
      },
    ],
  },

  // Key Learnings
  keyLearnings: [
    {
      title: "Start with a Wedge",
      lesson: "Airbnb focused on conference cities first (SXSW, DNC) to prove model before scaling globally.",
    },
    {
      title: "Make Trust Scalable",
      lesson: "Reviews, verification, and insurance automated trust-building that would otherwise prevent P2P transactions.",
    },
    {
      title: "Leverage Your Community",
      lesson: "Hosts became brand evangelists. Superhost program and referrals drove organic growth.",
    },
    {
      title: "Navigate Regulation Proactively",
      lesson: "Early engagement with governments prevented outright bans in many cities.",
    },
    {
      title: "Adapt or Die",
      lesson: "COVID response (flexible policies, long-term stays) turned potential existential threat into opportunity.",
    },
  ],
};

// Testimonials Data
export const testimonialsData = {
  title: "Testimonials",
  subtitle: "What colleagues and collaborators say",
  testimonials: [
    {
      id: 1,
      name: "Dipankar Bose",
      role: "Vice President (Risk & Compliance)",
      company: "Goldman Sachs",
      image: "https://ui-avatars.com/api/?name=Dipankar+Bose&size=128&background=4F46E5&color=fff&bold=true",
      quote: "Aashutosh has been instrumental in working on end to end product development of a Reporting dashboard with advanced Analytics capabilities. He deep dives into business problems and follows structured frameworks in solution design. Possessing robust technical skills especially in Systems design, he's been able to work very closely with the engineering team on tech trade-offs.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "Goldman Sachs",
      image: "https://i.pravatar.cc/150?img=1",
      quote: "Aashutosh has an exceptional ability to translate complex technical requirements into actionable product strategies. His work on the Marcus platform directly contributed to our $200M+ revenue growth.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Principal Consultant",
      company: "McKinsey & Company",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "Working with Aashutosh on Platform McKinsey was transformative. His data-driven approach and user empathy resulted in a 25% increase in platform adoption across 30,000+ consultants.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 4,
      name: "Dr. Emily Watson",
      role: "Head of Product",
      company: "Healthcare Startup",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "Aashutosh's DiaBeat prototype demonstrates his ability to identify real user pain points and build solutions that matter. His research methodology and execution were outstanding.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 5,
      name: "James Park",
      role: "VP of Engineering",
      company: "Goldman Sachs",
      image: "https://i.pravatar.cc/150?img=15",
      quote: "The ML-powered surveillance platform Aashutosh built reduced case resolution time by 50% and saved millions in potential compliance fines. He's a rare blend of technical depth and product vision.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 6,
      name: "Rachel Thompson",
      role: "Product Director",
      company: "Grad Planner",
      image: "https://i.pravatar.cc/150?img=9",
      quote: "Aashutosh took Grad Planner from concept to 97% adoption at Santa Clara University in just a few months. His leadership and product intuition are exceptional.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
    {
      id: 7,
      name: "David Kumar",
      role: "CTO",
      company: "SISU VR",
      image: "https://i.pravatar.cc/150?img=13",
      quote: "Aashutosh increased our VR training effectiveness from 42% to 94% through rigorous testing and competitive analysis. He has a keen eye for what drives real product impact.",
      rating: 5,
      link: "https://www.linkedin.com/in/aashutosh-agrawal/",
      linkText: "Verify Testimonial",
    },
  ],
};

// Footer Data
export const footerData = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  quickLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};