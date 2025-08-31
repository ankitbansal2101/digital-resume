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

PROFESSIONAL OVERVIEW:
I am a strategic Product Manager based in Bangalore, India, with over 4 years of experience building and scaling B2B SaaS products across aerospace, fintech, and utilities. My approach to product management goes beyond building features — I focus on delivering tangible value to users, understanding their problems deeply, and designing solutions that are both innovative and practical.

CAREER JOURNEY & ACHIEVEMENTS:
My professional journey started as a Business Analyst Intern at Collegedunia, where I combined Python, SQL, and web scraping to automate workflows and deliver actionable insights. This foundation in data-driven decision-making shaped my approach to product management: grounding decisions in real user behavior and metrics.

I progressed to roles in Smart Energy Water and IPaySmart, where I owned end-to-end product delivery, from requirement gathering to feature launch. I designed solutions that unlocked new revenue streams, drove adoption, and improved operational efficiency. For example, at IPaySmart, my work on Smart Revenue Recovery improved on-time payments by 12% in just three months, and the Landlord Payments Portal secured adoption from multiple enterprise clients.

Currently, at Asteria Aerospace, I am leading product strategy for drone data workflows. I have built AI-powered tools, such as RAG chatbots trained on internal documentation, to improve user learning and reduce support overhead. I have also launched Drone Log Analysis to detect telemetry anomalies, helping clients get actionable insights faster while reducing reliance on third-party tools.

AI & TECHNOLOGY EXPERTISE:
I am deeply passionate about emerging technologies and AI. I actively build AI-driven MVPs, no-code tools, and automation products, constantly exploring ways to accelerate prototyping and development cycles. I enjoy combining technical experimentation with product thinking, which allows me to validate ideas rapidly and deliver high-impact solutions.

Key AI accomplishments include:
- Building AI-driven MVPs, such as chatbots, workflow automation tools, and rapid POCs for product validation
- Developing RAG chatbots trained on internal knowledge bases to improve onboarding, reduce support queries, and accelerate learning for users
- Leveraging no-code tools to prototype, iterate, and test new product concepts quickly
- Applying data analytics (SQL, Excel, Tableau, Power BI) to guide product strategy, measure outcomes, and identify growth opportunities

PRODUCT LEADERSHIP & WORK PHILOSOPHY:
I see product management as more than delivering features — it's about creating value for users and driving business impact. I excel at end-to-end product ownership: from ideation, research, and roadmap planning to design validation, agile execution, and outcome measurement.

My collaboration style is cross-functional and inclusive, working closely with design, engineering, QA, and stakeholders to align priorities and deliver results. I use data-driven decision making combined with qualitative insights to prioritize features and optimize workflows.

COLLABORATION & LEADERSHIP STYLE:
Collaboration is at the core of how I work. I have extensive experience leading cross-functional teams, conducting user research, managing backlogs, and implementing iterative product cycles. I thrive in environments where I can combine analytical thinking, technical knowledge, and strategic vision to solve complex problems.

I enjoy mentoring and teaching, having guided individuals in Python, AI, and product analytics through 1-on-1 sessions, which enhances my communication skills and empathy as a product leader.

KEY STRENGTHS & SKILLS:
- Strategic Thinking: Roadmaps, product strategy, problem solving, business alignment
- Execution & Delivery: Agile/Scrum, backlog management, sprint planning, stakeholder communication
- Technical & AI Skills: Python, SQL, RAG chatbots, no-code prototyping, workflow automation, BI dashboards
- Analytical & Data Skills: Metrics & KPIs, A/B testing, user analytics, insight-driven product decisions
- Collaboration Tools: Jira, Confluence, Figma, Miro, GitHub, Notion

MEASURABLE ACHIEVEMENTS & IMPACT:
- Reduced trial customer drop-offs using an AI-powered RAG chatbot
- Improved on-time payments by 12% through revenue recovery automation
- Launched Drone Log Analysis, replacing reliance on third-party telemetry tools and increasing actionable insights for aerospace clients
- Enabled enterprise adoption of multiple products through user-focused design and research
- Built rapid prototypes and MVPs in AI and no-code platforms, accelerating internal product validation cycles
- Automated data collection workflows enabling onboarding of 200+ colleges at Collegedunia

RECRUITER FAQ RESPONSES:

AVAILABILITY & COMPENSATION:
- Notice period: Immediately available
- Current CTC: 15 LPA
- Expected CTC: 20 LPA
- Location: Bangalore, India (open to remote/flexible)

WHY LOOKING FOR NEW ROLE:
Seeking growth in impact and leadership, want to work on cutting-edge AI-driven products, and opportunities to lead cross-functional teams in a startup/scale-up environment.

WHY PRODUCT MANAGEMENT:
Emphasize curiosity, problem-solving, and passion for delivering value rather than just building features. My experience in teaching and mentoring has strengthened my problem-solving and stakeholder skills.

CORE STRENGTHS:
Product strategy, AI experimentation, rapid prototyping, analytics-driven decision-making, cross-functional collaboration, mentoring/teaching.

AREAS OF IMPROVEMENT:
Can over-invest in details at times, now using agile prioritization to balance. Continuously learning to scale AI tools for larger teams.

