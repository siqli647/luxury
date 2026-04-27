<script setup>
import { ref, computed } from 'vue'
import SASidebar from '../../components/SASidebar.vue'
import { Bookmark, Star, Bot, PenLine } from 'lucide-vue-next'

const activeTab = ref('all')

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'highlight', label: '高光时刻' },
  { key: 'ai_suggestion', label: 'AI 建议' },
  { key: 'note', label: '笔记' },
]

const notes = ref([
  {
    type: 'highlight',
    title: '成功的价值锚定话术',
    source: '实战模拟 · 高端贵妇场景',
    date: '2026-04-15',
    content: '"这不仅是一件皮具，更是一段可以传承的故事"——这个叙事框架让客户从价格对比转向情感认同。',
  },
  {
    type: 'ai_suggestion',
    title: 'AI Coach: 异议处理改进建议',
    source: '复盘报告 #046',
    date: '2026-04-12',
    content: '面对"为什么比别家贵"时，避免直接解释价格差异。先认可客户的比较意识，再从工艺、传承、专属服务三个维度建立价值感。',
  },
  {
    type: 'note',
    title: '产品知识：经典系列要点',
    source: '教学模块 · N°03',
    date: '2026-04-08',
    content: 'Birkin 系列关键卖点：手工缝制、等待周期、皮革选材标准。客户最关心的是"为什么需要等"——将等待转化为稀缺性叙事。',
  },
  {
    type: 'highlight',
    title: '首次突破 PI 80 分',
    source: '实战模拟 · 年轻买家场景',
    date: '2026-04-05',
    content: '通过精准的需求挖掘识别了客户的送礼需求，及时转换到礼品定制服务，PI 从 62 提升到 82。',
  },
  {
    type: 'ai_suggestion',
    title: 'AI Coach: 成交推进技巧',
    source: '复盘报告 #044',
    date: '2026-03-30',
    content: '每次对话结束前确保有明确的 next step。可以是："我帮您预留到周五，届时您方便来试戴吗？"',
  },
  {
    type: 'note',
    title: '破冰话术收集',
    source: '教学模块 · N°01',
    date: '2026-03-25',
    content: '观察客户穿着/配饰切入：\n"您这条丝巾的配色很特别，是今年的限定色吗？"\n"您对细节的品味很好，一定对工艺也很讲究。"',
  },
])

const filteredNotes = computed(() => {
  if (activeTab.value === 'all') return notes.value
  return notes.value.filter(n => n.type === activeTab.value)
})

const stats = computed(() => ({
  total: notes.value.length,
  highlights: notes.value.filter(n => n.type === 'highlight').length,
  aiSuggestions: notes.value.filter(n => n.type === 'ai_suggestion').length,
  personalNotes: notes.value.filter(n => n.type === 'note').length,
}))

function edgeColor(type) {
  if (type === 'highlight') return 'var(--moss)'
  if (type === 'ai_suggestion') return 'var(--burgundy)'
  return 'var(--gold)'
}

function typeIcon(type) {
  if (type === 'highlight') return Star
  if (type === 'ai_suggestion') return Bot
  return PenLine
}

