<template>
    <div class="relative w-full py-2.5 px-4 h-16 transition-all duration-300 ease-in-out sticky top-0 z-40 bg-white">
        <div class="max-w-[1280px] mx-auto xl:px-40"> 
            <header class="relative z-50" :class="{ 'bg-white': isMobile }">
                <div class="border-b shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
                    <div class="flex justify-between items-center h-16">
                    <!-- Logo and mobile menu trigger -->
                    <div class="flex items-center">
                        <button
                        v-if="isMobile"
                        class="mr-2"
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
                        <NuxtImg
                            src="/image/logo-perqara.svg"
                            width="140"
                            alt="Perqara Logo"
                        />
                        </router-link>

                        <!-- Desktop Navigation Menu -->
                        <nav v-if="!isMobile" class="ml-10 flex space-x-8 text-black">
                        <div v-for="item in menuItems" :key="item.id" class="relative">
                            <router-link
                            v-if="!item.hasDropdown"
                            :to="item.path"
                            class="text-perqara-text hover:text-perqara-blue flex items-center h-16 px-2 font-medium text-sm"
                            >
                            {{ item.title }}
                            </router-link>

                            <a
                            v-else
                            href="#"
                            class="text-perqara-text hover:text-perqara-blue flex items-center h-16 px-2 font-medium text-sm"
                            @click.prevent="toggleDropdown"
                            >
                            {{ item.title }}
                            <ChevronDown
                                :class="{ 'rotate-180': isDropdownOpen }"
                                class="ml-1 transition-transform"
                                :size="18"
                            />
                            </a>

                            <!-- Desktop Dropdown Menu -->
                            <div
                            v-if="item.hasDropdown && isDropdownOpen"
                            class="absolute top-full left-0 w-96 bg-white rounded-lg shadow-lg p-4 z-50"
                            >
                            <div class="grid gap-4">
                                <a
                                v-for="service in serviceItems"
                                :key="service.id"
                                href="#"
                                class="flex space-x-4 p-2 hover:bg-gray-50 rounded-lg items-center"
                                >
                                <NuxtImg
                                    :src="service.icon"
                                    width="32"
                                    height="32"
                                    alt="Service Icon"
                                />
                                <div class="flex-1">
                                    <div class="flex items-center">
                                    <h3 class="font-semibold text-perqara-text">
                                        {{ service.title }}
                                    </h3>
                                    </div>
                                    <p class="text-perqara-gray text-sm mt-1">
                                    {{ service.description }}
                                    </p>
                                </div>
                                <div v-if="service.isNew" class="ml-2">
                                    <NewBadge />
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>

                    <!-- Login/Register Buttons -->
                    <div class="flex items-center gap-3">
                        <div
                        class="flex rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#46A7E2] w-full items-center"
                        >
                        <button
                            class="border-2 bg-white border-[#0a50a3] text-[#0a50a3] py-1.5 px-3 rounded-lg leading-5"
                        >
                            Daftar
                        </button>
                        </div>
                        <button
                        class="border-2 border-[#0a50a3] bg-[#0a50a3] text-white py-1.5 px-3 rounded-lg leading-5"
                        >
                        Masuk
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Mobile Menu -->
                <div
                v-if="isMobile && isMobileMenuOpen"
                class="fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
                >
                <div class="px-4 py-5">
                    <div v-for="item in menuItems" :key="item.id">
                    <div
                        v-if="item.hasDropdown"
                        class="py-4 flex items-center justify-between"
                        @click="toggleDropdown"
                    >
                        <p class="text-lg font-semibold text-perqara-text">
                        {{ item.title }}
                        </p>
                        <ChevronDown
                        :class="{ 'rotate-180': isDropdownOpen }"
                        class="transition-transform"
                        :size="20"
                        />
                    </div>

                    <router-link
                        v-else
                        :to="item.path"
                        class="block py-4 text-lg font-semibold text-perqara-text"
                    >
                        {{ item.title }}
                    </router-link>

                    <div v-if="item.hasDropdown && isDropdownOpen" class="py-2">
                        <a
                        v-for="service in serviceItems"
                        :key="service.id"
                        href="#"
                        class="flex items-center p-3"
                        >
                        <div class="mr-3 mt-1">
                            <NuxtImg
                            :src="service.icon"
                            width="32"
                            height="32"
                            alt="Service Icon"
                            />
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center">
                            <h3 class="font-semibold text-perqara-text">
                                {{ service.title }}
                            </h3>
                            </div>
                            <p class="text-perqara-gray text-sm mt-1">
                            {{ service.description }}
                            </p>
                        </div>
                        <div v-if="service.isNew" class="ml-2">
                            <NewBadge />
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NewBadge from "./NewBadge.vue";
import ChevronDown from "./ChevronDown.vue";

// Menu items data
const menuItems = [
  {
    id: 1,
    title: "Layanan Hukum",
    path: "#",
    hasDropdown: true,
  },
  {
    id: 2,
    title: "Tentang Kami",
    path: "#",
  },
  {
    id: 3,
    title: "Artikel Hukum",
    path: "#",
  },
  {
    id: 4,
    title: "FAQ",
    path: "#",
  },
];

// Service items data
const serviceItems = [
  {
    id: 1,
    title: "Konsultasi Hukum",
    description: "Konsultasi hukum langsung bersama advokat Perqara.",
    icon: "/image/navbar/icon-legal-consultation.svg",
  },
  {
    id: 2,
    title: "Pendirian Badan Usaha",
    description:
      "Layanan pendirian badan usaha (PT, CV, Yayasan), perubahan akta, dan waarmerking.",
    icon: "/image/navbar/icon-company-establishment.svg",
    isNew: true,
  },
  {
    id: 3,
    title: "Pembuatan Dokumen",
    description:
      "Layanan pembuatan dokumen untuk individu/perusahaan seperti Perjanjian Jual Beli, Perjanjian Kerja, Surat Kuasa, dll.",
    icon: "/image/navbar/icon-document-creation.svg",
    isNew: true,
  },
  {
    id: 4,
    title: "Pendaftaran HAKI",
    description: "Layanan pendaftaran Merek, Paten, Hak Cipta, dll.",
    icon: "/image/navbar/icon-haki-registration.svg",
    isNew: true,
  },
  {
    id: 5,
    title: "Konsultasi Pajak",
    description: "Konsultasi pelaporan pajak perusahaan maupun individu.",
    icon: "/image/navbar/icon-tax-consultation.svg",
    isNew: true,
  },
];

// Reactive state
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Check for mobile viewport
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Lifecycle hooks
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
