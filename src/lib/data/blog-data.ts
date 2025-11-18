import { BlogPost, Author, BlogCategory } from '@/lib/types/types'
import { calculateReadingTime, extractTableOfContents } from '@/lib/utils/blog-utils'
import author1 from '@/assets/images/landing/blog/authors-1.png'
import author2 from '@/assets/images/landing/blog/authors-2.png'
import author3 from '@/assets/images/landing/blog/authors-3.png'
import author4 from '@/assets/images/landing/blog/authors-4.png'
import author5 from '@/assets/images/landing/blog/authors-5.png'
import aiDevelopmentImage from '@/assets/images/landing/blog/ai-development.png'
import apiSecurityImage from '@/assets/images/landing/blog/api-security.png'
import blockchainImage from '@/assets/images/landing/blog/blockchain-technology-explained.png'
import ciCdPipelineImage from '@/assets/images/landing/blog/ci-cd-pipeline.png'
import cloudComputingImage from '@/assets/images/landing/blog/cloud-computing-fundamentals.png'
import colorTheoryImage from '@/assets/images/landing/blog/color-theory-for-digital-designers.png'
import digitalMarketingImage from '@/assets/images/landing/blog/digital-marketing-strategy.png'
import gdprComplianceImage from '@/assets/images/landing/blog/gdpr-compliance.png'
import microservicesImage from '@/assets/images/landing/blog/microservices.png'
import nextjs14Image from '@/assets/images/landing/blog/nextjs-14.png'
import nodeBackendImage from '@/assets/images/landing/blog/nodejs-backend-development.png'
import pythonDjangoImage from '@/assets/images/landing/blog/python-web-development-django.png'
import reactArchitectureImage from '@/assets/images/landing/blog/react-architecture.png'
import responsiveDesignImage from '@/assets/images/landing/blog/responsive-design-principles.png'
import startupFundingImage from '@/assets/images/landing/blog/startup-funding-guide.png'
import typescriptImage from '@/assets/images/landing/blog/typescript.png'
import uiDesignTrendsImage from '@/assets/images/landing/blog/ui-design-trends.png'
import webAppSecurityImage from '@/assets/images/landing/blog/web-application-security.png'

// Helper to get image URL from Next.js image import
const getImageUrl = (img: any): string => {
  if (typeof img === 'string') return img
  return img?.src || img?.default?.src || String(img)
}

const blogImages = {
  nextjs14: getImageUrl(nextjs14Image),
  uiDesignTrends: getImageUrl(uiDesignTrendsImage),
  typescript: getImageUrl(typescriptImage),
  responsiveDesign: getImageUrl(responsiveDesignImage),
  reactArchitecture: getImageUrl(reactArchitectureImage),
  aiDevelopment: getImageUrl(aiDevelopmentImage),
  microservices: getImageUrl(microservicesImage),
  cloudComputing: getImageUrl(cloudComputingImage),
  blockchain: getImageUrl(blockchainImage),
  colorTheory: getImageUrl(colorTheoryImage),
  nodeBackend: getImageUrl(nodeBackendImage),
  pythonDjango: getImageUrl(pythonDjangoImage),
  digitalMarketing: getImageUrl(digitalMarketingImage),
  startupFunding: getImageUrl(startupFundingImage),
  webAppSecurity: getImageUrl(webAppSecurityImage),
  apiSecurity: getImageUrl(apiSecurityImage),
  gdprCompliance: getImageUrl(gdprComplianceImage),
  ciCdPipeline: getImageUrl(ciCdPipelineImage),
}

// Authors
export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Senior Developer',
    bio: 'Sarah is a full-stack developer with over 10 years of experience in building scalable web applications. She specializes in React, Next.js, and cloud architecture.',
    avatar: getImageUrl(author1),
    email: 'sarah@example.com',
    social: {
      twitter: 'sarah_mitchell',
      linkedin: 'sarah-mitchell',
      github: 'sarahm',
    },
    postsCount: 12,
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'UX Designer',
    bio: 'David is a creative UX designer passionate about creating intuitive and beautiful user experiences. He has worked with Fortune 500 companies on digital transformation projects.',
    avatar: getImageUrl(author2),
    email: 'david@example.com',
    social: {
      twitter: 'davidchen',
      linkedin: 'david-chen',
      website: 'davidchen.design',
    },
    postsCount: 8,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Tech Lead',
    bio: 'Emily leads engineering teams and focuses on building robust, maintainable systems. She\'s an advocate for clean code and developer experience.',
    avatar: getImageUrl(author3),
    email: 'emily@example.com',
    social: {
      twitter: 'emilyr',
      linkedin: 'emily-rodriguez',
      github: 'emilyr',
    },
    postsCount: 15,
  },
  {
    id: '4',
    name: 'Jessica Martinez',
    role: 'Product Manager',
    bio: 'Jessica is a product manager with over 10 years of experience in building products. She specializes in product strategy, user research, and agile development.',
    avatar: getImageUrl(author5),
    email: 'jessica@example.com',
    social: {
      twitter: 'jessicam',
      linkedin: 'jessica-martinez',
      github: 'jessicam',
    },
    postsCount: 10,
  },
  {
    id: '5',
    name: 'John Doe',
    role: 'Backend Developer',
    bio: 'John is a backend developer with over 10 years of experience in building backend systems. He specializes in backend development and development.',
    avatar: getImageUrl(author4),
    email: 'john@example.com',
    social: {
      twitter: 'johndoe',
      linkedin: 'john-doe',
      github: 'johndoe',
    },
    postsCount: 12,
  },
]

