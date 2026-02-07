<script lang="ts">
  import { 
    ArrowLeft, ExternalLink, Github, Layers, 
    Cpu, Cog, Code, AlertTriangle, CheckCircle2, 
    Zap, Monitor, Wrench 
  } from 'lucide-svelte';
  import type { Project } from '@/data/projects';

  // 1. EXTENDED INTERFACE
  // We extend your existing type to support the new "Systems" fields.
  // You will need to add these fields to your data objects in 'projects.ts'.
  interface SystemProject extends Project {
    elevatorPitch?: string; // A 1-sentence technical summary
    systemSpecs?: {
      mech?: string; // e.g., "3D Printed PETG / 1.2kg Payload"
      elec?: string; // e.g., "Custom FOC Drivers / 24V Bus"
      soft?: string; // e.g., "C++ Firmware / ROS2 Node"
    };
    architectureImage?: string; // URL to block diagram
    // Deep dive content
    deepDives?: {
      mechanical?: { description: string; points: string[]; image?: string };
      electronics?: { description: string; points: string[]; image?: string };
      software?: { description: string; points: string[]; image?: string };
    };
    // The "Integration Matrix" content
    integrationNotes?: {
      problem: string;
      solution: string;
      disciplines: string[]; // e.g. ["Mech", "Elec"]
    }[];
  }

  export let project: SystemProject;

  // Tabs Configuration
  type Tab = 'mechanical' | 'electronics' | 'software';
  let activeTab: Tab = 'mechanical';

  function setTab(tab: Tab) {
    activeTab = tab;
  }
</script>

