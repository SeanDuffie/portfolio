<script lang="ts">
  import { ExternalLink, Github, Search, Filter } from 'lucide-svelte';
  import { projects, categories } from '@/data/projects';

  let searchQuery = '';
  let selectedCategory = 'all';

  // Svelte "Reactive Statement" ($:) 
  // Automatically re-runs this filter whenever searchQuery or selectedCategory changes.
  $: filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    
    const matchesSearch = 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query));
    
    // Safety check: ensure technologies exist before filtering
    const matchesCategory = selectedCategory === 'all' ||
      (project.technologies?.some(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase())) ?? false);
    
    return matchesSearch && matchesCategory;
  });

  function formatCategory(cat: string) {
    return cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ');
  }
</script>

<div class="min-h-screen py-24 px-4 font-serif">
  <div class="max-w-7xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold text-foreground">Projects</h1>
      <p class="text-muted-foreground">
        A collection of my work spanning web applications, mobile apps, and open-source contributions
      </p>
    </div>

    <div class="mb-8">
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <div class="relative flex-1">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            bind:value={searchQuery}
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      
      <div class="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter class="w-4 h-4 text-muted-foreground flex-shrink-0" />
        
        {#each categories as category}
          <button
            on:click={() => selectedCategory = category}
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3
            {selectedCategory === category 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'}"
          >
            {formatCategory(category)}
          </button>
        {/each}
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProjects as project (project.id)}
        <div class="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-xl dark:border-gray-700 flex flex-col">
          
          <a href={`/projects/${project.id}`} class="block overflow-hidden aspect-video bg-gray-200 dark:bg-gray-700">
            <img
              src={project.heroImage}
              alt={project.title}
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          
          <div class="p-6 flex flex-col flex-1">
            <a href={`/projects/${project.id}`} class="block mb-2">
              <h3 class="text-lg font-semibold text-foreground">{project.title}</h3>
            </a>
            
            <p class="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
              {project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tags.slice(0, 4) as tag}
                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {tag}
                </span>
              {/each}
              {#if project.tags.length > 4}
                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  +{project.tags.length - 4}
                </span>
              {/if}
            </div>

            <div class="flex gap-2 mt-auto pt-2">
              {#if project.githubLink}
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-2"
                >
                  <Github class="w-4 h-4" />
                  Code
                </a>
              {:else}
                <button disabled class="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background h-9 px-3 gap-2 opacity-50 cursor-not-allowed">
                  <Github class="w-4 h-4" />
                  No Code
                </button>
              {/if}

              {#if project.externalLink}
                <a 
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 gap-2"
                >
                  <ExternalLink class="w-4 h-4" />
                  Demo
                </a>
              {:else}
                <button disabled class="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground h-9 px-3 gap-2 opacity-50 cursor-not-allowed">
                  <ExternalLink class="w-4 h-4" />
                  No Demo
                </button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-500">No projects found matching your criteria.</p>
      </div>
    {/if}
  </div>
</div>