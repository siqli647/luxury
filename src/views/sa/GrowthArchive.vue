<script setup>
import SASidebar from '../../components/SASidebar.vue'

const metrics = [
  { label: '总训练次数', value: '126', unit: '次' },
  { label: '综合能力分', value: '78', unit: '/100' },
  { label: '进步率', value: '+21.4%', unit: '30天' },
]

const weeklyScores = [
  { week: 'W1', score: 67 },
  { week: 'W2', score: 70 },
  { week: 'W3', score: 72 },
  { week: 'W4', score: 75 },
  { week: 'W5', score: 74 },
  { week: 'W6', score: 78 },
]

const trajectoryMax = 100
const trajectoryMin = 50

const dimensionProgress = [
  { name: '产品知识', en: 'Product Knowledge', initial: 76, current: 84, delta: '+8', up: true },
  { name: '需求挖掘', en: 'Client Discovery', initial: 62, current: 70, delta: '+8', up: true },
  { name: '沟通表达', en: 'Conversational Grace', initial: 70, current: 78, delta: '+8', up: true },
  { name: '异议处理', en: 'Objection Handling', initial: 58, current: 64, delta: '+6', up: true },
  { name: '情绪感知', en: 'Emotional Attunement', initial: 78, current: 88, delta: '+10', up: true },
  { name: '信任建立', en: 'Trust & Rapport', initial: 66, current: 74, delta: '+8', up: true },
  { name: '成交推进', en: 'Closing Momentum', initial: 60, current: 68, delta: '+8', up: true },
]

const milestones = [
  { date: '2026-04-15', description: '完成「破冰与信任建立」课程', badge: '课程' },
  { date: '2026-04-08', description: '首次 Purchase Intent 突破 80', badge: '突破' },
  { date: '2026-03-28', description: 'AI Coach 评定晋级为 Level II', badge: '晋级' },
  { date: '2026-03-15', description: '完成初始能力测评', badge: '起点' },
]

