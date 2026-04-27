<script setup>
import SASidebar from '../../components/SASidebar.vue'
import RadarChart from '../../components/RadarChart.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dimensions = [
  { name: '产品知识', en: 'Product Knowledge', score: 84, delta: '+6.8%', positive: true, insight: '经典系列与材质叙事掌握稳定，建议深化限量款知识' },
  { name: '需求挖掘', en: 'Client Discovery', score: 70, delta: '+3.1%', positive: true, insight: '开放式提问运用良好，需加强深层动机挖掘技巧' },
  { name: '沟通表达', en: 'Conversational Grace', score: 78, delta: '+4.5%', positive: true, insight: '语言表达流畅自然，建议在高净值场景加入更多共鸣' },
  { name: '异议处理', en: 'Objection Handling', score: 64, delta: '-1.8%', positive: false, insight: '价格异议回应略显被动，需增加价值锚定话术训练' },
  { name: '情绪感知', en: 'Emotional Attunement', score: 88, delta: '+9.4%', positive: true, insight: '情绪捕捉能力突出，是你的核心竞争力之一' },
  { name: '信任建立', en: 'Trust & Rapport', score: 74, delta: '+5.2%', positive: true, insight: '初次接触信任感建立较好，长期关系维护可再提升' },
  { name: '成交推进', en: 'Closing Momentum', score: 68, delta: '+2.0%', positive: true, insight: '临门一脚时机判断尚可，需要更果断的收尾策略' },
]

const radarLabels = dimensions.map(d => d.name)
const radarData = dimensions.map(d => d.score)

const strengths = [
  { name: '情绪感知', score: 88, explanation: '在模拟对话中展现出极高的情绪识别与共情能力，能精准捕捉客户微表情与语气变化。' },
  { name: '产品知识', score: 84, explanation: '对核心系列产品的工艺、历史与材质有扎实掌握，叙事自然流畅。' },
  { name: '沟通表达', score: 78, explanation: '措辞得体，语调温暖，能够营造舒适的购物氛围。' },
]

const weaknesses = [
  { name: '异议处理', score: 64, explanation: '面对价格质疑时容易退缩，缺乏有力的价值重构话术。' },
  { name: '成交推进', score: 68, explanation: '在客户释放购买信号后，未能及时推进成交步骤。' },
  { name: '需求挖掘', score: 70, explanation: '表层需求捕捉尚可，但深层购买动机的追问仍需加强。' },
]

const priorities = [
  { name: '异议处理', urgency: '紧急', urgencyColor: 'var(--burgundy)', description: '价格异议与价值重构能力亟需突破' },
  { name: '成交推进', urgency: '重要', urgencyColor: 'var(--gold)', description: '临门一脚的时机判断与话术需要强化' },
  { name: '需求挖掘', urgency: '建议', urgencyColor: 'var(--moss)', description: '深层动机的追问技巧可进一步提升' },
]

const trendData = [
  { week: 'W1', score: 68 },
  { week: 'W2', score: 71 },
  { week: 'W3', score: 72 },
  { week: 'W4', score: 75 },
  { week: 'W5', score: 74 },
  { week: 'W6', score: 78 },
]

