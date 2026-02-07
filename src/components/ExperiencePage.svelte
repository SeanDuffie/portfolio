<script lang="ts">
  import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-svelte';
  import { experience } from '@/data/experience';
  import { education } from '@/data/education';
  import { certifications } from '@/data/certifications';

  // State for the Tabs
  let activeTab: 'experience' | 'education' | 'certifications' = 'experience';

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
</script>

<div class="min-h-screen py-24 px-4 font-serif">
  <div class="max-w-5xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold text-foreground">Experience & Education</h1>
      <p class="text-muted-foreground">
        My professional journey and academic background
      </p>
    </div>

    <div class="grid w-full max-w-md mx-auto grid-cols-3 mb-8 p-1 bg-muted rounded-lg text-muted-foreground">
      <button 
        on:click={() => activeTab = 'experience'}
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        {activeTab === 'experience' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50 hover:text-foreground'}"
      >
        Experience
      </button>
      <button 
        on:click={() => activeTab = 'education'}
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        {activeTab === 'education' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50 hover:text-foreground'}"
      >
        Education
      </button>
      <button 
        on:click={() => activeTab = 'certifications'}
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        {activeTab === 'certifications' ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50 hover:text-foreground'}"
      >
        Certifications
      </button>
    </div>

    {#if activeTab === 'experience'}
      <div class="space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {#each experience as exp (exp.id)}
          <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary border-gray-700">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Briefcase class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <div class="flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 class="mb-1 text-lg font-semibold text-foreground">{exp.positionName}</h3>
                    <div class="text-muted-foreground">{exp.companyName} • {exp.city}, {exp.state}</div>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar class="w-4 h-4" />
                    {months[exp.startMonth - 1]} {exp.startYear} - {exp.endYear === undefined ? 'Present' : months[exp.endMonth - 1] + ' ' + exp.endYear}
                  </div>
                </div>
                
                <p class="text-muted-foreground mb-4">{exp.description}</p>
                
                <div class="mb-4">
                  <div class="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300">Key Achievements:</div>
                  <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {#each exp.responsibilities as achievement}
                      <li>{achievement}</li>
                    {/each}
                  </ul>
                </div>
                
                <div class="flex flex-wrap gap-2">
                  {#each exp.skills as skill}
                    <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      {skill}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if activeTab === 'education'}
      <div class="space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {#each education as edu (edu.id)}
          <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary border-gray-700">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <GraduationCap class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              
              <div class="flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 class="mb-1 text-lg font-semibold text-foreground">{edu.degreeType} in {edu.degreeName}</h3>
                    <div class="text-muted-foreground">{edu.schoolName} • {edu.city}, {edu.state}</div>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar class="w-4 h-4" />
                    {months[edu.startMonth - 1]} {edu.startYear} - {edu.endYear === undefined ? 'Present' : months[edu.endMonth - 1] + ' ' + edu.endYear}
                  </div>
                </div>
                
                {#if edu.gpa !== undefined}
                  <div class="mb-4">
                    <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                {/if}
                
                <p class="text-muted-foreground mb-4">{edu.description}</p>
                
                <div>
                  <div class="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300">Notable Classes:</div>
                  <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                    {#each edu.notableClasses as highlight}
                      <li>{highlight}</li>
                    {/each}
                  </ul>

                  <div class="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300">Notable Projects:</div>
                  <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                    {#each edu.notableProjects as highlight}
                      <li>{highlight}</li>
                    {/each}
                  </ul>

                  <div class="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300">Skills:</div>
                  <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {#each edu.skills as highlight}
                      <li>{highlight}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if activeTab === 'certifications'}
      <div class="space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {#each certifications as cert (cert.id)}
          <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-secondary border-gray-700">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Award class="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div class="flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 class="mb-1 text-lg font-semibold text-foreground">{cert.credentialName}</h3>
                    <div class="text-muted-foreground">{cert.issuer}</div>
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {months[cert.Month - 1]} {cert.Year}
                  </div>
                </div>
                
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Credential ID: {cert.credentialId}
                </div>
                
                <p class="text-muted-foreground mb-4">{cert.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}

  </div>
</div>