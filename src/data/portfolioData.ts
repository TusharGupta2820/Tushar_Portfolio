export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  label?: string;
  category: string;
  technologies: string[];
  description: string;
  impact?: string;
  architectureNodes?: string[];
  keyCapabilities: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    context: string;
    approach: string;
    architecture: {
      title: string;
      diagram: string[];
      details: string;
    };
    implementation: string;
    challenges: string;
    results: string[];
    learnings: string;
    futureWork: string;
  };
}

export interface ResearchTopic {
  id: string;
  title: string;
  category: string;
  status: string;
  question: string;
  hypothesis: string;
  experiment: string;
  observation: string;
  nextQuestion: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  focus: string[];
  achievements: string[];
  impact: string[];
  technologies: string[];
}

export interface HackathonItem {
  name: string;
  award?: string;
  location?: string;
  teamsCount?: string;
  role?: string;
  description: string;
  isMajor?: boolean;
}

export interface SystemArchitectureLayer {
  layer: string;
  name: string;
  category: string;
  tech: string[];
  description: string;
  connectedTo: string[];
  metrics?: string;
}

export const PERSONAL_INFO = {
  name: "TUSHAR GUPTA",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 9076066412",
  email: "tusharwebdevp@gmail.com",
  linkedin: "https://linkedin.com/in/tushar-gupta-949873373",
  linkedinDisplay: "linkedin.com/in/tushar-gupta-949873373",
  github: "https://github.com/TusharGupta2820",
  githubDisplay: "github.com/TusharGupta2820",
  degree: "B.E. Information Technology",
  institution: "TCET, University of Mumbai",
  duration: "2023 — 2027",
  cgpa: "8.9",
  primaryPositioning: "AI Engineer · Full-Stack Developer · Computer Vision · Real-Time Systems",
  secondaryPositioning: "AI/ML · Intelligent Software · Cloud Systems · Research & Engineering",
  heroHeadline: "I BUILD INTELLIGENT SYSTEMS FOR THE REAL WORLD.",
  heroSubtext: "AI/ML · Full-Stack Engineering · Computer Vision · Real-Time Systems",
  heroIntro: "Information Technology undergraduate at the University of Mumbai building AI-powered products across education, computer vision, healthcare, cloud infrastructure, and real-time systems.",
  status: "OPEN TO SOFTWARE / AI OPPORTUNITIES",
  careerTarget: "Software Development / AI Engineering Roles",
  strengths: ["Team Collaboration", "Problem Solving", "Communication", "Leadership", "Adaptability"],
};

export const KEY_NUMBERS = [
  { value: "8.9", label: "CGPA", context: "University of Mumbai" },
  { value: "15+", label: "National Hackathons", context: "National Finalist & Winner" },
  { value: "4", label: "Internships Completed", context: "AI, Full-Stack & Systems" },
  { value: "16", label: "Repositories & Systems", context: "AI, Vision, Cloud & Web" },
  { value: "2023—27", label: "B.E. Info Tech", context: "TCET Engineering" },
];