const trendMax = 100
const trendMin = 50
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <!-- ═══ HEADER ═══ -->
      <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="luxury-eyebrow mb-2">Diagnostic &middot; Ability Map</div>
        <h1 class="luxury-display mt-3 max-sm:text-[30px]" :style="{ color: 'var(--espresso)', fontSize: '48px', lineHeight: '1' }">
          能力画像
        </h1>
        <p class="luxury-serif mt-4 max-sm:text-[15px]" :style="{
          maxWidth: '56ch',
          color: 'var(--umber)',
          fontSize: '16px',
          fontStyle: 'italic',
          lineHeight: '1.6',
          fontWeight: '400'
        }">
          你的能力雷达与成长轨迹，AI 教练基于此为你定制训练路径。
        </p>
      </section>

      <!-- ═══ RADAR + DIMENSION CARDS ═══ -->
      <section class="grid gap-0 px-10 py-8 max-md:block max-sm:px-3 max-sm:py-4" :style="{ gridTemplateColumns: '360px 1fr', borderBottom: '1px solid var(--rule-strong)' }">

        <!-- LEFT: Large Radar -->
        <div class="pr-8 flex flex-col max-md:pr-0 max-md:pb-6 max-md:mb-6" :style="{ borderRight: '1px solid var(--rule-strong)' }">
          <div class="flex items-baseline justify-between gap-3 mb-3">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">I &mdash; Radar</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">能力雷达</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">七维评估</div>
          </div>
          <div class="flex items-center justify-center flex-1" :style="{ minHeight: '320px' }">
            <RadarChart :labels="radarLabels" :data="radarData" />
          </div>
        </div>

        <!-- RIGHT: Dimension Detail Cards -->
        <div class="pl-8 max-md:pl-0">
          <div class="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">II &mdash; Dimensions</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">维度详情</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">AI 诊断</div>
          </div>

          <div class="grid gap-3 max-sm:grid-cols-1" :style="{ gridTemplateColumns: 'repeat(2, 1fr)' }">
            <div
              v-for="dim in dimensions" :key="dim.name"
              class="luxury-card p-4 transition-all duration-300 hover:bg-[#F5F0E8] cursor-default"
              :style="{ border: '1px solid var(--rule)' }"
            >
              <!-- Name + English -->
              <div class="flex items-baseline justify-between gap-2 mb-2">
                <div>
                  <div class="luxury-display" :style="{ fontSize: '20px', color: 'var(--espresso)' }">{{ dim.name }}</div>
                  <div :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '1px' }">{{ dim.en }}</div>
                </div>
                <!-- Delta badge -->
                <span :style="{
                  fontSize: '11px',
                  fontWeight: '500',
                  letterSpacing: '0.04em',
                  color: dim.positive ? 'var(--moss)' : 'var(--burgundy)',
                  border: '1px solid ' + (dim.positive ? 'rgba(83,99,72,0.25)' : 'rgba(107,58,58,0.25)'),
                  padding: '2px 8px'
                }">{{ dim.delta }}</span>
              </div>

              <!-- Score display -->
              <div class="flex items-baseline gap-1 mb-2">
                <span class="luxury-display max-sm:text-[28px]" :style="{ fontSize: '40px', lineHeight: '1', color: 'var(--espresso)' }">{{ dim.score }}</span>
                <span :style="{ fontSize: '14px', color: 'var(--taupe)', fontFamily: 'var(--sans)' }">/100</span>
              </div>

              <!-- Progress bar -->
              <div :style="{ height: '2px', background: 'var(--rule)', overflow: 'hidden', marginBottom: '8px' }">
                <div :style="{ height: '100%', width: dim.score + '%', background: dim.positive ? 'var(--espresso)' : 'var(--burgundy)', transition: 'width 0.6s ease' }" />
              </div>

              <!-- AI insight -->
              <p :style="{ fontSize: '11px', color: 'var(--umber)', lineHeight: '1.5', margin: 0 }">{{ dim.insight }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ STRENGTHS vs WEAKNESSES ═══ -->
      <section class="grid gap-0 px-10 py-8 max-md:block max-sm:px-3 max-sm:py-4" :style="{ gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--rule-strong)' }">

        <!-- Strengths -->
        <div class="pr-8 max-md:pr-0 max-md:pb-6 max-md:mb-6" :style="{ borderRight: '1px solid var(--rule-strong)' }">
          <div class="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <div :style="{ color: 'var(--moss)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">III &mdash; Strengths</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">优势识别</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">Top 3</div>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="(s, i) in strengths" :key="s.name">
              <div class="flex items-baseline justify-between gap-2 mb-1">
                <span :style="{ fontSize: '13px', color: 'var(--espresso)' }">{{ s.name }}</span>
                <span class="luxury-display" :style="{ fontSize: '14px', color: 'var(--moss)' }">{{ s.score }}</span>
              </div>
              <div :style="{ height: '3px', background: 'var(--rule)', overflow: 'hidden', marginBottom: '6px' }">
                <div :style="{ height: '100%', width: s.score + '%', background: 'var(--moss)', transition: 'width 0.6s ease' }" />
              </div>
              <p :style="{ fontSize: '11px', color: 'var(--umber)', lineHeight: '1.5', margin: 0 }">{{ s.explanation }}</p>
              <div v-if="i < strengths.length - 1" class="luxury-rule mt-4" />
            </div>
          </div>
        </div>

        <!-- Weaknesses -->
        <div class="pl-8 max-md:pl-0">
          <div class="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">IV &mdash; Weaknesses</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">短板识别</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">Top 3</div>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="(w, i) in weaknesses" :key="w.name">
              <div class="flex items-baseline justify-between gap-2 mb-1">
                <span :style="{ fontSize: '13px', color: 'var(--espresso)' }">{{ w.name }}</span>
                <span class="luxury-display" :style="{ fontSize: '14px', color: 'var(--burgundy)' }">{{ w.score }}</span>
              </div>
              <div :style="{ height: '3px', background: 'var(--rule)', overflow: 'hidden', marginBottom: '6px' }">
                <div :style="{ height: '100%', width: w.score + '%', background: 'var(--burgundy)', transition: 'width 0.6s ease' }" />
              </div>
              <p :style="{ fontSize: '11px', color: 'var(--umber)', lineHeight: '1.5', margin: 0 }">{{ w.explanation }}</p>
              <div v-if="i < weaknesses.length - 1" class="luxury-rule mt-4" />
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ LEARNING PRIORITY + HISTORICAL TREND ═══ -->
      <section class="grid gap-0 px-10 py-8 pb-12 max-md:block max-sm:px-3 max-sm:py-4" :style="{ gridTemplateColumns: '1fr 1fr' }">

        <!-- Learning Priority -->
        <div class="pr-8 max-md:pr-0 max-md:pb-6 max-md:mb-6" :style="{ borderRight: '1px solid var(--rule-strong)' }">
          <div class="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">V &mdash; Priority</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">学习优先级</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">AI 推荐</div>
          </div>

          <div class="flex flex-col gap-0">
            <div
              v-for="(p, i) in priorities" :key="p.name"
              class="group flex items-start gap-4 py-4 transition-colors duration-200 hover:bg-[rgba(245,240,232,0.4)] px-2 -mx-2"
              :style="{ borderBottom: i < priorities.length - 1 ? '1px solid var(--rule)' : 'none' }"
            >
              <!-- Number -->
              <div class="luxury-display flex-shrink-0" :style="{ fontSize: '28px', color: 'var(--taupe)', width: '28px', textAlign: 'center', lineHeight: '1' }">{{ i + 1 }}</div>

              <!-- Content -->
              <div class="flex-1">
                <div class="flex items-baseline gap-3 mb-1">
                  <span class="luxury-display" :style="{ fontSize: '18px', color: 'var(--espresso)' }">{{ p.name }}</span>
                  <span :style="{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    color: p.urgencyColor,
                    border: '1px solid',
                    borderColor: p.urgencyColor,
                    padding: '1px 8px',
                    opacity: 0.85
                  }">{{ p.urgency }}</span>
                </div>
                <p :style="{ fontSize: '12px', color: 'var(--umber)', lineHeight: '1.5', margin: '0 0 6px' }">{{ p.description }}</p>
                <button
                  class="group/btn inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0 transition-colors duration-200"
                  :style="{ color: 'var(--burgundy)', fontSize: '12px', letterSpacing: '0.06em' }"
                  @mouseenter="$event.currentTarget.style.color = 'var(--ink)'"
                  @mouseleave="$event.currentTarget.style.color = 'var(--burgundy)'"
                  @click="router.push('/roleplay/settings')"
                >
                  <span>开始训练</span>
                  <span class="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Historical Trend -->
        <div class="pl-8 max-md:pl-0">
          <div class="flex items-baseline justify-between gap-3 mb-4">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">VI &mdash; Trend</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">历史趋势</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">近 6 周</div>
          </div>

          <!-- Spark bar chart -->
          <div class="flex items-end gap-3" :style="{ height: '180px', paddingTop: '12px' }">
            <div
              v-for="point in trendData" :key="point.week"
              class="group flex-1 flex flex-col items-center gap-2 cursor-default"
            >
              <!-- Score label -->
              <span class="luxury-display opacity-0 group-hover:opacity-100 transition-opacity duration-200" :style="{ fontSize: '14px', color: 'var(--espresso)' }">{{ point.score }}</span>

              <!-- Bar -->
              <div
                class="w-full transition-all duration-300 group-hover:brightness-110"
                :style="{
                  height: ((point.score - trendMin) / (trendMax - trendMin)) * 140 + 'px',
                  background: point === trendData[trendData.length - 1] ? 'var(--espresso)' : 'var(--taupe)',
                  opacity: point === trendData[trendData.length - 1] ? 1 : 0.5
                }"
              />

              <!-- Week label -->
              <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.16em', textTransform: 'uppercase' }">{{ point.week }}</span>
            </div>
          </div>

          <!-- Summary line -->
          <div class="mt-6 luxury-rule" />
          <div class="flex items-baseline justify-between mt-3">
            <span :style="{ fontSize: '11px', color: 'var(--umber)' }">综合能力分从 <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '14px' }">68</span> 提升至 <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '14px' }">78</span></span>
            <span :style="{
              fontSize: '11px',
              fontWeight: '500',
              color: 'var(--moss)',
              border: '1px solid rgba(83,99,72,0.25)',
              padding: '2px 8px'
            }">+14.7%</span>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
