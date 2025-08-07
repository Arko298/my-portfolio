import { sanityClient, urlFor } from '../../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../lib/sanity.types';
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';

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
    // <div className="container mx-auto px-4 py-16">
     
    //   <h4 className="pt-6 text-center font-header text-xl font-medium text-gray-300 sm:text-2xl lg:text-3xl">
    //     Here’s what I have done
    //   </h4>
    //   <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
    //     {projects.length === 0 ? (
    //       <p className="text-gray-300 text-center">No projects found.</p>
    //     ) : (
    //       projects.map((project) => (
    //         <div
    //           key={project._id}
    //           className="transform transition-all hover:scale-105 rounded-lg shadow-lg bg-gray-800 p-4"
    //         >
    //           {project.images?.[0] && (
    //             <Image
    //               src={urlFor(project.images[0]).width(400).height(300).url()}
    //               alt={project.images[0].alt || project.title}
    //               width={400}
    //               height={300}
    //               className="w-full rounded-md object-cover"
    //             />
    //           )}
    //           <h4 className="text-xl font-bold text-white mt-4">{project.title}</h4>
    //           <p className="text-gray-300 mt-2">{project.description}</p>
    //           <div className="mt-4 flex gap-4">
    //             {project.projectUrl && (
    //               <Link href={project.projectUrl} className="text-blue-400 hover:underline">
    //                 View Project
    //               </Link>
    //             )}
    //             {project.githubUrl && (
    //               <Link href={project.githubUrl} className="text-blue-400 hover:underline">
    //                 GitHub
    //               </Link>
    //             )}
    //           </div>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </div>
    <div className="min-h-screen py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <span className="text-sm text-blue-400 font-medium">Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here's what I've been working on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images?.[0] ? urlFor(project.images[0]).width(400).height(300).url() : project.images?.[0]?.src || '/placeholder.svg?height=300&width=40'}
                  alt={project.images?.[0]?.alt || project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.projectUrl && (
                    <Link
                      href={project.projectUrl}
                      className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                {/* {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full border border-gray-500/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )} */}

                {/* Date */}
                {project.startDate && (
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(project.startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                      {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}`}
                    </span>
                  </div>
                )}

                {/* View Project Link */}
                <div className="pt-2">
                  <Link
                    href={project.projectUrl || '#'}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Interested in working together?
          </h3>
          <p className="text-gray-300 max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Link href="/contact">
            <button className="group flex items-center gap-2 mx-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}