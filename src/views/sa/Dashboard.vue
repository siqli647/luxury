<script setup>
import SASidebar from '../../components/SASidebar.vue'
import RadarChart from '../../components/RadarChart.vue'
import { ChevronRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const skills = [
  { name: '产品知识', score: 4, max: 5 },
  { name: '成品推进', score: 4, max: 5 },
  { name: '信任建立', score: 4, max: 5 },
  { name: '情绪感知', score: 4, max: 5 },
  { name: '异议处理', score: 4, max: 5 },
  { name: '沟通表达', score: 4, max: 5 },
  { name: '需求挖掘', score: 4, max: 5 },
]

const courses = [
  { title: '破冰与信任建立', progress: 0 },
  { title: '异议处理与价值重构', progress: 50 },
  { title: '产品知识：经典系列', progress: 70 },
]

const reports = [
  { title: '高端贵妇 — 周年礼物选购', date: '2026-04-01', score: 78 },
  { title: '年轻买家 — 首次奢侈品体验', date: '2026-03-28', score: 82 },
]
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-white">
    <SASidebar />

    <main class="flex-1 overflow-y-auto">
      <div class="max-w-5xl mx-auto px-8 py-8">
        <!-- Title -->
        <h1 class="text-[28px] font-semibold text-[#09090B] mb-1">首页</h1>
        <p class="text-[14px] text-[#71717A] mb-8">欢迎回来，张敏</p>

        <!-- Entry Cards -->
        <div class="grid grid-cols-2 gap-3 mb-8">
          <button @click="router.push('/roleplay/settings')"
            class="bg-white rounded-2xl p-5 border border-[#E4E4E7] hover:shadow-sm transition-shadow flex items-center justify-between cursor-pointer text-left">
            <div>
              <h3 class="text-[16px] font-bold text-[#09090B]">实战模拟</h3>
              <p class="text-[12px] text-[#A1A1AA] mt-1">与 AI 客户对话练习</p>
            </div>
            <ChevronRight :size="18" class="text-[#A1A1AA] flex-shrink-0" />
          </button>

          <button @click="router.push('/teach')"
            class="bg-white rounded-2xl p-5 border border-[#E4E4E7] hover:shadow-sm transition-shadow flex items-center justify-between cursor-pointer text-left">
            <div>
              <h3 class="text-[16px] font-bold text-[#09090B]">教学模块</h3>
              <p class="text-[12px] text-[#A1A1AA] mt-1">AI 个性化学习路径</p>
            </div>
            <ChevronRight :size="18" class="text-[#A1A1AA] flex-shrink-0" />
          </button>
        </div>

        <!-- Large combined card -->
        <div class="bg-white rounded-2xl border border-[#E4E4E7] p-5">
          <!-- Top: 能力评估 -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-[15px] font-semibold text-[#09090B]">能力评估</h2>
              <span class="text-[11px] text-[#A1A1AA] cursor-pointer">查看更多 ></span>
            </div>
            <div class="flex gap-8">
              <!-- Radar chart -->
              <div class="w-[240px] h-[240px] flex-shrink-0">
                <RadarChart />
              </div>
              <!-- Skill bars -->
              <div class="flex-1">
                <div class="text-[11px] text-[#A1A1AA] mb-3">具体参数</div>
                <div class="space-y-1.5">
                  <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-3">
                    <span class="text-[13px] font-medium text-[#09090B] w-16 flex-shrink-0">{{ skill.name }}</span>
                    <div class="flex-1 h-2 bg-[#F4F4F5] rounded-full overflow-hidden">
                      <div class="h-full bg-[#18181B] rounded-full" :style="{ width: (skill.score / skill.max * 100) + '%' }" />
                    </div>
                    <span class="text-[12px] text-[#71717A] flex-shrink-0 w-6 text-right">{{ skill.score }}/{{ skill.max }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom: two columns -->
          <div class="flex gap-5">
            <!-- 推荐课程 -->
            <div class="flex-1 bg-white rounded-2xl border border-[#E4E4E7] p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-[15px] font-semibold text-[#09090B]">推荐课程</h3>
                <ChevronRight :size="16" class="text-[#A1A1AA]" />
              </div>
              <div class="space-y-3">
                <div class="flex gap-4" >
                  <div class="flex-1 rounded-xl border border-[#F4F4F5] p-3">
                    <span class="text-[13px] font-medium text-[#09090B] block mb-2">{{ courses[0].title }}</span>
                    <div class="h-1.5 bg-[#F4F4F5] rounded-full overflow-hidden">
                      <div class="h-full bg-[#d4d4d8] rounded-full" :style="{ width: '0%' }" />
                    </div>
                  </div>
                  <div class="flex-1 rounded-xl border border-[#F4F4F5] p-3">
                    <span class="text-[13px] font-medium text-[#09090B] block mb-2">{{ courses[1].title }}</span>
                    <div class="h-1.5 bg-[#F4F4F5] rounded-full overflow-hidden">
                      <div class="h-full bg-[#18181B] rounded-full" :style="{ width: '50%' }" />
                    </div>
                  </div>
                </div>
                <div class="rounded-xl border border-[#F4F4F5] p-3">
                  <span class="text-[13px] font-medium text-[#09090B] block mb-2">{{ courses[2].title }}</span>
                  <div class="h-1.5 bg-[#F4F4F5] rounded-full overflow-hidden">
                    <div class="h-full bg-[#18181B] rounded-full" :style="{ width: '70%' }" />
                  </div>
                </div>
              </div>
            </div>

            <!-- 最近训练报告 -->
            <div class="flex-1 bg-white rounded-2xl border border-[#E4E4E7] p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-[15px] font-semibold text-[#09090B]">最近训练报告</h3>
                <ChevronRight :size="16" class="text-[#A1A1AA]" />
              </div>
              <div class="space-y-4">
                <div v-for="report in reports" :key="report.date"
                  class="bg-white rounded-2xl border border-[#E4E4E7] p-5 flex items-center justify-between">
                  <div>
                    <div class="text-[14px] font-medium text-[#09090B]">{{ report.title }}</div>
                    <div class="text-[12px] text-[#A1A1AA] mt-1">{{ report.date }}</div>
                  </div>
                  <div class="text-[16px] font-semibold text-[#09090B]">{{ report.score }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Floating ? button -->
    <button class="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-[#F2F3F0] shadow-md flex items-center justify-center text-[15px] font-semibold text-[#09090B] hover:shadow-lg transition-shadow z-50">
      ？
    </button>
  </div>
</template>
