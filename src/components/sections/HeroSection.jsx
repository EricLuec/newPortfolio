'use client'
import { TypeAnimation } from 'react-type-animation';
import { Code2 } from '../icons/Code2';
import { Sparkles } from '../icons/Sparkles';
import { Zap } from '../icons/Zap';
import { portfolioConfig } from '@/config/portfolio';

export const HeroSection = () => {
  const { name, typeAnimationSequence, subtitle } = portfolioConfig;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={typeAnimationSequence || [`Hi, I am ${name}`, 2000, 'Hi, I am a Developer', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="text-xl md:text-2xl text-gray-300 font-light">
            {subtitle}
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-bounce">
            <Code2 className="w-8 h-8" />
          </div>
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-bounce" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Zap className="w-8 h-8" />
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};
