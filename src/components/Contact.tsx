import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:ankitbbb162@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <span className="text-gray-600">ankitbbb162@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+918875519489"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <span className="text-gray-600">+91 8875519489</span>
                </div>
              </a>

              <a
                href="https://wa.me/918875519489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <span className="text-gray-600">Chat on WhatsApp</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <span className="text-gray-600">Bangalore, India</span>
                </div>
              </div>

              <a
                href="https://in.linkedin.com/in/ankitbansal2101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">LinkedIn</h4>
                  <span className="text-gray-600">Connect with me</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