<div class="min-h-screen bg-background">
  <div class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <a 
        href="/projects" 
        class="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2 text-foreground transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Projects
      </a>
    </div>
  </div>

  <section class="relative h-[60vh] overflow-hidden">
    <img
      src={project.heroImage}
      alt={project.title}
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
    
    <div class="absolute bottom-0 left-0 right-0 p-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-extrabold text-foreground mb-4">{project.title}</h1>
        <p class="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light">
          {project.elevatorPitch || project.subtitle}
        </p>
        
        <div class="flex flex-wrap gap-4 mt-8">
          {#if project.externalLink}
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 gap-2 shadow-lg">
              <ExternalLink class="w-4 h-4" />
              Live Demo
            </a>
          {/if}
          {#if project.githubLink}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background/50 hover:bg-accent/50 backdrop-blur-sm h-11 px-8 gap-2">
              <Github class="w-4 h-4" />
              Source Code
            </a>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 py-12 space-y-24">
    
    <section class="grid lg:grid-cols-2 gap-12 items-start">
      <div class="space-y-6">
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <Layers class="w-6 h-6 text-primary" />
          System Specifications
        </h2>
        <div class="grid gap-4">
          <div class="flex items-start gap-4 p-4 rounded-xl border bg-card/50">
            <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Cog class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold">Mechanical</h3>
              <p class="text-muted-foreground">{project.systemSpecs?.mech || "Standard Enclosure"}</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl border bg-card/50">
            <div class="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
              <Zap class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold">Electronics</h3>
              <p class="text-muted-foreground">{project.systemSpecs?.elec || "Standard PCB"}</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl border bg-card/50">
            <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <Code class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-semibold">Software</h3>
              <p class="text-muted-foreground">{project.systemSpecs?.soft || "Standard Firmware"}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <Monitor class="w-6 h-6 text-primary" />
          System Architecture
        </h2>
        <div class="rounded-xl border bg-card overflow-hidden aspect-video flex items-center justify-center bg-secondary/20">
          {#if project.architectureImage}
            <img 
              src={project.architectureImage} 
              alt="System Architecture Diagram" 
              class="w-full h-full object-contain p-4"
            />
          {:else}
            <div class="text-center text-muted-foreground p-8">
              <Layers class="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>System Block Diagram Placeholder</p>
              <p class="text-sm opacity-70">(Add architectureImage to project data)</p>
            </div>
          {/if}
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-8 text-center">Technical Deep Dive</h2>
      
      <div class="flex justify-center mb-8">
        <div class="inline-flex rounded-lg border bg-muted p-1">
          <button 
            on:click={() => setTab('mechanical')}
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
            {activeTab === 'mechanical' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/50'}"
          >
            <Cog class="w-4 h-4 mr-2" /> Mechanical
          </button>
          <button 
            on:click={() => setTab('electronics')}
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            {activeTab === 'electronics' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/50'}"
          >
            <Cpu class="w-4 h-4 mr-2" /> Electronics
          </button>
          <button 
            on:click={() => setTab('software')}
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            {activeTab === 'software' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/50'}"
          >
            <Code class="w-4 h-4 mr-2" /> Software
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center bg-card border rounded-2xl p-8 shadow-sm min-h-[400px]">
        
        <div class="space-y-6">
          <h3 class="text-2xl font-bold capitalize">{activeTab} Design</h3>
          
          {#if project.deepDives && project.deepDives[activeTab]}
            <p class="text-lg text-muted-foreground leading-relaxed">
              {project.deepDives[activeTab].description}
            </p>
            <ul class="space-y-3">
              {#each project.deepDives[activeTab].points as point}
                <li class="flex items-start gap-3">
                  <CheckCircle2 class="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              {/each}
            </ul>
          {:else}
            <div class="p-4 border border-dashed rounded-lg bg-muted/50">
              <p class="text-muted-foreground">Detailed {activeTab} data not found. Add a <code>deepDives</code> object to your project data.</p>
            </div>
            <p class="text-muted-foreground">{project.description}</p>
          {/if}
        </div>

        <div class="relative h-[350px] rounded-xl overflow-hidden bg-muted/50 border flex items-center justify-center group">
          {#if project.deepDives && project.deepDives[activeTab]?.image}
            <img 
              src={project.deepDives[activeTab].image}
              alt={`${activeTab} detail`}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          {:else}
             <div class="text-center text-muted-foreground">
               <Wrench class="w-12 h-12 mx-auto mb-4 opacity-50" />
               <p>No Detail Image</p>
             </div>
          {/if}
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <AlertTriangle class="w-8 h-8 text-orange-500" />
        Integration Challenges
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#if project.integrationNotes}
          {#each project.integrationNotes as note}
            <div class="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex gap-2 mb-4">
                {#each note.disciplines as disc}
                  <span class="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                    {disc}
                  </span>
                {/each}
              </div>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-red-500/90 mb-1 flex items-center gap-2">
                    <AlertTriangle class="w-4 h-4" /> The Conflict
                  </h4>
                  <p class="text-sm text-muted-foreground">{note.problem}</p>
                </div>
                <div class="w-full h-px bg-border"></div>
                <div>
                  <h4 class="font-semibold text-green-600 mb-1 flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4" /> The Integration
                  </h4>
                  <p class="text-sm text-foreground">{note.solution}</p>
                </div>
              </div>
            </div>
          {/each}
        {:else}
          <div class="col-span-full text-center p-12 border border-dashed rounded-xl bg-muted/30">
            <p class="text-muted-foreground">
              Add <code>integrationNotes</code> to your project data to show how you solved cross-disciplinary problems (e.g. Mech vs Elec).
            </p>
          </div>
        {/if}
      </div>
    </section>

    <section class="grid lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-2xl font-bold">Project Demo</h2>
        {#if project.youtubeVideoId}
          <div class="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
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
        {:else}
          <div class="aspect-video bg-muted rounded-xl flex items-center justify-center border">
            <p class="text-muted-foreground">No video demo available</p>
          </div>
        {/if}
      </div>

      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Timeline</h2>
        <div class="rounded-xl border bg-card p-6 space-y-6">
          {#each project.timeline as item, index}
            <div class="flex gap-4 relative">
              {#if index < project.timeline.length - 1}
                <div class="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-border"></div>
              {/if}
              
              <div class="relative z-10">
                {#if item.status === 'completed'}
                  <div class="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <CheckCircle2 class="w-4 h-4" />
                  </div>
                {:else}
                  <div class="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                {/if}
              </div>
              
              <div class="flex-1 pb-2">
                <div class="flex justify-between items-start">
                  <h4 class="font-medium text-sm">{item.phase}</h4>
                  <span class="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p class="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

  </div>
</div>