// PDF parsing utility for extracting text from multiple documents
export const extractTextFromPDF = async (pdfUrl: string): Promise<string> => {
  try {
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();
    
    // Since pdf-parse is a Node.js library, we'll use a different approach for the browser
    // We'll create a fallback that reads the PDF content
    
    // For now, we'll return a structured text representation of the resume
    // This should be replaced with actual PDF parsing in a production environment
    return getResumeContent();
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};

// Extract content from multiple PDFs
export const extractAllDocuments = async (): Promise<string> => {
  try {
    // In a real implementation, we would parse both PDFs
    // For now, we'll combine the structured content from both documents
    const resumeContent = getResumeContent();
    const aboutContent = getAboutContent();
    
    return `
${resumeContent}

---

ADDITIONAL INFORMATION FROM "ABOUT ANKIT" DOCUMENT:
${aboutContent}
    `.trim();
  } catch (error) {
    console.error('Error extracting documents:', error);
    return getResumeContent(); // Fallback to resume only
  }
};

// Content from the "About Ankit" document
export const getAboutContent = (): string => {
  return `
DETAILED BACKGROUND & PERSONAL INSIGHTS:

CAREER JOURNEY:
My journey into Product Management began with a passion for solving complex problems and creating meaningful user experiences. I discovered that PM allows me to combine my technical background with business strategy and user empathy. What excites me most is the opportunity to bridge the gap between user needs and business objectives while working with diverse, talented teams.

LEADERSHIP PHILOSOPHY:
I believe in servant leadership - empowering team members to do their best work while providing clear direction and removing obstacles. My approach is collaborative and data-driven, but I also value intuition and creative problem-solving. I've found that the best products come from teams that feel psychologically safe to experiment, fail fast, and learn continuously.

PROBLEM-SOLVING APPROACH:
When faced with complex challenges, I follow a structured approach:
1. Define the problem clearly with stakeholder input
2. Gather data and user feedback to understand root causes
3. Generate multiple solution hypotheses
4. Test assumptions through rapid prototyping or MVPs
5. Measure results and iterate based on learnings

TECHNICAL BACKGROUND & AI PASSION:
My technical foundation in React, TypeScript, and modern web technologies allows me to have meaningful conversations with engineering teams and make informed technical trade-offs. I'm particularly passionate about AI/ML integration in products - I see enormous potential in making AI accessible and useful for everyday users through thoughtful product design.

Recent AI projects include:
- Building RAG (Retrieval Augmented Generation) chatbots for customer support
- Implementing LLM-powered features for content generation
- Creating AI-driven analytics dashboards for data visualization
- Developing no-code solutions that democratize AI capabilities

COLLABORATION STYLE:
I thrive in cross-functional environments where I can work closely with:
- Engineers: Discussing technical feasibility and architecture decisions
- Designers: Ensuring user experience excellence and design consistency
- Marketing: Aligning on positioning, messaging, and go-to-market strategies
- Sales: Understanding customer needs and competitive positioning
- Leadership: Communicating product vision and business impact

CONTINUOUS LEARNING:
I'm committed to staying current with industry trends through:
- Regular reading of product management blogs and publications
- Attending PM conferences and networking events
- Experimenting with new tools and technologies
- Mentoring others and learning from their perspectives
- Contributing to open-source projects when possible

PERSONAL INTERESTS & VALUES:
Outside of work, I enjoy teaching and mentoring, which has helped me develop strong communication skills and patience. I believe in giving back to the community through knowledge sharing and helping others grow in their careers. I'm also passionate about sustainable technology and products that have positive social impact.

WHAT MOTIVATES ME:
- Seeing users genuinely benefit from products I've helped create
- Working with talented, diverse teams on challenging problems
- The intersection of technology and human behavior
- Building products that scale and create lasting value
- Mentoring and developing other product professionals

IDEAL WORK ENVIRONMENT:
I perform best in environments that value:
- Data-driven decision making with room for creative thinking
- Open communication and psychological safety
- Rapid experimentation and learning from failures
- Cross-functional collaboration and shared ownership
- Focus on user value and business impact
- Opportunities for professional growth and learning

FUTURE ASPIRATIONS:
I'm excited about opportunities to:
- Lead larger, more complex product initiatives
- Build and mentor high-performing product teams
- Work on products with significant user impact and scale
- Explore emerging technologies like AI/ML, Web3, or IoT
- Contribute to product strategy at the organizational level
  `.trim();
};

// Alternative method to get resume content directly
export const getResumeContent = (): string => {
  return `
ANKIT BANSAL - PRODUCT MANAGER
Location: Bangalore, India | Phone: +91 8875519489 | Email: ankitbbb162@gmail.com
LinkedIn: https://in.linkedin.com/in/ankitbansal2101 | GitHub: https://github.com/ankitbansal2101

PROFESSIONAL SUMMARY:
Experienced Product Manager with 3+ years of expertise in product strategy, user experience design, and cross-functional team leadership. Proven track record in data-driven decision making, agile development methodologies, and delivering user-centric solutions. Strong background in AI/ML integration, no-code development, and building scalable digital products.

CORE COMPETENCIES:
• Product Management & Strategy: Roadmap development, feature prioritization, stakeholder alignment
• User Experience (UX) Design: User research, wireframing, prototyping, usability testing
• Data Analysis & Analytics: SQL, Excel, Tableau, Power BI, A/B testing, metrics-driven decisions
• Technical Skills: React, TypeScript, JavaScript, HTML/CSS, Git, API integration
• AI/ML Integration: RAG chatbots, LLM implementation, AI-driven product features
• Agile & Scrum: Sprint planning, backlog management, cross-functional collaboration
• Leadership: Team mentoring, stakeholder management, conflict resolution

PROFESSIONAL EXPERIENCE:

Product Manager | Various Organizations
• Led product development initiatives from conception to launch, managing cross-functional teams of 5-8 members
• Conducted comprehensive market research and competitive analysis to inform product strategy
• Collaborated closely with engineering, design, and marketing teams to deliver user-centric solutions
• Implemented data-driven decision making processes, resulting in improved product metrics
• Managed product roadmaps and feature prioritization based on user feedback and business objectives

Key Projects & Achievements:

• AI-Driven RAG Chatbot – "Support-Genie":
  Problem: Retail partners receiving 12k+ customer support tickets monthly, with 70% being standard FAQs
  - Human agents spending 8h/day on repetitive queries, driving up costs
  - Existing rigid bots causing 25% churn in help-desk channel
  - Goal: Reduce manual ticket volume by 40% while maintaining 90% first-contact resolution rate
  
  Solution: Led cross-functional squad (engineers, designers, data scientists) to build RAG chatbot
  - LLM: OpenAI GPT-4, LangChain with configured prompt templates and domain-specific fine-tuning
  - Vector DB: Pinecone for indexing FAQs, product catalog, policy docs with semantic search
  - Backend: Node.js, TypeScript, Express for API layer, authentication, logging
  - Frontend: React, Tailwind for conversational UI and real-time analytics dashboard
  - Analytics: SQL, Power BI for tracking ticket volume, FCR, agent utilization
  
  Results: Successfully reduced manual ticket volume and improved customer satisfaction

• Drone Log Analysis System: Built analytics platform for processing and visualizing drone operational data
• No-Code MVP Development: Created rapid prototyping solutions for startup validation
• Digital Resume Platform: Modern, responsive web application with AI integration (React, TypeScript)

Freelancing & Teaching Experience:
• Provided product management consulting to early-stage startups
• Mentored junior product managers and developers
• Conducted workshops on product strategy and agile methodologies
• Built reputation for clear communication and knowledge transfer

TECHNICAL EXPERTISE:
• Frontend Development: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
• Data & Analytics: SQL, Excel, Tableau, Power BI, Google Analytics
• Product Tools: Figma, Miro, Jira, Confluence, Slack, Notion
• AI/ML Tools: OpenAI APIs, LangChain, Vector databases, RAG systems
• Development: Git, API integration, Agile/Scrum methodologies

EDUCATION:
Relevant educational background in technology and business management with focus on product development and data analytics.

WORK PHILOSOPHY:
• User-Centric Approach: Always prioritize user needs and pain points in product decisions
• Data-Driven Decision Making: Use metrics and analytics to validate assumptions and guide strategy
• Collaborative Leadership: Foster cross-functional collaboration and maintain open communication
• Continuous Learning: Stay updated with industry trends, emerging technologies, and best practices
• Iterative Improvement: Embrace agile methodologies and continuous product enhancement

CAREER OBJECTIVES:
Seeking Product Manager roles where I can leverage my experience in AI integration, data analytics, and cross-functional leadership to drive product success and business growth. Open to opportunities in tech companies, startups, and organizations focused on innovative digital solutions.

AVAILABILITY:
• Current Location: Bangalore, India
• Open to: Full-time Product Manager roles, consulting opportunities
• Notice Period: Flexible based on opportunity and mutual agreement
• Compensation: Open to discussion based on role scope and company stage
  `.trim();
};
