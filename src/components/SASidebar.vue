<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside class="bg-white w-[220px] min-h-screen flex flex-col flex-shrink-0 border-r border-[#E4E4E7]">
    <!-- Brand area -->
    <div class="px-4 pt-6 pb-4 flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
        张
      </div>
      <div>
        <div class="text-[16px] font-semibold leading-tight text-[#09090B]">张敏</div>
        <div class="text-[11px] text-[#A1A1AA] mt-0.5">Sales Training</div>
      </div>
    </div>

    <div class="mx-4 h-px bg-[#F4F4F5]" />

    <!-- Main nav -->
    <nav class="flex-1 px-3 mt-3">
      <router-link to="/"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors mb-0.5"
        :class="isActive('/') ? 'bg-[#18181B] text-white font-medium' : 'text-[#46464b] hover:bg-[#F4F4F5]'">
        首页
      </router-link>
      <router-link to="/roleplay/settings"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors mb-0.5"
        :class="isActive('/roleplay') ? 'bg-[#18181B] text-white font-medium' : 'text-[#46464b] hover:bg-[#F4F4F5]'">
        实战模拟
      </router-link>
      <router-link to="/teach"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors mb-0.5"
        :class="isActive('/teach') ? 'bg-[#18181B] text-white font-medium' : 'text-[#46464b] hover:bg-[#F4F4F5]'">
        教学模块
      </router-link>
      <router-link to="#"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        实时求助
      </router-link>

      <div class="mx-1 h-px bg-[#F4F4F5] my-3" />

      <div class="px-3 py-1 text-[10px] font-medium text-[#A1A1AA] tracking-[0.8px]">我的</div>

      <router-link to="#"
        class="flex items-center h-8 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        能力 Review
      </router-link>
      <router-link to="#"
        class="flex items-center h-8 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        推荐课程
      </router-link>
      <router-link to="#"
        class="flex items-center h-8 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        分析报告
      </router-link>
      <router-link to="#"
        class="flex items-center h-8 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        Saved Notes
      </router-link>
      <router-link to="#"
        class="flex items-center h-8 px-3 rounded-lg text-[13px] text-[#46464b] hover:bg-[#F4F4F5] transition-colors mb-0.5">
        做题
      </router-link>
    </nav>
  </aside>
</template>
