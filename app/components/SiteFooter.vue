<script lang="ts" setup>
// Fetch limited services data for preview
const { data: servicesPreview } = await useAsyncData(
  "services-preview",
  async () => {
    const data = await queryCollection("services").first()
    return data?.services.slice(0, 4)
  },
)
</script>

<template>
  <footer
    class="backdrop-blur bg-gradient-to-br from-white/30 via-white/90 to-white/30 dark:bg-black/5 dark:from-black/5 dark:via-black/15 dark:to-black/5 shadow-md shadow-black/20 hover:shadow-xl shadow shadow-black/10 transition-all duration-300"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 flex items-center justify-center">
              <UIcon name="i-ph-code" />
            </div>
            <span>tayyab</span>
          </div>
          <p class="mb-6 max-w-md">
            Passionate about building smart digital products that solve real problems. From full-stack apps to AI-powered systems, I deliver technology that drives efficiency and growth.
          </p>
          <div class="flex items-center gap-4">
            <UButton
              to="https://github.com/tayyabtahir71"
              external
              aria-label="GitHub Profile"
              variant="ghost"
              class="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UIcon name="i-ph-github-logo" />
            </UButton>
            <UButton
              to="https://linkedin.com/in/tayyabtahir-nextay"
              external
              aria-label="LinkedIn Profile"
              variant="ghost"
              class="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UIcon name="i-ph-linkedin-logo" />
            </UButton>
            <UButton
              to="https://twitter.com/tayyabtahir71"
              external
              aria-label="Twitter Profile"
              variant="ghost"
              class="transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <UIcon name="i-ph-twitter-logo" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/"> Home </ULink>
            </li>
            <li>
              <ULink to="/about"> About </ULink>
            </li>
            <li>
              <ULink to="/contact"> Contact </ULink>
            </li>
            <!-- <li>
              <ULink to="/blog"> Blog </ULink>
            </li> -->
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="mb-4">Services</h3>
          
          <ul  class="space-y-3">
            <li v-for="service in servicesPreview"
          :key="service.title">
              <ULink to="/services">{{ service.title }}</ULink>
            </li>
            
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>
            © {{ new Date().getFullYear() }} Tayyab Tahir. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <ULink to="/contact?faqs=1"> FAQs </ULink>
            <ULink to="/privacy"> Privacy Policy </ULink>
            <ULink to="/terms"> Terms of Service </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