export const SYSTEMS_ARCHITECTURE_LAYERS: SystemArchitectureLayer[] = [
  {
    layer: "LAYER 01",
    name: "FRONTEND",
    category: "Client & UI Interfaces",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "WebGL"],
    description: "Component-driven, accessible client interfaces with reactive state and 60 FPS animation rendering.",
    connectedTo: ["APPLICATION LAYER", "REAL-TIME"],
    metrics: "< 800ms Time-to-Interactive"
  },
  {
    layer: "LAYER 02",
    name: "APPLICATION LAYER",
    category: "Business Logic & APIs",
    tech: ["FastAPI", "Node.js", "Python", "REST APIs", "Pydantic"],
    description: "Asynchronous backend gateways handling request validation, auth tokens, and routing pipelines.",
    connectedTo: ["AI / ML", "DATA"],
    metrics: "Sub-15ms p95 Gateway Latency"
  },
  {
    layer: "LAYER 03",
    name: "REAL-TIME",
    category: "Streaming & WebSockets",
    tech: ["WebSockets", "WebRTC", "Server-Sent Events", "Redis Pub/Sub"],
    description: "Bi-directional real-time telemetry streaming for video pipelines and interactive AI inference streams.",
    connectedTo: ["FRONTEND", "APPLICATION LAYER"],
    metrics: "< 50ms Telemetry Sync"
  },
  {
    layer: "LAYER 04",
    name: "AI / ML",
    category: "Model Inference & Agents",
    tech: ["PyTorch", "Ollama", "YOLOv8", "LangChain", "OpenCV", "Whisper"],
    description: "Edge and localized neural network execution, computer vision object tracking, and LLM reasoning loops.",
    connectedTo: ["APPLICATION LAYER", "DATA"],
    metrics: "22 tokens/sec Local INT4 Inference"
  },
  {
    layer: "LAYER 05",
    name: "DATA",
    category: "Persistence & Vector Storage",
    tech: ["PostgreSQL", "ChromaDB", "MongoDB", "Redis", "SQLite"],
    description: "Relational storage, high-efficiency vector embeddings for RAG, and in-memory caches.",
    connectedTo: ["APPLICATION LAYER", "OBSERVABILITY"],
    metrics: "ACID Compliant + Vector Embeddings"
  },
  {
    layer: "LAYER 06",
    name: "INFRASTRUCTURE",
    category: "Cloud, Containers & CI/CD",
    tech: ["Docker", "Vercel", "GitHub Actions", "Cloudflare", "Linux"],
    description: "Containerized microservice orchestration, automated continuous deployment, and edge caching.",
    connectedTo: ["APPLICATION LAYER", "OBSERVABILITY"],
    metrics: "Automated Zero-Downtime Deploys"
  },
  {
    layer: "LAYER 07",
    name: "OBSERVABILITY",
    category: "Metrics, Tracing & Logging",
    tech: ["Prometheus", "Log Analytics", "Error Tracking", "Health Checks"],
    description: "End-to-end distributed system monitoring, error rate aggregation, and performance profiling.",
    connectedTo: ["INFRASTRUCTURE", "APPLICATION LAYER"],
    metrics: "99.9% Uptime SLA Monitoring"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "gyaansetu-ai",
    number: "01",
    title: "GyaanSetu AI",
    subtitle: "Bridging Knowledge Through Personalized Multimodal Learning",
    label: "FINAL YEAR PROJECT",
    category: "AI & Education",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Ollama", "Llama 3.1", "DeepSeek R1", "Whisper", "PaddleOCR", "ChromaDB"],
    description: "Multilingual personalized AI learning platform with adaptive study plans, doubt resolution, and OCR/voice-based content ingestion running on localized LLM runtimes.",
    impact: "Official Final Year Capstone Project at TCET, University of Mumbai",
    architectureNodes: ["Student Client", "FastAPI Gateway", "Multimodal Ingestion", "ChromaDB Vector Store", "Local LLM Inference (Ollama)", "Adaptive Delivery"],
    keyCapabilities: [
      "Multilingual learning across Indian regional languages",
      "Personalized adaptive study plans generated dynamically",
      "Real-time doubt resolution with localized LLM inference",
      "OCR-based textbook and handwritten notes ingestion (PaddleOCR)",
      "Voice-based interactive query processing (OpenAI Whisper)",
      "Local AI privacy-first models (Ollama, Llama 3.1, DeepSeek R1)",
      "Vector embeddings & semantic retrieval (ChromaDB)"
    ],
    githubUrl: "https://github.com/TusharGupta2820/Gyaaansetu_AI",
    liveUrl: "https://gyaaansetu-ai.vercel.app",
    caseStudy: {
      problem: "Traditional digital educational platforms offer static, one-size-fits-all content with high latency and severe language barriers for non-English speakers, while often compromising student data privacy with third-party cloud APIs.",
      context: "Personalized tutoring drastically improves learning outcomes, but access to high-quality multilingual mentorship remains scarce. Offline and local edge LLMs present an unprecedented opportunity to provide fast, private, and contextual tutoring.",
      approach: "Engineered a decoupled, local-first multimodal architecture. Input textbook pages and voice notes are digitized via PaddleOCR and Whisper, embedded into ChromaDB, and synthesized by quantized Llama 3.1 and DeepSeek R1 models running on local Ollama runtime.",
      architecture: {
        title: "Multimodal Knowledge Retrieval & Inference Pipeline",
        diagram: [
          "Student Interface (React / TypeScript)",
          "FastAPI Asynchronous Gateway",
          "Multimodal Ingestion (PaddleOCR + Whisper)",
          "ChromaDB Vector Store (Semantic Embeddings)",
          "Local Inference Cluster (Ollama / Llama 3.1 / DeepSeek R1)",
          "Adaptive Knowledge Delivery Engine"
        ],
        details: "Employs an asynchronous ingestion queue to process PDF/image scans and audio streams without blocking user interaction, streaming real-time token responses via Server-Sent Events."
      },
      implementation: "Built using React and TypeScript on the client with WebSocket hooks for live audio streaming. The backend leverages FastAPI with Python workers interfacing with ChromaDB and Ollama local daemon.",
      challenges: "Optimizing OCR extraction on low-contrast textbook typography and minimizing inference latency on commodity hardware through quantized GGUF weights.",
      results: [
        "End-to-end multimodal query response pipeline with localized OCR and Voice input",
        "Seamless zero-data-leakage architecture operating entirely on local LLM runtimes",
        "Selected as Capstone Final Year Project at TCET, University of Mumbai",
        "Comprehensive localized tutoring delivery with sub-second token streaming"
      ],
      learnings: "Mastered retrieval augmented generation with local vector stores, edge model quantization tradeoffs, and async stream processing in FastAPI.",
      futureWork: "Exploring fine-tuning domain-specific Indic adapters and real-time interactive voice-to-voice turn taking."
    }
  },
  {
    id: "devops-ai",
    number: "02",
    title: "DevOps-AI",
    subtitle: "Autonomous Cloud Observability & Intelligent CI/CD Pipeline Diagnosis",
    label: "FEATURED PRODUCTION DEPLOYMENT",
    category: "Cloud & DevOps",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Docker", "GitHub Actions", "Vercel"],
    description: "Intelligent DevOps and cloud infrastructure automation platform featuring automated pipeline health diagnostics, log anomaly detection, and automated root-cause recommendation for build failures.",
    impact: "Live Production Cloud Deployment on Vercel",
    architectureNodes: ["Next.js Frontend", "Pipeline Webhook Listener", "Log Parsing Engine", "AI Diagnostic Agent", "Remediation Generator", "Vercel / Cloud Deploy"],
    keyCapabilities: [
      "Automated CI/CD build failure log ingestion & root-cause extraction",
      "Real-time cluster & service deployment health monitoring",
      "Interactive incident resolution copilot with suggested patch scripts",
      "Comprehensive telemetry dashboard with error frequency graphs",
      "Container health analysis and Dockerfile optimization advisor",
      "Sleek dark-mode developer console built with modern TypeScript & Tailwind"
    ],
    githubUrl: "https://github.com/TusharGupta2820/DevOps-AI",
    liveUrl: "https://dev-ops-ai-six.vercel.app",
    caseStudy: {
      problem: "Software engineering teams spend thousands of hours manually parsing monolithic CI/CD logs and debugging transient cloud deployment anomalies.",
      context: "Modern distributed systems generate voluminous error traces. Applying intelligent parsing and LLM reasoning allows rapid triage and automated remediation.",
      approach: "Designed a dedicated developer observability platform that ingests build logs, decomposes stack traces into structured AST nodes, and generates precise corrective pull requests.",
      architecture: {
        title: "DevOps Automated Triage & Deployment Architecture",
        diagram: [
          "Next.js App Router Client",
          "Log Ingestion Stream API",
          "Heuristic Error Pattern Matcher",
          "AI Remediation Generator",
          "Automated Action Dispatcher"
        ],
        details: "Built with modular Next.js API routes and high-performance TypeScript components rendering interactive deployment topology."
      },
      implementation: "Developed with React, TypeScript, Next.js, and Tailwind CSS. Integrated real-time status monitors and instant feedback loops.",
      challenges: "Handling arbitrarily formatted error dumps from diverse toolchains (GCC, Node, Maven, PyTest) and normalizing them into actionable diagnostics.",
      results: [
        "Deployed to production on Vercel with high responsiveness",
        "Streamlined build diagnosis workflows into single-click summaries",
        "Clean, modern developer user interface"
      ],
      learnings: "Deepened expertise in cloud deployment automation, CI/CD pipelines, and developer experience (DX) design.",
      futureWork: "Adding native GitHub App webhook integrations for inline pull-request comment triage."
    }
  },
  {
    id: "ifanow",
    number: "03",
    title: "IFANOW",
    subtitle: "Intelligent Financial Advisory & Automated Wealth Management Platform",
    label: "LIVE PRODUCTION PLATFORM",
    category: "Fintech & Analytics",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Financial Analytics", "Vercel"],
    description: "Comprehensive financial advisory and client wealth management system with portfolio rebalancing analytics, asset allocation simulations, and client advisory reporting.",
    impact: "Live Production Platform Deployed on Vercel",
    architectureNodes: ["Adviser Dashboard", "Portfolio Analysis Engine", "Risk Profiling Matrix", "Asset Allocator", "Automated Report Generator"],
    keyCapabilities: [
      "Real-time client portfolio asset allocation visualization",
      "Dynamic risk tolerance scoring and compliance validation",
      "Automated tax-harvesting and fund rebalancing simulations",
      "High-prestige financial metrics dashboard and PDF report compilation",
      "Secure client record management with responsive financial charts"
    ],
    githubUrl: "https://github.com/TusharGupta2820/IFANOW",
    liveUrl: "https://ifanow.vercel.app",
    caseStudy: {
      problem: "Independent financial advisers (IFAs) struggle with disjointed legacy spreadsheets and fragmented tools when managing diverse client asset allocations.",
      context: "Digital wealth management requires real-time visual clarity, rigorous compliance checks, and intuitive client portfolio storytelling.",
      approach: "Engineered a unified financial analytics platform that consolidates holdings, computes risk-adjusted returns, and produces executive advisory summaries.",
      architecture: {
        title: "Financial Analytics & Portfolio Engine",
        diagram: [
          "Client Advisory Interface",
          "Portfolio Valuation Engine",
          "Risk Profile Assessment Model",
          "Asset Allocation Visualizer",
          "Client Statement Exporter"
        ],
        details: "Built for instant calculation of portfolio metrics with client-side reactive state management."
      },
      implementation: "Crafted using React, TypeScript, Next.js, and custom financial visualization components.",
      challenges: "Ensuring zero-latency rendering of multi-tiered asset breakdowns across equity, debt, and alternative classes.",
      results: [
        "Fully deployed and accessible on Vercel",
        "Intuitive financial charts and interactive asset simulator",
        "Clean, responsive enterprise-grade UI"
      ],
      learnings: "Mastered financial domain data modeling, wealth management workflows, and complex numerical state management.",
      futureWork: "Integrating algorithmic Monte Carlo simulations for long-term retirement trajectory forecasting."
    }
  },
  {
    id: "wair",
    number: "04",
    title: "WAIR — Web AI Real-Time Co-Pilot",
    subtitle: "Real-Time Context-Aware Web Intelligence & Workflow Automation",
    category: "AI & LLM Agents",
    technologies: ["TypeScript", "React", "Next.js", "Web APIs", "AI Orchestration"],
    description: "Real-time intelligent web co-pilot and context-aware workspace assistant for intelligent browsing, automated web content synthesis, and interactive task acceleration.",
    impact: "Active Open-Source System",
    architectureNodes: ["Browser Context Listener", "DOM Semantic Extractor", "AI Reasoning Agent", "Interactive Overlay HUD"],
    keyCapabilities: [
      "Live DOM and web content semantic extraction",
      "Instant contextual summarization and Q&A over active webpages",
      "Real-time interactive AI chat overlay",
      "Fast TypeScript architecture with zero layout shift"
    ],
    githubUrl: "https://github.com/TusharGupta2820/WAIR",
    caseStudy: {
      problem: "Information overload on the modern web makes researching complex technical topics time-consuming and fragmented across multiple tabs.",
      context: "Context-aware co-pilots that can directly interpret active webpage semantics provide immediate cognitive leverage.",
      approach: "Constructed an agile real-time web intelligence assistant with direct DOM extraction hooks and rapid LLM synthesis.",
      architecture: {
        title: "Web Context Extraction & Reasoning Flow",
        diagram: [
          "Webpage Content Ingestion",
          "Semantic Tokenizer & Filter",
          "Contextual AI Agent",
          "Reactive UI Assistant Panel"
        ],
        details: "Lightweight client-side processing ensuring minimal memory overhead."
      },
      implementation: "Built using modern TypeScript, Next.js, and reactive UI component patterns.",
      challenges: "Parsing noisy webpage layouts (ads, navigation, footers) to isolate core article content.",
      results: [
        "Ultra-fast contextual query responses on arbitrary web content",
        "Clean, lightweight TypeScript modular codebase"
      ],
      learnings: "Deepened knowledge of DOM tree parsing algorithms and client-side AI streaming.",
      futureWork: "Extending to browser extension packaging with multi-tab collaborative research memory."
    }
  },
  {
    id: "blockchain-health",
    number: "05",
    title: "Blockchain Health Intelligence (MedChain)",
    subtitle: "Decentralized Electronic Health Records & Diagnostic Security",
    category: "Fintech & Healthcare",
    technologies: ["JavaScript", "Solidity", "Web3.js", "Ethereum", "IPFS", "Node.js", "Cryptography"],
    description: "Decentralized electronic health record intelligence system combining immutable blockchain audit logs, encrypted patient data sharing, and diagnostic AI insights.",
    impact: "Full Smart Contract & DApp Prototype",
    architectureNodes: ["Patient / Doctor Portal", "Web3 Provider", "Ethereum Smart Contracts", "IPFS Encrypted Storage", "Diagnostic Analytics"],
    keyCapabilities: [
      "Cryptographic patient-controlled access delegation",
      "Immutable audit trails for every medical record lookup",
      "IPFS distributed storage for encrypted medical scans and EHRs",
      "Smart contract-based consent revocation mechanisms"
    ],
    githubUrl: "https://github.com/TusharGupta2820/Blockchain-health-Intelligence",
    caseStudy: {
      problem: "Centralized healthcare databases suffer from catastrophic data breaches, unauthorized record alterations, and lack of patient sovereignty over personal medical history.",
      context: "Blockchain smart contracts combined with decentralized storage provide a cryptographically verified solution for patient-owned healthcare records.",
      approach: "Engineered an Ethereum smart contract suite managing patient consent lists, storing content-addressed hashes on IPFS, with a responsive Web3 dashboard.",
      architecture: {
        title: "Decentralized Health Records Security Architecture",
        diagram: [
          "Web3 Client DApp (JavaScript)",
          "MetaMask / Wallet Auth",
          "Solidity Access Control Smart Contracts",
          "IPFS Encrypted Medical File Repository",
          "Immutable Audit Ledger"
        ],
        details: "Patient records are encrypted client-side using symmetric keys before upload to IPFS; only the cryptographic CID is committed to the blockchain."
      },
      implementation: "Authored Solidity smart contracts and tested with Hardhat; built the client with JavaScript and Web3.js.",
      challenges: "Minimizing gas costs for multi-doctor permission updates while maintaining non-repudiation.",
      results: [
        "Working decentralized electronic health record prototype",
        "Granular doctor-by-doctor permission granting and instant revocation"
      ],
      learnings: "Gained hands-on mastery in Solidity smart contract development, Web3 event listening, and asymmetric cryptography.",
      futureWork: "Exploring Zero-Knowledge Proofs (zk-SNARKs) to verify medical conditions without disclosing raw medical records."
    }
  },
  {
    id: "drone-fleet-management",
    number: "06",
    title: "AI-Powered Drone Fleet Management & Real-Time Video Analytics",
    subtitle: "Real-Time Aerospace Telemetry, WebRTC Streams & Edge Video Intelligence",
    label: "3D TACTICAL HUD SIMULATOR",
    category: "Computer Vision & Robotics",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Three.js", "WebSockets", "WebRTC", "YOLOv8", "OpenCV"],
    description: "Interactive real-time aerospace drone fleet tracking platform featuring live video feeds, YOLOv8 computer vision object detection, geofencing alarms, and 3D radar telemetry.",
    impact: "End-to-End Real-Time Video & Telemetry Pipeline",
    architectureNodes: ["Drone Telemetry", "WebRTC Video Stream", "YOLOv8 Edge Inference", "FastAPI WebSocket Gateway", "React / Three.js Tactical HUD"],
    keyCapabilities: [
      "Real-time multi-drone telemetry ingestion (GPS coordinates, altitude, battery, pitch/yaw/roll)",
      "Low-latency WebRTC video streaming with simulated thermal/optical sensors",
      "YOLOv8 bounding-box inference with confidence scores and target tracking",
      "Interactive 3D radar grid and tactical map with flight path history",
      "Dynamic geofencing boundaries with automated breach alerts",
      "Full mission replay and tactical telemetry command console"
    ],
    githubUrl: "https://github.com/TusharGupta2820",
    caseStudy: {
      problem: "Monitoring multiple autonomous unmanned aerial vehicles (UAVs) in real time requires synthesizing high-frequency telemetry, low-latency video streaming, and automated object detection without UI bottlenecking.",
      context: "Modern aerospace and surveillance applications need a unified tactical dashboard that combines 3D spatial awareness with real-time video analytics.",
      approach: "Designed a microservice architecture that separates high-frequency WebSocket telemetry from WebRTC video streams, rendering an interactive 3D tactical radar overlay in Three.js alongside real-time YOLOv8 bounding boxes.",
      architecture: {
        title: "Real-Time UAV Video & Telemetry Pipeline",
        diagram: [
          "Edge UAV / Flight Controller",
          "WebRTC Media Server & WebSocket Gateway",
          "YOLOv8 Object Detection Pipeline",
          "FastAPI Asynchronous Broker",
          "React Tactical HUD & Three.js 3D Radar"
        ],
        details: "Processes video frames at up to 30 FPS while maintaining telemetry synchronization under 50ms latency."
      },
      implementation: "Built using Three.js and Canvas for the radar map, with custom Web Audio telemetry beeps, and FastAPI WebSockets for bi-directional drone state synchronization.",
      challenges: "Synchronizing high-frequency bounding box coordinates with video frames during network jitter without frame dropping.",
      results: [
        "Interactive 3D Tactical HUD simulator running seamlessly in-browser",
        "Sub-50ms telemetry synchronization across multiple concurrent drones",
        "Automated human, vehicle, and hazard object detection bounding boxes"
      ],
      learnings: "Mastered WebRTC streaming, high-performance Canvas/WebGL rendering, and asynchronous WebSocket pipelines.",
      futureWork: "Adding autonomous swarm route collision avoidance algorithms and multi-agent coordination."
    }
  },
  {
    id: "cybreon-robotics",
    number: "07",
    title: "Cybreon — AI-Powered Robotic Brain Architecture",
    subtitle: "Autonomous Robotics Intelligence, Perception Pipeline & Motion Control",
    category: "Computer Vision & Robotics",
    technologies: ["Python", "C++", "ROS", "OpenCV", "PyTorch", "Sensor Fusion", "Reinforcement Learning"],
    description: "Intelligent autonomous robotics software architecture integrating perception, spatial mapping, sensor fusion, and real-time decision loops for autonomous robotic navigation.",
    impact: "Robotic Perception & Autonomous Decision Suite",
    architectureNodes: ["Sensor Array", "Perception Pipeline (OpenCV)", "Spatial SLAM Engine", "Decision & Path Planner", "Motor Actuator Control"],
    keyCapabilities: [
      "Real-time sensor fusion combining camera streams and ultrasonic telemetry",
      "Spatial mapping and autonomous obstacle avoidance decision loops",
      "Modular robotic brain architecture decoupled into perception and actuation",
      "Hardware-in-the-loop simulation testing and motor trajectory planning"
    ],
    githubUrl: "https://github.com/TusharGupta2820/Cybreon-AI-Powered-Robotic-Brain-Software",
    caseStudy: {
      problem: "Autonomous robots require deterministic, ultra-low-latency decision architectures to navigate dynamic physical environments without collision.",
      context: "Bridging deep learning vision models with real-time embedded control requires strict separation of high-level perception and low-level actuation loops.",
      approach: "Structured Cybreon as a dual-tier architecture: high-level cognitive vision running asynchronous neural perception, feeding target coordinates to a deterministic motion controller.",
      architecture: {
        title: "Dual-Tier Robotic Brain Architecture",
        diagram: [
          "Vision & Sensor Ingestion",
          "Neural Perception & Feature Extraction",
          "Dynamic Pathfinding & Occupancy Grid",
          "Deterministic Motion Controller",
          "Motor Actuator Drivers"
        ],
        details: "Ensures safety-critical collision avoidance runs at high determinism regardless of neural network inference jitter."
      },
      implementation: "Engineered using Python and C++ with OpenCV vision routines and modular state machines.",
      challenges: "Compensating for camera latency during fast robotic turns through predictive Kalman filtering.",
      results: [
        "Autonomous obstacle avoidance in simulated indoor environments",
        "Modular architecture easily adaptable across diverse robotic chassis"
      ],
      learnings: "Gained deep understanding of robotics control systems, sensor fusion, and real-time C++ / Python interoperability.",
      futureWork: "Deploying on physical Nvidia Jetson edge hardware with visual SLAM."
    }
  },
  {
    id: "zeex-platform",
    number: "08",
    title: "Zeex Platform Architecture & Cloud Infrastructure",
    subtitle: "Modern Enterprise Web Architecture & Distributed AI Automation",
    category: "Web & Systems",
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "Cloudflare", "Docker"],
    description: "Cloud-native web platform architecture and distributed infrastructure for scalable digital business operations, high-throughput interactions, and modern digital presence.",
    impact: "Engineered during Internship at ZEEX AI",
    architectureNodes: ["Next.js Frontend", "Edge CDN", "API Middleware", "Microservices Gateway", "Automated Analytics"],
    keyCapabilities: [
      "Modern full-stack web architecture with SSR/SSG rendering",
      "High-prestige dark-mode user interface with smooth Framer Motion interactions",
      "Optimized Core Web Vitals and sub-second page delivery",
      "Modular component design system and automated CI/CD deployment"
    ],
    githubUrl: "https://github.com/TusharGupta2820/ZeexWebsite",
    caseStudy: {
      problem: "Modern enterprise AI platforms require blisteringly fast, polished digital interfaces that effectively convey complex technology capabilities.",
      context: "Built during engineering tenure at ZEEX AI to create a premier digital architecture for client acquisition and product showcasing.",
      approach: "Implemented a component-driven design system using Next.js, TypeScript, and Tailwind CSS with edge caching and responsive micro-interactions.",
      architecture: {
        title: "Cloud-Native Web Delivery Architecture",
        diagram: [
          "Edge Caching CDN",
          "Next.js App Router Server",
          "Component Design System",
          "API Integration Layer",
          "Analytics Telemetry"
        ],
        details: "Utilizes modern server-side rendering for optimal SEO and client-side hydration for dynamic animations."
      },
      implementation: "Crafted in TypeScript with scalable component hierarchies and reusable UI tokens.",
      challenges: "Achieving 95+ Google Lighthouse scores across all desktop and mobile viewports.",
      results: [
        "Sub-800ms Time-to-First-Byte across global edge nodes",
        "Responsive, fluid animations with 60 FPS performance",
        "Directly utilized in live ZEEX AI client presentations"
      ],
      learnings: "Mastered production Next.js architecture, edge deployment patterns, and conversion-focused UI/UX design.",
      futureWork: "Integrating dynamic interactive 3D product previews and localized multi-language routing."
    }
  },
  {
    id: "wumpus-simulator",
    number: "09",
    title: "Wumpus Lane Simulator",
    subtitle: "Knowledge-Based AI Reasoning & Propositional Logic Engine",
    category: "AI & LLM Agents",
    technologies: ["JavaScript", "HTML5 Canvas", "Propositional Logic", "State-Space Search", "AI Knowledge Base"],
    description: "Knowledge-based AI reasoning and logical inference engine simulating propositional logic, state-space search, and autonomous hazard avoidance in a partially observable world.",
    impact: "Interactive AI Reasoning Demonstrator",
    architectureNodes: ["Environment Grid", "Percept Ingestion", "Knowledge Base (KB)", "Logical Inference Engine", "Action Selector"],
    keyCapabilities: [
      "Interactive 4x4 and NxN grid world simulation with pits, breeze, stench, and the Wumpus",
      "Autonomous agent knowledge base maintaining propositional sentence truth values",
      "Forward-chaining logical deduction proving safe vs hazardous squares",
      "Visual step-by-step reasoning trace displaying agent cognitive decisions"
    ],
    githubUrl: "https://github.com/TusharGupta2820/Wumpus-lane-Simulator",
    caseStudy: {
      problem: "Demonstrating how artificial intelligence agents reason under uncertainty in partially observable classical AI environments.",
      context: "The Wumpus World is the foundational benchmark for symbolic AI and logical inference engines.",
      approach: "Built a visual simulator in JavaScript where an autonomous agent applies propositional deduction rules to explore safely without triggering hazards.",
      architecture: {
        title: "Symbolic Knowledge Base Reasoning Pipeline",
        diagram: [
          "Percept Vector (Stench, Breeze, Glitter, Bump, Scream)",
          "Propositional Sentence Generator",
          "Knowledge Base (Inference & Resolution)",
          "Provably Safe Move Selector",
          "Grid Canvas Visualizer"
        ],
        details: "Updates truth tables in real time as the agent acquires new environmental percepts."
      },
      implementation: "Developed with clean vanilla JavaScript and HTML5 Canvas with interactive controls.",
      challenges: "Implementing efficient clause resolution without exponential truth table explosion on larger grids.",
      results: [
        "Fully interactive in-browser simulation of classical knowledge-based AI",
        "Visual reasoning log explaining why the agent made each specific move"
      ],
      learnings: "Deepened foundational knowledge of symbolic artificial intelligence, propositional logic, and state-space exploration.",
      futureWork: "Adding first-order logic resolution and probabilistic reasoning with Bayesian networks."
    }
  },
  {
    id: "campus-navigator",
    number: "10",
    title: "Campus Navigator",
    subtitle: "Geospatial Pathfinding & Indoor/Outdoor Route Optimization",
    category: "Web & Systems",
    technologies: ["JavaScript", "HTML5", "CSS3", "Graph Algorithms", "Dijkstra", "A* Search", "Geospatial Mapping"],
    description: "Interactive campus pathfinding and indoor/outdoor navigational system optimizing route efficiency with Dijkstra and A* algorithms for students and visitors.",
    impact: "Interactive Campus Navigation Tool",
    architectureNodes: ["Campus Map Visualizer", "Node-Graph Topology", "Pathfinding Engine (A*)", "Turn-by-Turn Guide"],
    keyCapabilities: [
      "Interactive campus topological graph mapping buildings, labs, classrooms, and pathways",
      "Optimal route calculation using Dijkstra's and A* heuristic pathfinding",
      "Accessible wheelchair-friendly path filtering options",
      "Step-by-step turn-by-turn navigation instructions"
    ],
    githubUrl: "https://github.com/TusharGupta2820/campus-navigator",
    caseStudy: {
      problem: "Navigating complex university campuses with multi-floor academic blocks and interconnected buildings is disorienting for new students and visitors.",
      context: "Geospatial graph mapping enables precise shortest-path calculations tailored to campus infrastructure.",
      approach: "Constructed a custom graph representation of campus nodes and implemented A* heuristic search to compute optimal routes instantly.",
      architecture: {
        title: "Campus Graph Pathfinding Architecture",
        diagram: [
          "Campus Graph Topology (Nodes & Weighted Edges)",
          "Origin & Destination Selector",
          "A* Heuristic Pathfinding Algorithm",
          "SVG Path Renderer",
          "Turn-by-Turn Instruction Generator"
        ],
        details: "Calculates optimal routes across weighted distance and elevation metrics."
      },
      implementation: "Built using JavaScript and HTML5 Canvas/SVG for responsive map rendering.",
      challenges: "Modeling multi-level indoor staircases and elevators seamlessly with outdoor walkways.",
      results: [
        "Instant route calculation between any two campus locations",
        "Clear visual path highlighting on the campus map"
      ],
      learnings: "Mastered graph data structures, spatial search algorithms, and interactive SVG rendering.",
      futureWork: "Adding live beacon-based indoor positioning and AR directional arrows on mobile."
    }
  },
  {
    id: "ai-task-agent",
    number: "11",
    title: "AI-Powered Task Management Agent",
    subtitle: "Autonomous Task Decomposition & Dynamic Execution using LLMs & Streamlit",
    category: "AI & LLM Agents",
    technologies: ["Python", "Streamlit", "LangChain", "LLMs", "Prompt Engineering", "Task Queues"],
    description: "Autonomous multi-step task execution agent leveraging LLM chain-of-thought decomposition, priority scheduling, and an interactive Streamlit UI to turn high-level goals into actionable work plans.",
    impact: "Autonomous Workflow Agent Prototype",
    architectureNodes: ["User Goal Input", "LLM Goal Decomposer", "Dependency Graph Solver", "Task Execution Scheduler", "Streamlit Dashboard"],
    keyCapabilities: [
      "Natural language goal decomposition into sub-tasks with estimated time and prerequisites",
      "Dynamic priority matrix based on Eisenhower Urgent/Important categorization",
      "Automated milestone tracking and progress visualization in Streamlit",
      "Interactive task modification and prompt-guided refinement"
    ],
    githubUrl: "https://github.com/TusharGupta2820/-AI-Powered-Task-Management-Agent-using-LLMs-Streamlit-",
    caseStudy: {
      problem: "Individuals and project managers struggle to translate ambiguous high-level goals into concrete, sequenced, and prioritized task backlogs.",
      context: "LLM agents capable of multi-step planning can automatically scaffold structured project roadmaps from single prompts.",
      approach: "Built a LangChain agent pipeline that takes a broad objective, generates a directed acyclic graph (DAG) of subtasks, and tracks execution states.",
      architecture: {
        title: "LLM Task Planning & Execution Pipeline",
        diagram: [
          "High-Level Objective Input",
          "Chain-of-Thought Decomposition Agent",
          "Dependency & Resource Allocator",
          "Streamlit Reactive UI",
          "Exportable Task Backlog"
        ],
        details: "Uses structured JSON outputs from LLMs to render interactive task boards."
      },
      implementation: "Developed in Python using Streamlit for rapid prototyping and LangChain for structured schema enforcement.",
      challenges: "Preventing hallucinations in subtask estimation and ensuring prerequisite task ordering was logically sound.",
      results: [
        "Generated realistic, actionable project schedules in seconds",
        "Interactive UI allowing one-click task completions and prompt adjustments"
      ],
      learnings: "Mastered LangChain agents, structured output parsing, and Streamlit rapid app development.",
      futureWork: "Connecting to Notion and Jira APIs for automatic bidirectional task syncing."
    }
  },
  {
    id: "ai-resume-analyser",
    number: "12",
    title: "AI-Based Resume Analyser & Career Matcher",
    subtitle: "Automated NLP-Driven Resume Parsing, ATS Scoring & Skill Gap Recommendations",
    category: "AI & LLM Agents",
    technologies: ["Python", "NLP", "Spacy", "NLTK", "PyPDF2", "Streamlit", "Scikit-Learn"],
    description: "Automated NLP-driven resume parsing and ATS scoring platform with skill gap identification, keyword match rates, and personalized job readiness recommendations.",
    impact: "Automated Career Intelligence Tool",
    architectureNodes: ["PDF Resume Ingestion", "Text Extraction & Entity Parsing", "Skill Taxonomy Matcher", "ATS Score Calculator", "Recommendation Engine"],
    keyCapabilities: [
      "PDF and DOCX resume parsing extracting experience, education, skills, and certifications",
      "Semantic keyword similarity comparison against target job descriptions",
      "ATS compatibility scoring with actionable formatting improvement suggestions",
      "Personalized course and project recommendations to bridge detected skill gaps"
    ],
    githubUrl: "https://github.com/TusharGupta2820/-AI-Based-Resume-Analyser-",
    caseStudy: {
      problem: "Job seekers frequently face silent rejections by automated Applicant Tracking Systems (ATS) due to missing keywords and incompatible document formatting.",
      context: "Providing candidates with transparent ATS scoring and skill gap analysis significantly improves interview conversion rates.",
      approach: "Engineered an NLP parsing pipeline using Spacy and TF-IDF similarity to compare candidate resumes with industry job role taxonomies.",
      architecture: {
        title: "Resume Semantic Analysis & Scoring Pipeline",
        diagram: [
          "Resume PDF Ingestion (PyPDF2)",
          "Named Entity Recognition (Spacy NLP)",
          "Skill Taxonomy Vectorizer (TF-IDF & Cosine Sim)",
          "ATS Benchmark Comparison",
          "Interactive Score & Gap Report"
        ],
        details: "Calculates match percentage and highlights missing technical proficiencies."
      },
      implementation: "Crafted in Python utilizing Spacy NLP models and Streamlit for the user dashboard.",
      challenges: "Handling irregular multi-column resume layouts and non-standard section headings.",
      results: [
        "Accurate entity extraction across diverse resume formats",
        "Actionable feedback scoring leading to improved ATS pass rates"
      ],
      learnings: "Deepened practical skills in Named Entity Recognition (NER), text extraction, and cosine similarity metrics.",
      futureWork: "Integrating fine-tuned LLM agents for automated bullet-point rewriting and impact quantification."
    }
  },
  {
    id: "ai-email-assistant",
    number: "13",
    title: "AI-Powered Email Reply Assistant",
    subtitle: "Context-Aware Email Intelligence, Thread Summarization & Tone Calibration",
    category: "AI & LLM Agents",
    technologies: ["Python", "LangChain", "LLMs", "NLP", "Streamlit", "Zero-Shot Classification"],
    description: "Context-aware automated email intelligence assistant utilizing semantic thread analysis, sentiment scoring, and zero-shot tone calibration to draft professional responses in seconds.",
    impact: "Productivity AI Assistant",
    architectureNodes: ["Incoming Email Thread", "Semantic Context Analyzer", "Tone & Intent Classifier", "LLM Draft Generator", "Refinement Studio"],
    keyCapabilities: [
      "Long email thread summarization into concise 3-bullet briefings",
      "Multi-tone response drafting (Executive, Friendly, Persuasive, Formal, Brief)",
      "Automated action item and deadline extraction from incoming messages",
      "One-click reply generation with editable refinement interface"
    ],
    githubUrl: "https://github.com/TusharGupta2820/-AI-Powered-Email-Reply-Assistant-",
    caseStudy: {
      problem: "Professionals spend over 25% of their workday reading and drafting repetitive email responses.",
      context: "LLM-driven assistants can understand conversational context, retain nuance, and draft customized email replies instantly.",
      approach: "Developed an intuitive application that takes complex email threads, extracts sender intent, and drafts tailored responses based on selected communication tone.",
      architecture: {
        title: "Email Thread Analysis & Response Architecture",
        diagram: [
          "Raw Email Thread Input",
          "Intent & Sentiment Extractor",
          "Prompt Calibration Engine",
          "LLM Response Synthesizer",
          "Final Draft Editor"
        ],
        details: "Calibrates prompt templates according to user-selected tone and length constraints."
      },
      implementation: "Built using Python, LangChain, and Streamlit with custom prompt engineering.",
      challenges: "Maintaining contextual awareness in nested email replies with conflicting previous statements.",
      results: [
        "Draft generation in under 2 seconds across 5 distinct professional tones",
        "Accurate action item extraction from complex multi-party email chains"
      ],
      learnings: "Mastered prompt engineering strategies, zero-shot tone adaptation, and practical NLP application design.",
      futureWork: "Building a native Chrome Extension for Gmail and Outlook integration."
    }
  },
  {
    id: "ai-smart-reminder",
    number: "14",
    title: "AI-Based Smart Reminder & Follow-Up System",
    subtitle: "Conversational NLP Intent Extraction & Automated Push Scheduling",
    category: "AI & LLM Agents",
    technologies: ["Python", "NLP", "Regex", "SQLite", "Dateutil", "Task Scheduling"],
    description: "Natural language reminder assistant parsing conversational inputs into structured calendar schedules, proactive follow-ups, and automated notification alerts.",
    impact: "Productivity Automation Engine",
    architectureNodes: ["Conversational Input", "Temporal Entity Parser", "Intent Classifier", "SQLite Store", "Scheduler Daemon"],
    keyCapabilities: [
      "Natural language temporal parsing (e.g., 'Remind me to submit the TCET report next Thursday at 4 PM')",
      "Automated follow-up sequence generation for pending inquiries",
      "Persistent SQLite storage with background task scheduling",
      "Clean CLI and graphical alert notifications"
    ],
    githubUrl: "https://github.com/TusharGupta2820/AI-Based-Smart-Reminder-Follow-Up-System",
    caseStudy: {
      problem: "Traditional calendar apps require tedious manual form filling for dates, times, and recurrences.",
      context: "Conversational NLP allows users to type natural reminders in plain English, converting them into structured database records automatically.",
      approach: "Constructed a temporal NLP engine that parses relative and absolute date-time expressions and schedules automated background alerts.",
      architecture: {
        title: "Natural Language Reminder Scheduling Flow",
        diagram: [
          "Natural Language Input",
          "Temporal Entity Recognizer (Dateutil / Regex)",
          "Intent Normalizer",
          "SQLite Schedule Database",
          "Background Daemon Notifier"
        ],
        details: "Calculates precise UTC timestamps from relative expressions like 'tomorrow afternoon'."
      },
      implementation: "Written in Python with SQLite and integrated Python scheduling libraries.",
      challenges: "Resolving ambiguous temporal expressions such as 'next Friday' vs 'this Friday'.",
      results: [
        "95%+ accuracy in temporal entity extraction from conversational sentences",
        "Reliable background notification dispatch"
      ],
      learnings: "Mastered date-time parsing algorithms, regex state machines, and background process management in Python.",
      futureWork: "Integrating WhatsApp and Telegram bot interfaces for voice-note reminders."
    }
  },
  {
    id: "ai-study-planner",
    number: "15",
    title: "AI-Powered Study Planner Agent",
    subtitle: "Personalized Spaced Repetition Scheduling & Syllabus Optimization",
    category: "AI & Education",
    technologies: ["Python", "LangChain", "LLMs", "Spaced Repetition Algorithm", "Streamlit"],
    description: "Dynamic curriculum scheduler creating personalized spaced-repetition timetables and milestone tracking from exam syllabi and student availability constraints.",
    impact: "Personalized Educational Planner",
    architectureNodes: ["Syllabus & Exam Dates", "Difficulty Profiler", "Spaced Repetition Generator", "Daily Timetable Builder", "Progress Tracker"],
    keyCapabilities: [
      "Automated syllabus topic breakdown and difficulty weight assignment",
      "Ebbinghaus forgetting curve spaced repetition interval calculation",
      "Adaptive schedule rebalancing when students miss study sessions",
      "Visual Gantt-style study roadmap and daily checklist"
    ],
    githubUrl: "https://github.com/TusharGupta2820/AI-powered-Study-Planner-Agent",
    caseStudy: {
      problem: "Engineering students struggle to distribute revision across dozens of subjects before university exams, leading to cramming and low retention.",
      context: "Spaced repetition algorithms combined with LLM syllabus parsing can construct optimal, scientifically backed study routines.",
      approach: "Built an intelligent study planner that ingests curriculum outlines, computes optimal revision intervals, and generates balanced daily agendas.",
      architecture: {
        title: "Spaced Repetition Study Scheduling Pipeline",
        diagram: [
          "Syllabus & Constraint Input",
          "Topic Complexity Estimator",
          "Spaced Repetition Algorithm",
          "Daily Timetable Generator",
          "Interactive Student Progress Dashboard"
        ],
        details: "Dynamically shifts upcoming review sessions when a student logs difficulties with specific chapters."
      },
      implementation: "Implemented in Python with Streamlit and LangChain for curriculum breakdown.",
      challenges: "Creating a flexible rescheduling algorithm that doesn't overwhelm students after missed days.",
      results: [
        "Generates customized 30-day and 60-day university exam preparation plans",
        "Proven cognitive retention boost via systematic spaced reviews"
      ],
      learnings: "Deepened knowledge of algorithmic scheduling, cognitive learning science, and LLM-assisted curriculum modeling.",
      futureWork: "Incorporating active recall flashcards generated automatically from study notes."
    }
  },
  {
    id: "enterprise-ai-gateway",
    number: "16",
    title: "Enterprise Microservices AI Gateway & Cloud Platform",
    subtitle: "High-Throughput Asynchronous API Gateway, JWT Auth & Rate Limiting",
    category: "Cloud & DevOps",
    technologies: ["FastAPI", "Python", "Docker", "Redis", "PostgreSQL", "JWT", "Prometheus"],
    description: "Production-grade asynchronous API gateway in FastAPI, Docker, and Redis, orchestrating token authentication, Redis sliding-window rate limiting, and local model inference dispatch.",
    impact: "High-Throughput Backend Infrastructure",
    architectureNodes: ["Client Requests", "FastAPI Gateway", "Redis Rate Limiter & Cache", "JWT Auth Middleware", "Microservice Cluster", "PostgreSQL DB"],
    keyCapabilities: [
      "Sliding-window rate limiting via Redis maintaining sub-5ms overhead",
      "Asynchronous request routing and background task processing in FastAPI",
      "Cryptographic JWT authentication and role-based access control (RBAC)",
      "Containerized multi-service deployment with Docker Compose"
    ],
    githubUrl: "https://github.com/TusharGupta2820",
    caseStudy: {
      problem: "Scaling AI-powered applications requires an ultra-low-latency API gateway capable of managing token budgets, rate limiting, and secure authentication.",
      context: "Centralizing cross-cutting concerns (auth, rate limits, telemetry) into a resilient asynchronous gateway protects backend AI inference runtimes.",
      approach: "Engineered a high-throughput FastAPI gateway backed by Redis for sliding-window rate limiting and PostgreSQL for persistent user credential storage.",
      architecture: {
        title: "Microservices Gateway & Routing Architecture",
        diagram: [
          "HTTPS Inbound Traffic",
          "FastAPI Asynchronous Gateway",
          "Redis In-Memory Token Bucket",
          "JWT Security Validator",
          "Downstream AI Microservices"
        ],
        details: "Handles concurrent asynchronous requests with non-blocking I/O."
      },
      implementation: "Built using Python 3.11, FastAPI, Redis, and Docker Compose with comprehensive logging.",
      challenges: "Preventing race conditions during distributed sliding-window counter increments under high concurrency.",
      results: [
        "Sub-10ms gateway routing overhead under load testing",
        "Deterministic protection against API denial-of-service attempts"
      ],
      learnings: "Mastered asynchronous Python architecture, Redis distributed locks, and container orchestration.",
      futureWork: "Adding distributed OpenTelemetry tracing and dynamic AI model load balancing."
    }
  }
];

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "edge-multimodal",
    title: "Edge Multimodal Vision-Language Inference",
    category: "Multimodal AI / Computer Vision",
    status: "ACTIVE EXPLORATION",
    question: "Can quantized multimodal models (vision + text) run locally on low-power edge devices with under 100ms inference latency?",
    hypothesis: "By utilizing 4-bit INT4 quantization (GGUF) and optimizing vision encoder patch sizes, edge devices can achieve real-time object classification and contextual query answering without cloud offloading.",
    experiment: "Benchmarked quantized vision encoders (CLIP, MobileVLM) and DeepSeek R1/Llama 3.1 models on local hardware using Ollama runtimes. Measured token generation speeds, RAM consumption, and VRAM utilization across different batch sizes.",
    observation: "Quantization reduces memory footprint by up to 65% with less than 3% accuracy degradation on standard classification datasets, achieving ~22 tokens/sec on local hardware.",
    nextQuestion: "How do dynamic patch reduction techniques impact fine-grained OCR recognition in low-light environments?",
    technologies: ["Ollama", "PyTorch", "GGUF Quantization", "CLIP", "DeepSeek R1", "Whisper", "PaddleOCR"]
  },
  {
    id: "agentic-ai",
    title: "Autonomous Multi-Step AI Agent Orchestration",
    category: "Agentic Systems / LLM Architectures",
    status: "ACTIVE EXPLORATION",
    question: "How can autonomous LLM agents decompose non-deterministic software engineering tasks without entering infinite reflection loops?",
    hypothesis: "Implementing explicit state machines with bounded backtracking and tool-output verification mitigates hallucinations and runaway recursive execution.",
    experiment: "Constructed deterministic DAG execution graphs where agents must produce JSON schemas validated against Pydantic models before triggering external API tools.",
    observation: "Strict schema verification reduced runtime task failures by 78% compared to unconstrained ReAct loop implementations.",
    nextQuestion: "Can memory compaction techniques preserve long-horizon context over 100+ sequential tool invocations?",
    technologies: ["LangChain", "Pydantic", "Python", "FastAPI", "Local LLMs", "State Machines"]
  },
  {
    id: "webrtc-cv",
    title: "Real-Time WebRTC Video Pipelines for Edge Computer Vision",
    category: "Computer Vision / Real-Time Streaming",
    status: "ACTIVE EXPLORATION",
    question: "What is the optimal architectural pattern to multiplex high-frequency YOLO object detection bounding boxes with 30fps WebRTC video feeds under variable network packet loss?",
    hypothesis: "Decoupling video transport over UDP/WebRTC and transmitting detected bounding box metadata over prioritized binary WebSocket channels prevents UI rendering stalls during packet drops.",
    experiment: "Simulated 5% to 20% network packet drop rates using network traffic controllers and measured time-to-render skew between bounding boxes and video frames.",
    observation: "Binary packed Float32 coordinate streams reduced metadata latency by 45% compared to raw JSON strings.",
    nextQuestion: "Can client-side WebGL shaders interpolate missing bounding box frames between intermittent server inference cycles?",
    technologies: ["WebRTC", "WebSockets", "YOLOv8", "Three.js", "OpenCV", "FastAPI"]
  },
  {
    id: "rag-vector-stores",
    title: "Semantic Vector Retrieval & RAG Optimization for Technical Documentation",
    category: "Retrieval-Augmented Generation",
    status: "ACTIVE EXPLORATION",
    question: "How does hierarchical chunking (parent-child documents) improve citation accuracy over flat chunking in dense software codebases?",
    hypothesis: "Indexing small code chunks for vector similarity while retrieving the larger parent AST block for LLM synthesis eliminates context truncation errors.",
    experiment: "Ingested multi-file repositories into ChromaDB using AST-based hierarchical chunking versus standard 500-token sliding windows.",
    observation: "Hierarchical chunking improved retrieval precision for multi-function dependencies by 42% on benchmark queries.",
    nextQuestion: "What is the tradeoff between hybrid BM25 lexical search + dense vector retrieval in terms of memory overhead vs precision?",
    technologies: ["ChromaDB", "Python", "LangChain", "FastAPI", "Embeddings"]
  },
  {
    id: "blockchain-ehrs",
    title: "Cryptographic Privacy & Access Delegation in Decentralized Healthcare",
    category: "Blockchain / Cryptography",
    status: "ACTIVE EXPLORATION",
    question: "Can decentralized smart contract consent models scale to high-throughput clinical audit trails without prohibitive gas costs?",
    hypothesis: "Storing content-addressed hashes on IPFS and executing batched rollup proofs on-chain maintains immutability while reducing transaction fees by over 90%.",
    experiment: "Benchmarked Solidity smart contract consent management on Ethereum testnets with simulated multi-hospital medical record lookups.",
    observation: "Off-chain IPFS storage coupled with on-chain cryptographic signatures maintained zero record tampering while enabling sub-second verification.",
    nextQuestion: "How can zero-knowledge proofs enable medical insurance validation without revealing specific diagnoses?",
    technologies: ["Solidity", "Ethereum", "IPFS", "Web3.js", "Cryptography"]
  },
  {
    id: "local-llm-fine-tuning",
    title: "Fine-Tuning Local Open Models for Domain-Specific Code Generation",
    category: "LLM Fine-Tuning / Optimization",
    status: "ACTIVE EXPLORATION",
    question: "Can parameter-efficient fine-tuning (LoRA / QLoRA) on small 7B/8B models rival commercial APIs for domain-specific Python FastAPI architectures?",
    hypothesis: "Targeted synthetic instruction datasets focused on asynchronous backend patterns can bridge the capability gap between 8B edge models and large cloud APIs.",
    experiment: "Fine-tuned quantized Llama 3.1 8B adapters using QLoRA on curated async Python codebases.",
    observation: "Domain-specific LoRA adapters showed significant reductions in syntax errors and hallucinated library methods for FastAPI and ChromaDB workflows.",
    nextQuestion: "How do rank (r) and alpha hyperparameters impact catastrophic forgetting of general reasoning capabilities?",
    technologies: ["PyTorch", "Hugging Face", "LoRA", "QLoRA", "Ollama", "Python"]
  },
  {
    id: "spatial-pathfinding",
    title: "High-Performance Geospatial Graph Search in Browser Runtimes",
    category: "Algorithms / Systems",
    status: "ACTIVE EXPLORATION",
    question: "What is the optimal spatial indexing structure (Quadtree vs R-Tree) for computing instant multi-floor paths in massive indoor building models within browser memory?",
    hypothesis: "Hierarchical node graphs indexed by 2D spatial Quadtrees allow A* pathfinding to execute in sub-5ms without garbage collection pauses in JavaScript.",
    experiment: "Constructed synthetic building maps with up to 10,000 interconnecting nodes and measured execution times across Dijkstra, A*, and Bidirectional search.",
    observation: "A* with Euclidean heuristics paired with Quadtree pruning delivered the fastest path computation with zero UI frame drops.",
    nextQuestion: "How can dynamic obstacle updates (e.g. closed elevators) be propagated across spatial graphs without full re-indexing?",
    technologies: ["JavaScript", "Graph Theory", "Algorithms", "Canvas", "Data Structures"]
  },
  {
    id: "async-api-concurrency",
    title: "High-Concurrency Asynchronous Gateway Architectures",
    category: "Distributed Systems / Backend",
    status: "ACTIVE EXPLORATION",
    question: "How do sliding-window Redis token buckets behave under extreme burst traffic (10,000+ RPS) on Python async event loops?",
    hypothesis: "Atomic Redis Lua scripts eliminate race conditions during sliding-window rate calculations while preserving sub-10ms gateway response times.",
    experiment: "Conducted distributed load testing against FastAPI gateways with Redis rate limiters, monitoring p99 latency and CPU core utilization.",
    observation: "Lua script evaluation in Redis maintained deterministic rate limiting under 10k RPS with minimal event loop blocking.",
    nextQuestion: "What is the memory footprint tradeoff of maintaining per-user sliding window timestamps versus discrete leaky buckets?",
    technologies: ["FastAPI", "Python", "Redis", "Docker", "PostgreSQL", "AsyncIO"]
  },
  {
    id: "symbolic-ai-hybrid",
    title: "Hybrid Neuro-Symbolic Reasoning in Autonomous Systems",
    category: "Artificial Intelligence Theory",
    status: "ACTIVE EXPLORATION",
    question: "Can deterministic propositional logic engines act as rigorous safety guardrails over probabilistic neural model outputs?",
    hypothesis: "Wrapping deep learning prediction outputs in symbolic verification rules ensures 100% adherence to safety-critical domain constraints.",
    experiment: "Built test harnesses combining neural vision classifications with symbolic rule engines in simulated navigation environments.",
    observation: "Symbolic rule verification prevented 100% of illegal state transitions caused by perception noise or out-of-distribution inputs.",
    nextQuestion: "Can symbolic rules be automatically synthesized from observed neural edge cases?",
    technologies: ["Python", "Propositional Logic", "State Machines", "PyTorch", "Algorithms"]
  },
  {
    id: "spaced-repetition-ml",
    title: "Machine Learning Optimized Memory Retention Curves",
    category: "Cognitive AI / Educational Technology",
    status: "ACTIVE EXPLORATION",
    question: "Can personalized spaced repetition algorithms adapt dynamically based on user response latency rather than binary recall scores?",
    hypothesis: "Factoring response latency into half-life memory decay equations produces more accurate retention predictions than traditional SM-2 algorithms.",
    experiment: "Modeled synthetic student recall curves incorporating response delays to adjust future review intervals.",
    observation: "Latency-weighted spacing intervals improved long-term retention modeling accuracy by 28% over static intervals.",
    nextQuestion: "How does cognitive fatigue across continuous study sessions correlate with recall latency shifts?",
    technologies: ["Python", "Machine Learning", "Educational AI", "Data Modeling"]
  }
];

