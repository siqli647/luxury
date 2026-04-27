<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import RadarChart from '../../components/RadarChart.vue'
import DonutChart from '../../components/DonutChart.vue'
import { useRouter } from 'vue-router'
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  LineChart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-vue-next'
import {
  courseAnalytics,
  hardPersonas,
  scenarioAnalytics,
  scoreDistribution,
  skillDimensions,
  teamOverview,
  teamTrend,
  topStrengths,
  topWeaknesses,
} from '../../data/dashboardData'

const router = useRouter()

const overviewCards = [
  { label: '团队人数', value: teamOverview.teamSize, unit: 'SA', change: '+4 本月', icon: Users },
  { label: '人均训练次数', value: teamOverview.avgTraining, unit: '次', change: '+3.6 周环比', icon: Flame },
  { label: '平均 Purchase Intent', value: teamOverview.avgPurchaseIntent, unit: '/100', change: teamOverview.weeklyChange, icon: Target },
  { label: '训练完成率', value: teamOverview.completion, unit: '%', change: teamOverview.monthlyChange, icon: TrendingUp },
]

const trendMax = Math.max(...teamTrend.map((item) => item.training))

function widthFor(value) {
  return `${value}%`
}

function trainingHeight(value) {
  return `${Math.max(18, Math.round((value / trendMax) * 96))}%`
}

