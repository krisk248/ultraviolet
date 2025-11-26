<template>
  <div class="space-y-6">
    <!-- Color Palette Display -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Primary Colors -->
      <div class="space-y-2">
        <h3 class="font-semibold text-dark-100">Primary Colors</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-primary-500 rounded-lg"></div>
            <span class="text-sm text-dark-400">Primary 500</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-primary-600 rounded-lg"></div>
            <span class="text-sm text-dark-400">Primary 600</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-primary-700 rounded-lg"></div>
            <span class="text-sm text-dark-400">Primary 700</span>
          </div>
        </div>
      </div>

      <!-- Accent Colors -->
      <div class="space-y-2">
        <h3 class="font-semibold text-dark-100">Accent Colors</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-accent-500 rounded-lg"></div>
            <span class="text-sm text-dark-400">Accent 500</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-accent-600 rounded-lg"></div>
            <span class="text-sm text-dark-400">Accent 600</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-accent-700 rounded-lg"></div>
            <span class="text-sm text-dark-400">Accent 700</span>
          </div>
        </div>
      </div>

      <!-- Dark Colors -->
      <div class="space-y-2">
        <h3 class="font-semibold text-dark-100">Dark Colors</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-dark-700 rounded-lg border border-dark-600"></div>
            <span class="text-sm text-dark-400">Dark 700</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-dark-800 rounded-lg border border-dark-700"></div>
            <span class="text-sm text-dark-400">Dark 800</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-dark-900 rounded-lg border border-dark-700"></div>
            <span class="text-sm text-dark-400">Dark 900</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Component Examples -->
    <div class="space-y-4">
      <h3 class="font-semibold text-dark-100">Component Examples</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Button Examples -->
        <div class="space-y-2">
          <p class="text-sm text-dark-400">Buttons</p>
          <div class="flex gap-2">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-accent">Accent</button>
          </div>
        </div>

        <!-- Badge Examples -->
        <div class="space-y-2">
          <p class="text-sm text-dark-400">Badges</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold">
              Primary Badge
            </span>
            <span class="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-semibold">
              Accent Badge
            </span>
            <span class="px-3 py-1 bg-dark-700 text-dark-300 rounded-full text-xs">
              Default Badge
            </span>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card">
          <h4 class="font-semibold mb-2">Card Title</h4>
          <p class="text-sm text-dark-400">This is a card component with default styling.</p>
        </div>

        <div class="card border-primary-500/50">
          <h4 class="font-semibold mb-2 text-primary-400">Primary Card</h4>
          <p class="text-sm text-dark-400">Card with primary border highlight.</p>
        </div>

        <div class="card border-accent-500/50">
          <h4 class="font-semibold mb-2 text-accent-400">Accent Card</h4>
          <p class="text-sm text-dark-400">Card with accent border highlight.</p>
        </div>
      </div>
    </div>

    <!-- Typography -->
    <div class="space-y-4 border-t border-dark-700 pt-6">
      <h3 class="font-semibold text-dark-100">Typography</h3>

      <div class="space-y-3">
        <div>
          <p class="text-xs text-dark-400 uppercase tracking-wide mb-1">Heading 1</p>
          <h1 class="text-4xl font-bold">The quick brown fox jumps</h1>
        </div>

        <div>
          <p class="text-xs text-dark-400 uppercase tracking-wide mb-1">Heading 3</p>
          <h3 class="text-2xl font-bold">The quick brown fox jumps</h3>
        </div>

        <div>
          <p class="text-xs text-dark-400 uppercase tracking-wide mb-1">Body Text</p>
          <p class="text-base">The quick brown fox jumps over the lazy dog. This is a sample text to show the typography styling.</p>
        </div>

        <div>
          <p class="text-xs text-dark-400 uppercase tracking-wide mb-1">Small Text</p>
          <p class="text-sm text-dark-400">The quick brown fox jumps over the lazy dog. This is smaller text.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component functionality if needed
</script>

<style scoped>
html.light {
  color-scheme: light;
}

html.light h3,
html.light h4 {
  @apply text-dark-900;
}

html.light .text-dark-400 {
  @apply text-dark-600;
}

html.light .text-dark-100 {
  @apply text-dark-900;
}
</style>
