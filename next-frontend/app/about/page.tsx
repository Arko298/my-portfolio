'use client';
import AnimatedText from '../../components/AnimatedText';
import LetsConnect from '../../components/LetsConnect';
import SkillBar from '../../components/SkillBar';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const about = {
  title: 'Who am I?',
  bio: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'I am a passionate developer with a love for building web applications that make a difference. With expertise in modern technologies and a keen eye for user experience, I create digital solutions that are both functional and beautiful.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  profileImage: {
    src: '/?height=300&width=300',
    alt: 'Profile',
  },
};

const skills = [
  { _id: '1', name: 'JavaScript', proficiency: 5 },
  { _id: '2', name: 'React', proficiency: 4 },
  { _id: '3', name: 'TypeScript', proficiency: 4 },
  { _id: '4', name: 'Node.js', proficiency: 4 },
  { _id: '5', name: 'Python', proficiency: 4 },
  { _id: '6', name: 'Docker', proficiency: 3 },
];

const AboutMe = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                <span className="text-sm text-blue-400 font-medium">About Me</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {about.title}
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-medium text-gray-300">
                I am Sayantan Choudhury, a passionate <AnimatedText />
              </div>
            </div>

            <div className="prose prose-lg text-gray-300 leading-relaxed">
              <PortableText value={about.bio} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <LetsConnect />
              <button className="px-6 py-3 border border-gray-600 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:border-gray-500">
                Download CV
              </button>
            </div>

            {/* Profile Image for mobile */}
            <div className="lg:hidden flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30" />
                <Image
                  src={about.profileImage.src || "/placeholder.svg"}
                  alt={about.profileImage.alt}
                  width={250}
                  height={250}
                  className="relative rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Image */}
          <div className="space-y-12">
            {/* Profile Image for desktop */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
                <Image
                  src={about.profileImage.src || "/placeholder.svg"}
                  alt={about.profileImage.alt}
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">
                Technical Skills
              </h3>
              
              {skills.length === 0 ? (
                <p className="text-gray-300">No skills found.</p>
              ) : (
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <SkillBar
                      key={skill._id}
                      skill={skill.name}
                      percentage={skill.proficiency * 20}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
