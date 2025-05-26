<template>
  <section id="features" class="pt-10 md:p-20 pb-10">
    <Panel class="pb-20" />
    <div class="relative -mt-2">
      <div class="max-w-[1280px] px-4 xl:px-20 mx-auto space-y-8">
        <Advokat />
        <Price />
      </div>
    </div>
  </section>
</template>
<script setup>
import Panel from "./Panel.vue";
import Advokat from "./Advokat.vue";
import Price from "./Price.vue";
</script>
