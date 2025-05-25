<template>
  <div class="space-y-3 text-black text-center md:px-20">
    <h1 class="md:text-3xl text-2xl font-semibold">
      Why Legal Consultation at LawOnGo?
    </h1>
  </div>
  <div class="md:hidden mx-auto mb-16">
    <UCarousel v-slot="{ item }" loop dots :items="items">
      <img :src="item" class="rounded-lg mx-auto" />
    </UCarousel>
  </div>
  <div
    class="grid grid-rows-2 grid-cols-2 md:grid-cols-3 grid-flow-col md:gap-y-6 gap-4"
  >
    <div
      :class="
        cn(
          'bg-[#F5FBFD] bg-[url(/image/features/ai.png)] bg-bottom-left bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333] font-light md:text-base text-sm space-y-1',
          active === 'ai'
            ? 'bg-[#54F9AB] bg-[url(/image/features/ai-active.png)]'
            : ''
        )
      "
      @click="changeActive('ai')"
    >
      <h2 class="md:text-2xl text-base font-bold">AI intelligent match</h2>
      <p>
        Based on NLP and case library, quickly analyze user needs, automatically
        recommend the most suitable lawyer or mediation consultant, saving time
        and efficiency.
      </p>
    </div>
    <div
      :class="
        cn(
          'bg-[#F5FBFD] bg-[url(/image/features/multi.png)] bg-bottom-left bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333] font-light md:text-base text-sm space-y-1',
          active === 'multi'
            ? 'bg-[#54F9AB] bg-[url(/image/features/multi-active.png)]'
            : ''
        )
      "
      @click="changeActive('multi')"
    >
      <h2 class="md:text-2xl text-base font-bold">
        Multi dimensional value-added services
      </h2>
      <p>
        In addition to debt mediation, we also provide integrated legal support
        such as contract drafting/review, etc.
      </p>
    </div>
    <div class="hidden md:block row-span-2 my-auto">
      <UCarousel
        v-slot="{ item }"
        :loop="true"
        dots
        :autoplay="{ delay: 5000 }"
        :items="items"
        :ui="{
          dot: 'size-3 [&.bg-inverted]:bg-[#54F9AB]',
        }"
      >
        <img :src="item" width="200" class="rounded-lg mx-auto" />
      </UCarousel>
    </div>
    <div
      :class="
        cn(
          'bg-[#F5FBFD] bg-[url(/image/features/professional.png)] bg-bottom-left bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333] font-light md:text-base text-sm space-y-1',
          active === 'professional'
            ? 'bg-[#54F9AB] bg-[url(/image/features/professional-active.png)]'
            : ''
        )
      "
      @click="changeActive('professional')"
    >
      <h2 class="md:text-2xl text-base font-bold">
        Professional endorsement and case library
      </h2>
      <p>
        Gathering top law firms and senior mediation experts from across the
        country, providing users with reliable references and confidence.
      </p>
    </div>
    <div
      :class="
        cn(
          'bg-[#F5FBFD] bg-[url(/image/features/progress.png)] bg-bottom-left bg-size-[166px] bg-no-repeat rounded-[36px] p-6 text-[#333333] font-light md:text-base text-sm space-y-1',
          active === 'progress'
            ? 'bg-[#54F9AB] bg-[url(/image/features/progress-active.png)]'
            : ''
        )
      "
      @click="changeActive('progress')"
    >
      <h2 class="md:text-2xl text-base font-bold">Visual progress tracking</h2>
      <p>
        Provide real-time progress bars, chat records, and file archiving on the
        web/app end, allowing users to keep track of mediation and compliance
        status at any time.
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { cn } from "~/utils";
const items = [
  "/image/landing-page/phone-first.png",
  "/image/landing-page/phone-first.png",
  "/image/landing-page/phone-first.png",
  "/image/landing-page/phone-first.png",
];

const active = ref("professional");

const changeActive = (value) => {
  active.value = value;
};
</script>
