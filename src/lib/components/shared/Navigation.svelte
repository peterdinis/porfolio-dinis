<script lang="ts">
    import { scale, slide } from 'svelte/transition';
    import { cubicOut} from 'svelte/easing';

    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    let activeSection = 'Home';
    let isMenuOpen = false;

    function handleNavClick(item: string) {
      activeSection = item;
      isMenuOpen = false;
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
    
    let isDarkMode = false;
    function toggleDarkMode() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  </script>

<nav class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold text-primary">Peter Dinis</span>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          {#each navItems as item}
            <button 
              class="px-3 py-2 text-sm font-medium transition-colors duration-200 relative"
              class:text-primary={activeSection === item}
              class:text-gray-600={activeSection !== item}
              class:dark:text-white={activeSection === item}
              class:dark:text-gray-300={activeSection !== item}
              on:click={() => handleNavClick(item)}
            >
              {item}
              {#if activeSection === item}
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-primary" 
                  transition:scale={{ duration: 300, easing: cubicOut }}
                ></span>
              {/if}
            </button>
          {/each}

          <button 
            on:click={toggleDarkMode}
            class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {#if isDarkMode}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            {/if}
          </button>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <!-- Dark mode toggle for mobile -->
          <button 
            on:click={toggleDarkMode}
            class="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {#if isDarkMode}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            {/if}
          </button>
          
          <button 
            on:click={toggleMenu}
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {#if isMenuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              {/if}
            </svg>
          </button>
        </div>
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden" transition:slide={{ duration: 300 }}>
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {#each navItems as item}
            <button 
              class="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              class:bg-primary={activeSection === item}
              class:text-white={activeSection === item}
              class:text-gray-600={activeSection !== item}
              class:dark:text-gray-300={activeSection !== item}
              on:click={() => handleNavClick(item)}
            >
              {item}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
