"use client";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import LetsConnect from "../components/letsConnect/LetsConnect";

import SkillBar from "../components/SkillBar/SkillBar";

export default function About(){
  const Roleskills = [
    { skill: 'MERN STACK', percentage: 90 },
    { skill: 'DevOps', percentage: 30 },
    { skill: 'Cloud', percentage: 20 },
    { skill: 'Ruby on Rails', percentage: 1 },
  ];
  const Languageskills=[
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'Python', percentage: 80 },
    { skill: 'Java', percentage: 60 },
    { skill: 'C++', percentage: 60 },
    { skill: 'C', percentage: 90 },
    { skill: 'TypeScript', percentage: 60 },
    { skill: 'React', percentage: 80 },
    { skill: 'AWS', percentage: 60 },

    
    

  ]
  return (
    <>
    <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
      <h2
        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl  text-white"
      >
        Who am I?
      </h2>
      <h4
        className="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
      >
        I am Sayantan Choudhury, a {/**animated text */} 
          passionate <AnimatedText/>
        
      </h4>
      <p className="pt-6 font-body leading-relaxed text-white">
        I am a skilled developer with a strong background in MERN stack and Devops. I have
        experience in building scalable and efficient applications using MERN stack and
        have a strong understanding of Devops tools and practices.

      </p>
      <div>
        <LetsConnect/>
      </div>
        {Roleskills.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
        <div className="text-white">
          <h4 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            {/**Satistics like open sourse contribution completed projects etc.*/}
          </h4>
        </div>
      
  
      </div>
      <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0 text-orange-400">
      {Languageskills.map((skill, index) => (
          <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
    {/**Skills display only frontend,backend,Devops,Mobile dev and language skills to know more to be directed to any other page*/}

    
  </>
  )
}