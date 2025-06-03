'use client';
import AnimatedText from '../../components/AnimatedText';
import LetsConnect from '../../components/LetsConnect';
import SkillBar from '../../components/SkillBar';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

// Hardcoded about data
const about = {
  title: 'Who am I?',
  bio: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'I am a passionate developer with a love for building web applications.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  profileImage: {
    src: '/profile.jpg', // Place your image in the public folder
    alt: 'Profile',
  },
};

// Hardcoded skills data
const skills = [
  { _id: '1', name: 'JavaScript', proficiency: 5 },
  { _id: '2', name: 'React', proficiency: 4 },
  { _id: '3', name: 'TypeScript', proficiency: 4 },
  { _id: '4', name: 'CSS', proficiency: 4 },
];

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-header text-4xl font-semibold uppercase text-white sm:text-5xl lg:text-6xl">
            {about.title}
          </h1>
          <div className="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            I am Sayantan Choudhury, a passionate <AnimatedText />
          </div>
          <div className="pt-6 font-body leading-relaxed text-white prose">
            <PortableText value={about.bio} />
          </div>
          <div className="mt-8">
            <LetsConnect />
          </div>
          <Image
            src={about.profileImage.src}
            alt={about.profileImage.alt}
            width={200}
            height={200}
            className="rounded-full mt-6 mx-auto lg:mx-0"
          />
        </div>
        <div className="w-full lg:w-2/5 pl-0 lg:pl-12">
          {skills.length === 0 ? (
            <p className="text-gray-300">No skills found.</p>
          ) : (
            skills.map((skill) => (
              <SkillBar
                key={skill._id}
                skill={skill.name}
                percentage={skill.proficiency * 20}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;