<script setup>
import TrainerSidebar from '../../components/TrainerSidebar.vue'
import DonutChart from '../../components/DonutChart.vue'
import BarChart from '../../components/BarChart.vue'

const stats = [
  { label: '活跃人数', value: '24', color: 'text-green-500' },
  { label: '平均分', value: '74.5', color: 'text-blue-500' },
  { label: '训练次数', value: '186', color: 'text-yellow-500' },
  { label: '总达标', value: '12', color: 'text-purple-500' },
]

const donutLegend = [
  { label: '优秀 85+', pct: '45%', color: 'bg-green-500' },
  { label: '良好 70-85', pct: '31%', color: 'bg-blue-400' },
  { label: '及格 60-70', pct: '20%', color: 'bg-yellow-400' },
  { label: '待提升 <60', pct: '4%', color: 'bg-red-400' },
]

const members = [
  { name: '知小鹏', score: 2, scoreColor: 'text-red-500' },
  { name: '余雷', score: 78, scoreColor: 'text-green-500' },
  { name: '蒋黛岚', score: 60, scoreColor: 'text-yellow-500' },
]

const materials = [
  { name: '品牌营销与文化宣讲', score: 76 },
  { name: '产品知识：经典系列', score: 83 },
  { name: '异议处理手法与价值重购', score: 81 },
  { name: '没有别处没有行为', score: 44 },
]

function getBarColor(score) {
  if (score >= 80) return 'bg-green-500'
  if (score >= 60) return 'bg-blue-400'
  return 'bg-red-400'
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <TrainerSidebar />

    <main class="flex-1 overflow-y-auto bg-[#fafafa]">
      <div class="max-w-4xl mx-auto px-8 py-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-[28px] font-semibold text-[#1a1a1a] mb-1">培训分析</h1>
          <p class="text-[14px] text-[#64748b] italic">团队表现与教材效果</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div v-for="stat in stats" :key="stat.label"
            class="bg-white rounded-lg p-4 border border-[#e2e8f0] shadow-sm">
            <div :class="['text-[28px] font-bold mb-1', stat.color]">{{ stat.value }}</div>
            <div class="text-[13px] text-[#64748b]">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Charts row -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <!-- Donut: score distribution -->
          <div class="bg-white rounded-lg p-5 border border-[#e2e8f0] shadow-sm">
            <h2 class="text-[14px] font-semibold text-[#1a1a1a] mb-5">成绩分布</h2>
            <div class="flex items-center gap-5">
              <div class="w-32 h-32 relative flex-shrink-0">
                <DonutChart
                  :segments="[45, 31, 20, 4]"
                  :colors="['#22c55e', '#60a5fa', '#facc15', '#f87171']"
                  centerText="74.5"
                />
              </div>
              <div class="space-y-2">
                <div v-for="item in donutLegend" :key="item.label" class="flex items-center gap-2">
                  <div :class="['w-2.5 h-2.5 rounded-full flex-shrink-0', item.color]" />
                  <span class="text-[12px] text-[#1a1a1a]">{{ item.label }}</span>
                  <span class="text-[12px] text-[#94a3b8] ml-auto pl-3">{{ item.pct }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bar: monthly training count -->
          <div class="bg-white rounded-lg p-5 border border-[#e2e8f0] shadow-sm">
            <h2 class="text-[14px] font-semibold text-[#1a1a1a] mb-5">月度练习次数</h2>
            <div class="h-36">
              <BarChart />
            </div>
          </div>
        </div>

        <!-- Bottom row -->
        <div class="grid grid-cols-2 gap-4">
          <!-- Team members -->
          <div class="bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[#e2e8f0]">
              <h2 class="text-[14px] font-semibold text-[#1a1a1a]">团队成员</h2>
            </div>
            <div class="divide-y divide-[#f1f5f9]">
              <div v-for="member in members" :key="member.name"
                class="px-5 py-3.5 flex items-center justify-between hover:bg-[#fafafa] transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[12px] font-semibold text-[#64748b]">
                    {{ member.name[0] }}
                  </div>
                  <span class="text-[13px] text-[#1a1a1a]">{{ member.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-24 h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all"
                      :class="member.score >= 70 ? 'bg-green-500' : member.score >= 60 ? 'bg-yellow-400' : 'bg-red-400'"
                      :style="{ width: Math.max(member.score, 2) + '%' }" />
                  </div>
                  <span :class="['text-[13px] font-bold tabular-nums', member.scoreColor]">{{ member.score }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Material effectiveness -->
          <div class="bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[#e2e8f0]">
              <h2 class="text-[14px] font-semibold text-[#1a1a1a]">教材效果</h2>
            </div>
            <div class="px-5 py-4 space-y-4">
              <div v-for="mat in materials" :key="mat.name">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[12px] text-[#1a1a1a] leading-snug flex-1 pr-3">{{ mat.name }}</span>
                  <span class="text-[12px] font-bold text-[#1a1a1a] tabular-nums flex-shrink-0">{{ mat.score }}</span>
                </div>
                <div class="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div :class="['h-full rounded-full transition-all', getBarColor(mat.score)]"
                    :style="{ width: mat.score + '%' }" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
