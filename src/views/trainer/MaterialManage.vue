<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import { ref } from 'vue'

const isDragging = ref(false)

const versions = [
  { version: 'v0.1', desc: '更新产品品牌知识库', date: '2025-01-09', tag: '当前版本', tagColor: 'bg-green-100 text-green-700' },
  { version: 'v1.0', desc: '更新销售培训课本', date: '2025-07-25', tag: '更新版本', tagColor: 'bg-blue-100 text-blue-700' },
  { version: 'v0.2', desc: '社仲产分析支援箱', date: '2026-03-01', tag: '当前版本', tagColor: 'bg-green-100 text-green-700' },
]

const recentAccess = [
  { name: '品牌营销与文化.pdf', date: '2026-02-21', icon: 'pdf' },
  { name: '经典产品品手册.pptx', date: '2026-03-06', icon: 'pptx' },
]
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <TrainerSidebar />

    <main class="flex-1 overflow-y-auto bg-[#fafafa]">
      <div class="max-w-4xl mx-auto px-8 py-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-[28px] font-semibold text-[#1a1a1a] mb-1">教材管理</h1>
          <p class="text-[14px] text-[#64748b] italic">上传和管理培训教材</p>
        </div>

        <!-- Upload area -->
        <div
          @dragover.prevent="isDragging = true"
          @dragleave="isDragging = false"
          @drop.prevent="isDragging = false"
          :class="['bg-white rounded-lg border shadow-sm transition-all mb-8 p-8 flex flex-col items-center justify-center',
            isDragging ? 'border-blue-400 bg-blue-50' : 'border-[#e2e8f0] hover:border-[#94a3b8]']">
          <p class="text-[14px] font-medium text-[#1a1a1a] mb-1">上传教材</p>
          <p class="text-[12px] text-[#64748b] italic mb-4">拖拽或点击选择 · PDF / PPTX</p>
          <div class="flex gap-3">
            <button class="bg-[#18181B] text-white px-5 py-2 rounded-lg text-[13px] font-medium hover:bg-[#27272a] transition-colors">
              品牌知识
            </button>
            <button class="bg-[#18181B] text-white px-5 py-2 rounded-lg text-[13px] font-medium hover:bg-[#27272a] transition-colors">
              销售技能
            </button>
          </div>
        </div>

        <!-- Two columns -->
        <div class="grid grid-cols-2 gap-5">
          <!-- Versions -->
          <div class="bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[#e2e8f0]">
              <h2 class="text-[14px] font-semibold text-[#1a1a1a]">版本信息</h2>
            </div>
            <div class="divide-y divide-[#f1f5f9]">
              <div v-for="v in versions" :key="v.version" class="px-5 py-4 flex items-start justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-[#f1f5f9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-0.5">
                      <span class="text-[13px] font-bold text-[#1a1a1a]">{{ v.version }}</span>
                      <span :class="['text-[10px] px-1.5 py-0.5 rounded-full font-medium', v.tagColor]">{{ v.tag }}</span>
                    </div>
                    <div class="text-[12px] text-[#64748b]">{{ v.desc }}</div>
                    <div class="text-[11px] text-[#94a3b8] mt-0.5">{{ v.date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent access -->
          <div class="bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[#e2e8f0]">
              <h2 class="text-[14px] font-semibold text-[#1a1a1a]">最近访问</h2>
            </div>
            <div class="divide-y divide-[#f1f5f9]">
              <div v-for="file in recentAccess" :key="file.name"
                class="px-5 py-4 flex items-center gap-3 hover:bg-[#fafafa] transition-colors cursor-pointer">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="file.icon === 'pdf' ? 'bg-red-50' : 'bg-orange-50'">
                  <svg class="w-4 h-4" :class="file.icon === 'pdf' ? 'text-red-500' : 'text-orange-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] text-[#1a1a1a] truncate">{{ file.name }}</div>
                  <div class="text-[11px] text-[#94a3b8] mt-0.5">{{ file.date }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
