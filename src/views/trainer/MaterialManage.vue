<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import { ref } from 'vue'
import { Upload, FileText, Clock } from 'lucide-vue-next'

const isDragging = ref(false)

const versions = [
  { version: 'v0.1', desc: '更新产品品牌知识库', date: '2025-01-09', tag: '当前版本', tagColor: 'moss' },
  { version: 'v1.0', desc: '更新销售培训课本', date: '2025-07-25', tag: '更新版本', tagColor: 'gold' },
  { version: 'v0.2', desc: '社仲产分析支援箱', date: '2026-03-01', tag: '当前版本', tagColor: 'moss' },
]

const recentAccess = [
  { name: '品牌营销与文化.pdf', date: '2026-02-21', type: 'pdf' },
  { name: '经典产品品手册.pptx', date: '2026-03-06', type: 'pptx' },
]

function tagStyle(color) {
  return color === 'moss'
    ? 'border-[#536348] text-[#536348] bg-[rgba(83,99,72,0.08)]'
    : 'border-[#B18A4A] text-[#B18A4A] bg-[rgba(177,138,74,0.08)]'
}
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <TrainerSidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible">
      <div class="max-w-[960px] mx-auto px-5 lg:px-8 py-8 max-sm:px-3 max-sm:py-4">

        <!-- Header -->
        <section class="mb-8 reveal-up">
          <div class="luxury-eyebrow mb-3">Material · Knowledge Base</div>
          <h1 class="luxury-display text-[34px] lg:text-[42px] leading-[1.02] text-[#3D2E1F]">素材管理</h1>
          <p class="luxury-serif italic text-[17px] leading-7 text-[#7A6652] mt-3">
            上传和管理培训教材，系统自动编译为可学、可练、可评分的训练资产。
          </p>
        </section>

        <!-- Upload area -->
        <section
          @dragover.prevent="isDragging = true"
          @dragleave="isDragging = false"
          @drop.prevent="isDragging = false"
          :class="[
            'luxury-panel p-8 mb-8 flex flex-col items-center justify-center transition-all reveal-up-delay cursor-pointer',
            isDragging ? 'border-[#6B3A3A] bg-[rgba(107,58,58,0.04)]' : 'hover:border-[#A89584]'
          ]">
          <Upload :size="28" class="text-[#A89584] mb-4 motion-icon-slow" />
          <p class="luxury-display text-[20px] text-[#3D2E1F] mb-1">上传教材</p>
          <p class="text-[12px] text-[#A89584] tracking-[0.2em] uppercase mb-6">拖拽或点击选择 · PDF / PPTX / DOC</p>
          <div class="flex gap-3">
            <button class="h-10 px-6 bg-[#3D2E1F] text-[#FAF8F3] text-[12px] tracking-[0.16em] uppercase hover:bg-[#2A2218] transition-colors">
              品牌知识
            </button>
            <button class="h-10 px-6 border border-[rgba(61,46,31,0.22)] text-[#3D2E1F] text-[12px] tracking-[0.16em] uppercase hover:bg-[#F5F0E8] transition-colors">
              销售技能
            </button>
          </div>
        </section>

        <!-- Two columns -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Versions -->
          <div class="luxury-panel overflow-hidden">
            <div class="px-6 py-4 border-b border-[rgba(61,46,31,0.12)] flex items-center justify-between">
              <div>
                <div class="luxury-eyebrow">I — Versions</div>
                <h2 class="luxury-display text-[22px] text-[#3D2E1F] mt-1">版本信息</h2>
              </div>
              <FileText :size="18" class="text-[#6B3A3A] motion-icon" />
            </div>
            <div>
              <div v-for="v in versions" :key="v.version"
                class="px-6 py-4 border-b border-[rgba(61,46,31,0.08)] last:border-0 flex items-start gap-4 hover:bg-[#F5F0E8] transition-colors cursor-pointer">
                <div class="w-9 h-9 border border-[rgba(61,46,31,0.16)] bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText :size="14" class="text-[#7A6652]" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="luxury-display text-[16px] text-[#3D2E1F]">{{ v.version }}</span>
                    <span :class="['text-[9px] px-2 py-0.5 border tracking-[0.1em] uppercase', tagStyle(v.tagColor)]">{{ v.tag }}</span>
                  </div>
                  <div class="text-[12px] text-[#7A6652]">{{ v.desc }}</div>
                  <div class="text-[10px] text-[#A89584] tracking-[0.2em] mt-1">{{ v.date }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent access -->
          <div class="luxury-panel overflow-hidden">
            <div class="px-6 py-4 border-b border-[rgba(61,46,31,0.12)] flex items-center justify-between">
              <div>
                <div class="luxury-eyebrow">II — Recent</div>
                <h2 class="luxury-display text-[22px] text-[#3D2E1F] mt-1">最近访问</h2>
              </div>
              <Clock :size="18" class="text-[#6B3A3A] motion-icon-slow" />
            </div>
            <div>
              <div v-for="file in recentAccess" :key="file.name"
                class="px-6 py-4 border-b border-[rgba(61,46,31,0.08)] last:border-0 flex items-center gap-4 hover:bg-[#F5F0E8] transition-colors cursor-pointer">
                <div class="w-10 h-10 border flex items-center justify-center flex-shrink-0"
                  :class="file.type === 'pdf' ? 'border-[#6B3A3A] bg-[rgba(107,58,58,0.06)]' : 'border-[#B18A4A] bg-[rgba(177,138,74,0.06)]'">
                  <span class="text-[9px] tracking-[0.16em] uppercase"
                    :class="file.type === 'pdf' ? 'text-[#6B3A3A]' : 'text-[#B18A4A]'">{{ file.type }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] text-[#3D2E1F] truncate">{{ file.name }}</div>
                  <div class="text-[10px] text-[#A89584] tracking-[0.2em] mt-1">{{ file.date }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>
