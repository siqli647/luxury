<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import RadarChart from '../../components/RadarChart.vue'
import DonutChart from '../../components/DonutChart.vue'
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  Brain,
  Clock3,
  Flame,
  GraduationCap,
  Search,
  ShieldAlert,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-vue-next'
import {
  saMatrix,
  saSegments,
  saSummary,
  saWatchlist,
  scoreDistribution,
  skillDimensions,
  topStrengths,
  topWeaknesses,
} from '../../data/dashboardData'

const summaryCards = [
  { label: 'SA 总人数', value: saSummary.total, unit: '人', change: '+4', icon: Users },
  { label: '平均 Purchase Intent', value: saSummary.avgPurchaseIntent, unit: '/100', change: '+8.4%', icon: Activity },
  { label: '人均训练次数', value: saSummary.avgTraining, unit: '次', change: '+3.6', icon: Flame },
  { label: '进步率', value: saSummary.progressRate, unit: '%', change: '30 天', icon: TrendingUp },
]

const watchIcons = {
  '高潜力 SA': BadgeCheck,
  '长期低活跃 SA': Clock3,
  '高频低分 SA': ShieldAlert,
  '需要补课的 SA': GraduationCap,
}

const typeColors = {
  '高潜力 SA': '#536348',
  '长期低活跃 SA': '#7A6652',
  '高频低分 SA': '#6B3A3A',
  '需要补课的 SA': '#B18A4A',
}

