<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  Bookmark,
  ChevronsLeft,
  ChevronsRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Home,
  LifeBuoy,
  MessageCircle,
  Radar,
  TrendingUp,
} from 'lucide-vue-next'

const route = useRoute()
const collapsed = ref(false)

const mainNav = [
  { to: '/', label: '首页', icon: Home },
  { to: '/profile', label: '能力画像', icon: Radar },
  { to: '/teach', label: '学习路径', icon: GraduationCap },
  { to: '/roleplay/settings', label: '实战模拟', icon: MessageCircle },
  { to: '/help', label: '实时求助', icon: LifeBuoy },
  { to: '/roleplay/report', label: '复盘报告', icon: FileText },
]

const myNav = [
  { to: '/growth', label: '成长档案', icon: TrendingUp },
  { to: '/notes', label: 'Saved Notes', icon: Bookmark },
  { to: '/quiz', label: '做题', icon: ClipboardCheck },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <aside
    :style="{ width: collapsed ? '64px' : '220px' }"
    class="group/sb relative min-h-screen flex flex-col flex-shrink-0 border-r border-[rgba(61,46,31,0.22)] bg-[#FAF8F3] transition-all duration-300 ease-in-out overflow-visible
      max-md:!w-full max-md:min-h-0 max-md:border-r-0 max-md:border-b max-md:sticky max-md:top-0 max-md:z-30">

    <!-- Brand / Avatar -->
    <div class="px-5 pt-6 pb-4 flex items-center gap-3 max-md:px-4 max-md:py-3"
      :class="collapsed ? 'justify-center px-0' : ''">
      <div class="w-10 h-10 bg-[#6B3A3A] flex items-center justify-center flex-shrink-0 text-[#FAF8F3] luxury-display text-[16px]">张</div>
      <div v-show="!collapsed">
        <div class="luxury-display text-[16px] text-[#2A2218] leading-[1.1]">张敏</div>
        <div class="text-[9px] tracking-[0.3em] uppercase text-[#A89584] mt-1">Sales Training</div>
      </div>
    </div>

    <div class="mx-5 h-px bg-[rgba(61,46,31,0.22)]" :class="collapsed ? 'mx-3' : ''" />

    <!-- Navigation -->
    <nav class="flex-1 px-3 mt-3 max-md:flex max-md:flex-none max-md:gap-1 max-md:overflow-x-auto max-md:mt-0 max-md:pb-2"
      :class="collapsed ? 'px-2' : ''">
      <router-link
        v-for="item in mainNav" :key="item.to" :to="item.to"
        class="group relative flex items-center gap-3 h-[36px] px-3 text-[13px] tracking-[0.06em] transition-all mb-0.5
          max-md:h-9 max-md:whitespace-nowrap max-md:flex-shrink-0"
        :class="[
          isActive(item.to)
            ? 'bg-[#F5F0E8] text-[#2A2218]'
            : 'text-[#7A6652] hover:bg-[rgba(245,240,232,0.5)] hover:text-[#3D2E1F]',
          collapsed ? 'justify-center px-0' : ''
        ]"
        style="font-weight:300;">
        <span v-if="isActive(item.to)" class="absolute left-0 top-[7px] bottom-[7px] w-[2px] bg-[#6B3A3A] max-md:hidden" />
        <component :is="item.icon" :size="15" class="flex-shrink-0" :class="isActive(item.to) ? 'text-[#6B3A3A]' : 'text-[#A89584] group-hover:text-[#7A6652]'" />
        <span v-show="!collapsed">{{ item.label }}</span>
        <!-- Tooltip when collapsed -->
        <span v-if="collapsed"
          class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50"
          style="background:var(--ink);color:var(--bone);">
          {{ item.label }}
        </span>
      </router-link>

      <div v-show="!collapsed" class="mx-1 h-px bg-[rgba(61,46,31,0.1)] my-3 max-md:hidden" />
      <div v-show="!collapsed" class="px-3 py-1 text-[9px] tracking-[0.3em] uppercase text-[#A89584] max-md:hidden" style="font-weight:500;">我的</div>
      <div v-if="collapsed" class="mx-1 h-px bg-[rgba(61,46,31,0.1)] my-3 max-md:hidden" />

      <router-link
        v-for="item in myNav" :key="item.to" :to="item.to"
        class="group relative flex items-center gap-3 h-[32px] px-3 text-[12px] tracking-[0.06em] transition-all mb-0.5
          max-md:h-9 max-md:whitespace-nowrap max-md:flex-shrink-0"
        :class="[
          isActive(item.to)
            ? 'bg-[#F5F0E8] text-[#2A2218]'
            : 'text-[#A89584] hover:bg-[rgba(245,240,232,0.5)] hover:text-[#7A6652]',
          collapsed ? 'justify-center px-0' : ''
        ]"
        style="font-weight:300;">
        <span v-if="isActive(item.to)" class="absolute left-0 top-[6px] bottom-[6px] w-[2px] bg-[#6B3A3A] max-md:hidden" />
        <component :is="item.icon" :size="14" class="flex-shrink-0" :class="isActive(item.to) ? 'text-[#6B3A3A]' : 'text-[#C8B9A4] group-hover:text-[#A89584]'" />
        <span v-show="!collapsed">{{ item.label }}</span>
        <!-- Tooltip when collapsed -->
        <span v-if="collapsed"
          class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50"
          style="background:var(--ink);color:var(--bone);">
          {{ item.label }}
        </span>
      </router-link>
    </nav>

    <!-- Floating toggle button on right edge, vertically centered, visible on sidebar hover -->
    <button
      class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-50 flex items-center justify-center cursor-pointer opacity-0 group-hover/sb:opacity-100 transition-all duration-200 max-md:hidden"
      style="width:24px;height:24px;background:var(--bone);border:1px solid rgba(61,46,31,0.22);color:var(--taupe);box-shadow:0 2px 8px rgba(61,46,31,0.12);"
      @mouseenter="$event.currentTarget.style.color = 'var(--ink)'"
      @mouseleave="$event.currentTarget.style.color = 'var(--taupe)'"
      @click="collapsed = !collapsed"
    >
      <ChevronsLeft v-if="!collapsed" :size="12" />
      <ChevronsRight v-else :size="12" />
    </button>

    <!-- Bottom: switch link -->
    <div class="px-5 pb-5 max-md:hidden" :class="collapsed ? 'px-3 flex justify-center' : ''">
      <router-link v-show="!collapsed" to="/trainer"
        class="flex items-center gap-1.5 text-[11px] tracking-[0.14em] text-[#A89584] hover:text-[#3D2E1F] transition-colors">
        <span>→</span>
        <span>切换至管理端</span>
      </router-link>
      <router-link v-if="collapsed" to="/trainer"
        class="group relative flex items-center justify-center text-[14px] text-[#A89584] hover:text-[#3D2E1F] transition-colors">
        <span>→</span>
        <span
          class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50"
          style="background:var(--ink);color:var(--bone);">
          切换至管理端
        </span>
      </router-link>
    </div>
  </aside>
</template>
