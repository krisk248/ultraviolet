<template>
  <button
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    class="p-2 rounded-lg transition-all duration-200 bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-dark-100 active:scale-95"
    :class="{ 'light-mode': !isDark }"
  >
    <!-- Moon Icon (show in light mode) -->
    <svg
      v-if="!isDark"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>

    <!-- Sun Icon (show in dark mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(true);

onMounted(() => {
  // Check initial theme
  const htmlElement = document.documentElement;
  isDark.value = !htmlElement.classList.contains('light');
});

const toggleTheme = () => {
  const htmlElement = document.documentElement;
  const newTheme = isDark.value ? 'light' : 'dark';

  if (newTheme === 'light') {
    htmlElement.classList.add('light');
  } else {
    htmlElement.classList.remove('light');
  }

  isDark.value = !isDark.value;

  // Dispatch custom event for other components
  document.dispatchEvent(
    new CustomEvent('theme-changed', { detail: { theme: newTheme } })
  );
};
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

html.light button {
  @apply bg-dark-100 hover:bg-dark-200 text-dark-900 hover:text-dark-700;
}
</style>
