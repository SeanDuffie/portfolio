// import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { landing } from '@/data/landing';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden font-serif">
        <div className="absolute inset-0 z-0">
          <img
            src={landing.heroPath}
            alt="Hero background"
            className="w-full h-full object-cover"
            // style={{
            //   transform: `translateY(${Math.min(scrollY*0.5, (typeof window !== 'undefined' ? window.innerHeight : 1000) * .9)}px)`,
            //   transition: 'transform 0.1s ease-out',
            //   scrollBehavior: 'smooth',
            // }}
            fetchPriority='high'
          />
          {/** Sets the gradient overlay over the hero image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-95% to-background" />
        </div>
        
        <div className="relative z-10 text-shadow-lg/90 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl text-white mb-4 font-extrabold">
            {landing.heading}
          </h1>
          <p className="text-l text-shadow-lg/90 text-white/90 mb-8 font-bold whitespace-pre-line">
            {landing.subHeading}
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary/20 hover:bg-primary/70 border-white/20 text-l text-white/80 hover:text-white text-shadow-lg/90 font-semibold"
              asChild
            >
              <a href='./projects'>
                View My Work
                <ArrowRight className="w-4 h-4 stroke-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary/20 hover:bg-primary/70 border-white/20 text-l text-white/80 hover:text-white text-shadow-lg/90 font-semibold"
              asChild
            >
              <a target='_blank' href={landing.resumePath}>
                Download CV
                <ArrowRight className="w-4 h-4 stroke-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 font-serif">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-center text-foreground text-xl font-extrabold">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {landing.aboutMe.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-secondary border-gray-600">
                <div className="text-3xl mb-2 text-foreground">5+</div>
                <div className="text-sm text-muted-foreground text-gray-300">Years Experience</div>
              </Card>
              <Card className="p-6 text-center bg-secondary border-gray-600">
                <div className="text-3xl mb-2 text-foreground">50+</div>
                <div className="text-sm text-muted-foreground text-gray-300">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center bg-secondary border-gray-600">
                <div className="text-3xl mb-2 text-foreground">10+</div>
                <div className="text-sm text-muted-foreground text-gray-300">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center bg-secondary border-gray-600">
                <div className="text-3xl mb-2 text-foreground">3</div>
                <div className="text-sm text-muted-foreground text-gray-300">Certifications</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 bg-secondary font-serif">
        {/* Top Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background from-0% to-5% to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary text-center text-xl font-extrabold">Featured Projects</h2>
            <p className="text-muted-foreground">
              {landing.featuredIntro}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="transition-shadow bg-card/80 hover:bg-card hover:shadow-xl border-gray-700">
                <a href={`./projects/${project.id}`} className='p-6 relative inset-0' aria-label={`View ${project.title}`}>
                  {/* FIXME: Update the top left image to be a logo or profile picture */}
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-primary rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className='bg-background/60 hover:bg-background border-background/80 text-l text-white/80 hover:text-white text-shadow-lg/90 font-semibold'
              asChild
            >
              <a href="./projects">
                View All Projects
                <ArrowRight className="w-4 h-4 stroke-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent from-95% to-background" />
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 transition-colors duration-200 font-serif">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-center text-foreground text-xl font-extrabold">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            {landing.contactIntro}
          </p>
          
          <div className="flex justify-center gap-4 mb-8 text-white/80 hover:text-white text-shadow-lg/90 font-semibold">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a target='_blank' href={`mailto:${landing.email}`}>
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a rel="preload" target='_blank' href={landing.linkedin}>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a rel="preload" target='_blank' href={landing.github}>
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="lg"
            className='text-white/80 hover:text-white text-shadow-lg/90 font-semibold'
            asChild
          >
            <a href="./schedule">
              Schedule a Meeting
              <Calendar className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            &copy; {landing.currentYear} Sean Duffie. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}