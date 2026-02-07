<script lang="ts">
  import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Circle } from 'lucide-svelte';
  import type { Project } from '@/data/projects';

  // In Svelte, we export props directly
  export let project: Project;
</script>

<div class="min-h-screen">
  <div class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <a 
        href={"/projects"} 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2 text-foreground"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Projects
      </a>
    </div>
  </div>

  <section class="relative h-[50vh] overflow-hidden">
    <img
      src={project.heroImage}
      alt={project.title}
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    
    <div class="absolute bottom-0 left-0 right-0 p-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-2">{project.title}</h1>
        <p class="text-xl text-white/90">{project.subtitle}</p>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 py-12">
    
    <div class="grid lg:grid-cols-3 gap-8 mb-12">
      <div class="lg:col-span-2">
        <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary dark:border-gray-600">
          <h2 class="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p class="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
          
          <div class="flex flex-wrap gap-3">
            {#if project.externalLink}
              <a 
                href={project.externalLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
              >
                <ExternalLink class="w-4 h-4" />
                View Live Demo
              </a>
            {/if}
            
            {#if project.githubLink}
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2"
              >
                <Github class="w-4 h-4" />
                View Source Code
              </a>
            {/if}
          </div>
        </div>
      </div>

      <div>
        <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary dark:border-gray-600 h-full">
          <h3 class="mb-4 text-xl font-semibold">Team</h3>
          <div class="space-y-3">
            {#each project.team as member}
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                {member}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>

    {#if project.youtubeVideoId}
      <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 mb-12 bg-secondary dark:border-gray-600">
        <h2 class="mb-4 text-2xl font-semibold">Demo Video</h2>
        <div class="aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
            title="Project Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    {/if}

    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 mb-12 bg-secondary dark:border-gray-600">
      <h2 class="mb-6 text-2xl font-semibold">Technologies & Tools</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each project.technologies as tech}
          <div>
            <h3 class="mb-3 font-medium text-foreground">{tech.category}</h3>
            <div class="flex flex-wrap gap-2">
              {#each tech.tools as tool}
                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-background/50">
                  {tool}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 mb-12 bg-secondary dark:border-gray-600">
      <h2 class="mb-6 text-2xl font-semibold">Project Timeline</h2>
      <div class="space-y-6">
        {#each project.timeline as item, index}
          <div class="flex gap-4">
            <div class="flex flex-col items-center">
              {#if item.status === 'completed'}
                <CheckCircle class="w-6 h-6 text-green-600 flex-shrink-0" />
              {:else}
                <Circle class="w-6 h-6 text-gray-400 flex-shrink-0" />
              {/if}
              
              {#if index < project.timeline.length - 1}
                <div class="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
              {/if}
            </div>
            
            <div class="flex-1 pb-8">
              <div class="flex items-center gap-3 mb-1">
                <h3 class="font-semibold text-lg">{item.phase}</h3>
                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                  {item.status === 'completed' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}">
                  {item.status}
                </span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar class="w-4 h-4" />
                {item.date}
              </div>
              <p class="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary dark:border-gray-600">
        <h2 class="mb-4 text-2xl font-semibold">Key Challenges</h2>
        <ul class="space-y-3">
          {#each project.challenges as challenge}
            <li class="flex gap-3 text-muted-foreground">
              <span class="text-red-500 mt-1">•</span>
              <span>{challenge}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary dark:border-gray-600">
        <h2 class="mb-4 text-2xl font-semibold">Outcomes & Impact</h2>
        <ul class="space-y-3">
          {#each project.outcomes as outcome}
            <li class="flex gap-3 text-muted-foreground">
              <CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>