<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import { useRouter } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

const router = useRouter()

const stats = [
  { label: '活跃SA', value: '24', color: 'text-green-500' },
  { label: '训练次数', value: '186', color: 'text-blue-500' },
  { label: '平均得分', value: '74.5', color: 'text-yellow-500' },
  { label: '本月训练', value: '12', color: 'text-purple-500' },
]
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <TrainerSidebar />

    <main class="flex-1 overflow-y-auto bg-[#fafafa]">
      <div class="max-w-4xl mx-auto px-8 py-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-[28px] font-semibold text-[#1a1a1a] mb-1">管理首页</h1>
          <p class="text-[14px] text-[#64748b] italic">团队培训数据概览</p>
        </div>

        <!-- Entry cards -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <button @click="router.push('/trainer/materials')"
            class="bg-white rounded-lg p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow group text-left flex items-center justify-between">
            <div>
              <h3 class="text-[15px] font-semibold text-[#1a1a1a] mb-1">培训教材管理</h3>
              <p class="text-[13px] text-[#64748b]">上传、管理培训所需教材</p>
            </div>
            <ChevronRight :size="18" class="text-[#cbd5e1] group-hover:text-[#64748b] transition-colors flex-shrink-0" />
          </button>

          <button @click="router.push('/trainer/analytics')"
            class="bg-white rounded-lg p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow group text-left flex items-center justify-between">
            <div>
              <h3 class="text-[15px] font-semibold text-[#1a1a1a] mb-1">SA培训分析</h3>
              <p class="text-[13px] text-[#64748b]">分析查看SA培训数据分析</p>
            </div>
            <ChevronRight :size="18" class="text-[#cbd5e1] group-hover:text-[#64748b] transition-colors flex-shrink-0" />
          </button>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-4 gap-4">
          <div v-for="stat in stats" :key="stat.label"
            class="bg-white rounded-lg p-4 border border-[#e2e8f0] shadow-sm">
            <div :class="['text-[28px] font-bold mb-1', stat.color]">{{ stat.value }}</div>
            <div class="text-[13px] text-[#64748b]">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