function toneClass(tone) {
  return {
    burgundy: 'bg-[#6B3A3A]',
    moss: 'bg-[#536348]',
    gold: 'bg-[#B18A4A]',
    umber: 'bg-[#7A6652]',
  }[tone]
}
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <TrainerSidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible">
      <div class="max-w-[1280px] mx-auto px-5 lg:px-8 py-6 max-sm:px-3 max-sm:py-4">

        <!-- ROW 1 — MASTHEAD STRIP -->
        <section class="reveal-up mb-6">
          <div class="flex flex-col xl:flex-row xl:items-end gap-6 xl:gap-0">

            <!-- Left 60%: Editorial headline -->
            <div class="xl:w-[60%] xl:pr-10">
              <div class="luxury-eyebrow mb-3">Trainer Dashboard &middot; APR 2026</div>
              <h1 class="luxury-display text-[42px] lg:text-[52px] leading-[1.02] text-[#3D2E1F] max-sm:text-[30px]">
                团队训练总览
              </h1>
              <p class="luxury-serif italic text-[17px] leading-7 text-[#7A6652] max-w-2xl mt-3 max-sm:text-[15px] max-sm:leading-6">
                组织洞察层以训练次数、能力维度、场景失败率和 purchase intent 共同判断团队 readiness。
              </p>
              <button
                @click="router.push('/trainer/analytics')"
                class="group mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-[#6B3A3A] hover:text-[#3D2E1F] transition-colors border-b border-[#6B3A3A] pb-0.5">
                SA 分析页
                <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <!-- Right 40%: 2x2 KPI stat blocks -->
            <div class="xl:w-[40%] grid grid-cols-2 gap-x-8 gap-y-5 xl:border-l xl:border-[rgba(61,46,31,0.15)] xl:pl-8 max-sm:gap-x-4 max-sm:gap-y-4">
              <div v-for="card in overviewCards" :key="card.label">
                <div class="text-[10px] tracking-[0.28em] uppercase text-[#A89584] mb-1.5">{{ card.label }}</div>
                <div class="flex items-baseline gap-1.5">
                  <span class="luxury-display text-[38px] leading-none text-[#3D2E1F] max-sm:text-[30px]">{{ card.value }}</span>
                  <span class="text-[11px] text-[#7A6652]">{{ card.unit }}</span>
                </div>
                <div class="flex items-center gap-1.5 mt-1.5 text-[11px] text-[#536348]">
                  <TrendingUp :size="12" />
                  <span>{{ card.change }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="luxury-rule mt-6"></div>
        </section>

        <!-- ROW 2 — MAIN EDITORIAL SPREAD (3-column asymmetric bento) -->
        <section class="grid grid-cols-1 xl:grid-cols-[35%_35%_30%] gap-5 mb-6 reveal-up-delay max-sm:gap-4">

          <!-- LEFT COLUMN: Full-height trend chart -->
          <div class="luxury-panel p-5 flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="luxury-eyebrow">I — Trend</div>
                <h2 class="luxury-display text-[24px] text-[#3D2E1F] mt-1">周 / 月趋势变化</h2>
              </div>
              <LineChart :size="20" class="motion-icon-slow text-[#6B3A3A]" />
            </div>
            <div class="grid grid-cols-6 gap-3 flex-1 min-h-[300px] items-end border-b border-[rgba(61,46,31,0.18)] pb-3 max-sm:gap-2 max-sm:min-h-[220px]">
              <div v-for="item in teamTrend" :key="item.label" class="h-full flex flex-col justify-end gap-2">
                <div class="text-center text-[11px] text-[#7A6652]">{{ item.purchaseIntent }}</div>
                <div class="relative h-full flex items-end justify-center">
                  <div class="w-7 bg-[#E8DFCD] h-full absolute bottom-0 opacity-70 max-sm:w-5" />
                  <div
                    class="w-7 bg-[#3D2E1F] relative transition-all duration-700 max-sm:w-5"
                    :style="{ height: trainingHeight(item.training) }" />
                </div>
                <div class="text-center text-[9px] tracking-[0.24em] text-[#A89584]">{{ item.label }}</div>
              </div>
            </div>
            <div class="flex items-center justify-between text-[11px] text-[#7A6652] mt-3">
              <span>柱状：训练次数</span>
              <span>数字：PI 均值</span>
            </div>
          </div>

          <!-- CENTER COLUMN: Radar (top) + Donut distribution (bottom) -->
          <div class="flex flex-col gap-5">
            <div class="luxury-panel p-5 flex-1">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="luxury-eyebrow">II — Capability</div>
                  <h2 class="luxury-display text-[24px] text-[#3D2E1F] mt-1">团队能力分析</h2>
                </div>
                <Brain :size="20" class="motion-icon-slow text-[#6B3A3A]" />
              </div>
              <div class="h-[210px]">
                <RadarChart
                  :labels="skillDimensions.map((item) => item.name)"
                  :data="skillDimensions.map((item) => item.score)"
                />
              </div>
            </div>

            <div class="luxury-panel p-5">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="luxury-eyebrow">III — Distribution</div>
                  <h2 class="luxury-display text-[22px] text-[#3D2E1F] mt-1">高中低分人群分布</h2>
                </div>
                <Users :size="18" class="motion-icon text-[#6B3A3A]" />
              </div>
              <div class="flex items-center gap-4">
                <div class="w-[90px] h-[90px] shrink-0">
                  <DonutChart
                    :segments="scoreDistribution.map((item) => item.value)"
                    :colors="scoreDistribution.map((item) => item.color)"
                    centerText="42"
                  />
                </div>
                <div class="flex-1 space-y-2.5">
                  <div v-for="item in scoreDistribution" :key="item.label" class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 shrink-0" :style="{ backgroundColor: item.color }" />
                      <span class="text-[12px] text-[#3D2E1F]">{{ item.label }}</span>
                    </div>
                    <span class="text-[12px] text-[#7A6652] tabular-nums">{{ item.value }}%</span>
                  </div>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-[rgba(61,46,31,0.1)] text-[11px] text-[#7A6652] leading-5">
                高分组集中在产品知识与情绪感知；低分组主要卡在价格异议与成交承诺。
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Strengths (top) + Weaknesses (bottom) -->
          <div class="flex flex-col gap-5">
            <div class="luxury-panel p-5 flex-1">
              <div class="flex items-center gap-2 mb-4">
                <Sparkles :size="15" class="text-[#536348] motion-icon" />
                <h3 class="luxury-display text-[22px] text-[#3D2E1F]">Top Strengths</h3>
              </div>
              <div class="space-y-4">
                <div v-for="item in topStrengths.slice(0, 2)" :key="item.label">
                  <div class="flex justify-between items-baseline mb-1.5">
                    <span class="text-[13px] text-[#3D2E1F]">{{ item.label }}</span>
                    <span class="luxury-display text-[22px] text-[#536348]">{{ item.value }}</span>
                  </div>
                  <div class="h-px bg-[rgba(61,46,31,0.14)] mb-1.5">
                    <div class="h-px bg-[#536348]" :style="{ width: widthFor(item.value) }" />
                  </div>
                  <p class="text-[11px] text-[#7A6652] leading-5">{{ item.insight }}</p>
                </div>
              </div>
            </div>

            <div class="luxury-panel p-5 flex-1">
              <div class="flex items-center gap-2 mb-4">
                <AlertTriangle :size="15" class="text-[#6B3A3A] motion-icon" />
                <h3 class="luxury-display text-[22px] text-[#3D2E1F]">Top Weaknesses</h3>
              </div>
              <div class="space-y-4">
                <div v-for="item in topWeaknesses.slice(0, 2)" :key="item.label">
                  <div class="flex justify-between items-baseline mb-1.5">
                    <span class="text-[13px] text-[#3D2E1F]">{{ item.label }}</span>
                    <span class="luxury-display text-[22px] text-[#6B3A3A]">{{ item.value }}</span>
                  </div>
                  <div class="h-px bg-[rgba(61,46,31,0.14)] mb-1.5">
                    <div class="h-px bg-[#6B3A3A]" :style="{ width: widthFor(item.value) }" />
                  </div>
                  <p class="text-[11px] text-[#7A6652] leading-5">{{ item.insight }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ROW 3 — BOTTOM STRIP -->
        <section class="grid grid-cols-1 xl:grid-cols-[55%_45%] gap-5">
          <div class="luxury-panel p-5 overflow-x-auto">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="luxury-eyebrow">IV — Content Effect</div>
                <h2 class="luxury-display text-[24px] text-[#3D2E1F] mt-1">训练内容与课程完成率</h2>
              </div>
              <BookOpen :size="20" class="motion-icon text-[#6B3A3A]" />
            </div>
            <div class="grid grid-cols-[1fr_100px_72px] gap-3 text-[10px] tracking-[0.2em] uppercase text-[#A89584] pb-2 border-b border-[rgba(61,46,31,0.18)] max-sm:min-w-[400px]">
              <span>课程</span>
              <span>完成率</span>
              <span class="text-right">提升</span>
            </div>
            <div v-for="course in courseAnalytics" :key="course.title" class="grid grid-cols-[1fr_100px_72px] gap-3 items-center py-3 border-b border-[rgba(61,46,31,0.08)] last:border-0 max-sm:min-w-[400px]">
              <div>
                <div class="text-[13px] text-[#3D2E1F] leading-snug">{{ course.title }}</div>
                <div class="text-[10px] tracking-[0.14em] uppercase text-[#A89584] mt-0.5">{{ course.status }}</div>
              </div>
              <div>
                <div class="h-px bg-[rgba(61,46,31,0.14)]">
                  <div class="h-px bg-[#3D2E1F]" :style="{ width: widthFor(course.completion) }" />
                </div>
                <div class="text-[10px] text-[#7A6652] mt-1.5 tabular-nums">{{ course.completion }}%</div>
              </div>
              <div class="text-right">
                <span class="luxury-display text-[22px] text-[#536348]">{{ course.lift }}</span>
              </div>
            </div>
          </div>

          <div class="luxury-panel p-5">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="luxury-eyebrow">V — Scenario Lab</div>
                <h2 class="luxury-display text-[24px] text-[#3D2E1F] mt-1">高频场景与最难 Persona</h2>
              </div>
              <Target :size="20" class="motion-icon-slow text-[#6B3A3A]" />
            </div>
            <div class="grid grid-cols-2 gap-2.5 mb-4 max-sm:grid-cols-1">
              <div v-for="scene in scenarioAnalytics" :key="scene.label" class="border border-[rgba(61,46,31,0.12)] bg-[#F5F0E8] p-3">
                <div class="flex items-center gap-1.5">
                  <span :class="['w-1.5 h-1.5', toneClass(scene.tone)]" />
                  <span class="text-[12px] text-[#3D2E1F]">{{ scene.label }}</span>
                </div>
                <div class="flex items-baseline justify-between mt-2.5">
                  <span class="luxury-display text-[26px] text-[#3D2E1F]">{{ scene.count }}</span>
                  <span class="text-[10px] text-[#6B3A3A]">失败 {{ scene.failure }}%</span>
                </div>
              </div>
            </div>
            <div class="border-t border-[rgba(61,46,31,0.15)] pt-3 space-y-0">
              <div v-for="persona in hardPersonas" :key="persona.name" class="flex items-center justify-between py-2.5 border-b border-[rgba(61,46,31,0.08)] last:border-0">
                <div>
                  <div class="text-[12px] text-[#3D2E1F]">{{ persona.name }}</div>
                  <div class="text-[10px] text-[#7A6652] mt-0.5">高频 objection：{{ persona.objection }}</div>
                </div>
                <div class="luxury-display text-[22px] text-[#6B3A3A]">{{ persona.failRate }}%</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>