function typeLabel(type) {
  if (type === 'highlight') return '高光时刻'
  if (type === 'ai_suggestion') return 'AI 建议'
  return '笔记'
}
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <!-- Header -->
      <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="luxury-eyebrow mb-2">Personal &middot; Archive</div>
        <h1 class="luxury-display mt-3 max-sm:text-[28px]" :style="{ color: 'var(--espresso)', fontSize: '42px', lineHeight: '1' }">
          Saved Notes
        </h1>
        <p class="luxury-serif mt-4" :style="{
          maxWidth: '50ch',
          color: 'var(--umber)',
          fontSize: '16px',
          fontStyle: 'italic',
          lineHeight: '1.55',
          fontWeight: '400'
        }">
          训练过程中的笔记、高光时刻和收藏内容。
        </p>
      </section>

      <!-- Content area, centered -->
      <div class="max-sm:!px-3 max-sm:!py-4" :style="{ maxWidth: '800px', margin: '0 auto', padding: '24px 40px 60px' }">

        <!-- Filter tabs -->
        <div class="flex items-center gap-0 mb-5 max-sm:overflow-x-auto" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="cursor-pointer transition-all duration-200 bg-transparent border-0"
            :style="{
              padding: '10px 18px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              fontFamily: 'var(--sans)',
              fontWeight: '400',
              color: activeTab === tab.key ? 'var(--espresso)' : 'var(--taupe)',
              borderBottom: activeTab === tab.key ? '2px solid var(--espresso)' : '2px solid transparent',
              marginBottom: '-1px',
            }"
            @mouseenter="(e) => { if (activeTab !== tab.key) e.currentTarget.style.color = 'var(--umber)' }"
            @mouseleave="(e) => { if (activeTab !== tab.key) e.currentTarget.style.color = 'var(--taupe)' }"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Stats bar -->
        <div class="flex items-center gap-6 mb-6 px-1 max-sm:flex-wrap max-sm:gap-3" :style="{
          color: 'var(--taupe)',
          fontSize: '10px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
        }">
          <div>
            <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '14px', letterSpacing: '0' }">{{ stats.total }}</span>
            总笔记
          </div>
          <div :style="{ width: '1px', height: '16px', background: 'var(--rule)' }" />
          <div>
            <span class="luxury-display" :style="{ color: 'var(--moss)', fontSize: '14px', letterSpacing: '0' }">{{ stats.highlights }}</span>
            高光
          </div>
          <div :style="{ width: '1px', height: '16px', background: 'var(--rule)' }" />
          <div>
            <span class="luxury-display" :style="{ color: 'var(--burgundy)', fontSize: '14px', letterSpacing: '0' }">{{ stats.aiSuggestions }}</span>
            AI 建议
          </div>
          <div :style="{ width: '1px', height: '16px', background: 'var(--rule)' }" />
          <div>
            <span class="luxury-display" :style="{ color: 'var(--gold)', fontSize: '14px', letterSpacing: '0' }">{{ stats.personalNotes }}</span>
            个人笔记
          </div>
        </div>

        <!-- Notes list -->
        <div class="flex flex-col gap-3">
          <div
            v-for="note in filteredNotes"
            :key="note.title"
            class="luxury-panel relative cursor-pointer transition-all duration-300"
            :style="{
              border: '1px solid var(--rule-strong)',
              background: 'rgba(250,248,243,0.82)',
              padding: '20px 24px 20px 28px',
            }"
            @mouseenter="$event.currentTarget.style.borderColor = 'rgba(61,46,31,0.35)'"
            @mouseleave="$event.currentTarget.style.borderColor = 'var(--rule-strong)'"
          >
            <!-- Left colored edge -->
            <div
              :style="{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: edgeColor(note.type),
              }"
            />

            <!-- Type badge + date row -->
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <component :is="typeIcon(note.type)" :size="12" :style="{ color: edgeColor(note.type) }" />
                <span :style="{
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: edgeColor(note.type),
                  fontWeight: '500',
                }">{{ typeLabel(note.type) }}</span>
              </div>
              <span :style="{ fontSize: '10px', color: 'var(--taupe)', letterSpacing: '0.06em' }">{{ note.date }}</span>
            </div>

            <!-- Title -->
            <h3 class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '18px', margin: '0 0 4px' }">
              {{ note.title }}
            </h3>

            <!-- Source -->
            <div :style="{ color: 'var(--taupe)', fontSize: '11px', letterSpacing: '0.08em', marginBottom: '10px' }">
              {{ note.source }}
            </div>

            <!-- Content -->
            <p :style="{
              color: 'var(--umber)',
              fontSize: '13px',
              lineHeight: '1.65',
              margin: 0,
              whiteSpace: 'pre-line',
            }">
              {{ note.content }}
            </p>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
