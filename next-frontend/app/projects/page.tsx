import { sanityClient, urlFor } from '../../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../lib/sanity.types';

export default async function Projects() {
  let projects: Project[] = [];
  try {
    projects = await sanityClient.fetch<Project[]>(
      `*[_type == "project"] | order(startDate desc) {
        _id,
        title,
        slug,
        description,
        images,
        projectUrl,
        githubUrl,
        startDate,
        endDate
      }`
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return <div className="text-center text-red-400">Failed to load projects. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* <h3 className="text-center font-header text-3xl font-semibold uppercase text-white sm:text-4xl lg:text-5xl">
        Check out my Portfolio
      </h3> */}
      <h4 className="pt-6 text-center font-header text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl">
        Here’s what I have done
      </h4>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {projects.length === 0 ? (
          <p className="text-gray-300 text-center">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="transform transition-all hover:scale-105 rounded-lg shadow-lg bg-gray-800 p-4"
            >
              {project.images?.[0] && (
                <Image
                  src={urlFor(project.images[0]).width(400).height(300).url()}
                  alt={project.images[0].alt || project.title}
                  width={400}
                  height={300}
                  className="w-full rounded-md object-cover"
                />
              )}
              <h4 className="text-xl font-bold text-white mt-4">{project.title}</h4>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                {project.projectUrl && (
                  <Link href={project.projectUrl} className="text-blue-400 hover:underline">
                    View Project
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} className="text-blue-400 hover:underline">
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}