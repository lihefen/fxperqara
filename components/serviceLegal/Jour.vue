<template>
  <div class="relative z-10 max-w-[1280px] mx-auto py-12 px-10 xl:px-42">
    <div class="flex justify-center">
      <h1 class="title-adron text-[32px] font-bold text-[#333333] w-fit">
        Our Development Jour
      </h1>
    </div>
    <div class="relative mt-14 hidden md:block">
      <div
        className="absolute top-4 left-1/2 transform -translate-x-px h-full w-0.5 bg-green-400"
      />
      <div v-for="(item, index) in timelineData" :key="item.year">
        <div
          class="flex justify-center gap-4 max-w-[880px] w-full mx-auto items-start"
          :class="{ 'flex-row-reverse': index % 2 === 1 }"
        >
          <div
            class="mt-0 flex-1"
            :class="index % 2 === 1 ? 'text-left' : 'text-right'"
          >
            <span
              class="font-dm-sans font-bold md:text-[32px] text-[#005F38] antialiased"
            >
              {{ item.year }}
            </span>
            <img
              alt="story-2020"
              class="w-[280px] md:w-[410px] ml-auto"
              src="/image/about-us/story-2020.svg"
            />
          </div>
          <div class="flex flex-col">
            <div
              class="relative w-5 h-5 rounded-full flex items-center justify-center mt-1 bg-[#1FF48F]"
            >
              <div
                class="w-2 h-2 bg-white rounded-full flex items-center justify-center"
              />
            </div>
            <!-- <div
              class="ml-1.5 mt-0.5 md:ml-3 border-l-2 border-dashed border-lightgrey-5 h-full"
            /> -->
          </div>
          <div class="flex-1 flex flex-col text-left">
            <div class="bg-gray-50 rounded-lg p-6 shadow-md">
              <span
                className="highlight-mark  text-xl font-bold text-green-600 mb-4"
              >
                {{ item.title }}
              </span>
              <p className="text-black mb-4 leading-relaxed">
                {{ item.description }}
              </p>
              <div className="space-y-2">
                <p
                  v-for="(detail, detailIndex) in item.details"
                  :key="detailIndex"
                  className="text-black text-sm leading-relaxed"
                >
                  {{ detail }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const timelineData = ref([
  {
    year: "2023",
    title: 'Initial Concept: Responding to the "Silent Need"',
    description:
      "As Indonesia's fintech industry rapidly develops, an increasing number of individual users and small merchants are falling into the quagmire of multiple lending and debt collection. We have observed that a significant number of users, when confronted with debt, are left in a state of confusion, fear, and a lack of resources or viable solutions.",
    details: [
      'Thus, we conceived an initial idea to create a low-threshold, digital, and trustworthy legal platform that ensures "everyone has the right to negotiate."',
    ],
    image: "/image/features/story-placeholder.png",
  },
  {
    year: "2024",
    title: "The Launch of the LawOnGo Platform",
    description:
      "The LawOnGo project team was officially established in Jakarta.",
    details: [
      "The prototype of the first-generation AI legal Q&A engine was developed.",
      "Preliminary cooperation mechanisms were established with more than 10 local law firms.",
      "The debt mediation model process was designed, including:",
      "• User profile collection",
      "• Case pre-assessment",
      "• Generation of standardized mediation agreements",
      "• Verification of the successful payment mechanism",
      "Our services began to be open for testing to the first batch of real users.",
    ],
    image: "/image/features/story-placeholder.png",
  },
  {
    year: "2025",
    title: 'Completing the Integrated Loop of "Consultation-Mediation-Signing"',
    description:
      "The official version of App 1.0 was launched, supporting AI consultation + manual mediation + electronic signing of contracts.",
    details: [
      "Over 30 law firms, creditor institutions, and mediation experts in Indonesia were partnered with to form a professional network.",
      "The total number of user consultations exceeded 10,000.",
      "Diversified service packages were introduced.",
      'The platform began to be recognized by the media and the industry as an "innovative representative in the debt mediation field."',
    ],
    image: "/image/features/story-placeholder.png",
  },
]);
</script>
<style scoped>
.title-adron {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 105%;
    height: 18px;
    background: #4bf5a4;
    opacity: 0.3;
    z-index: -1;
  }
}
.highlight-mark {
  background-image: linear-gradient(#1ff48f, #1ff48f);

  background-repeat: no-repeat;

  background-size: 100% 0.32em;

  background-position: 0 0.8em;

  /*
    关键属性：确保当内联元素 (span) 跨越多行时，
    背景 (我们的荧光笔标记) 在每一行都被正确地“克隆”和渲染。
  */
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone; /* 兼容 Safari 和旧版 Chrome/Edge */
}
</style>
