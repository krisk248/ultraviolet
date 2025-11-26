<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-sm font-medium text-dark-300 mb-2">
        Name
      </label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        placeholder="Your name"
        required
        class="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-sm font-medium text-dark-300 mb-2">
        Email
      </label>
      <input
        v-model="form.email"
        type="email"
        id="email"
        placeholder="your@email.com"
        required
        class="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">
        {{ errors.email }}
      </p>
    </div>

    <!-- Subject Field -->
    <div>
      <label for="subject" class="block text-sm font-medium text-dark-300 mb-2">
        Subject
      </label>
      <input
        v-model="form.subject"
        type="text"
        id="subject"
        placeholder="What's this about?"
        required
        class="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
      />
    </div>

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-medium text-dark-300 mb-2">
        Message
      </label>
      <textarea
        v-model="form.message"
        id="message"
        rows="5"
        placeholder="Your message..."
        required
        class="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
      ></textarea>
    </div>

    <!-- Success Message -->
    <div v-if="success" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
      <p class="font-medium">Thank you for your message!</p>
      <p class="text-sm">I'll get back to you as soon as possible.</p>
    </div>

    <!-- Error Message -->
    <div v-if="formError" class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
      <p>{{ formError }}</p>
    </div>

    <!-- Submit Button -->
    <div class="flex gap-3 pt-2">
      <button
        type="submit"
        :disabled="isLoading"
        class="flex-1 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Sending...' : 'Send Message' }}
      </button>
      <button
        v-if="success"
        type="button"
        @click="resetForm"
        class="btn btn-secondary"
      >
        Send Another
      </button>
    </div>

    <!-- Privacy Note -->
    <p class="text-xs text-dark-500 text-center">
      I respect your privacy. Your information is secure and won't be shared.
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive({
  email: '',
});

const isLoading = ref(false);
const success = ref(false);
const formError = ref('');

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleSubmit = async () => {
  // Reset error states
  errors.email = '';
  formError.value = '';
  success.value = false;

  // Validate email
  if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address';
    return;
  }

  isLoading.value = true;

  try {
    // For MVP, just log and show success
    console.log('Form data:', form);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    success.value = true;
    setTimeout(() => {
      resetForm();
    }, 3000);
  } catch (error) {
    formError.value = 'Failed to send message. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  success.value = false;
};
</script>

<style scoped>
input, textarea {
  color-scheme: dark;
}

html.light input,
html.light textarea {
  @apply bg-dark-100 border-dark-200 text-dark-900 placeholder-dark-400;
}

html.light input:focus,
html.light textarea:focus {
  @apply border-primary-500;
}

html.light label {
  @apply text-dark-700;
}
</style>
