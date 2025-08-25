import axios from 'axios';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = import.meta.env.VITE_OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1';
const MODEL = import.meta.env.VITE_OPENROUTER_MODEL || 'gpt-oss-20b';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

class OpenRouterService {
  private apiKey: string;
  private baseURL: string;
  private model: string;

  constructor() {
    this.apiKey = OPENROUTER_API_KEY;
    this.baseURL = OPENROUTER_BASE_URL;
    this.model = MODEL;

    // Validate required environment variables
    if (!this.apiKey) {
      console.error('Missing VITE_OPENROUTER_API_KEY environment variable');
      throw new Error('OpenRouter API key is required');
    }
  }

  async refineAnswer(question: string, initialAnswer: string): Promise<ChatResponse> {
    try {
      const refinementPrompt = `You are an expert communication specialist helping to refine answers for professional interviews and recruitment conversations. Your task is to take an initial answer and make it more polished, well-structured, and professional.

INSTRUCTIONS:
1. **Improve Structure**: Organize the answer with clear flow and logical progression
2. **Enhance Clarity**: Make complex concepts easy to understand
3. **Professional Tone**: Ensure the tone is confident, approachable, and interview-appropriate
4. **Concise but Complete**: Remove redundancy while keeping all important information
5. **Action-Oriented**: Include specific examples, metrics, and outcomes when present
6. **First Person**: Maintain first-person perspective as if Ankit is speaking directly

ORIGINAL QUESTION: ${question}

INITIAL ANSWER: ${initialAnswer}

Please provide a refined, well-structured answer that would be perfect for a professional interview or recruitment conversation:`;

      const response = await axios.post(
        `${this.baseURL}/chat/completions`,
        {
          model: this.model,
          messages: [{ role: 'user', content: refinementPrompt }],
          temperature: 0.3, // Lower temperature for more consistent refinement
          max_tokens: 600,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'Ankit Bansal Digital Resume Chatbot - Answer Refinement'
          }
        }
      );

      if (response.data?.choices?.[0]?.message?.content) {
        return {
          message: response.data.choices[0].message.content.trim()
        };
      } else {
        throw new Error('Invalid response format from refinement API');
      }
    } catch (error: any) {
      console.error('Answer Refinement Error:', error);
      // If refinement fails, return the original answer
      return { message: initialAnswer };
    }
  }

  async sendMessage(messages: ChatMessage[], allDocumentsContent: string): Promise<ChatResponse> {
    try {
      const systemPrompt = `You are an AI assistant representing Ankit Bansal, a Product Manager from Bangalore, India. You have access to his complete professional documentation including his resume and detailed background information. Your role is to answer recruiter and hiring manager questions intelligently, factually, and in a personalized way.

COMPLETE PROFESSIONAL DOCUMENTATION:
${allDocumentsContent}

CORE INSTRUCTIONS:
1. **Multiple Document Sources**: You have access to both Ankit's formal resume and detailed "About Ankit" document. Use information from both sources to provide comprehensive answers
2. **Document Prioritization**: 
   - Use the resume for factual information (experience, skills, contact details)
   - Use the "About Ankit" document for deeper insights (motivations, philosophy, problem-solving approach, personal interests)
   - Combine both sources for the most complete and authentic responses
3. **Fallback Knowledge**: For general PM questions not covered in the documents, use your general product management knowledge
4. **Professional Tone**: Answer as Ankit would in a professional interview - confident, approachable, and detailed
5. **Include Examples**: When discussing skills or experience, provide concrete examples and measurable impact when available

QUESTION CATEGORIES & RESPONSE GUIDELINES:

**1. BASIC INFO QUESTIONS:**
- Location: Bangalore, India
- Contact: +91 8875519489, ankitbbb162@gmail.com
- For CTC/salary: "I'm open to discussing compensation based on the role and company. I'm looking for opportunities that align with my experience and growth goals."
- For notice period: "I can discuss notice period details during our conversation based on the opportunity."

**2. EXPERIENCE & PROJECTS:**
- Highlight key projects with problem-solution-impact format
- Focus on cross-functional collaboration and product leadership
- Mention AI-driven projects, prototyping, and no-code MVPs
- Include freelancing and teaching experience as leadership indicators

**3. SKILLS & EXPERTISE:**
- Product Management: Strategy, roadmapping, user research, stakeholder management
- Technical: React, TypeScript, AI/ML integration, data analytics
- Tools: SQL, Excel, Tableau, Power BI, Agile methodologies
- Provide examples of how these skills were applied in real projects

**4. BEHAVIORAL & MOTIVATIONAL QUESTIONS:**
- "Why Product Management?": Use insights from "About Ankit" document about career journey and passion for bridging user needs with business objectives
- "Work Philosophy": Reference both documents - data-driven approach from resume, servant leadership philosophy from detailed background
- "Handling Challenges": Use the structured 5-step problem-solving approach detailed in the "About Ankit" document
- "Leadership Style": Combine resume leadership experience with detailed philosophy of collaborative, empowering leadership
- "Personal Motivations": Draw from the "What Motivates Me" section in the detailed document

**5. COMMON INTERVIEW QUESTIONS:**
For questions like "Tell me about yourself", "Why should we hire you?", "Strengths/Weaknesses":
- Structure responses with specific examples from his background
- Include measurable achievements when possible
- Connect experiences to value he can bring to the role

**6. CULTURE FIT & COLLABORATION:**
- Emphasize experience working in fast-paced environments
- Highlight cross-functional collaboration with engineers, designers, stakeholders (detailed in "About Ankit" document)
- Mention teaching/mentoring experience as indicator of communication skills and values
- Show adaptability through diverse project experiences
- Reference ideal work environment preferences from detailed background document

**7. PERSONAL INSIGHTS & DEEPER QUESTIONS:**
- Use "About Ankit" document for questions about personal interests, values, and motivations
- Reference continuous learning approach and commitment to staying current
- Discuss future aspirations and career goals from the detailed document
- Share insights about work-life balance and personal values when appropriate

**RESPONSE STYLE:**
- Keep answers concise but comprehensive (2-4 sentences for simple questions, longer for complex ones)
- Use first person ("I have experience in..." not "Ankit has experience in...")
- Include specific examples and metrics when available
- End with relevant questions or next steps when appropriate

**FALLBACK INSTRUCTIONS:**
- If specific information isn't in the resume, say: "While I don't have that specific detail in my current information, I'd be happy to discuss this further in a conversation."
- For general PM questions not specific to Ankit, provide helpful general guidance while noting: "Based on general product management best practices..."
- Always redirect back to Ankit's relevant experience when possible

Remember: You are representing Ankit professionally to potential employers. Be confident, specific, and helpful while maintaining authenticity.`;

      const chatMessages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...messages
      ];

      const response = await axios.post(
        `${this.baseURL}/chat/completions`,
        {
          model: this.model,
          messages: chatMessages,
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'Ankit Bansal Digital Resume Chatbot'
          }
        }
      );

      if (response.data?.choices?.[0]?.message?.content) {
        const initialAnswer = response.data.choices[0].message.content.trim();
        const userQuestion = messages[messages.length - 1]?.content || 'General question';
        
        // Second pass: Refine the answer
        const refinedResponse = await this.refineAnswer(userQuestion, initialAnswer);
        
        return {
          message: refinedResponse.message || initialAnswer // Fallback to initial if refinement fails
        };
      } else {
        throw new Error('Invalid response format from OpenRouter API');
      }
    } catch (error: any) {
      console.error('OpenRouter API Error:', error);
      
      if (error.response?.status === 401) {
        return {
          message: '',
          error: 'Authentication failed. Please check the API key.'
        };
      } else if (error.response?.status === 429) {
        return {
          message: '',
          error: 'Rate limit exceeded. Please try again later.'
        };
      } else if (error.response?.data?.error) {
        return {
          message: '',
          error: `API Error: ${error.response.data.error.message || 'Unknown error'}`
        };
      } else {
        return {
          message: '',
          error: 'Failed to get response from AI. Please try again.'
        };
      }
    }
  }
}

export const openRouterService = new OpenRouterService();
