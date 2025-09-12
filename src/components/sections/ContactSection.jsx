'use client'
import {SocialLink} from "../ui/SocialLink";
import { Linkedin } from "../icons/Linkedin";
import { Github } from "../icons/Github";

export const ContactSection = ({ 
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  githubUrl = "https://github.com/yourusername"
}) => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Let's Connect
      </h2>
      
      <p className="text-xl text-gray-300 mb-12">
        Ready to create something amazing together? Let's talk!
      </p>
      
      <div className="flex justify-center space-x-8">
        <SocialLink
          href={linkedinUrl}
          icon={Linkedin}
          bgGradient="from-blue-600 to-blue-700"
          hoverGradient="from-blue-500 to-blue-600"
          shadowColor="blue"
        />
        
        <SocialLink
          href={githubUrl}
          icon={Github}
          bgGradient="from-gray-700 to-gray-800"
          hoverGradient="from-gray-600 to-gray-700"
          shadowColor="gray"
        />
      </div>
    </div>
  </section>
);
