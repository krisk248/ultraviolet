<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold">Filter by Category</h2>
      <button
        v-if="activeFilter"
        @click="clearFilter"
        class="text-sm text-accent-600 hover:text-accent-700 transition-colors"
      >
        Clear Filter
      </button>
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        @click="activeFilter = null"
        :class="[
          'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
          !activeFilter
            ? 'bg-accent-600 text-white'
            : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
        ]"
      >
        All Projects
      </button>

      <button
        v-for="category in categories"
        :key="category.id"
        @click="activeFilter = category.id"
        :class="[
          'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2',
          activeFilter === category.id
            ? 'bg-accent-600 text-white'
            : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
        ]"
      >
        <span>{{ category.icon }}</span>
        <span>{{ category.label }}</span>
      </button>
    </div>

    <!-- Filter Stats -->
    <p class="text-sm text-dark-400 pt-2">
      {{ filteredCount }} project{{ filteredCount !== 1 ? 's' : '' }} found
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeFilter = ref<string | null>(null);

const categories = [
  { id: 'security', label: 'Security', icon: '🛡️' },
  { id: '3d-printing', label: '3D Printing', icon: '🧊' },
  { id: 'electronics', label: 'Electronics', icon: '⚡' },
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'ai', label: 'AI', icon: '🤖' },
];

const filteredCount = computed(() => {
  if (!activeFilter.value) return 0;
  // This would normally filter actual projects, but for now it's a placeholder
  return 0;
});

const clearFilter = () => {
  activeFilter.value = null;
};

// Watch for filter changes and update URL/emit events
const handleFilterChange = () => {
  // Dispatch custom event for parent component
  window.dispatchEvent(
    new CustomEvent('filter-changed', {
      detail: { category: activeFilter.value }
    })
  );
};
</script>

<style scoped>
:root {
  color-scheme: light dark;
}

button {
  @apply transition-all duration-200;
}

html.light button {
  @apply bg-dark-100 text-dark-900;
}

html.light button:hover:not(.active) {
  @apply bg-dark-200;
}

html.light button.active {
  @apply bg-accent-600 text-white;
}
</style>
