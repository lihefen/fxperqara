<template>
  <NuxtLayout>
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "LawOnGo",
});
</script>
