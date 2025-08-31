import React from 'react';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';

const Header = () => {

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Ankit Bansal
          </h1>
          <h2 className="text-lg sm:text-xl text-blue-600 mb-2 font-medium">
            Strategic AI Product Manager
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
            4 years building B2B SaaS products • AI productization & automation • Generative AI & RAG applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="sm:w-4 sm:h-4" />
              <span>Bangalore</span>
            </div>
            <a href="tel:+918875519489" className="flex items-center gap-2 hover:text-blue-600">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">+91 8875519489</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="mailto:ankitbbb162@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">ankitbbb162@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="/Ankit_Bansal_PM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/ankitbansal2101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-none"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Github</span>
              </a>
              <a
                href="https://in.linkedin.com/in/ankitbansal2101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-none"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;