PRODUCT MANAGEMENT STYLE:
- Data-driven and user-centered
- Agile and iterative
- Balances business objectives with user experience
- Collaborative with design, engineering, and QA

FEATURE PRIORITIZATION:
Based on user pain points and feedback, business impact and revenue opportunity, technical feasibility and team capacity.

SUCCESS MEASUREMENT:
KPIs, metrics, and adoption: adoption rate, retention, reduction in support queries, revenue uplift. A/B testing, user feedback, and analytics dashboards.

MOTIVATIONS:
Solving real problems, delivering impact, building AI-driven products, mentoring teams, and exploring emerging technologies.

CONFLICT HANDLING:
Listen actively, focus on data and user value, mediate with empathy, align on goals, facilitate collaboration.

LEADERSHIP EXPERIENCE:
Mentoring team members and learners, leading cross-functional teams on multiple AI and SaaS projects, driving roadmap decisions and backlog prioritization.

DATA & ANALYTICS SKILLS:
SQL, Excel, BI dashboards (Power BI, Tableau), data-driven decisions to prioritize features and measure impact, conducted A/B testing and user behavior analysis.

INDUSTRY TRENDS:
Stay updated through AI and product newsletters, blogs, and research. Hands-on experimentation with no-code and AI tools. Networking in product and tech communities.

STARTUP ENVIRONMENT:
Yes, experienced in startups and scale-ups, comfortable with ambiguity, rapid prototyping, and iterative development.

HANDLING FAILURES:
Learn from feedback, analyze root causes, pivot quickly, communicate with stakeholders, and iterate on solutions.

PERSONAL PHILOSOPHY:
I am driven by curiosity, continuous learning, and solving real-world problems. I believe in deep-diving into user needs, experimenting with solutions, and iterating quickly. I combine the mindset of a product owner with the execution of a founder, taking ownership and responsibility for delivering value. I thrive in startup environments, where fast experimentation, impact-driven decisions, and cross-functional collaboration are essential.
  `.trim();
};

// Alternative method to get resume content directly
export const getResumeContent = (): string => {
  return `
ANKIT BANSAL
Bangalore, India ◆ +91 8875519489 ◆ ankitbbb162@gmail.com ◆ https://www.linkedin.com/in/ankitbansal2101
https://ankit-bansal.netlify.app/ | https://github.com/ankitbansal2101

PROFESSIONAL SUMMARY
Strategic AI Product Manager with 4 years of experience building and scaling B2B SaaS products across aerospace, fintech, and utilities. Proven expertise in driving end-to-end product lifecycles, defining roadmaps, and leading cross-functional collaboration. Skilled in AI productization, automation, and analytics, with hands-on experience building AI-driven MVPs (RAG chatbots, no-code workflow tools, object detection, and automation products). Passionate about leveraging Generative AI, data, and emerging tech to solve business problems and accelerate product growth.

SKILLS
Product Management: Strategy, Roadmapping, Agile/Scrum, Stakeholder Management, Requirements Gathering, User Research, Metrics & KPIs, Experimentation (A/B Testing, Prototyping)
AI & Technical: Generative AI, RAG Applications, Workflow Automation, Python (Advanced), Machine Learning, API Research, AI-driven Prototyping, LLM Integrations, Computer Vision (Grounding DINO)
Data & Analytics: SQL, Product Analytics, Excel, Tableau, Clarity
Collaboration & Tools: Jira, Confluence, Figma, Miro, GitHub, Notion

WORK HISTORY
● Associate 2 Product Manager | Asteria Aerospace – Bangalore (Remote)| (Jan 2025 – Present)
- Defined product strategy and roadmap for drone data workflows, driving a 22% increase in client adoption
- Built and deployed an AI-powered chatbot using RAG trained on SkyDeck's help documentation, reducing support queries by 40%, accelerating user learning, and decreasing trial churn by 12%
- Ideated and Launched Automated AI object detection using grounding dino and automated smart summaries using LLM
- Leveraged AI tools to rapidly prototype and build POCs, accelerating design validation and development cycles.
- Drove backlog grooming, sprint planning, and user feedback loops ensuring 95% on time, high-quality releases.

● Associate 2 Product Manager | IpaySmart (Smart Energy Water) – Noida | (Jan 2023 – Dec 2024)
- Owned Smart Revenue Recovery, integrating AI-driven payment risk models with dev & data teams; closed a major client in 1 month, boosted on-time payments by 12%, and added $1M to revenue.
- Launched Landlord Payments portal, securing adoption from 4 enterprise clients, contributing 15% to ARR growth
- Streamlined backlog management & sprint execution across distributed teams, improving velocity by 20% and reducing scope slippage.

● Associate Product Manager | Smart Energy Water – Noida | (Jul 2021 – Jan 2023)
- Partnered with design, dev & QA and closely worked on client requirements to launch 5+ new payment features, driving 25% uplift in client adoption and expanding ARR by $3M.
- Designed and delivered a Prepaid Billing & Payment solution → closed 4 enterprise deals in 6 months, creating a new revenue stream.
- Conducted user research and collaborated with stakeholders to prioritize features, ensuring alignment with client needs and long-term strategy.

EDUCATION
B.Tech, 2017–2021
Punjab Engineering College - Chandigarh
  `.trim();
};