const aiSummary = '张敏在过去 6 周内综合能力提升 16.4%。情绪感知是最大优势（+12.8%），异议处理仍需重点加强。建议下周增加 3 场高难度价格异议场景的模拟训练。'
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <!-- ═══ HEADER ═══ -->
      <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="luxury-eyebrow mb-2">Growth &middot; Personal Archive</div>
        <h1 class="luxury-display mt-3 max-sm:text-[30px]" :style="{ color: 'var(--espresso)', fontSize: '48px', lineHeight: '1' }">
          成长档案
        </h1>
        <p class="luxury-serif mt-4 max-sm:text-[15px]" :style="{
          maxWidth: '56ch',
          color: 'var(--umber)',
          fontSize: '16px',
          fontStyle: 'italic',
          lineHeight: '1.6',
          fontWeight: '400'
        }">
          追踪你的能力维度变化，回顾每一次进步。
        </p>
      </section>

      <!-- ═══ OVERALL METRICS ═══ -->
      <section class="px-10 py-6 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="grid gap-0 max-sm:grid-cols-1" :style="{ gridTemplateColumns: 'repeat(3, 1fr)' }">
          <div
            v-for="(m, i) in metrics" :key="m.label"
            class="flex flex-col items-center justify-center py-4 transition-colors duration-200 hover:bg-[rgba(245,240,232,0.4)]"
            :style="{ borderRight: i < metrics.length - 1 ? '1px solid var(--rule-strong)' : 'none' }"
          >
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: '6px' }">{{ m.label }}</div>
            <div class="flex items-baseline gap-1">
              <span class="luxury-display max-sm:text-[30px]" :style="{ fontSize: '42px', color: 'var(--espresso)', lineHeight: '1' }">{{ m.value }}</span>
              <span :style="{ fontSize: '13px', color: 'var(--taupe)', fontFamily: 'var(--sans)' }">{{ m.unit }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ GROWTH TRAJECTORY CHART ═══ -->
      <section class="px-10 py-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="flex items-baseline justify-between gap-3 mb-5">
          <div>
            <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">I &mdash; Trajectory</div>
            <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">成长轨迹</h3>
          </div>
          <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">近 6 周综合分</div>
        </div>

        <!-- Bar chart -->
        <div class="flex items-end gap-4" :style="{ height: '240px' }">
          <div
            v-for="point in weeklyScores" :key="point.week"
            class="group flex-1 flex flex-col items-center gap-2 cursor-default"
          >
            <!-- Score on hover -->
            <span class="luxury-display opacity-0 group-hover:opacity-100 transition-opacity duration-200" :style="{ fontSize: '16px', color: 'var(--espresso)' }">{{ point.score }}</span>

            <!-- Bar -->
            <div
              class="w-full transition-all duration-300 group-hover:brightness-110"
              :style="{
                height: ((point.score - trajectoryMin) / (trajectoryMax - trajectoryMin)) * 180 + 'px',
                background: point === weeklyScores[weeklyScores.length - 1] ? 'var(--espresso)' : 'var(--taupe)',
                opacity: point === weeklyScores[weeklyScores.length - 1] ? 1 : 0.4 + (weeklyScores.indexOf(point) * 0.08)
              }"
            />

            <!-- Week label -->
            <span :style="{ fontSize: '10px', color: 'var(--taupe)', letterSpacing: '0.16em', textTransform: 'uppercase' }">{{ point.week }}</span>
          </div>
        </div>

        <!-- Trend annotation -->
        <div class="luxury-rule mt-4" />
        <div class="flex items-baseline justify-between mt-3">
          <span :style="{ fontSize: '12px', color: 'var(--umber)' }">6 周内从 <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '15px' }">67</span> 提升至 <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '15px' }">78</span></span>
          <span :style="{ fontSize: '11px', fontWeight: '500', color: 'var(--moss)', border: '1px solid rgba(83,99,72,0.25)', padding: '2px 8px' }">+16.4%</span>
        </div>
      </section>

      <!-- ═══ DIMENSION PROGRESS TABLE ═══ -->
      <section class="px-10 py-8 max-sm:px-3 max-sm:py-4 overflow-x-auto" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="flex items-baseline justify-between gap-3 mb-5">
          <div>
            <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">II &mdash; Dimensions</div>
            <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">维度进展</h3>
          </div>
          <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">初始 &rarr; 当前</div>
        </div>

        <!-- Table header -->
        <div class="grid items-center gap-4 px-3 py-2 max-sm:min-w-[600px]" :style="{ gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.5fr', borderBottom: '1px solid var(--rule-strong)' }">
          <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase' }">维度</span>
          <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase', textAlign: 'center' }">初始分</span>
          <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase', textAlign: 'center' }">当前分</span>
          <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase', textAlign: 'center' }">变化</span>
          <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase', textAlign: 'center' }">趋势</span>
        </div>

        <!-- Table rows -->
        <div
          v-for="dim in dimensionProgress" :key="dim.name"
          class="grid items-center gap-4 px-3 py-3 transition-colors duration-200 hover:bg-[rgba(245,240,232,0.5)] cursor-default max-sm:min-w-[600px]"
          :style="{ gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.5fr', borderBottom: '1px solid var(--rule)' }"
        >
          <!-- Dimension name -->
          <div>
            <span :style="{ fontSize: '13px', color: 'var(--espresso)' }">{{ dim.name }}</span>
            <span :style="{ marginLeft: '6px', fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.14em', textTransform: 'uppercase' }">{{ dim.en }}</span>
          </div>

          <!-- Initial -->
          <div :style="{ textAlign: 'center' }">
            <span class="luxury-display" :style="{ fontSize: '16px', color: 'var(--taupe)' }">{{ dim.initial }}</span>
          </div>

          <!-- Current -->
          <div :style="{ textAlign: 'center' }">
            <span class="luxury-display" :style="{ fontSize: '16px', color: 'var(--espresso)' }">{{ dim.current }}</span>
          </div>

          <!-- Delta -->
          <div :style="{ textAlign: 'center' }">
            <span :style="{ fontSize: '12px', fontWeight: '500', color: dim.up ? 'var(--moss)' : 'var(--burgundy)' }">{{ dim.delta }}</span>
          </div>

          <!-- Trend arrow -->
          <div :style="{ textAlign: 'center', fontSize: '16px', color: dim.up ? 'var(--moss)' : 'var(--burgundy)' }">
            {{ dim.up ? '&#8593;' : '&#8595;' }}
          </div>
        </div>
      </section>

      <!-- ═══ TIMELINE + AI SUMMARY ═══ -->
      <section class="grid gap-0 px-10 py-8 pb-12 max-md:block max-sm:px-3 max-sm:py-4" :style="{ gridTemplateColumns: '1fr 1fr' }">

        <!-- Milestone Timeline -->
        <div class="pr-8 max-md:pr-0 max-md:pb-6 max-md:mb-6" :style="{ borderRight: '1px solid var(--rule-strong)' }">
          <div class="flex items-baseline justify-between gap-3 mb-5">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">III &mdash; Milestones</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">里程碑</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">时间线</div>
          </div>

          <!-- Timeline items -->
          <div class="relative">
            <!-- Vertical connecting line -->
            <div class="absolute top-2 bottom-2" :style="{ left: '59px', width: '1px', background: 'var(--rule-strong)' }" />

            <div
              v-for="(ms, i) in milestones" :key="ms.date"
              class="group relative flex items-start gap-5 transition-colors duration-200 hover:bg-[rgba(245,240,232,0.4)] px-2 -mx-2 cursor-default"
              :style="{ paddingTop: i === 0 ? '0' : '20px', paddingBottom: i === milestones.length - 1 ? '0' : '20px' }"
            >
              <!-- Date -->
              <div class="flex-shrink-0" :style="{ width: '48px', textAlign: 'right' }">
                <div :style="{ fontSize: '11px', color: 'var(--umber)', lineHeight: '1.3' }">{{ ms.date.slice(5) }}</div>
                <div :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.1em' }">{{ ms.date.slice(0, 4) }}</div>
              </div>

              <!-- Dot on timeline -->
              <div class="flex-shrink-0 relative" :style="{ width: '9px', height: '9px', marginTop: '3px' }">
                <div :style="{
                  width: '9px', height: '9px',
                  background: i === 0 ? 'var(--burgundy)' : 'var(--taupe)',
                  border: '2px solid var(--bone)',
                  position: 'relative',
                  zIndex: 1
                }" />
              </div>

              <!-- Description -->
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span :style="{ fontSize: '13px', color: 'var(--espresso)', lineHeight: '1.4' }">{{ ms.description }}</span>
                  <span :style="{
                    fontSize: '8px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--taupe)',
                    border: '1px solid var(--rule)',
                    padding: '1px 6px',
                    flexShrink: 0
                  }">{{ ms.badge }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Coach Summary -->
        <div class="pl-8 flex flex-col max-md:pl-0">
          <div class="flex items-baseline justify-between gap-3 mb-5">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">IV &mdash; AI Coach</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '16px', margin: '2px 0 0' }">教练总结</h3>
            </div>
            <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">本周</div>
          </div>

          <div class="luxury-panel flex-1 p-6">
            <div class="flex items-center gap-2 mb-4">
              <div :style="{
                width: '28px', height: '28px',
                background: 'var(--burgundy)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--bone)',
                fontSize: '12px',
                fontFamily: 'var(--display)'
              }">AI</div>
              <div>
                <div :style="{ fontSize: '12px', color: 'var(--espresso)' }">AI Coach</div>
                <div :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.2em', textTransform: 'uppercase' }">Weekly Summary</div>
              </div>
            </div>

            <div class="luxury-rule mb-4" />

            <p class="luxury-serif" :style="{
              fontSize: '15px',
              fontStyle: 'italic',
              color: 'var(--espresso)',
              lineHeight: '1.75',
              margin: 0
            }">
              {{ aiSummary }}
            </p>

            <div class="luxury-rule mt-5 mb-3" />

            <div class="flex items-center justify-between">
              <span :style="{ fontSize: '9px', color: 'var(--taupe)', letterSpacing: '0.28em', textTransform: 'uppercase' }">Generated 2026-04-27</span>
              <span :style="{
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--moss)',
                fontWeight: '500'
              }">Confidence: High</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
