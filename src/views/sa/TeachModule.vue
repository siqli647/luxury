<script setup>
import SASidebar from '../../components/SASidebar.vue'
import DonutChart from '../../components/DonutChart.vue'
import { Sparkles } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[#FAFAFA]">
    <SASidebar active="教学模块" />

    <main class="flex-1 overflow-y-auto">
      <div class="px-12 py-10" style="max-width: 1220px;">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-1.5 text-[13px] mb-6">
          <router-link to="/" class="text-[#737373]">首页</router-link>
          <span class="text-black">/</span>
          <span class="text-[#0a0a0a]">教学模块</span>
        </div>

        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-[26px] font-bold text-[#09090B] tracking-tight">教学模块</h1>
            <p class="text-[13px] text-[#71717A] mt-1">AI 推荐的个性化课程学习路径</p>
          </div>
          <button @click="router.push('/roleplay/settings')"
            class="bg-[#18181B] text-white px-5 h-10 rounded-2xl text-[13px] font-medium shadow-sm hover:bg-[#27272a] transition-colors">
            开始实战练习 →
          </button>
        </div>

        <!-- Learning Path Card -->
        <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7] mb-8">
          <!-- Title row -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <Sparkles :size="16" class="text-[#71717A]" />
              <span class="text-[14px] font-semibold text-[#09090B]">AI 推荐学习路径</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-[#18181B]" />
                <span class="text-[11px] text-[#71717A]">已完成</span>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 rounded-full bg-[#D4D4D8]" />
                <span class="text-[11px] text-[#71717A]">未完成</span>
              </div>
            </div>
          </div>

          <!-- Tree Area (absolute positioned nodes) -->
          <div class="relative h-[260px] w-full overflow-x-auto">
            <div class="relative min-w-[1000px] h-full">
              <!-- Lines (horizontal and vertical connectors) -->
              <!-- Root → branch point -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[100px]" style="left:105px; top:119px;" />
              <!-- Vertical at first branch -->
              <div class="absolute bg-[#E4E4E7] w-0.5 h-[115px]" style="left:204px; top:58px;" />
              <!-- Branch → 产品知识 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[99px]" style="left:206px; top:57px;" />
              <!-- Branch → 沟通技巧 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[99px]" style="left:206px; top:172px;" />

              <!-- 产品知识 → second branch -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[110px]" style="left:315px; top:57px;" />
              <!-- Vertical at second branch (top) -->
              <div class="absolute bg-[#E4E4E7] w-0.5 h-[45px]" style="left:424px; top:35px;" />
              <!-- → 异议处理 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[109px]" style="left:426px; top:34px;" />
              <!-- → 成交推进 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[109px]" style="left:426px; top:79px;" />

              <!-- 沟通技巧 → third branch -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[110px]" style="left:315px; top:172px;" />
              <!-- Vertical at third branch -->
              <div class="absolute bg-[#E4E4E7] w-0.5 h-[45px]" style="left:424px; top:150px;" />
              <!-- → 高端客户 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[109px]" style="left:426px; top:149px;" />
              <!-- → 客户维护 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[109px]" style="left:426px; top:194px;" />

              <!-- 异议处理 → 谈判策略 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[210px]" style="left:545px; top:34px;" />
              <!-- 高端客户 → 私人定制 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[210px]" style="left:545px; top:149px;" />
              <!-- 谈判策略 → 品牌宣传 -->
              <div class="absolute bg-[#E4E4E7] h-0.5 w-[210px]" style="left:765px; top:34px;" />

              <!-- Nodes -->
              <!-- 破冰与信任建立 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:57px; top:115px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#18181B]" />
                <div class="px-[10px] py-[3px] rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#09090B]">破冰与信任建立</span>
                </div>
              </div>

              <!-- 产品知识 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:278px; top:53px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#18181B]" />
                <div class="px-[10px] py-[3px] rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#09090B]">产品知识</span>
                </div>
              </div>

              <!-- 沟通技巧 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:278px; top:168px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#18181B]" />
                <div class="px-[10px] py-[3px] rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#09090B]">沟通技巧</span>
                </div>
              </div>

              <!-- 异议处理 (current - green) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:28px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#038f46]" />
                <div class="px-[10px] py-[3px] rounded-xl bg-[#ddf0c9] border border-[#038f46]">
                  <span class="text-[11px] font-semibold text-[#038f46]">异议处理</span>
                </div>
              </div>

              <!-- 成交推进 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:75px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">成交推进</span>
                </div>
              </div>

              <!-- 高端客户 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:145px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">高端客户</span>
                </div>
              </div>

              <!-- 客户维护 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:190px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">客户维护</span>
                </div>
              </div>

              <!-- 谈判策略 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:728px; top:30px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">谈判策略</span>
                </div>
              </div>

              <!-- 私人定制 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:728px; top:145px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">私人定制</span>
                </div>
              </div>

              <!-- 品牌宣传 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:948px; top:30px;">
                <div class="w-[10px] h-[10px] rounded-full bg-[#D4D4D8]" />
                <div class="px-[10px] py-[3px] rounded-xl border border-[#E4E4E7]">
                  <span class="text-[11px] font-semibold text-[#A1A1AA]">品牌宣传</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Section -->
        <div class="bg-white rounded-2xl border border-[#E4E4E7] shadow-sm py-3">
          <div class="flex">
            <!-- Left: Total progress -->
            <div class="flex-1 px-5 py-2">
              <h2 class="text-[16px] font-semibold text-[#18181B] mb-4">总体完成度</h2>
              <div class="flex items-center gap-4">
                <!-- CSS Donut 90x90 -->
                <div class="relative flex-shrink-0" style="width:90px; height:90px;">
                  <svg viewBox="0 0 36 36" class="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" stroke-width="4" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#18181B" stroke-width="4"
                      stroke-dasharray="88" stroke-dashoffset="49.3" stroke-linecap="round" />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-[14px] font-bold text-[#09090B]">44%</span>
                  </div>
                </div>
                <div>
                  <div class="flex items-baseline gap-2">
                    <span class="text-[28px] font-bold text-[#09090B]">4</span>
                    <span class="text-[28px] font-normal text-[#71717A]">/ 9</span>
                  </div>
                  <p class="text-[12px] text-[#A1A1AA] italic">课程已完成</p>
                </div>
              </div>
            </div>

            <!-- Vertical divider -->
            <div class="w-px bg-[#E4E4E7]" />

            <!-- Right: Current module -->
            <div class="flex-1 px-5 py-2 flex items-center">
              <div class="w-full">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[13px] font-medium text-[#71717A]">当前模块</span>
                  <div class="px-[10px] py-[3px] rounded-xl bg-[#DDF0C9] border border-[#038f46]">
                    <span class="text-[11px] font-semibold text-[#038f46]">进行中</span>
                  </div>
                </div>
                <h3 class="text-[16px] font-semibold text-[#09090B] mb-3">异议处理与价值重构</h3>
                <div class="flex items-center gap-[10px] mb-2">
                  <div class="flex-1 h-2 bg-[#F4F4F5] rounded">
                    <div class="h-full bg-[#18181B] rounded" style="width: 60%;" />
                  </div>
                  <span class="text-[13px] font-semibold text-[#09090B]">60%</span>
                </div>
                <p class="text-[12px] text-[#A1A1AA] italic">3 / 5 小节已完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
