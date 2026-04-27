<script setup>
import SASidebar from '../../components/SASidebar.vue'
import DonutChart from '../../components/DonutChart.vue'
import { Sparkles } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar active="教学模块" />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible">
      <div class="px-12 py-10 max-sm:px-3 max-sm:py-4" style="max-width: 1220px;">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-[13px] mb-8" style="color: var(--umber);">
          <router-link to="/" class="hover:opacity-70 transition-opacity" style="color: var(--umber);">首页</router-link>
          <span style="color: var(--taupe);">/</span>
          <span style="color: var(--ink);">教学模块</span>
        </div>

        <!-- Header -->
        <div class="flex items-center justify-between mb-10 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <div>
            <h1 class="luxury-display max-sm:text-[26px]" style="font-size: 34px; color: var(--espresso);">教学模块</h1>
            <p class="luxury-serif italic mt-1" style="font-size: 15px; color: var(--umber);">AI 推荐的个性化课程学习路径</p>
          </div>
          <button @click="router.push('/roleplay/settings')"
            class="px-6 py-2.5 text-[13px] tracking-widest uppercase hover:opacity-90 transition-opacity"
            style="background: var(--espresso); color: var(--bone);">
            开始实战练习
          </button>
        </div>

        <!-- Learning Path Card -->
        <div class="luxury-panel p-5 mb-8">
          <!-- Title row -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <Sparkles :size="16" style="color: var(--umber);" />
              <span class="luxury-display" style="font-size: 16px; color: var(--espresso);">AI 推荐学习路径</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1.5">
                <div class="w-2 h-2" style="background: var(--espresso);" />
                <span class="text-[11px]" style="color: var(--umber);">已完成</span>
              </div>
              <div class="flex items-center gap-1.5">
                <div class="w-2 h-2" style="background: var(--burgundy); border: 1px solid var(--burgundy);" />
                <span class="text-[11px]" style="color: var(--umber);">进行中</span>
              </div>
              <div class="flex items-center gap-1.5">
                <div class="w-2 h-2" style="background: var(--stone);" />
                <span class="text-[11px]" style="color: var(--umber);">未完成</span>
              </div>
            </div>
          </div>

          <!-- Tree Area (absolute positioned nodes) -->
          <div class="relative h-[260px] w-full overflow-x-auto">
            <div class="relative min-w-[1000px] h-full">
              <!-- Lines (horizontal and vertical connectors) -->
              <!-- Root to branch point -->
              <div class="absolute h-0.5 w-[100px]" style="left:105px; top:119px; background: var(--rule-strong);" />
              <!-- Vertical at first branch -->
              <div class="absolute w-0.5 h-[115px]" style="left:204px; top:58px; background: var(--rule-strong);" />
              <!-- Branch to 产品知识 -->
              <div class="absolute h-0.5 w-[99px]" style="left:206px; top:57px; background: var(--rule-strong);" />
              <!-- Branch to 沟通技巧 -->
              <div class="absolute h-0.5 w-[99px]" style="left:206px; top:172px; background: var(--rule-strong);" />

              <!-- 产品知识 to second branch -->
              <div class="absolute h-0.5 w-[110px]" style="left:315px; top:57px; background: var(--rule-strong);" />
              <!-- Vertical at second branch (top) -->
              <div class="absolute w-0.5 h-[45px]" style="left:424px; top:35px; background: var(--rule-strong);" />
              <!-- to 异议处理 -->
              <div class="absolute h-0.5 w-[109px]" style="left:426px; top:34px; background: var(--rule-strong);" />
              <!-- to 成交推进 -->
              <div class="absolute h-0.5 w-[109px]" style="left:426px; top:79px; background: var(--rule-strong);" />

              <!-- 沟通技巧 to third branch -->
              <div class="absolute h-0.5 w-[110px]" style="left:315px; top:172px; background: var(--rule-strong);" />
              <!-- Vertical at third branch -->
              <div class="absolute w-0.5 h-[45px]" style="left:424px; top:150px; background: var(--rule-strong);" />
              <!-- to 高端客户 -->
              <div class="absolute h-0.5 w-[109px]" style="left:426px; top:149px; background: var(--rule-strong);" />
              <!-- to 客户维护 -->
              <div class="absolute h-0.5 w-[109px]" style="left:426px; top:194px; background: var(--rule-strong);" />

              <!-- 异议处理 to 谈判策略 -->
              <div class="absolute h-0.5 w-[210px]" style="left:545px; top:34px; background: var(--rule-strong);" />
              <!-- 高端客户 to 私人定制 -->
              <div class="absolute h-0.5 w-[210px]" style="left:545px; top:149px; background: var(--rule-strong);" />
              <!-- 谈判策略 to 品牌宣传 -->
              <div class="absolute h-0.5 w-[210px]" style="left:765px; top:34px; background: var(--rule-strong);" />

              <!-- Nodes -->
              <!-- 破冰与信任建立 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:57px; top:115px;">
                <div class="w-[10px] h-[10px]" style="background: var(--espresso);" />
                <div class="px-[10px] py-[3px] border" style="background: var(--cream); border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--espresso); font-weight: 400;">破冰与信任建立</span>
                </div>
              </div>

              <!-- 产品知识 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:278px; top:53px;">
                <div class="w-[10px] h-[10px]" style="background: var(--espresso);" />
                <div class="px-[10px] py-[3px] border" style="background: var(--cream); border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--espresso); font-weight: 400;">产品知识</span>
                </div>
              </div>

              <!-- 沟通技巧 (done) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:278px; top:168px;">
                <div class="w-[10px] h-[10px]" style="background: var(--espresso);" />
                <div class="px-[10px] py-[3px] border" style="background: var(--cream); border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--espresso); font-weight: 400;">沟通技巧</span>
                </div>
              </div>

              <!-- 异议处理 (current - burgundy) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:28px;">
                <div class="w-[10px] h-[10px]" style="background: var(--burgundy);" />
                <div class="px-[10px] py-[3px] border-2" style="border-color: var(--burgundy); background: rgba(107, 58, 58, 0.08);">
                  <span class="text-[11px]" style="color: var(--burgundy); font-weight: 400;">异议处理</span>
                </div>
              </div>

              <!-- 成交推进 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:75px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">成交推进</span>
                </div>
              </div>

              <!-- 高端客户 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:145px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">高端客户</span>
                </div>
              </div>

              <!-- 客户维护 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:508px; top:190px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">客户维护</span>
                </div>
              </div>

              <!-- 谈判策略 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:728px; top:30px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">谈判策略</span>
                </div>
              </div>

              <!-- 私人定制 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:728px; top:145px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">私人定制</span>
                </div>
              </div>

              <!-- 品牌宣传 (pending) -->
              <div class="absolute flex flex-col items-center gap-[5px]" style="left:948px; top:30px;">
                <div class="w-[10px] h-[10px]" style="background: var(--stone);" />
                <div class="px-[10px] py-[3px] border" style="border-color: var(--rule-strong);">
                  <span class="text-[11px]" style="color: var(--taupe); font-weight: 400;">品牌宣传</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Section -->
        <div class="luxury-panel py-3">
          <div class="flex max-sm:flex-col">
            <!-- Left: Total progress -->
            <div class="flex-1 px-5 py-2">
              <h2 class="luxury-display mb-4" style="font-size: 18px; color: var(--espresso);">总体完成度</h2>
              <div class="flex items-center gap-4">
                <!-- CSS Donut 90x90 -->
                <div class="relative flex-shrink-0" style="width:90px; height:90px;">
                  <svg viewBox="0 0 36 36" class="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="var(--linen)" stroke-width="4" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="var(--espresso)" stroke-width="4"
                      stroke-dasharray="88" stroke-dashoffset="49.3" />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="luxury-display" style="font-size: 15px; color: var(--espresso);">44%</span>
                  </div>
                </div>
                <div>
                  <div class="flex items-baseline gap-2">
                    <span class="luxury-display max-sm:text-[22px]" style="font-size: 28px; color: var(--espresso);">4</span>
                    <span class="luxury-serif max-sm:text-[22px]" style="font-size: 28px; color: var(--taupe);">/ 9</span>
                  </div>
                  <p class="luxury-serif italic text-[12px]" style="color: var(--taupe);">课程已完成</p>
                </div>
              </div>
            </div>

            <!-- Vertical divider -->
            <div class="w-px" style="background: var(--rule-strong);" />

            <!-- Right: Current module -->
            <div class="flex-1 px-5 py-2 flex items-center">
              <div class="w-full">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[12px]" style="color: var(--umber); letter-spacing: 0.08em;">当前模块</span>
                  <div class="px-[10px] py-[3px] border" style="border-color: var(--burgundy); background: rgba(107, 58, 58, 0.08);">
                    <span class="text-[11px]" style="color: var(--burgundy);">进行中</span>
                  </div>
                </div>
                <h3 class="luxury-display mb-3" style="font-size: 18px; color: var(--espresso);">异议处理与价值重构</h3>
                <div class="flex items-center gap-[10px] mb-2">
                  <div class="flex-1 h-2" style="background: var(--cream);">
                    <div class="h-full" style="width: 60%; background: var(--espresso);" />
                  </div>
                  <span class="luxury-display text-[13px]" style="color: var(--espresso);">60%</span>
                </div>
                <p class="luxury-serif italic text-[12px]" style="color: var(--taupe);">3 / 5 小节已完成</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
