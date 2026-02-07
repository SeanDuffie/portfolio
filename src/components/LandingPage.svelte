<script lang="ts">
  import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Calendar } from 'lucide-svelte';
  import { projects } from '@/data/projects';
  import { landing } from '@/data/landing';

  // Logic is simplified in Svelte (no hooks needed for static data)
  const featuredProjects = projects.slice(0, 3);
</script>

<!-- Hero Section -->
<div class="min-h-screen">
  <section class="relative h-[90vh] flex items-center justify-center overflow-hidden font-serif">
    <div class="absolute inset-0 z-0">
      <img
        src={landing.heroPath}
        alt="Hero background"
        class="w-full h-full object-cover"
        fetchpriority="high"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent from-95% to-background"></div>
    </div>
    
    <div class="relative z-10 text-shadow-lg/90 text-center px-4 max-w-5xl mx-auto">
      <h1 class="text-4xl text-white mb-4 font-extrabold">
        {landing.heading}
      </h1>
      <p class="text-l text-shadow-lg/90 text-white/90 mb-8 font-bold whitespace-pre-line">
        {landing.subHeading}
      </p>
      
      <div class="flex gap-3 justify-center">
        <a 
          href="./projects" 
          class="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-11 px-8 bg-primary/20 hover:bg-primary/70 border-white/20 text-white/80 hover:text-white font-semibold shadow-lg"
        >
          View My Work
          <ArrowRight class="w-4 h-4 ml-2" />
        </a>

        <a 
          href={landing.resumePath} 
          target="_blank"
          class="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-11 px-8 bg-primary/20 hover:bg-primary/70 border-white/20 text-white/80 hover:text-white font-semibold shadow-lg"
        >
          Download CV
          <ArrowRight class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </section>

  <!-- About Me Section -->
  <section class="py-20 px-4 font-serif">
    <div class="max-w-4xl mx-auto">
      <h2 class="mb-4 text-center text-foreground text-xl font-extrabold">About Me</h2>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          {#each landing.aboutMe as paragraph}
            <p class="mb-4 text-muted-foreground">
              {paragraph}
            </p>
          {/each}
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-xl border shadow-sm p-6 text-center bg-secondary border-gray-600">
            <div class="text-3xl mb-2 text-foreground">5+</div>
            <div class="text-sm text-muted-foreground text-gray-300">Years Experience</div>
          </div>
          <div class="rounded-xl border shadow-sm p-6 text-center bg-secondary border-gray-600">
            <div class="text-3xl mb-2 text-foreground">50+</div>
            <div class="text-sm text-muted-foreground text-gray-300">Projects Completed</div>
          </div>
          <div class="rounded-xl border shadow-sm p-6 text-center bg-secondary border-gray-600">
            <div class="text-3xl mb-2 text-foreground">10+</div>
            <div class="text-sm text-muted-foreground text-gray-300">Happy Clients</div>
          </div>
          <div class="rounded-xl border shadow-sm p-6 text-center bg-secondary border-gray-600">
            <div class="text-3xl mb-2 text-foreground">3</div>
            <div class="text-sm text-muted-foreground text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section class="relative py-20 px-4 bg-secondary font-serif">
    <div class="absolute inset-0 bg-gradient-to-b from-background from-0% to-5% to-transparent"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-12">
        <h2 class="mb-4 text-primary text-center text-xl font-extrabold">Featured Projects</h2>
        <p class="text-muted-foreground">
          {landing.featuredIntro}
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        {#each featuredProjects as project (project.id)}
          <div class="rounded-xl border text-card-foreground shadow-sm transition-shadow bg-card/80 hover:bg-card hover:shadow-xl border-gray-700">
            <a href={`./projects/${project.id}`} class="block p-6 relative inset-0" aria-label={`View ${project.title}`}>
              <div class="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <ExternalLink class="w-6 h-6 text-foreground" />
              </div>
              <h3 class="mb-2 text-foreground font-semibold tracking-tight">{project.title}</h3>
              <p class="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <span class="px-2 py-1 bg-secondary text-primary rounded text-xs border border-transparent font-semibold transition-colors hover:text-foreground">
                    {tag}
                  </span>
                {/each}
              </div>
            </a>
          </div>
        {/each}
      </div>
      
      <div class="text-center">
        <a 
          href="./projects"
          class="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-background/60 hover:bg-background border border-background/80 text-foreground/80 hover:text-foreground font-semibold shadow-lg"
        >
          View All Projects
          <ArrowRight class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>

    <div class="absolute inset-0 z-0 bg-gradient-to-b from-transparent from-95% to-background"></div>
  </section>

  <!-- Contact Section -->
  <section class="py-16 px-4 transition-colors duration-200 font-serif">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="mb-4 text-center text-foreground text-xl font-extrabold">Let's Connect</h2>
      <p class="text-muted-foreground mb-8">
        {landing.contactIntro}
      </p>
      
      <div class="flex justify-center gap-4 mb-8">
        <a 
          href={`mailto:${landing.email}`} 
          target="_blank"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 gap-2 text-foreground/80 hover:text-foreground shadow-lg"
        >
          <Mail class="w-5 h-5" />
          Email
        </a>
        <a 
          href={landing.linkedin} 
          target="_blank"
          rel="preload"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 gap-2 text-foreground/80 hover:text-foreground shadow-lg"
        >
          <Linkedin class="w-5 h-5" />
          LinkedIn
        </a>
        <a 
          href={landing.github} 
          target="_blank"
          rel="preload"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 gap-2 text-foreground/80 hover:text-foreground shadow-lg"
        >
          <Github class="w-5 h-5" />
          GitHub
        </a>
      </div>
      
      <a 
        href="./schedule"
        class="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-foreground/80 hover:text-foreground font-semibold shadow-lg"
      >
        Schedule a Meeting
        <Calendar class="w-4 h-4 ml-2" />
      </a>
      
      <p class="mt-4 text-sm text-muted-foreground">
        &copy; {landing.currentYear} Sean Duffie. All rights reserved.
      </p>
    </div>
  </section>
</div>