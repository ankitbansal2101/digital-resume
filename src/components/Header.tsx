import React from 'react';
import { Mail, Phone, MapPin, Download, Linkedin, Github } from 'lucide-react';

const Header = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Ankit Bansal
          </h1>
          <h2 className="text-xl text-blue-600 mb-4 font-medium">
            Product Manager
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bangalore</span>
            </div>
            <a href="tel:+918875519489" className="flex items-center gap-2 hover:text-blue-600">
              <Phone size={16} />
              <span>+91 8875519489</span>
            </a>
            <a href="mailto:ankitbbb162@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={16} />
              <span>ankitbbb162@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/ankitbansal2101"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              Github
            </a>
            <a
              href="https://in.linkedin.com/in/ankitbansal2101"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;