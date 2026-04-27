<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  Archive,
  BarChart3,
  BookOpen,
  ChevronsLeft,
  ChevronsRight,
  Clapperboard,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Target,
  Users,
} from 'lucide-vue-next'

const route = useRoute()
const collapsed = ref(false)

const navItems = [
  { to: '/trainer', label: '团队总览', icon: LayoutDashboard },
  { to: '/trainer/analytics', label: 'SA 分析', icon: BarChart3 },
  { to: '/trainer/tasks', label: '训练任务', icon: ListChecks },
  { to: '/trainer/materials', label: '素材管理', icon: Archive },
  { to: '/trainer/scenarios', label: '场景配置', icon: Clapperboard },
  { to: '/trainer/personas', label: '客户画像库', icon: Users },
  { to: '/trainer/competency', label: '能力模型', icon: Target },
  { to: '/trainer/insights', label: '组织洞察', icon: Lightbulb },
]

function isActive(path) {
  if (path === '/trainer') return route.path === '/trainer'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside
    :style="{ width: collapsed ? '64px' : '244px' }"
    class="group/sb relative min-h-screen flex flex-col flex-shrink-0 border-r border-[rgba(61,46,31,0.2)] bg-[#2A2218] text-[#FAF8F3] transition-all duration-300 ease-in-out overflow-visible
      max-md:!w-full max-md:min-h-0 max-md:border-r-0 max-md:border-b max-md:sticky max-md:top-0 max-md:z-30">

    <!-- Brand -->
    <div class="px-6 pt-7 pb-6 max-md:px-4 max-md:py-3"
      :class="collapsed ? 'flex flex-col items-center px-0' : ''">
      <div v-show="!collapsed" class="luxury-eyebrow text-[#C8B9A4] mb-5 max-md:hidden">Maison L'Art</div>
      <div class="flex items-center gap-3" :class="collapsed ? 'justify-center' : ''">
        <div class="w-11 h-11 border border-[rgba(250,248,243,0.32)] bg-[rgba(250,248,243,0.08)] flex items-center justify-center flex-shrink-0 max-md:w-9 max-md:h-9">
          <BookOpen :size="18" class="motion-icon-slow text-[#E8DFCD]" />
        </div>
        <div v-show="!collapsed">
          <div class="luxury-display text-[22px] leading-none max-md:text-[20px]">训练中枢</div>
          <div class="text-[10px] tracking-[0.32em] uppercase text-[#A89584] mt-1.5">Trainer</div>
        </div>
      </div>
    </div>

    <div class="mx-6 h-px bg-[rgba(250,248,243,0.16)] mb-4 max-md:hidden" :class="collapsed ? 'mx-3' : ''" />

    <!-- Navigation -->
    <nav class="flex-1 px-4 space-y-1 max-md:flex max-md:flex-none max-md:gap-2 max-md:space-y-0 max-md:overflow-x-auto max-md:pb-3"
      :class="collapsed ? 'px-2' : ''">
      <router-link v-for="item in navItems" :key="item.to" :to="item.to"
        class="group relative flex items-center gap-3 h-11 px-3 text-[13px] transition-all border
          max-md:h-9 max-md:whitespace-nowrap max-md:flex-shrink-0"
        :class="[
          isActive(item.to)
            ? 'bg-[#FAF8F3] text-[#3D2E1F] border-[#FAF8F3]'
            : 'text-[#C8B9A4] border-transparent hover:border-[rgba(250,248,243,0.16)] hover:bg-[rgba(250,248,243,0.06)] hover:text-[#FAF8F3]',
          collapsed ? 'justify-center px-0' : ''
        ]">
        <component :is="item.icon" :size="16" class="flex-shrink-0" :class="isActive(item.to) ? 'text-[#6B3A3A]' : 'text-[#A89584] group-hover:text-[#E8DFCD]'" />
        <span v-show="!collapsed">{{ item.label }}</span>
        <!-- Tooltip when collapsed (dark sidebar = light tooltip) -->
        <span v-if="collapsed"
          class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50"
          style="background:var(--bone);color:var(--ink);">
          {{ item.label }}
        </span>
      </router-link>
    </nav>

    <!-- Floating toggle button on right edge, vertically centered, visible on sidebar hover -->
    <button
      class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-50 flex items-center justify-center cursor-pointer opacity-0 group-hover/sb:opacity-100 transition-all duration-200 max-md:hidden"
      style="width:24px;height:24px;background:var(--ink);border:1px solid rgba(250,248,243,0.25);color:var(--stone);box-shadow:0 2px 8px rgba(0,0,0,0.3);"
      @mouseenter="$event.currentTarget.style.color = 'var(--bone)'"
      @mouseleave="$event.currentTarget.style.color = 'var(--stone)'"
      @click="collapsed = !collapsed"
    >
      <ChevronsLeft v-if="!collapsed" :size="12" />
      <ChevronsRight v-else :size="12" />
    </button>

    <!-- Bottom area -->
    <div class="px-6 pb-6 max-md:hidden" :class="collapsed ? 'px-3 flex flex-col items-center' : ''">

      <!-- Stat block (hidden when collapsed) -->
      <div v-show="!collapsed" class="border border-[rgba(250,248,243,0.14)] p-4 mb-5">
        <div class="text-[10px] tracking-[0.28em] uppercase text-[#A89584]">Training OS</div>
        <div class="luxury-display text-[28px] mt-2">782</div>
        <div class="text-[11px] text-[#C8B9A4]">本月训练循环</div>
      </div>

      <!-- Switch link -->
      <router-link v-show="!collapsed" to="/"
        class="flex items-center gap-1.5 text-[12px] text-[#A89584] hover:text-[#FAF8F3] transition-colors">
        <span>←</span>
        <span>切换至学员端</span>
      </router-link>
      <router-link v-if="collapsed" to="/"
        class="group relative flex items-center justify-center text-[14px] text-[#A89584] hover:text-[#FAF8F3] transition-colors">
        <span>←</span>
        <span
          class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50"
          style="background:var(--bone);color:var(--ink);">
          切换至学员端
        </span>
      </router-link>
    </div>
  </aside>
</template>
