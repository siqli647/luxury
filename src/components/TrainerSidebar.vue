<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path) {
  if (path === '/trainer') return route.path === '/trainer'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside class="bg-[#18181b] w-56 min-h-screen flex flex-col flex-shrink-0">
    <!-- Brand area -->
    <div class="px-5 pt-7 pb-5 flex items-center gap-3">
      <div class="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <span class="text-black font-bold text-sm">培</span>
      </div>
      <div>
        <div class="text-sm font-semibold text-white leading-tight">培锐</div>
        <div class="text-xs text-[#A1A1AA] mt-0.5">Trainer</div>
      </div>
    </div>

    <div class="mx-4 h-px bg-[#3a3a41] mb-3" />

    <!-- Nav -->
    <nav class="flex-1 px-3 space-y-0.5">
      <router-link to="/trainer"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors"
        :class="isActive('/trainer') ? 'bg-[#2d2d2d] text-white font-medium' : 'text-[#94a3b8] hover:bg-[#2d2d2d] hover:text-white'">
        管理首页
      </router-link>
      <router-link to="/trainer/materials"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors"
        :class="isActive('/trainer/materials') ? 'bg-[#2d2d2d] text-white font-medium' : 'text-[#94a3b8] hover:bg-[#2d2d2d] hover:text-white'">
        教材管理
      </router-link>
      <router-link to="/trainer/analytics"
        class="flex items-center h-9 px-3 rounded-lg text-[13px] transition-colors"
        :class="isActive('/trainer/analytics') ? 'bg-[#2d2d2d] text-white font-medium' : 'text-[#94a3b8] hover:bg-[#2d2d2d] hover:text-white'">
        培训分析
      </router-link>
    </nav>

    <div class="px-4 pb-4">
      <router-link to="/"
        class="flex items-center gap-1.5 text-[12px] text-[#64748b] hover:text-[#94a3b8] transition-colors">
        <span>←</span>
        <span>切换至学员端</span>
      </router-link>
    </div>
  </aside>
</template>
