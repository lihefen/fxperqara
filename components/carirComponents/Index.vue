<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-31 14:46:30
 * @LastEditors: hean
 * @LastEditTime: 2025-06-01 10:42:36
-->
<template>
  <section>
   <div class="bg-white pb-8">
        <Work></Work>
        <Ours></Ours>
        <Solusi />
    </div>
    <Careers></Careers>
    
  </section>
</template>

<script setup>
import Solusi from "./Solusi.vue";
import Careers from "./Careers.vue";
import Ours from "./Ours.vue"
import Work from "./Work.vue"

</script>