// Categories
export const categories: BlogCategory[] = [
  {
    id: 'tech',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest technology trends and innovations',
    icon: 'Laptop',
    color: 'bg-blue-500',
    postCount: 15,
  },
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design insights and best practices',
    icon: 'Palette',
    color: 'bg-purple-500',
    postCount: 10,
  },
  {
    id: 'dev',
    name: 'Development',
    slug: 'development',
    description: 'Development tutorials and code examples',
    icon: 'Code',
    color: 'bg-emerald-500',
    postCount: 12,
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    description: 'Business strategy and industry insights',
    icon: 'chart-no-axes-combined',
    color: 'bg-orange-500',
    postCount: 8,
  },
  {
    id: 'security',
    name: 'Security',
    slug: 'security',
    description: 'Cybersecurity best practices and threat protection',
    icon: 'Lock',
    color: 'bg-red-500',
    postCount: 3,
  },
  {
    id: 'devops',
    name: 'DevOps',
    slug: 'devops',
    description: 'DevOps practices, CI/CD, and infrastructure automation',
    icon: 'Rocket',
    color: 'bg-indigo-500',
    postCount: 2,
  },
]

// Sample blog posts
const rawPosts: Omit<BlogPost, 'readingTime' | 'tableOfContents'>[] = [
  {
    id: 'blg_f3h2k1p9q8r7t6y5u4',
    slug: 'nextjs-14-server-components-guide',
    title: 'Complete Guide to Next.js 14 Server Components',
    excerpt: 'Learn how to leverage Server Components in Next.js 14 to build faster, more efficient applications with improved performance and SEO.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Next.js 14 introduces powerful Server Components that revolutionize how we build React applications. Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client and improving initial load times.</p>
      
      <h2 id="what-are-server-components">What Are Server Components?</h2>  
      <p>Server Components are React components that run exclusively on the server. They can directly access your backend resources like databases, file systems, and other server-only APIs without exposing sensitive information to the client.</p>
      
      <h3 id="key-benefits">Key Benefits</h3>
      <ul>
        <li>Reduced JavaScript bundle size</li>
        <li>Direct database access</li>
        <li>Enhanced security</li>
        <li>Improved SEO</li>
      </ul>
      
      <h2 id="getting-started">Getting Started</h2>
      <p>To use Server Components in Next.js 14, you simply need to create components in the <code>app</code> directory. By default, all components in the app directory are Server Components unless you explicitly mark them with <code>'use client'</code>.</p>
      
      <h2 id="best-practices">Best Practices</h2>
      <p>When working with Server Components, it's important to understand when to use them versus Client Components. Use Server Components for data fetching, static content, and components that don't require interactivity.</p>
    `,
    featuredImage: blogImages.nextjs14,
    category: categories[2],
    tags: ['Next.js', 'React', 'Server Components', 'Performance'],
    author: authors[0],
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-20',
    views: 5420,
    likes: 234,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Next.js 14 Server Components Complete Guide | Arcbizz Blog',
      metaDescription: 'Learn how to use Server Components in Next.js 14 to build faster, more efficient React applications.',
      ogImage: blogImages.nextjs14,
      keywords: ['Next.js', 'Server Components', 'React', 'Web Development'],
    },
  },
  {
    id: 'blg_g4j8d2n6w3s5x9a1m7',
    slug: 'modern-ui-design-trends-2025',
    title: 'Modern UI Design Trends for 2025',
    excerpt: 'Explore the latest UI design trends shaping the digital landscape in 2025, from bold typography to minimalist interfaces.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>The world of UI design is constantly evolving, and 2025 brings exciting new trends that prioritize user experience, accessibility, and visual appeal.</p>
      
      <h2 id="bold-typography">Bold Typography</h2>
      <p>Large, expressive fonts are making a comeback. Designers are using bold typography to create hierarchy and draw attention to key content.</p>
      
      <h2 id="minimalist-designs">Minimalist Designs</h2>
      <p>Clean, clutter-free interfaces with strategic white space are becoming the norm. This approach helps users focus on what matters most.</p>
      
      <h2 id="dark-mode">Dark Mode Everywhere</h2>
      <p>Dark mode is no longer optional. Users expect it, and designers are creating beautiful dark themes that reduce eye strain.</p>
    `,
    featuredImage: blogImages.uiDesignTrends,
    category: categories[1],
    tags: ['UI Design', 'UX', 'Design Trends', 'Typography'],
    author: authors[1],
    publishedAt: '2024-01-10',
    views: 3890,
    likes: 189,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Modern UI Design Trends 2025 | Arcbizz Blog',
      metaDescription: 'Discover the latest UI design trends for 2025 and learn how to implement them in your projects.',
      ogImage: blogImages.uiDesignTrends,
      keywords: ['UI Design', 'Design Trends', 'UX', '2025'],
    },
  },
  {
    id: 'blg_t8p3z2f9k1b7q5v6c4',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Modern Development',
    excerpt: 'Master TypeScript with these essential best practices that will improve your code quality and developer experience.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are the best practices every developer should know.</p>
      
      <h2 id="strict-mode">Always Use Strict Mode</h2>
      <p>Enable strict mode in your <code>tsconfig.json</code> to catch more errors at compile time and write safer code.</p>
      
      <h2 id="type-definitions">Proper Type Definitions</h2>
      <p>Create clear, reusable type definitions for your data structures. Avoid using <code>any</code> whenever possible.</p>
      
      <h2 id="utility-types">Utility Types</h2>
      <p>Leverage TypeScript's built-in utility types like <code>Partial</code>, <code>Pick</code>, and <code>Omit</code> to create flexible type definitions.</p>
    `,
    featuredImage: blogImages.typescript,
    category: categories[2],
    tags: ['TypeScript', 'Programming', 'Best Practices', 'Development'],
    author: authors[2],
    publishedAt: '2024-01-05',
    views: 4210,
    likes: 156,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'TypeScript Best Practices | Arcbizz Blog',
      metaDescription: 'Learn TypeScript best practices to write cleaner, more maintainable code.',
      ogImage: blogImages.typescript,
      keywords: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices'],
    },
  },
  {
    id: 'blg_z1o6u9t5s3v2w0x8a4q1',
    slug: 'responsive-design-principles',
    title: 'Responsive Design Principles: Mobile-First Approach',
    excerpt: 'Learn responsive design principles and master the mobile-first approach to create websites that work seamlessly across all devices.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Responsive design is no longer optional—it's essential. With the majority of web traffic coming from mobile devices, creating mobile-first experiences is crucial.</p>
      
      <h2 id="what-is-responsive-design">What Is Responsive Design?</h2>
      <p>Responsive design ensures websites adapt to different screen sizes and devices, providing optimal viewing experiences across desktops, tablets, and smartphones.</p>
      
      <h2 id="mobile-first">Mobile-First Approach</h2>
      <p>The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens. This ensures better performance and user experience.</p>
      
      <h2 id="breakpoints">Breakpoints and Media Queries</h2>
      <p>Understanding breakpoints and using media queries effectively allows designers to create fluid layouts that adapt smoothly to different screen sizes.</p>
      
      <h2 id="best-practices">Best Practices</h2>
      <p>Key practices include flexible grids, responsive images, touch-friendly interfaces, and performance optimization for mobile devices.</p>
    `,
    featuredImage: blogImages.responsiveDesign,
    category: categories[1],
    tags: ['Responsive Design', 'Mobile-First', 'UI/UX', 'Web Design'],
    author: authors[4],
    publishedAt: '2024-01-03',
    views: 3560,
    likes: 192,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'Responsive Design Principles | Arcbizz Blog',
      metaDescription: 'Learn responsive design principles and master the mobile-first approach for modern web design.',
      ogImage: blogImages.responsiveDesign,
      keywords: ['Responsive Design', 'Mobile-First', 'UI/UX', 'Web Design'],
    },
  },
  {
    id: 'blg_r9x4y2h7j3m5n8d1k6',
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications: Architecture Patterns',
    excerpt: 'Discover proven architecture patterns for building large-scale React applications that are maintainable and scalable.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Building scalable React applications requires careful planning and the right architectural patterns. Let's explore the most effective approaches.</p>
      
      <h2 id="component-structure">Component Structure</h2>
      <p>Organize your components into a clear hierarchy. Use container components for logic and presentational components for UI.</p>
      
      <h2 id="state-management">State Management</h2>
      <p>Choose the right state management solution for your needs. Consider React Context for simple state, and libraries like Zustand or Redux for complex applications.</p>
      
      <h2 id="code-splitting">Code Splitting</h2>
      <p>Implement code splitting to reduce initial bundle size and improve load times. Use React.lazy and Suspense for route-based splitting.</p>
    `,
    featuredImage: blogImages.reactArchitecture,
    category: categories[2],
    tags: ['React', 'Architecture', 'Scalability', 'Performance'],
    author: authors[3],
    publishedAt: '2024-01-01',
    views: 3240,
    likes: 142,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Building Scalable React Applications | Arcbizz Blog',
      metaDescription: 'Learn architecture patterns for building large-scale, maintainable React applications.',
      ogImage: blogImages.reactArchitecture,
      keywords: ['React', 'Architecture', 'Scalability', 'JavaScript'],
    },
  },
  {
    id: 'blg_u1n5c9t8b3r6x7z2m4',
    slug: 'ai-powered-development-tools',
    title: 'AI-Powered Development Tools: The Future of Coding',
    excerpt: 'Explore how AI is transforming the development workflow with intelligent coding assistants and automated testing tools.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Artificial Intelligence is revolutionizing software development, making coding faster, more efficient, and more accessible than ever before.</p>
      
      <h2 id="coding-assistants">AI Coding Assistants</h2>
      <p>Tools like GitHub Copilot and Cursor are helping developers write code faster by providing intelligent suggestions and auto-completion.</p>
      
      <h2 id="automated-testing">Automated Testing</h2>
      <p>AI-powered testing tools can automatically generate test cases, identify edge cases, and improve test coverage.</p>
      
      <h2 id="code-review">AI Code Review</h2>
      <p>Automated code review systems can catch bugs, suggest improvements, and ensure code quality before human review.</p>
    `,
    featuredImage: blogImages.aiDevelopment,
    category: categories[0],
    tags: ['AI', 'Development Tools', 'Automation', 'Future'],
    author: authors[2],
    publishedAt: '2023-12-28',
    views: 5120,
    likes: 267,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'AI-Powered Development Tools | Arcbizz Blog',
      metaDescription: 'Discover how AI is transforming software development with intelligent coding tools.',
      ogImage: blogImages.aiDevelopment,
      keywords: ['AI', 'Development Tools', 'Coding', 'Automation'],
    },
  },
  {
    id: 'blg_v7k2q5p1r9f3s8t6w4',
    slug: 'microservices-architecture-guide',
    title: 'Microservices Architecture: A Complete Guide',
    excerpt: 'Learn how to design and implement microservices architecture for modern distributed systems.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Microservices architecture has become the standard for building scalable, distributed applications. Let's dive into the fundamentals.</p>
      
      <h2 id="what-are-microservices">What Are Microservices?</h2>
      <p>Microservices are small, independent services that work together to form a complete application. Each service has its own database and business logic.</p>
      
      <h2 id="benefits">Benefits</h2>
      <p>Microservices offer several advantages including independent deployment, technology diversity, and improved scalability.</p>
      
      <h2 id="challenges">Challenges</h2>
      <p>While powerful, microservices come with challenges like distributed data management and inter-service communication complexity.</p>
    `,
    featuredImage: blogImages.microservices,
    category: categories[0],
    tags: ['Microservices', 'Architecture', 'Distributed Systems', 'Backend'],
    author: authors[2],
    publishedAt: '2023-12-25',
    views: 2780,
    likes: 98,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Microservices Architecture Guide | Arcbizz Blog',
      metaDescription: 'Complete guide to designing and implementing microservices architecture.',
      ogImage: blogImages.microservices,
      keywords: ['Microservices', 'Architecture', 'Backend', 'Distributed Systems'],
    },
  },
  {
    id: 'blg_w8l3r6q2p0s9t7u5x1n8',
    slug: 'cloud-computing-fundamentals',
    title: 'Cloud Computing Fundamentals: A Developer\'s Guide',
    excerpt: 'Master the basics of cloud computing and learn how to leverage cloud services for scalable application deployment.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Cloud computing has transformed how we build and deploy applications. Understanding cloud fundamentals is essential for modern developers.</p>
      
      <h2 id="what-is-cloud-computing">What Is Cloud Computing?</h2>
      <p>Cloud computing delivers computing services over the internet, including servers, storage, databases, networking, and software on a pay-as-you-go basis.</p>
      
      <h2 id="service-models">Service Models</h2>
      <p>The three main cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).</p>
      
      <h2 id="cloud-providers">Major Cloud Providers</h2>
      <p>Leading cloud providers include AWS, Google Cloud Platform, and Microsoft Azure, each offering unique features and services.</p>
      
      <h2 id="benefits">Benefits of Cloud Computing</h2>
      <p>Cloud computing offers cost efficiency, scalability, flexibility, and automatic updates. It eliminates the need for physical infrastructure maintenance.</p>
    `,
    featuredImage: blogImages.cloudComputing,
    category: categories[0],
    tags: ['Cloud Computing', 'AWS', 'DevOps', 'Infrastructure'],
    author: authors[4],
    publishedAt: '2023-12-20',
    views: 3650,
    likes: 178,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Cloud Computing Fundamentals Guide | Arcbizz Blog',
      metaDescription: 'Learn cloud computing fundamentals and how to deploy scalable applications in the cloud.',
      ogImage: blogImages.cloudComputing,
      keywords: ['Cloud Computing', 'AWS', 'DevOps', 'Infrastructure'],
    },
  },
  {
    id: 'blg_x9m4s7r3q1t0u8v6y2o9',
    slug: 'blockchain-technology-explained',
    title: 'Blockchain Technology Explained: Beyond Cryptocurrency',
    excerpt: 'Explore blockchain technology fundamentals and discover its applications beyond cryptocurrency in various industries.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Blockchain technology has evolved far beyond cryptocurrency. It's now being adopted across industries for its transparency, security, and decentralization features.</p>
      
      <h2 id="what-is-blockchain">What Is Blockchain?</h2>
      <p>Blockchain is a distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.</p>
      
      <h2 id="key-features">Key Features</h2>
      <p>Blockchain offers decentralization, immutability, transparency, and security. These features make it ideal for various applications beyond financial transactions.</p>
      
      <h2 id="use-cases">Real-World Use Cases</h2>
      <p>Blockchain is being used in supply chain management, healthcare records, voting systems, smart contracts, and digital identity verification.</p>
      
      <h2 id="future">Future of Blockchain</h2>
      <p>As blockchain technology matures, we can expect wider adoption, improved scalability, and integration with IoT and AI systems.</p>
    `,
    featuredImage: blogImages.blockchain,
    category: categories[0],
    tags: ['Blockchain', 'Cryptocurrency', 'Technology', 'Innovation'],
    author: authors[0],
    publishedAt: '2023-12-15',
    views: 4120,
    likes: 201,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'Blockchain Technology Explained | Arcbizz Blog',
      metaDescription: 'Learn about blockchain technology and its applications beyond cryptocurrency.',
      ogImage: blogImages.blockchain,
      keywords: ['Blockchain', 'Cryptocurrency', 'Technology', 'Decentralization'],
    },
  },
  {
    id: 'blg_y0n5t8s4r2u1v9w7z3p0',
    slug: 'color-theory-for-digital-designers',
    title: 'Color Theory for Digital Designers: A Complete Guide',
    excerpt: 'Master color theory principles and learn how to create harmonious color palettes that enhance user experience and convey the right emotions.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Color is one of the most powerful tools in a designer's arsenal. Understanding color theory helps create visually appealing and effective digital interfaces.</p>
      
      <h2 id="color-basics">Color Basics</h2>
      <p>Color theory encompasses the principles and guidelines for creating harmonious color combinations using the color wheel and color relationships.</p>
      
      <h2 id="color-psychology">Color Psychology</h2>
      <p>Different colors evoke different emotions and associations. Understanding color psychology helps designers create interfaces that resonate with users.</p>
      
      <h2 id="color-schemes">Color Schemes</h2>
      <p>Popular color schemes include monochromatic, analogous, complementary, and triadic. Each scheme creates a different visual effect and mood.</p>
      
      <h2 id="accessibility">Color and Accessibility</h2>
      <p>Designers must consider color contrast ratios and ensure their designs are accessible to users with color vision deficiencies. Always test for WCAG compliance.</p>
    `,
    featuredImage: blogImages.colorTheory,
    category: categories[1],
    tags: ['Color Theory', 'Design', 'UI/UX', 'Visual Design'],
    author: authors[2],
    publishedAt: '2024-01-08',
    views: 2890,
    likes: 145,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Color Theory for Digital Designers | Arcbizz Blog',
      metaDescription: 'Master color theory principles and create harmonious color palettes for digital interfaces.',
      ogImage: blogImages.colorTheory,
      keywords: ['Color Theory', 'Design', 'UI/UX', 'Visual Design'],
    },
  },
  {
    id: 'blg_a2p7v0u6t4w3x1y9b5r2',
    slug: 'nodejs-backend-development',
    title: 'Node.js Backend Development: Building RESTful APIs',
    excerpt: 'Learn how to build robust RESTful APIs using Node.js and Express, including authentication, error handling, and database integration.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Node.js has become the go-to platform for building scalable backend services. Learn how to create production-ready RESTful APIs with Node.js and Express.</p>
      
      <h2 id="getting-started">Getting Started with Express</h2>
      <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.</p>
      
      <h2 id="restful-principles">RESTful API Principles</h2>
      <p>RESTful APIs follow specific principles including statelessness, resource-based URLs, HTTP methods, and proper status codes. Understanding these principles is crucial for building effective APIs.</p>
      
      <h2 id="authentication">Authentication and Authorization</h2>
      <p>Implement secure authentication using JWT tokens, handle password hashing with bcrypt, and set up proper authorization middleware to protect your API endpoints.</p>
      
      <h2 id="database-integration">Database Integration</h2>
      <p>Connect your Node.js application to databases like MongoDB or PostgreSQL. Use ORMs like Mongoose or Prisma to simplify database operations and ensure data consistency.</p>
      
      <h2 id="error-handling">Error Handling</h2>
      <p>Implement comprehensive error handling middleware to catch and format errors consistently. This improves debugging and provides better API responses.</p>
    `,
    featuredImage: blogImages.nodeBackend,
    category: categories[2],
    tags: ['Node.js', 'Backend', 'RESTful APIs', 'Express'],
    author: authors[2],
    publishedAt: '2023-12-30',
    views: 4780,
    likes: 223,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Node.js Backend Development Guide | Arcbizz Blog',
      metaDescription: 'Learn how to build robust RESTful APIs using Node.js and Express with authentication and database integration.',
      ogImage: blogImages.nodeBackend,
      keywords: ['Node.js', 'Backend', 'RESTful APIs', 'Express'],
    },
  },
  {
    id: 'blg_b3q8w1v7u5x4y2z0c6s3',
    slug: 'python-web-development-django',
    title: 'Python Web Development with Django: A Comprehensive Guide',
    excerpt: 'Discover Django framework and learn how to build full-featured web applications with Python, including models, views, templates, and admin interface.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It's perfect for building complex web applications.</p>
      
      <h2 id="django-basics">Django Basics</h2>
      <p>Django follows the MVT (Model-View-Template) architecture pattern. Models define data structure, views handle business logic, and templates manage presentation.</p>
      
      <h2 id="models-and-migrations">Models and Migrations</h2>
      <p>Django's ORM allows you to define database models using Python classes. Migrations handle database schema changes automatically, making version control for your database structure seamless.</p>
      
      <h2 id="views-and-urls">Views and URL Routing</h2>
      <p>Django's URL dispatcher maps URLs to view functions. Views can be function-based or class-based, providing flexibility in how you structure your application logic.</p>
      
      <h2 id="templates">Templates and Static Files</h2>
      <p>Django's template system allows you to create dynamic HTML pages. Templates support template inheritance, filters, and tags for building reusable UI components.</p>
      
      <h2 id="admin-interface">Django Admin Interface</h2>
      <p>Django provides a built-in admin interface that automatically generates a user-friendly interface for managing your application's data, perfect for content management.</p>
    `,
    featuredImage: blogImages.pythonDjango,
    category: categories[2],
    tags: ['Python', 'Django', 'Web Development', 'Backend'],
    author: authors[3],
    publishedAt: '2023-12-22',
    views: 3890,
    likes: 167,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Python Web Development with Django | Arcbizz Blog',
      metaDescription: 'Learn Django framework and build full-featured web applications with Python.',
      ogImage: blogImages.pythonDjango,
      keywords: ['Python', 'Django', 'Web Development', 'Backend'],
    },
  },
  {
    id: 'blg_c4r9x2w8v6y5z3a1d7t4',
    slug: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy: Driving Business Growth Online',
    excerpt: 'Learn how to create effective digital marketing strategies that drive traffic, generate leads, and increase revenue for your business.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>In today's digital landscape, having a comprehensive digital marketing strategy is essential for business success. This guide covers the fundamentals of building an effective online presence.</p>
      
      <h2 id="strategy-foundation">Strategy Foundation</h2>
      <p>Start by defining your target audience, setting clear goals, and understanding your competitive landscape. A well-defined strategy provides direction and helps measure success.</p>
      
      <h2 id="content-marketing">Content Marketing</h2>
      <p>Content is king. Create valuable, relevant content that attracts and engages your target audience. Blog posts, videos, infographics, and social media content all play crucial roles.</p>
      
      <h2 id="seo-optimization">SEO and Search Engine Optimization</h2>
      <p>Optimize your website and content for search engines to increase organic traffic. Focus on keyword research, on-page optimization, and building quality backlinks.</p>
      
      <h2 id="social-media">Social Media Marketing</h2>
      <p>Leverage social media platforms to connect with your audience, build brand awareness, and drive traffic. Choose platforms where your target audience is most active.</p>
      
      <h2 id="analytics">Analytics and Measurement</h2>
      <p>Track your marketing performance using analytics tools. Measure key metrics like traffic, conversions, engagement rates, and ROI to continuously improve your strategy.</p>
    `,
    featuredImage: blogImages.digitalMarketing,
    category: categories[3],
    tags: ['Digital Marketing', 'SEO', 'Business Strategy', 'Growth'],
    author: authors[4],
    publishedAt: '2024-01-12',
    views: 5230,
    likes: 245,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'Digital Marketing Strategy Guide | Arcbizz Blog',
      metaDescription: 'Learn how to create effective digital marketing strategies that drive business growth and increase revenue.',
      ogImage: blogImages.digitalMarketing,
      keywords: ['Digital Marketing', 'SEO', 'Business Strategy', 'Marketing'],
    },
  },
  {
    id: 'blg_d5s0y3x9w7z6a4b2e8u5',
    slug: 'startup-funding-guide',
    title: 'Startup Funding Guide: From Bootstrap to Series A',
    excerpt: 'Navigate the startup funding landscape and learn about different funding options, from bootstrapping to venture capital, and how to prepare for each stage.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Securing funding is one of the biggest challenges for startups. Understanding different funding options and when to pursue them is crucial for entrepreneurial success.</p>
      
      <h2 id="funding-stages">Funding Stages</h2>
      <p>Startup funding typically progresses through stages: bootstrapping, pre-seed, seed, Series A, B, C, and beyond. Each stage has different requirements and expectations.</p>
      
      <h2 id="bootstrapping">Bootstrapping</h2>
      <p>Bootstrapping means funding your startup with personal savings or revenue. It gives you full control but limits growth speed. Many successful companies started this way.</p>
      
      <h2 id="angel-investors">Angel Investors and Seed Funding</h2>
      <p>Angel investors provide early-stage funding in exchange for equity. Seed funding typically ranges from $100K to $2M and helps validate your business model.</p>
      
      <h2 id="venture-capital">Venture Capital</h2>
      <p>Venture capital firms invest larger amounts ($2M+) in exchange for equity. They provide capital, expertise, and connections but require significant equity stakes.</p>
      
      <h2 id="preparation">Preparing for Funding</h2>
      <p>To attract investors, you need a solid business plan, clear value proposition, market research, financial projections, and a strong team. Preparation is key to success.</p>
    `,
    featuredImage: blogImages.startupFunding,
    category: categories[3],
    tags: ['Startup', 'Funding', 'Business', 'Entrepreneurship'],
    author: authors[3],
    publishedAt: '2024-01-18',
    views: 4120,
    likes: 189,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'Startup Funding Guide | Arcbizz Blog',
      metaDescription: 'Navigate the startup funding landscape and learn about different funding options from bootstrap to Series A.',
      ogImage: blogImages.startupFunding,
      keywords: ['Startup', 'Funding', 'Business', 'Entrepreneurship'],
    },
  },
  {
    id: 'blg_e6t1z4y0x8w9a5b3f9v6',
    slug: 'web-application-security-best-practices',
    title: 'Web Application Security: Essential Best Practices for 2025',
    excerpt: 'Protect your web applications from common vulnerabilities and security threats. Learn essential security practices to safeguard user data and prevent attacks.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Web application security is more critical than ever. With cyber attacks becoming increasingly sophisticated, implementing robust security measures is essential for protecting user data and maintaining trust.</p>
      
      <h2 id="common-vulnerabilities">Common Security Vulnerabilities</h2>
      <p>The OWASP Top 10 lists the most critical security risks facing web applications. These include injection attacks, broken authentication, sensitive data exposure, and security misconfigurations.</p>
      
      <h2 id="authentication-security">Authentication and Authorization</h2>
      <p>Implement strong password policies, multi-factor authentication (MFA), and secure session management. Use proper hashing algorithms like bcrypt for password storage and implement rate limiting to prevent brute force attacks.</p>
      
      <h2 id="data-protection">Data Protection</h2>
      <p>Encrypt sensitive data both in transit (HTTPS/TLS) and at rest. Use environment variables for API keys and secrets, never commit them to version control. Implement proper access controls and data validation.</p>
      
      <h2 id="secure-coding">Secure Coding Practices</h2>
      <p>Follow secure coding guidelines, validate and sanitize all user inputs, use parameterized queries to prevent SQL injection, and implement Content Security Policy (CSP) headers to prevent XSS attacks.</p>
      
      <h2 id="regular-updates">Regular Updates and Monitoring</h2>
      <p>Keep all dependencies and frameworks up to date. Implement security monitoring, logging, and intrusion detection systems. Conduct regular security audits and penetration testing.</p>
    `,
    featuredImage: blogImages.webAppSecurity,
    category: categories[4],
    tags: ['Security', 'Web Security', 'OWASP', 'Cybersecurity'],
    author: authors[0],
    publishedAt: '2024-01-22',
    views: 4560,
    likes: 278,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'Web Application Security Best Practices | Arcbizz Blog',
      metaDescription: 'Learn essential web application security best practices to protect your applications from common vulnerabilities and attacks.',
      ogImage: blogImages.webAppSecurity,
      keywords: ['Web Security', 'Cybersecurity', 'OWASP', 'Application Security'],
    },
  },
  {
    id: 'blg_f7u2a5z1y9x0b6c4g0w7',
    slug: 'api-security-authentication-authorization',
    title: 'API Security: Authentication and Authorization Best Practices',
    excerpt: 'Learn how to secure your APIs with proper authentication and authorization mechanisms. Explore JWT, OAuth 2.0, and API key management strategies.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>APIs are the backbone of modern applications, making API security crucial. Proper authentication and authorization are fundamental to protecting your API endpoints from unauthorized access.</p>
      
      <h2 id="authentication-methods">Authentication Methods</h2>
      <p>There are several authentication methods for APIs including API keys, OAuth 2.0, JWT tokens, and Basic Authentication. Each has its use cases and security considerations.</p>
      
      <h2 id="jwt-tokens">JWT Token Security</h2>
      <p>JSON Web Tokens (JWT) are widely used for API authentication. Implement proper token expiration, refresh tokens, and secure token storage. Always use HTTPS and validate token signatures.</p>
      
      <h2 id="oauth2">OAuth 2.0 Implementation</h2>
      <p>OAuth 2.0 is the industry standard for authorization. Understand the different grant types (authorization code, client credentials, etc.) and implement them correctly based on your use case.</p>
      
      <h2 id="rate-limiting">Rate Limiting and Throttling</h2>
      <p>Implement rate limiting to prevent abuse and DDoS attacks. Set appropriate limits based on user tiers and use token bucket or sliding window algorithms.</p>
      
      <h2 id="api-monitoring">API Monitoring and Logging</h2>
      <p>Monitor API usage patterns, log all access attempts, and set up alerts for suspicious activities. Track authentication failures and implement account lockout mechanisms.</p>
    `,
    featuredImage: blogImages.apiSecurity,
    category: categories[4],
    tags: ['API Security', 'JWT', 'OAuth', 'Authentication'],
    author: authors[2],
    publishedAt: '2024-01-25',
    views: 3890,
    likes: 234,
    featured: false,
    status: 'published',
    seo: {
      metaTitle: 'API Security: Authentication and Authorization | Arcbizz Blog',
      metaDescription: 'Learn how to secure your APIs with proper authentication and authorization using JWT, OAuth 2.0, and best practices.',
      ogImage: blogImages.apiSecurity,
      keywords: ['API Security', 'JWT', 'OAuth 2.0', 'Authentication'],
    },
  },
  {
    id: 'blg_g8v3b6a2z0y1c7d5h1x8',
    slug: 'data-privacy-gdpr-compliance-guide',
    title: 'Data Privacy and GDPR Compliance: A Developer\'s Guide',
    excerpt: 'Understand GDPR requirements and learn how to implement data privacy measures in your applications. Protect user data and ensure compliance.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Data privacy regulations like GDPR have reshaped how we handle user data. Understanding these requirements is essential for building compliant applications and avoiding costly penalties.</p>
      
      <h2 id="gdpr-basics">GDPR Basics</h2>
      <p>The General Data Protection Regulation (GDPR) requires organizations to protect EU citizens' personal data. It mandates consent, right to access, right to deletion, and data breach notifications.</p>
      
      <h2 id="user-consent">Obtaining User Consent</h2>
      <p>Implement clear consent mechanisms that are specific, informed, and unambiguous. Allow users to easily withdraw consent and provide granular control over data collection and processing.</p>
      
      <h2 id="data-minimization">Data Minimization</h2>
      <p>Only collect data that is necessary for your stated purpose. Implement data retention policies and delete data when it's no longer needed. Avoid storing sensitive data unnecessarily.</p>
      
      <h2 id="user-rights">Implementing User Rights</h2>
      <p>Provide users with the ability to access, rectify, export, and delete their data. Implement clear processes for handling data subject access requests (DSARs) within the required timeframes.</p>
      
      <h2 id="security-measures">Security Measures</h2>
      <p>Implement encryption, access controls, and regular security assessments. Document your data processing activities and maintain records of data breaches and how you handled them.</p>
      
      <h2 id="privacy-by-design">Privacy by Design</h2>
      <p>Build privacy considerations into your application from the start. Use privacy-preserving technologies, minimize data collection, and implement data protection measures by default.</p>
    `,
    featuredImage: blogImages.gdprCompliance,
    category: categories[4],
    tags: ['GDPR', 'Data Privacy', 'Compliance', 'Security'],
    author: authors[4],
    publishedAt: '2024-01-28',
    views: 5230,
    likes: 312,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'GDPR Compliance Guide for Developers | Arcbizz Blog',
      metaDescription: 'Learn how to implement GDPR compliance and data privacy measures in your applications.',
      ogImage: blogImages.gdprCompliance,
      keywords: ['GDPR', 'Data Privacy', 'Compliance', 'Security'],
    },
  },
  {
    id: 'blg_h9w4c7b3a1z2d8e6i2y9',
    slug: 'ci-cd-pipeline-setup-guide',
    title: 'CI/CD Pipeline Setup: Complete Guide for Modern Development',
    excerpt: 'Learn how to build efficient CI/CD pipelines that automate testing, building, and deployment. Master continuous integration and continuous deployment practices.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for modern software development. They automate the process of building, testing, and deploying applications, reducing manual errors and accelerating delivery.</p>
      
      <h2 id="what-is-cicd">What Is CI/CD?</h2>
      <p>CI/CD combines continuous integration (automatically testing code changes) with continuous deployment (automatically deploying to production). This enables teams to ship code faster and more reliably.</p>
      
      <h2 id="pipeline-stages">CI/CD Pipeline Stages</h2>
      <p>A typical CI/CD pipeline includes stages for code checkout, dependency installation, building, testing, security scanning, and deployment. Each stage runs automatically when code is pushed to the repository.</p>
      
      <h2 id="popular-tools">Popular CI/CD Tools</h2>
      <p>Popular CI/CD platforms include GitHub Actions, GitLab CI, Jenkins, CircleCI, and Azure DevOps. Each offers unique features for automating your development workflow.</p>
      
      <h2 id="best-practices">Best Practices</h2>
      <p>Implement parallel testing, use caching to speed up builds, keep pipelines fast, and maintain separate environments for staging and production. Always test before deploying to production.</p>
      
      <h2 id="monitoring">Monitoring and Feedback</h2>
      <p>Set up notifications for pipeline failures, monitor build times, and track deployment metrics. Use dashboards to visualize pipeline health and identify bottlenecks.</p>
    `,
    featuredImage: blogImages.ciCdPipeline,
    category: categories[5],
    tags: ['CI/CD', 'DevOps', 'Automation', 'Deployment'],
    author: authors[1],
    publishedAt: '2024-02-01',
    views: 4780,
    likes: 267,
    featured: true,
    status: 'published',
    seo: {
      metaTitle: 'CI/CD Pipeline Setup Guide | Arcbizz Blog',
      metaDescription: 'Learn how to build efficient CI/CD pipelines for automated testing, building, and deployment in modern development workflows.',
      ogImage: blogImages.ciCdPipeline,
      keywords: ['CI/CD', 'DevOps', 'Automation', 'Continuous Integration'],
    },
  },
]

