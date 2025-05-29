<template>
  <div
    class="w-full py-2.5 md:py-0 px-4 h-16 transition-all duration-300 ease-in-out sticky top-0 z-40 bg-white"
  >
    <div class="max-w-[1280px] mx-auto xl:px-40">
      <div class="flex justify-between gap-2 items-center">
        <!-- Logo and mobile menu trigger -->
        <div class="flex items-center gap-6">
          <button
            class="mr-2 md:hidden"
            aria-label="Toggle menu"
            @click="toggleMobileMenu"
          >
            <svg
              v-if="isMobileMenuOpen"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#1e40af"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <router-link to="/" class="flex-shrink-0">
            <img src="/image/topbar_logo.svg" width="152" alt="LawOnGo Logo" />
          </router-link>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden md:flex items-center gap-1">
            <div
              v-for="item in menuItems"
              :key="item.id"
              class="relative"
              @mouseenter="openDropdown(item.id)"
              @mouseleave="closeDropdown"
            >
              <router-link
                v-if="!item.hasDropdown"
                :to="item.path"
                class="flex items-center h-16 px-2 font-medium text-sm text-[#344052]"
              >
                {{ item.title }}
              </router-link>

              <a
                v-else
                href="#"
                class="flex items-center h-16 px-2 font-medium text-sm text-black"
              >
                {{ item.title }}
                <ChevronDown
                  :class="[
                    'chevron-rotate',
                    { 'rotate-chevron': openDropdownId === item.id },
                  ]"
                  class="ml-1"
                  :size="18"
                />
              </a>

              <transition name="dropdown-fade-slide">
                <div
                  v-if="item.hasDropdown && openDropdownId === item.id"
                  class="absolute top-2/3 left-0 w-80 bg-white rounded-lg shadow-lg p-2 z-50"
                >
                  <div class="grid gap-4">
                    <a
                      v-for="service in serviceItems"
                      :key="service.id"
                      :href="service.path"
                      class="flex gap-2 p-2 hover:bg-gray-50 rounded-lg items-center"
                    >
                      <img
                        :src="service.icon"
                        width="32"
                        height="32"
                        alt="Service Icon"
                      />
                      <div class="flex-1">
                        <div class="flex items-center">
                          <h3 class="font-semibold text-perqara-text text-sm">
                            {{ service.title }}
                          </h3>
                        </div>
                        <p class="text-perqara-gray text-xs mt-1">
                          {{ service.description }}
                        </p>
                      </div>
                      <div v-if="service.isNew" class="">
                        <NewBadge />
                      </div>
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </nav>
        </div>

        <!-- Login/Register Buttons -->
        <div class="flex items-center gap-3">
          <div class="flex rounded-lg w-full items-center">
            <button
            class="border-2 border-[#04A45E] bg-white text-[#04A45E]  py-1.5 px-3 rounded-full leading-5"
            @click="loginHandler"
          >
            Log On
          </button>
            
          </div>
          <button
              class="border-2  bg-[#04A45E] border-[#04A45E] text-white  py-1.5 px-3 rounded-full leading-5"
              @click="navigateToRegister"
            >
            Register
            </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobile && isMobileMenuOpen"
        class="absolute top-0 left-0 pt-16 w-full transition-all ease-in-out duration-500 z-[-1]"
      >
        <div
          class="px-4 bg-white border-t border-[#e5e7eb] flex flex-col rounded-b-xl shadow-lg overflow-y-auto max-h-[calc(100vh-64px)]"
        >
          <div v-for="item in menuItems" :key="item.id">
            <div
              v-if="item.hasDropdown"
              class="py-4 flex items-center justify-between"
              @click="toggleDropdown"
            >
              <p class="text-base font-semibold text-black">
                {{ item.title }}
              </p>
              <ChevronDown
                :class="['chevron-rotate', { 'rotate-180': isDropdownOpen }]"
                class="transition-transform"
                :size="20"
              />
            </div>

            <router-link
              v-else
              :to="item.path"
              class="block py-4 text-base font-semibold text-[#344052]"
            >
              {{ item.title }}
            </router-link>

            <div v-if="item.hasDropdown && isDropdownOpen" class="py-2">
              <a
                v-for="service in serviceItems"
                :key="service.id"
                href="#"
                class="flex items-center gap-2 p-3"
              >
                <div>
                  <img
                    :src="service.icon"
                    width="32"
                    height="32"
                    alt="Service Icon"
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <h3 class="font-semibold text-perqara-text text-sm">
                      {{ service.title }}
                    </h3>
                  </div>
                  <p class="text-perqara-gray text-xs mt-1">
                    {{ service.description }}
                  </p>
                </div>
                <div v-if="service.isNew">
                  <NewBadge />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import NewBadge from "./NewBadge.vue";
import ChevronDown from "./ChevronDown.vue";
const router = useRouter();
// Menu items data
const menuItems = [
  {
    id: 1,
    title: "Legal Services",
    path: "#",
    hasDropdown: true,
  },
  {
    id: 2,
    title: "About Us",
    path: "about",
  },
  //   {
  //     id: 3,
  //     title: "Artikel Hukum",
  //     path: "#",
  //   },
  {
    id: 3,
    title: "FAQ",
    path: "faq",
  },
];

// Service items data
const serviceItems = [
  {
    id: 1,
    title: "Konsultasi Hukum",
    description: "Konsultasi hukum langsung bersama advokat LawOnGo.",
    icon: "/image/navbar/icon-legal-consultation.png",
    path: "cari-advokat",
  },
//   {
//     id: 2,
//     title: "Pendirian Badan Usaha",
//     description:
//       "Layanan pendirian badan usaha (PT, CV, Yayasan), perubahan akta, dan waarmerking.",
//     icon: "/image/navbar/icon-company-establishment.svg",
//     isNew: true,
//     path: "pendirian-badan-usaha",
//   },
  {
    id: 2,
    title: "Pembuatan Dokumen",
    description:
      "Layanan pembuatan dokumen untuk individu/perusahaan seperti Perjanjian Jual Beli, Perjanjian Kerja, Surat Kuasa, dll.",
    icon: "/image/navbar/icon-document-creation.svg",
    isNew: true,
    path: "layanan-lainnya",
  },
  {
    id: 3,
    title: "Pendaftaran HAKI",
    description: "Layanan pendaftaran Merek, Paten, Hak Cipta, dll.",
    icon: "/image/navbar/icon-haki-registration.svg",
    isNew: true,
    path: "/pendirian-badan-usaha",
  },
  {
    id: 4,
    title: "Konsultasi Pajak",
    description: "Konsultasi pelaporan pajak perusahaan maupun individu.",
    icon: "/image/navbar/icon-tax-consultation.svg",
    isNew: true,
    path: "layanan-lainnya",
  },
];

// Reactive state
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);
const openDropdownId = ref(null);

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const openDropdown = (id) => {
  openDropdownId.value = id;
};

const closeDropdown = () => {
  openDropdownId.value = null;
};

// Check for mobile viewport
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const navigateToRegister = () => {
  router.push("/register");
};
const loginHandler = () => {
  emit("loginHandler");
};

const emit = defineEmits(["loginHandler"]);

// Lifecycle hooks
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
.dropdown-fade-slide-enter-active,
.dropdown-fade-slide-leave-active {
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-fade-slide-enter-from,
.dropdown-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
.dropdown-fade-slide-enter-to,
.dropdown-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.chevron-rotate {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-chevron {
  transform: rotate(180deg);
}
</style>
