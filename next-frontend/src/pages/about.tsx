import AnimatedText from "@/components/AnimatedText";
import LetsConnect from "@/components/LetsConnect";
import SkillBar from "@/components/SkillBar";

const About: React.FC = () => {
  const Roleskills = [
    { skill: "MERN STACK", percentage: 90 },
    { skill: "DevOps", percentage: 30 },
    { skill: "Cloud", percentage: 20 },
    { skill: "Ruby on Rails", percentage: 1 },
  ];
  const Languageskills = [
    { skill: "JavaScript", percentage: 80 },
    { skill: "Python", percentage: 80 },
    { skill: "Java", percentage: 60 },
    { skill: "C++", percentage: 60 },
    { skill: "C", percentage: 90 },
    { skill: "TypeScript", percentage: 60 },
    { skill: "React", percentage: 80 },
    { skill: "AWS", percentage: 60 },
  ];
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl text-white">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            I am Sayantan Choudhury, a passionate <AnimatedText />
          </h4>
          <div className="pt-6 font-body leading-relaxed text-white">
            I am a skilled developer with a strong background in MERN stack and
            Devops. I have experience in building scalable and efficient
            applications using MERN stack and have a strong understanding of
            Devops tools and practices.
          </div>
          <div className="mt-8">
            <LetsConnect />
          </div>
          <div className="mt-10">
            {Roleskills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5 pl-0 lg:pl-12 text-orange-400">
          {Languageskills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;