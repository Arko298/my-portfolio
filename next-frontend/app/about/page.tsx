import { sanityClient, urlFor } from '@/lib/sanity';
import AnimatedText from '@/components/AnimatedText';
import LetsConnect from '@/components/LetsConnect';
import SkillBar from '@/components/SkillBar';
import { About, Skill } from '@/lib/sanity.types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function AboutMe() {
  const about = await sanityClient.fetch<About>(
    `*[_type == "about"][0] {
      _id,
      title,
      bio,
      profileImage
    }`
  );

  const skills = await sanityClient.fetch<Skill[]>(
    `*[_type == "skill"] | order(name asc) {
      _id,
      name,
      proficiency,
      icon
    }`
  );

  if (!about) {
    return <div>Error: Failed to load about data</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-header text-4xl font-semibold uppercase text-white sm:text-5xl lg:text-6xl">
            {about.title || 'Who am I?'}
          </h1>
          <div className="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            I am Sayantan Choudhury, a passionate <AnimatedText />
          </div>
          <div className="pt-6 font-body leading-relaxed text-white prose">
            <PortableText value={about.bio || []} />
          </div>
          <div className="mt-8">
            <LetsConnect />
          </div>
          {about.profileImage && (
            <Image
              src={urlFor(about.profileImage).width(200).height(200).url()}
              alt={about.profileImage.alt || 'Profile'}
              width={200}
              height={200}
              className="rounded-full mt-6 mx-auto lg:mx-0"
            />
          )}
        </div>
        <div className="w-full lg:w-2/5 pl-0 lg:pl-12">
          {skills.length === 0 ? (
            <p className="text-gray-300">No skills found.</p>
          ) : (
            skills.map((skill) => (
              <SkillBar
                key={skill._id}
                skill={skill.name}
                percentage={skill.proficiency * 20} // Convert 1-5 scale to 0-100%
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}