import React from 'react';
import { MessageSquare } from 'lucide-react';

interface PredefinedQuestion {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface PredefinedQuestionsProps {
  onQuestionSelect: (question: string, answer: string) => void;
  isVisible: boolean;
}

const predefinedQuestions: PredefinedQuestion[] = [
  // Basic Information
  {
    id: 'tell-about-yourself',
    category: 'Basic Info',
    question: 'Tell me about yourself',
    answer: "I'm a strategic Product Manager with 4 years of experience delivering B2B SaaS products across aerospace, fintech, and utilities. Currently at Asteria Aerospace, I lead product strategy for drone data workflows and have built AI-powered solutions like RAG chatbots and telemetry analysis systems. I'm passionate about combining technical expertise with product thinking to solve real-world problems and drive measurable business impact."
  },
  {
    id: 'location-availability',
    category: 'Basic Info',
    question: 'What is your current location and availability?',
    answer: "I'm based in Bangalore, India, and I'm immediately available to start. I'm open to remote, hybrid, or on-site work arrangements depending on the role and company needs."
  },
  {
    id: 'notice-period',
    category: 'Basic Info',
    question: 'What is your notice period?',
    answer: "I'm immediately available and can start right away. There's no notice period required from my end."
  },
  {
    id: 'salary-expectations',
    category: 'Basic Info',
    question: 'What are your salary expectations?',
    answer: "My current CTC is 15 LPA and I'm looking for opportunities in the 20 LPA range. However, I'm flexible and open to discussing compensation based on the role scope, growth opportunities, and overall package."
  },

  // Experience & Background
  {
    id: 'years-experience',
    category: 'Experience',
    question: 'How many years of experience do you have?',
    answer: "I have 4 years of product management experience, starting as a Business Analyst Intern at Collegedunia and progressing through roles at Smart Energy Water, IPaySmart, and currently Asteria Aerospace. I've consistently grown in responsibility and impact across different industries."
  },
  {
    id: 'current-role',
    category: 'Experience',
    question: 'Tell me about your current role at Asteria Aerospace',
    answer: "At Asteria Aerospace, I'm the Product Manager leading drone data workflow strategy. I've built an AI-powered RAG chatbot trained on internal documentation that reduced support queries and improved user learning. I also launched Drone Log Analysis for telemetry anomaly detection, which replaced third-party tool dependencies and drove new customer acquisition."
  },
  {
    id: 'biggest-achievement',
    category: 'Experience',
    question: 'What was your biggest achievement in your previous role?',
    answer: "At IPaySmart, I owned the end-to-end delivery of Smart Revenue Recovery, which improved on-time payments by 12% in just 3 months. I also built the Landlord Payments Portal that secured adoption from 4 enterprise clients. These projects directly impacted revenue and customer satisfaction."
  },
  {
    id: 'career-progression',
    category: 'Experience',
    question: 'Walk me through your career progression',
    answer: "I started as a Business Analyst Intern at Collegedunia, where I automated data workflows using Python and SQL. I then became a Product Analyst at Smart Energy Water, launching payment features and closing 4 enterprise deals. At IPaySmart, I was promoted to Senior Product Analyst, delivering revenue recovery solutions. Now at Asteria Aerospace, I'm a Product Manager leading AI-driven product initiatives in the aerospace sector."
  },

  // Skills & Technical
  {
    id: 'technical-skills',
    category: 'Skills',
    question: 'What are your core technical skills?',
    answer: "My technical skills include Python, SQL, and data analytics with tools like Excel, Tableau, and Power BI. I have hands-on experience building AI solutions including RAG chatbots, workflow automation, and rapid prototyping with no-code tools. I'm also proficient with product management tools like Jira, Confluence, Figma, and Miro."
  },
  {
    id: 'ai-experience',
    category: 'Skills',
    question: 'Do you have experience with AI and machine learning?',
    answer: "Yes, I'm deeply passionate about AI and have built several AI-driven solutions. I've developed RAG chatbots using OpenAI APIs and LangChain, created telemetry anomaly detection systems, and built rapid AI prototypes for product validation. I actively experiment with emerging AI tools to accelerate development cycles."
  },
  {
    id: 'pm-approach',
    category: 'Skills',
    question: 'How do you approach product management?',
    answer: "I approach product management with a user-centric, data-driven mindset. I focus on understanding real user problems, validating solutions through rapid prototyping, and measuring impact through clear KPIs. I believe in end-to-end ownership from ideation to delivery, working closely with cross-functional teams to ensure alignment and execution."
  },
  {
    id: 'pm-tools',
    category: 'Skills',
    question: 'What tools do you use for product management?',
    answer: "I use Jira for backlog management and sprint planning, Confluence for documentation, Figma for design collaboration, and Miro for workshops and roadmapping. For analytics, I work with SQL databases, Excel, Tableau, and Power BI. I also use GitHub for technical collaboration and Notion for knowledge management."
  },

  // Behavioral Questions
  {
    id: 'why-looking',
    category: 'Behavioral',
    question: 'Why are you looking for a new opportunity?',
    answer: "I'm seeking opportunities for greater impact and leadership in AI-driven product development. I want to work with cutting-edge technologies and lead larger cross-functional teams in a growth-stage startup environment where I can contribute to strategic product decisions and scale innovative solutions."
  },
  {
    id: 'motivation',
    category: 'Behavioral',
    question: 'What motivates you in your work?',
    answer: "I'm motivated by solving real problems that create tangible value for users. I love the intersection of technology and human behavior, especially building AI-powered solutions that make complex tasks simpler. Mentoring team members and seeing products I've built drive measurable business impact energizes me the most."
  },
  {
    id: 'handle-conflicts',
    category: 'Behavioral',
    question: 'How do you handle conflicts in a team?',
    answer: "I handle conflicts by listening actively to all perspectives, focusing discussions on data and user value rather than opinions, and facilitating collaborative problem-solving. I believe in addressing issues early, finding common ground through shared goals, and ensuring everyone feels heard while keeping the team focused on delivering value."
  },
  {
    id: 'leadership-style',
    category: 'Behavioral',
    question: 'Describe your leadership style',
    answer: "My leadership style is collaborative and empowering. I believe in setting clear goals, providing context for decisions, and giving team members autonomy to execute. I focus on removing obstacles, facilitating communication, and creating an environment where people feel safe to experiment and learn from failures."
  },
  {
    id: 'prioritize-features',
    category: 'Behavioral',
    question: 'How do you prioritize features in a product?',
    answer: "I prioritize features based on three key factors: user impact and pain points, business value and revenue potential, and technical feasibility. I use frameworks like RICE scoring, gather user feedback through research, analyze usage data, and work closely with engineering to understand implementation complexity before making prioritization decisions."
  },
  {
    id: 'challenging-project',
    category: 'Behavioral',
    question: 'Tell me about a challenging project you worked on',
    answer: "The Drone Log Analysis project was particularly challenging because we had to process complex telemetry data with limited documentation and replace a well-established third-party tool. I worked closely with aerospace engineers to understand the domain, built rapid prototypes to validate our approach, and iteratively improved the anomaly detection algorithms based on client feedback. The result was a solution that gave clients better insights while reducing external dependencies."
  },

  // Culture Fit
  {
    id: 'startup-environment',
    category: 'Culture Fit',
    question: 'Are you comfortable working in a startup environment?',
    answer: "Absolutely. I thrive in startup environments where I can wear multiple hats, move quickly, and have direct impact on product decisions. I'm comfortable with ambiguity, enjoy rapid prototyping and iteration, and appreciate the collaborative nature of smaller teams where everyone's contribution matters."
  },
  {
    id: 'industry-trends',
    category: 'Culture Fit',
    question: 'How do you stay updated with industry trends?',
    answer: "I stay updated through AI and product management newsletters, industry blogs, and hands-on experimentation with new tools and technologies. I actively participate in product management communities, attend virtual conferences, and most importantly, I build side projects to test emerging technologies like AI APIs and no-code platforms."
  },
  {
    id: 'work-environment',
    category: 'Culture Fit',
    question: 'What type of work environment do you prefer?',
    answer: "I prefer collaborative environments that value data-driven decision making, rapid experimentation, and continuous learning. I work best in teams that have psychological safety to fail fast and iterate, clear communication channels, and a focus on user value and business impact over just shipping features."
  },
  {
    id: 'remote-work',
    category: 'Culture Fit',
    question: 'Are you open to remote work?',
    answer: "Yes, I'm very comfortable with remote work. I have experience working remotely at Asteria Aerospace and have developed strong skills in asynchronous communication, virtual collaboration, and self-management. I'm equally comfortable with remote, hybrid, or in-person work arrangements."
  },

  // Specific Projects
  {
    id: 'drone-analysis',
    category: 'Projects',
    question: 'Tell me about the Drone Log Analysis project',
    answer: "I built a telemetry anomaly detection system that processes drone flight data to identify maintenance patterns and operational insights. The project involved working with aerospace engineers to understand complex data structures, building analytics pipelines, and creating dashboards for actionable insights. It replaced reliance on third-party tools and helped drive new customer acquisition by providing better value to clients."
  },
  {
    id: 'ai-chatbot',
    category: 'Projects',
    question: 'How did you build the AI chatbot at Asteria?',
    answer: "I built a RAG chatbot trained on SkyDeck's internal help documentation using OpenAI APIs and vector databases. The process involved extracting and structuring documentation, creating embeddings for semantic search, and building a conversational interface. The chatbot reduced support queries, accelerated user learning, and decreased trial customer drop-offs by providing instant, accurate answers."
  },
  {
    id: 'revenue-recovery',
    category: 'Projects',
    question: 'What was the Smart Revenue Recovery project about?',
    answer: "Smart Revenue Recovery was an automated system I designed at IPaySmart to improve on-time payments from tenants. I analyzed payment patterns, identified key intervention points, and built automated workflows that sent targeted reminders and incentives. The system improved on-time payments by 12% in three months and significantly reduced manual effort for property managers."
  }
];

const PredefinedQuestions: React.FC<PredefinedQuestionsProps> = ({ onQuestionSelect, isVisible }) => {
  if (!isVisible) return null;

  const categories = Array.from(new Set(predefinedQuestions.map(q => q.category)));

  return (
    <div className="mb-3 sm:mb-4 p-2.5 sm:p-4 bg-gray-50 rounded-lg border">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <MessageSquare size={12} className="sm:w-[14px] sm:h-[14px] text-blue-600" />
        <h3 className="text-xs sm:text-sm font-medium text-gray-700">Quick Questions</h3>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        {categories.map(category => (
          <div key={category}>
            <h4 className="text-xs font-medium text-gray-500 mb-1.5 sm:mb-2">{category}</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {predefinedQuestions
                .filter(q => q.category === category)
                .map(question => (
                  <button
                    key={question.id}
                    onClick={() => onQuestionSelect(question.question, question.answer)}
                    className="text-xs bg-white border border-gray-200 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors leading-tight"
                  >
                    {question.question}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredefinedQuestions;