export const CURRENTLY_EXPLORING = [
  "Local Multimodal Inference (Vision + Text on Edge)",
  "Agentic Autonomous Planning Loops & Tool Schema Validation",
  "Low-Latency WebRTC Telemetry Streaming & Computer Vision",
  "Retrieval-Augmented Generation (ChromaDB Hierarchical ASTs)",
  "Quantized Model Runtimes (Ollama, DeepSeek R1, Llama 3.1)",
  "Sliding-Window Redis Concurrency & Asynchronous Gateways"
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "zeex-ai",
    company: "ZEEX AI",
    role: "AI Strategy & Full-Stack Engineering Intern",
    location: "Mumbai, India",
    period: "Feb 2026 — Present",
    focus: [
      "AI Strategy & Automation",
      "Full-Stack Web Architecture",
      "Enterprise Product Development"
    ],
    achievements: [
      "Engineered full-stack product interfaces and scalable web architecture for AI-driven enterprise solutions.",
      "Designed and deployed responsive frontend systems with high performance and accessibility standards.",
      "Collaborated on AI workflow automation pipelines and client-facing digital architectures."
    ],
    impact: [
      "Built production web architecture for AI enterprise systems",
      "Streamlined automated data pipelines and frontend component libraries"
    ],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "REST APIs", "Cloud Systems"]
  },
  {
    id: "fullstackverse",
    company: "FullStackVerse",
    role: "Full-Stack Developer Intern",
    location: "Mumbai, India",
    period: "Dec 2025 — Feb 2026",
    focus: [
      "Full-Stack Web Applications",
      "Backend API Architecture",
      "Database Modeling & Integration"
    ],
    achievements: [
      "Developed robust full-stack web applications utilizing modern JavaScript/TypeScript ecosystems.",
      "Implemented RESTful backend services, authentication flows, and database schemas.",
      "Optimized frontend performance, state management, and responsive layouts across viewports."
    ],
    impact: [
      "Delivered multiple end-to-end full-stack features with clean code architecture",
      "Enhanced backend API response times and database query efficiency"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Git"]
  },
  {
    id: "cognifyz",
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    location: "Remote",
    period: "Nov 2025 — Dec 2025",
    focus: [
      "Frontend Engineering",
      "Responsive UI/UX Design",
      "Interactive Components"
    ],
    achievements: [
      "Built interactive, responsive web applications following modern UI/UX design principles.",
      "Created reusable UI components, structured layouts, and cross-browser compatible interfaces.",
      "Collaborated on code reviews and version control workflows in agile sprints."
    ],
    impact: [
      "Completed foundational industry frontend projects with high design fidelity",
      "Strengthened component-driven development workflows"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Git", "GitHub"]
  },
  {
    id: "tcet-acm",
    company: "TCET ACM SIGAI / Campus Leadership",
    role: "Technical Lead & Event Coordinator",
    location: "Mumbai, India",
    period: "2024 — Present",
    focus: [
      "Technical Workshops & Mentorship",
      "AI/ML Community Building",
      "Hackathon Organization"
    ],
    achievements: [
      "Conducted technical hands-on workshops on Python, Machine Learning, and Web Development for engineering peers.",
      "Led organizing committees for campus hackathons and technical symposiums at TCET.",
      "Mentored junior students in programming fundamentals, Git workflows, and competitive hackathon projects."
    ],
    impact: [
      "Mentored 200+ students across technical workshops and coding bootcamps",
      "Coordinated major department technical events and hackathon tracks"
    ],
    technologies: ["Python", "Machine Learning", "Web Development", "Git", "Leadership", "Technical Communication"]
  }
];

export const TECHNICAL_SKILLS = {
  languages: [
    { name: "Python", level: "Core / Advanced", desc: "AI/ML, FastAPI, PyTorch, OpenCV, Data Processing, Scripting" },
    { name: "TypeScript", level: "Advanced", desc: "Full-stack type-safe architectures, Next.js, React, Node.js" },
    { name: "JavaScript", level: "Advanced", desc: "ES6+, Modern browser APIs, WebSockets, Async/Await" },
    { name: "C++", level: "Intermediate", desc: "Data structures, algorithms, object-oriented systems programming" },
    { name: "C", level: "Foundational", desc: "Low-level memory concepts, pointers, procedural programming" },
    { name: "Java", level: "Intermediate", desc: "Object-oriented design, enterprise patterns, core Java" },
    { name: "SQL", level: "Advanced", desc: "PostgreSQL, MySQL, relational schema design, complex joins" },
    { name: "HTML5 / CSS3", level: "Advanced", desc: "Semantic markup, modern layout models (Grid/Flexbox), Canvas" }
  ],
  frameworksAndLibraries: [
    { name: "React", desc: "Component design, custom hooks, state management, performance optimization" },
    { name: "Next.js", desc: "App Router, SSR, SSG, Server Components, API routes" },
    { name: "FastAPI", desc: "Asynchronous REST APIs, Pydantic schemas, dependency injection, WebSockets" },
    { name: "Node.js & Express", desc: "Backend servers, RESTful microservices, middleware architectures" },
    { name: "PyTorch", desc: "Deep learning model inference, fine-tuning workflows, tensor operations" },
    { name: "OpenCV", desc: "Computer vision, image preprocessing, video frame analysis, feature detection" },
    { name: "YOLO (v8)", desc: "Real-time object detection, bounding box regression, custom dataset inference" },
    { name: "LangChain", desc: "LLM agent chains, structured output parsers, prompt templates, RAG pipelines" },
    { name: "Tailwind CSS", desc: "Modern utility-first CSS, custom design systems, responsive layouts" },
    { name: "Three.js / React Three Fiber", desc: "WebGL 3D rendering, shaders, spatial geometries, camera controls" }
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", desc: "Version control, branching strategies, collaborative workflows, CI/CD" },
    { name: "Docker", desc: "Containerization, Dockerfile optimization, multi-container compose stacks" },
    { name: "Postman", desc: "API testing, automated test collections, endpoint documentation" },
    { name: "VS Code / Cursor", desc: "Primary IDEs, extensions, debugging setups, development workflows" },
    { name: "Vercel", desc: "Frontend and full-stack deployment, edge functions, preview pipelines" },
    { name: "GitHub Actions", desc: "Automated testing, linting, and continuous integration workflows" }
  ],
  conceptsAndPractices: [
    { name: "Object-Oriented Programming (OOP)", desc: "Encapsulation, inheritance, polymorphism, design patterns" },
    { name: "Data Structures & Algorithms (DSA)", desc: "Trees, graphs, dynamic programming, sorting/searching, complexity" },
    { name: "Database Management Systems (DBMS)", desc: "ACID compliance, normalization, indexing, transaction handling" },
    { name: "Computer Networks", desc: "TCP/IP, HTTP/HTTPS, WebSockets, DNS, WebRTC protocols" },
    { name: "Operating Systems", desc: "Process scheduling, concurrency, multithreading, memory management" },
    { name: "RESTful API Design", desc: "Resource modeling, HTTP verbs, status codes, payload structuring" },
    { name: "Microservices Architecture", desc: "Service decoupling, API gateways, independent scalability" },
    { name: "Retrieval-Augmented Generation (RAG)", desc: "Vector search, chunking strategies, embeddings, ground truth" }
  ],
  databasesAndInfrastructure: [
    { name: "PostgreSQL", desc: "Advanced relational database, indexing, foreign keys, JSONB queries" },
    { name: "MongoDB", desc: "Document-oriented NoSQL database, aggregation pipelines, schema flexibility" },
    { name: "MySQL", desc: "Relational database management, structured queries, transactions" },
    { name: "Redis", desc: "In-memory caching, pub/sub messaging, sliding-window rate limiting" },
    { name: "ChromaDB", desc: "Embedded vector database for high-efficiency semantic embeddings" },
    { name: "SQLite", desc: "Lightweight embedded SQL database for local prototyping and storage" }
  ],
  aiTools: [
    { name: "Ollama", desc: "Local LLM runtime for quantized model serving (Llama, DeepSeek, Mistral)" },
    { name: "Llama 3.1", desc: "Open-weights foundation model for local reasoning and generation" },
    { name: "DeepSeek R1", desc: "Reasoning model for multi-step logic and mathematical deduction" },
    { name: "OpenAI Whisper", desc: "Automatic speech recognition and multilingual voice transcription" },
    { name: "PaddleOCR", desc: "Optical character recognition for documents, receipts, and textbooks" }
  ],
  softSkills: [
    "Problem Solving & First-Principles Reasoning",
    "Team Collaboration & Agile Communication",
    "Technical Leadership & Workshop Mentorship",
    "Adaptability & Rapid Technology Absorption",
    "Scientific Inquiry & Empirical Experimentation"
  ]
};

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.) in Information Technology",
  institution: "Thakur College of Engineering and Technology (TCET)",
  university: "University of Mumbai",
  location: "Mumbai, Maharashtra, India",
  period: "2023 — 2027",
  cgpa: "8.9 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (DBMS)",
    "Operating Systems & Systems Architecture",
    "Computer Networks & Protocols",
    "Software Engineering & Agile Methodologies",
    "Artificial Intelligence & Machine Learning",
    "Web Development & Cloud Computing"
  ]
};

