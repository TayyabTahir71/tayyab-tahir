<script lang="ts" setup>
// Fetch limited services data for preview
const { data: servicesPreview } = await useAsyncData(
  "services-preview",
  async () => {
    const data = await queryCollection("services").first()
    return data?.services
  },
)
</script>

<template>
  <div>
    <div class="space-y-16">
      <!-- Services Preview Section -->
      <div class="text-center space-y-6">
        <h2>How I Can Help You</h2>

        <p class="max-w-3xl mx-auto">
          I combine full-stack expertise with AI innovation to build solutions that drive growth and efficiency.
        </p>
      </div>

      <!-- Service Categories -->
      <div class="grid gap-8 lg:grid-cols-3">
        <UCard
          v-for="service in servicesPreview"
          :key="service.title"
          class="text-center h-full"
        >
          <div class="space-y-6">
            <!-- Icon & Title -->
            <div class="space-y-4">
              <div class="w-16 h-16 flex items-center justify-center mx-auto">
                <UIcon :name="service.icon" size="3em" class="text-info" />
              </div>

              <div class="space-y-3">
                <h3 class="font-semibold">
                  {{ service.title }}
                </h3>
                <p class="text-neutral-600 dark:text-neutral-300">
                  {{ service.description }}
                </p>
              </div>
            </div>

            <!-- Key Highlight -->
            <UBadge size="xl" variant="outline">{{ service.suitable }}</UBadge>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