function widthFor(value) {
  return `${value}%`
}
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <TrainerSidebar />

    <!-- Master-detail split: left index + right detail -->
    <div class="flex flex-1 overflow-hidden max-lg:flex-col max-lg:overflow-visible">

      <!-- ====== LEFT INDEX COLUMN — Personnel File Tabs ====== -->
      <aside class="w-[280px] shrink-0 border-r border-[rgba(61,46,31,0.22)] bg-[rgba(250,248,243,0.92)] overflow-y-auto max-lg:hidden">
        <div class="px-5 pt-8 pb-6">
          <div class="luxury-eyebrow mb-3">SA Analytics</div>
          <h1 class="luxury-display text-[28px] leading-[1.08] text-[#3D2E1F]">SA 分析</h1>
          <p class="luxury-serif italic text-[14px] leading-5 text-[#7A6652] mt-3">
            人才档案 — 快速识别与干预
          </p>
        </div>

        <div class="h-px bg-[rgba(61,46,31,0.14)] mx-5" />

        <!-- Watch group cards -->
        <div class="px-5 py-5 space-y-2.5">
          <div class="text-[10px] tracking-[0.28em] uppercase text-[#A89584] mb-3">Watch Groups</div>
          <div
            v-for="segment in saSegments"
            :key="segment.label"
            class="flex items-start gap-3 py-3.5 px-3 bg-[rgba(245,240,232,0.5)] border border-[rgba(61,46,31,0.08)] hover:border-[rgba(61,46,31,0.22)] transition-colors cursor-default"
          >
            <div class="w-[2px] self-stretch shrink-0" :style="{ backgroundColor: segment.color }" />
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline justify-between gap-2">
                <span class="text-[12px] text-[#3D2E1F] leading-4">{{ segment.label }}</span>
                <span class="luxury-display text-[26px] leading-none shrink-0" :style="{ color: segment.color }">{{ segment.value }}</span>
              </div>
              <p class="text-[11px] text-[#7A6652] leading-4 mt-1.5">{{ segment.note }}</p>
            </div>
          </div>
        </div>

        <div class="h-px bg-[rgba(61,46,31,0.14)] mx-5" />

        <!-- Filter chips -->
        <div class="px-5 py-5">
          <div class="text-[10px] tracking-[0.28em] uppercase text-[#A89584] mb-3">Filters</div>
          <div class="flex items-center gap-2.5 h-9 border-b border-[rgba(61,46,31,0.12)] mb-3">
            <Search :size="14" class="text-[#A89584]" />
            <span class="text-[11px] text-[#7A6652]">搜索 SA / 门店</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#6B3A3A]">异议处理</span>
            <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#536348]">本周活跃</span>
            <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#7A6652]">上海区</span>
          </div>
        </div>
      </aside>

      <!-- ====== RIGHT DETAIL AREA ====== -->
      <main class="flex-1 overflow-y-auto max-lg:overflow-visible">
        <div class="max-w-[960px] mx-auto px-6 lg:px-8 py-7 max-sm:px-3 max-sm:py-4">

          <!-- Back link -->
          <router-link to="/trainer" class="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] text-[#7A6652] hover:text-[#3D2E1F] mb-6">
            <ArrowLeft :size="13" />
            返回团队总览
          </router-link>

          <!-- Mobile-only header (hidden on lg+) -->
          <div class="lg:hidden mb-6">
            <div class="luxury-eyebrow mb-2">SA Analytics · Talent Dossier</div>
            <h1 class="luxury-display text-[30px] leading-[1.06] text-[#3D2E1F]">SA 分析</h1>
            <p class="luxury-serif italic text-[15px] leading-5 text-[#7A6652] mt-2">
              管理者用这一页快速识别高潜力、低活跃、高频低分与需要补课的 SA
            </p>
            <!-- Mobile watch groups -->
            <div class="grid grid-cols-2 gap-2 mt-5 max-sm:grid-cols-1">
              <div
                v-for="segment in saSegments"
                :key="'m-' + segment.label"
                class="flex items-start gap-2.5 py-3 px-3 border border-[rgba(61,46,31,0.1)] bg-[rgba(245,240,232,0.5)]"
              >
                <div class="w-[2px] self-stretch shrink-0" :style="{ backgroundColor: segment.color }" />
                <div class="flex-1">
                  <div class="flex items-baseline justify-between">
                    <span class="text-[11px] text-[#3D2E1F]">{{ segment.label }}</span>
                    <span class="luxury-display text-[22px] leading-none" :style="{ color: segment.color }">{{ segment.value }}</span>
                  </div>
                  <p class="text-[10px] text-[#7A6652] mt-1">{{ segment.note }}</p>
                </div>
              </div>
            </div>
            <!-- Mobile filter chips -->
            <div class="flex items-center gap-2 mt-4 flex-wrap">
              <Search :size="13" class="text-[#A89584]" />
              <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#6B3A3A]">异议处理</span>
              <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#536348]">本周活跃</span>
              <span class="border border-[rgba(61,46,31,0.16)] px-2 py-0.5 text-[10px] text-[#7A6652]">上海区</span>
            </div>
          </div>

          <!-- ═══ SECTION I — Summary KPI Strip ═══ -->
          <section class="reveal-up mb-8">
            <div class="flex items-center h-[100px] max-sm:flex-wrap max-sm:h-auto max-sm:gap-y-5 max-sm:gap-x-0">
              <template v-for="(card, i) in summaryCards" :key="card.label">
                <div class="flex-1 flex flex-col justify-center max-sm:flex-[1_1_50%] max-sm:min-w-[140px]">
                  <div class="text-[10px] tracking-[0.26em] uppercase text-[#A89584] mb-2">{{ card.label }}</div>
                  <div class="flex items-baseline gap-1.5">
                    <span class="luxury-display text-[38px] leading-none text-[#3D2E1F] max-sm:text-[30px]">{{ card.value }}</span>
                    <span class="text-[11px] text-[#7A6652]">{{ card.unit }}</span>
                  </div>
                  <div class="text-[11px] text-[#536348] mt-1.5">{{ card.change }}</div>
                </div>
                <!-- Thin vertical hairline between items -->
                <div v-if="i < summaryCards.length - 1" class="w-px h-12 bg-[rgba(61,46,31,0.16)] mx-4 max-sm:hidden" />
              </template>
            </div>
          </section>

          <div class="h-px bg-[rgba(61,46,31,0.18)] mb-8" />

          <!-- ═══ SECTION II — Capability Map ═══ -->
          <section class="reveal-up mb-8">
            <div class="luxury-eyebrow mb-2">I — Capability Map</div>
            <h2 class="luxury-display text-[24px] text-[#3D2E1F] mb-5">SA 能力分析</h2>

            <div class="flex gap-6 max-md:flex-col">
              <!-- Left: Radar chart -->
              <div class="w-[55%] max-md:w-full">
                <div class="luxury-panel p-5">
                  <div class="h-[260px]">
                    <RadarChart
                      :labels="skillDimensions.map((item) => item.name)"
                      :data="skillDimensions.map((item) => item.score)"
                    />
                  </div>
                  <!-- Inline legend -->
                  <div class="grid grid-cols-3 gap-x-4 gap-y-2 mt-4 pt-4 border-t border-[rgba(61,46,31,0.1)] max-sm:grid-cols-2">
                    <div v-for="dim in skillDimensions" :key="dim.name" class="flex items-baseline justify-between">
                      <span class="text-[11px] text-[#7A6652]">{{ dim.name }}</span>
                      <span class="luxury-display text-[16px] text-[#3D2E1F] ml-1">{{ dim.score }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Strengths / Weaknesses stacked -->
              <div class="w-[45%] max-md:w-full flex flex-col">
                <!-- Strengths -->
                <div class="mb-5">
                  <div class="flex items-center gap-2 mb-3">
                    <BadgeCheck :size="15" class="text-[#536348]" />
                    <span class="text-[10px] tracking-[0.26em] uppercase text-[#536348]">Strengths</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="item in topStrengths" :key="item.label">
                      <div class="flex justify-between items-baseline mb-1.5">
                        <span class="text-[12px] text-[#3D2E1F]">{{ item.label }}</span>
                        <span class="luxury-display text-[20px] text-[#536348]">{{ item.value }}</span>
                      </div>
                      <div class="h-[3px] bg-[rgba(61,46,31,0.08)]">
                        <div class="h-[3px] bg-[#536348]" :style="{ width: widthFor(item.value) }" />
                      </div>
                      <p class="text-[11px] text-[#7A6652] leading-4 mt-1">{{ item.insight }}</p>
                    </div>
                  </div>
                </div>

                <div class="h-px bg-[rgba(61,46,31,0.14)] mb-5" />

                <!-- Weaknesses -->
                <div>
                  <div class="flex items-center gap-2 mb-3">
                    <AlertCircle :size="15" class="text-[#6B3A3A]" />
                    <span class="text-[10px] tracking-[0.26em] uppercase text-[#6B3A3A]">Weaknesses</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="item in topWeaknesses" :key="item.label">
                      <div class="flex justify-between items-baseline mb-1.5">
                        <span class="text-[12px] text-[#3D2E1F]">{{ item.label }}</span>
                        <span class="luxury-display text-[20px] text-[#6B3A3A]">{{ item.value }}</span>
                      </div>
                      <div class="h-[3px] bg-[rgba(61,46,31,0.08)]">
                        <div class="h-[3px] bg-[#6B3A3A]" :style="{ width: widthFor(item.value) }" />
                      </div>
                      <p class="text-[11px] text-[#7A6652] leading-4 mt-1">{{ item.insight }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="h-px bg-[rgba(61,46,31,0.18)] mb-8" />

          <!-- ═══ SECTION III — Distribution ═══ -->
          <section class="reveal-up mb-8">
            <div class="luxury-eyebrow mb-2">II — Score Distribution</div>
            <h2 class="luxury-display text-[24px] text-[#3D2E1F] mb-5">高中低分人群与能力分布</h2>

            <div class="flex gap-6 max-md:flex-col">
              <!-- Left: Donut -->
              <div class="w-[35%] max-md:w-full">
                <div class="luxury-panel p-5 flex flex-col items-center">
                  <div class="w-[150px] h-[150px] mb-5">
                    <DonutChart
                      :segments="scoreDistribution.map((item) => item.value)"
                      :colors="scoreDistribution.map((item) => item.color)"
                      centerText="76.8"
                    />
                  </div>
                  <div class="w-full space-y-3">
                    <div v-for="item in scoreDistribution" :key="item.label" class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="w-[6px] h-[6px]" :style="{ backgroundColor: item.color }" />
                        <span class="text-[12px] text-[#3D2E1F]">{{ item.label }}</span>
                      </div>
                      <span class="luxury-display text-[18px] text-[#3D2E1F]">{{ item.value }}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Stacked horizontal bars per skill -->
              <div class="w-[65%] max-md:w-full">
                <div class="luxury-panel p-5">
                  <div class="text-[10px] tracking-[0.26em] uppercase text-[#A89584] mb-4">Capability Distribution</div>
                  <div class="space-y-3.5">
                    <div v-for="row in saMatrix" :key="row.label">
                      <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[12px] text-[#3D2E1F]">{{ row.label }}</span>
                        <span class="text-[10px] text-[#7A6652]">高 {{ row.high }} / 中 {{ row.mid }} / 低 {{ row.low }}</span>
                      </div>
                      <div class="flex h-[14px] border border-[rgba(61,46,31,0.1)]">
                        <div class="bg-[#536348] transition-all" :style="{ width: widthFor(row.high) }" />
                        <div class="bg-[#B18A4A] transition-all" :style="{ width: widthFor(row.mid) }" />
                        <div class="bg-[#6B3A3A] transition-all" :style="{ width: widthFor(row.low) }" />
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-5 mt-4 pt-3 border-t border-[rgba(61,46,31,0.08)] text-[10px] text-[#7A6652]">
                    <span class="flex items-center gap-1.5"><i class="w-[6px] h-[6px] bg-[#536348] not-italic inline-block" />高分</span>
                    <span class="flex items-center gap-1.5"><i class="w-[6px] h-[6px] bg-[#B18A4A] not-italic inline-block" />中分</span>
                    <span class="flex items-center gap-1.5"><i class="w-[6px] h-[6px] bg-[#6B3A3A] not-italic inline-block" />低分</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="h-px bg-[rgba(61,46,31,0.18)] mb-8" />

          <!-- ═══ SECTION IV — Action Dossier Table ═══ -->
          <section class="reveal-up mb-8">
            <div class="flex items-center justify-between mb-5">
              <div>
                <div class="luxury-eyebrow mb-2">III — Action Dossier</div>
                <h2 class="luxury-display text-[24px] text-[#3D2E1F]">需要管理动作的 SA</h2>
              </div>
              <GraduationCap :size="20" class="motion-icon-slow text-[#6B3A3A]" />
            </div>

            <!-- Dossier table -->
            <div class="luxury-panel overflow-hidden">
              <!-- Table header -->
              <div class="overflow-x-auto">
                <div class="grid grid-cols-[1.2fr_100px_80px_80px_1.4fr] min-w-[700px] bg-[#EFE7D9] text-[10px] tracking-[0.22em] uppercase text-[#7A6652] border-b border-[rgba(61,46,31,0.16)]">
                  <div class="px-5 py-3">Personnel</div>
                  <div class="px-3 py-3">Classification</div>
                  <div class="px-3 py-3">PI Score</div>
                  <div class="px-3 py-3">Sessions</div>
                  <div class="px-3 py-3">Recommended Action</div>
                </div>

                <!-- Table rows -->
                <div
                  v-for="(sa, idx) in saWatchlist"
                  :key="sa.name"
                  class="grid grid-cols-[1.2fr_100px_80px_80px_1.4fr] min-w-[700px] items-center text-[13px] text-[#3D2E1F]"
                  :class="idx < saWatchlist.length - 1 ? 'border-b border-[rgba(61,46,31,0.08)]' : ''"
                >
                  <!-- Name + Store -->
                  <div class="px-5 py-4 flex items-center gap-3">
                    <div class="w-[2px] h-8 shrink-0" :style="{ backgroundColor: typeColors[sa.type] || '#7A6652' }" />
                    <div>
                      <div class="text-[13px] text-[#3D2E1F]">{{ sa.name }}</div>
                      <div class="text-[10px] tracking-[0.08em] text-[#A89584] mt-0.5">{{ sa.store }}</div>
                    </div>
                  </div>

                  <!-- Type tag -->
                  <div class="px-3 py-4">
                    <span
                      class="inline-block px-2 py-0.5 text-[10px] tracking-[0.06em] border"
                      :style="{
                        color: typeColors[sa.type] || '#7A6652',
                        borderColor: (typeColors[sa.type] || '#7A6652') + '44',
                      }"
                    >{{ sa.type.replace(' SA', '') }}</span>
                  </div>

                  <!-- PI Score — large display number -->
                  <div class="px-3 py-4">
                    <span
                      class="luxury-display text-[28px] leading-none"
                      :class="sa.purchaseIntent < 60 ? 'text-[#6B3A3A]' : sa.purchaseIntent >= 80 ? 'text-[#536348]' : 'text-[#3D2E1F]'"
                    >{{ sa.purchaseIntent }}</span>
                  </div>

                  <!-- Training count -->
                  <div class="px-3 py-4">
                    <div class="luxury-display text-[18px] text-[#3D2E1F]">{{ sa.training }}</div>
                    <div class="text-[10px] mt-0.5" :class="sa.progress.startsWith('-') ? 'text-[#6B3A3A]' : 'text-[#536348]'">{{ sa.progress }}</div>
                  </div>

                  <!-- Suggested action -->
                  <div class="px-3 py-4 text-[12px] text-[#7A6652] leading-5">
                    {{ sa.need }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Classified stamp feel -->
            <div class="flex items-center justify-between mt-4 text-[10px] tracking-[0.18em] uppercase text-[#A89584]">
              <span>{{ saWatchlist.length }} personnel flagged</span>
              <span>Classification: Internal</span>
            </div>
          </section>

        </div>
      </main>
    </div>
  </div>
</template>