export const HACKATHONS: HackathonItem[] = [
  {
    name: "Yuva AI Impact Summit",
    award: "1ST PRIZE WINNER",
    location: "National Level, India",
    teamsCount: "Multi-Tier Competitive Hackathon",
    role: "Lead AI Engineer & System Architect",
    description: "Built GyaanSetu AI — an accessible, multilingual, personalized AI tutoring platform addressing digital education equity across regional languages.",
    isMajor: true
  },
  {
    name: "Craftverse Hackathon",
    award: "8TH RANK NATIONALLY",
    location: "National Level, India",
    teamsCount: "100+ Competitive Teams",
    role: "Full-Stack & Systems Lead",
    description: "Engineered high-throughput web application and real-time interactive collaboration features under strict 36-hour hackathon constraints.",
    isMajor: true
  },
  {
    name: "15+ National & Campus Hackathons",
    award: "ACTIVE COMPETITIVE BUILDER",
    location: "Various Venues / Pan-India",
    description: "Regular participant and finalist in competitive hackathons across AI, Web3, Blockchain, and Full-Stack Systems, prototyping production-grade applications within 24-48 hour sprints.",
    isMajor: false
  }
];

export const EXTRACURRICULAR = [
  {
    title: "TCET ACM SIGAI Chapter",
    role: "Core Technical Team",
    highlight: "Conducted workshops for 200+ students",
    description: "Organized technical training sessions, coding competitions, and introduced peers to Python, Machine Learning, and Web Development."
  },
  {
    title: "Campus Hackathon Organizing Lead",
    role: "Organizer & Technical Track Lead",
    highlight: "Mentored 15+ student teams",
    description: "Structured problem statements, judged submissions, and provided technical guidance on cloud deployments and backend architectures."
  },
  {
    title: "Peer Mentorship & Code Reviews",
    role: "Technical Mentor",
    highlight: "Open-source guidance",
    description: "Mentored incoming engineering undergraduates on Git/GitHub fundamentals, data structures, and web project scaffolding."
  },
  {
    title: "Technical Content & Tech Talks",
    role: "Speaker",
    highlight: "AI & Full-Stack Insights",
    description: "Delivered presentations on local LLM deployment, FastAPI microservices, and modern TypeScript frontend practices."
  }
];

export const CERTIFICATIONS = [
  { title: "Generative AI Fundamentals", domain: "Artificial Intelligence / Deep Learning" },
  { title: "Machine Learning with Python", domain: "Data Science & Predictive Modeling" },
  { title: "Full-Stack Web Development", domain: "Frontend & Backend Systems" },
  { title: "Database Systems & SQL Specialist", domain: "Relational Database Management" },
  { title: "Cloud Computing & DevOps Basics", domain: "Containers, CI/CD & Deployments" },
  { title: "Python for Data Science", domain: "Scientific Computing & Analytics" },
  { title: "Applied Computer Vision with OpenCV", domain: "Image & Video Processing" },
  { title: "Asynchronous Backend Architecture", domain: "FastAPI, WebSockets & Distributed Systems" },
  { title: "Agile Software Development", domain: "Engineering Workflows & Scrum" }
];
