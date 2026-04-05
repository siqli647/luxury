<script setup>
import SASidebar from '../../components/SASidebar.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const router = useRouter()

const highlights = [
  '成功建立品牌文化叙事，引发顾客情感共鸣，提升品牌认可度',
  '精准识别顾客"送人"需求，及时转换到礼品定制服务场景',
  '面对价格异议时，运用价值锚定策略有效缓解顾客顾虑',
]

const risks = [
  '过早推荐限量款，可能引发顾客压迫感，建议先充分了解需求',
  '对顾客收入线索（8万/月）未充分利用，可推荐更高端产品线',
  '结尾缺乏明确跟进承诺，顾客离店意向强，错失成交窗口',
]

const suggestions = [
  '加强破冰话术，通过观察客户穿着切入话题',
  '复习异议处理模块，重点掌握「价值重构」',
  '每次对话结束前养成 CTA 习惯',
]

const remedialCourses = [
  { title: '需求挖掘高阶技巧', desc: '深度探索客户潜在需求的系统方法' },
  { title: '价值锚定与异议处理', desc: '面对价格质疑时的专业应对话术' },
]

const accordionStates = ref(remedialCourses.map(() => false))

function toggleAccordion(i) {
  accordionStates.value[i] = !accordionStates.value[i]
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[#FAFAFA]">
    <SASidebar />

    <main class="flex-1 overflow-y-auto">
      <div class="max-w-4xl mx-auto px-8 py-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-1.5 text-[13px] mb-6">
          <router-link to="/" class="text-[#737373] hover:text-[#525252] transition-colors">首页</router-link>
          <span class="text-[#0a0a0a]">/</span>
          <router-link to="/roleplay/settings" class="text-[#737373] hover:text-[#525252] transition-colors">参数设置</router-link>
          <span class="text-[#0a0a0a]">/</span>
          <router-link to="/roleplay/chat" class="text-[#737373] hover:text-[#525252] transition-colors">实战对话</router-link>
          <span class="text-[#0a0a0a]">/</span>
          <span class="text-[#0a0a0a] font-medium">评估报告</span>
        </div>

        <div class="flex items-start justify-between mb-1">
          <div>
            <h1 class="text-[28px] font-semibold text-[#09090B]">评估报告</h1>
            <p class="text-[14px] text-[#71717A]">实战表现分析</p>
          </div>
          <button @click="router.push('/roleplay/settings')"
            class="bg-[#18181B] text-white px-5 h-9 rounded-lg text-[13px] font-medium hover:bg-[#27272a] transition-colors">
            开始下一次 →
          </button>
        </div>

        <div class="mt-8" />

        <!-- Score cards -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7] flex items-center gap-5">
            <div class="w-16 h-16 rounded-full border-[5px] border-[#18181B] flex items-center justify-center flex-shrink-0">
              <span class="text-[24px] font-semibold text-[#09090B]">78</span>
            </div>
            <div>
              <div class="text-[14px] font-medium text-[#09090B] mb-1">综合评分</div>
              <div class="text-[12px] text-[#71717A] leading-relaxed">成功建立品牌认知和个人信任，具备较强的场景代入能力</div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7] flex items-center gap-5">
            <div class="w-16 h-16 rounded-full border-[5px] border-[#18181B] flex items-center justify-center flex-shrink-0">
              <span class="text-[24px] font-semibold text-[#09090B]">65</span>
            </div>
            <div>
              <div class="text-[14px] font-medium text-[#09090B] mb-1">成交意向</div>
              <div class="text-[12px] text-[#71717A] leading-relaxed">客户对交易的意愿有所提升，但成交时机把握尚需加强</div>
            </div>
          </div>
        </div>

        <!-- Highlights + Risks -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7]">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-2 h-2 rounded-full bg-green-500" />
              <span class="text-[13px] font-medium text-[#09090B]">亮点时刻</span>
            </div>
            <div class="space-y-3">
              <div v-for="(h, i) in highlights" :key="i" class="flex gap-2.5">
                <span class="text-[13px] text-[#A1A1AA] flex-shrink-0">{{ i + 1 }}.</span>
                <p class="text-[13px] text-[#3F3F46] leading-relaxed">{{ h }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7]">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-2 h-2 rounded-full bg-red-500" />
              <span class="text-[13px] font-medium text-[#09090B]">风险点</span>
            </div>
            <div class="space-y-3">
              <div v-for="(r, i) in risks" :key="i" class="flex gap-2.5">
                <span class="text-[13px] text-[#A1A1AA] flex-shrink-0">{{ i + 1 }}.</span>
                <p class="text-[13px] text-[#3F3F46] leading-relaxed">{{ r }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Coach suggestions -->
        <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7] mb-4">
          <h3 class="text-[13px] font-medium text-[#09090B] mb-4">AI Coach 建议</h3>
          <div class="space-y-3">
            <div v-for="(s, i) in suggestions" :key="i" class="flex gap-2.5">
              <span class="text-[13px] text-[#A1A1AA] flex-shrink-0">{{ i + 1 }}.</span>
              <p class="text-[13px] text-[#3F3F46] leading-relaxed">{{ s }}</p>
            </div>
          </div>
        </div>

        <!-- Bottom row: Remedial + Next -->
        <div class="grid grid-cols-2 gap-4">
          <!-- Remedial courses -->
          <div class="bg-white rounded-2xl border border-[#E4E4E7] overflow-hidden">
            <div class="px-5 py-4 border-b border-[#F4F4F5]">
              <span class="text-[13px] font-medium text-[#09090B]">推荐补课</span>
            </div>
            <div v-for="(course, i) in remedialCourses" :key="i" class="border-b border-[#F4F4F5] last:border-0">
              <button @click="toggleAccordion(i)"
                class="w-full flex items-center justify-between px-5 py-3.5 hover:bg-[#FAFAFA] transition-colors">
                <span class="text-[13px] text-[#09090B] font-medium">{{ course.title }}</span>
                <ChevronUp v-if="accordionStates[i]" :size="16" class="text-[#A1A1AA]" />
                <ChevronDown v-else :size="16" class="text-[#A1A1AA]" />
              </button>
              <div v-if="accordionStates[i]" class="px-5 pb-4 text-[12px] text-[#71717A] leading-relaxed">
                {{ course.desc }} — 预计学习时长 30 分钟，包含 3 个互动练习环节。
              </div>
            </div>
          </div>

          <!-- Next practice -->
          <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7]">
            <h3 class="text-[13px] font-medium text-[#09090B] mb-3">下一次建议练习</h3>
            <p class="text-[13px] text-[#3F3F46] leading-relaxed mb-4">需求挖掘 · 老练买家 · 中难度</p>
            <button @click="router.push('/roleplay/settings')"
              class="bg-[#18181B] text-white px-5 h-9 rounded-lg text-[13px] font-medium hover:bg-[#27272a] transition-colors">
              去练习 →
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
