import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Podcast | Global Security Voices',
    description: 'Welcome to Global Security Voices, where we explore the latest stories, trends, and insights from the world of cybersecurity.',
    image: '../src/assets/images/gsv.png',
    link: '#'
  },
  {
    title: 'Podcast: Global Perspective Stories',
    description: 'We are entering a challenging period in our society, and as humans, it’s crucial to cultivate core values that unite us.',
    image: '../src/assets/images/gps.png',
    link: '#'
  },
  {
    title: 'YouTube',
    description: 'Empower. Secure. Evolve. | Connecting with the world and building a secure future',
    image: '../src/assets/images/YouTube.png',
    link: 'https://www.youtube.com/@emanuelepicariello'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}