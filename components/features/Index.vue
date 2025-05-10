<template>
  <section id="features" class="pt-10 md:pt-20 pb-10 font-lexend antialiased">
    <Panel />
    <img src="/image/landing-page/bg-wave.svg" alt="bg-wave" class="w-full" />
    <div class="relative bg-[linear-gradient(180deg,#2B72C6_0%,#FFFFFF_100%)] pt-60 lg:pt-32 xl:pt-20 -mt-2">
      <div class="max-w-[1280px] px-4 xl:px-40 mx-auto space-y-8">
        <Advokat />
        <Harga />
        <CountCard />
        <Konsultasi />
      </div>
    </div>
  </section>
</template>
<script setup>
import Panel from "./Panel.vue";
import Advokat from "./Advokat.vue";
import Harga from "./Harga.vue";
import CountCard from "./CountCard.vue";
import Konsultasi from "./Konsultasi.vue";
</script>