// Process posts to add reading time and table of contents
export const allPosts: BlogPost[] = rawPosts.map(post => ({
  ...post,
  readingTime: calculateReadingTime(post?.content),
  tableOfContents: extractTableOfContents(post?.content).map(item => ({
    id: item.id,
    title: item.title,
    level: item.level,
  })),
}))

// Helper functions
export async function getAllPosts(): Promise<BlogPost[]> {
  return allPosts.filter(post => post?.status === 'published')
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const post = allPosts.find(p => p?.id === id && p?.status === 'published')
  return post || null
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const featured = allPosts.find(p => p?.featured && p?.status === 'published')
  return featured || null
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  return allPosts.filter(
    post => post?.category?.slug === categorySlug && post?.status === 'published'
  )
}

export async function getCategories(): Promise<BlogCategory[]> {
  return categories
}

export async function getRelatedPosts(postId: string): Promise<BlogPost[]> {
  const currentPost = allPosts.find(p => p?.id === postId && p?.status === 'published')
  if (!currentPost) return []

  return allPosts
    .filter(post =>
      post?.id !== postId &&
      post?.status === 'published' &&
      (post?.category?.id === currentPost?.category?.id ||
        post?.tags.some(tag => currentPost?.tags.includes(tag)))
    )
    .sort((a, b) => {
      if (a?.category?.id === currentPost?.category?.id && b?.category?.id !== currentPost?.category?.id) return -1
      if (a?.category?.id !== currentPost?.category?.id && b?.category?.id === currentPost?.category?.id) return 1
      return new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    })
    .slice(0, 3)
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find(a => a?.id === id)
}

