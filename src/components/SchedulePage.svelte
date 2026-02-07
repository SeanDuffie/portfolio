<script lang="ts">
  import { Calendar, Clock, Video, Mail, User, CheckCircle } from 'lucide-svelte';
  
  // State
  let selectedDate = "";
  let selectedTime = "";
  let meetingType = "";
  
  let formData = {
    name: '',
    email: '',
    message: '',
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
  ];

  const meetingTypes = [
    { value: 'consultation', label: 'Initial Consultation (30 min)', icon: User },
    { value: 'project-discussion', label: 'Project Discussion (60 min)', icon: Video },
    { value: 'follow-up', label: 'Follow-up Meeting (30 min)', icon: Clock },
  ];

  function handleSubmit(e: SubmitEvent) {
    // In Svelte, we can just use the bound variables directly
    console.log({
      date: selectedDate,
      time: selectedTime,
      meetingType,
      ...formData,
    });
    alert('Meeting request submitted! I will send you a confirmation email shortly.');
  }
</script>

<div class="min-h-screen py-24 px-4">
  <div class="max-w-6xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold text-foreground">Schedule a Meeting</h1>
      <p class="text-muted-foreground">
        Choose a time that works best for you, and let's discuss your project
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <div class="space-y-6">
        
        <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <h3 class="mb-4 flex items-center gap-2 font-semibold">
            <Calendar class="w-5 h-5" />
            Select a Date
          </h3>
          <input 
            type="date" 
            bind:value={selectedDate}
            min={new Date().toISOString().split('T')[0]}
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <h3 class="mb-4 flex items-center gap-2 font-semibold">
            <Clock class="w-5 h-5" />
            Available Time Slots
          </h3>
          <div class="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-2">
            {#each timeSlots as time}
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 py-2
                {selectedTime === time 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'}"
                on:click={() => selectedTime = time}
              >
                {time}
              </button>
            {/each}
          </div>
        </div>
      </div>

      <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="mb-6 font-semibold text-lg">Meeting Details</h3>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div class="space-y-2">
            <label for="meeting-type" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Meeting Type
            </label>
            <select
              id="meeting-type"
              bind:value={meetingType}
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled selected>Select meeting type</option>
              {#each meetingTypes as type}
                <option value={type.value}>{type.label}</option>
              {/each}
            </select>
          </div>

          <div class="space-y-2">
            <label for="name" class="text-sm font-medium leading-none">Your Name</label>
            <div class="relative">
              <User class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="name"
                type="text"
                bind:value={formData.name}
                placeholder="John Doe"
                required
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium leading-none">Email Address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="email"
                type="email"
                bind:value={formData.email}
                placeholder="john@example.com"
                required
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-medium leading-none">Additional Message (Optional)</label>
            <textarea
              id="message"
              bind:value={formData.message}
              placeholder="Tell me briefly about what you'd like to discuss..."
              rows="4"
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>

          {#if selectedDate && selectedTime && meetingType}
            <div class="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:bg-blue-900/20 dark:border-blue-800">
              <div class="text-sm">
                <div class="mb-2 font-semibold text-foreground">Selected Schedule:</div>
                <div class="space-y-1 text-gray-700 dark:text-gray-300">
                  <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4" />
                    {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4" />
                    {selectedTime}
                  </div>
                  <div class="flex items-center gap-2">
                    <Video class="w-4 h-4" />
                    {meetingTypes.find(t => t.value === meetingType)?.label}
                  </div>
                </div>
              </div>
            </div>
          {/if}

          <button
            type="submit"
            disabled={!selectedDate || !selectedTime || !meetingType}
            class="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  </div>
</div>