import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-200">
              Hackathon
            </a>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
            <a href="/privacy" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-200">
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-6">
          © {new Date().getFullYear()} Hackathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
