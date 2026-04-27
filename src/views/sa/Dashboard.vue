<script setup>
import { useRouter } from 'vue-router'
import SASidebar from '../../components/SASidebar.vue'
import RadarChart from '../../components/RadarChart.vue'

const router = useRouter()

const skills = [
  { name: '产品知识', en: 'Product Knowledge', score: 84 },
  { name: '需求挖掘', en: 'Client Discovery', score: 70 },
  { name: '沟通表达', en: 'Conversational Grace', score: 78 },
  { name: '异议处理', en: 'Objection Handling', score: 64 },
  { name: '情绪感知', en: 'Emotional Attunement', score: 88 },
  { name: '信任建立', en: 'Trust & Rapport', score: 74 },
  { name: '成交推进', en: 'Closing Momentum', score: 68 },
]

const courses = [
  { issue: 'N° 01 · Initié', title: '破冰与信任建立', en: 'Ice-Breaking & Trust', progress: 0, state: '尚未启读' },
  { issue: 'N° 02 · Avancé', title: '异议处理 · 价值重构', en: 'Objection & Value', progress: 50, state: '修习中' },
  { issue: 'N° 03 · Classique', title: '产品知识 · 经典系列', en: 'The Classics', progress: 70, state: '将近完成' },
]

function widthFor(score) {
  return `${score}%`
}
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <!-- ═══ TOP: Welcome Hero ═══ -->
      <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="luxury-eyebrow mb-2">Chapter · 今日修习</div>

        <h1 class="luxury-display mt-3 max-sm:text-[32px]" :style="{ color: 'var(--espresso)', fontSize: '52px', lineHeight: '0.95' }">
          <span :style="{ fontStyle: 'italic' }">Bonsoir,</span>
          <span class="block mt-0.5"><em :style="{ color: 'var(--burgundy)', fontStyle: 'italic' }">张敏</em></span>
        </h1>

        <p class="luxury-serif mt-5 max-sm:text-[15px]" :style="{
          maxWidth: '52ch',
          color: 'var(--umber)',
          fontSize: '17px',
          fontStyle: 'italic',
          lineHeight: '1.55',
          fontWeight: '400'
        }">
          本日建议：巩固<span :style="{ color: 'var(--burgundy)' }">「异议处理」</span>与<span :style="{ color: 'var(--burgundy)' }">「信任建立」</span>两项。
          距离下一次晋级还有 3 个完整训练循环，今晚的一场对谈，足以拨动方向。
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-col gap-3 mt-6">
          <button
            class="group inline-flex items-baseline gap-3 bg-transparent border-0 cursor-pointer luxury-display transition-all duration-300"
            :style="{ color: 'var(--umber)', fontSize: '26px', fontWeight: '400', padding: 0 }"
            @mouseenter="$event.currentTarget.style.color = 'var(--ink)'"
            @mouseleave="$event.currentTarget.style.color = 'var(--umber)'"
            @click="router.push('/roleplay/settings')"
          >
            <span class="transition-colors duration-300 group-hover:text-[#1a1510]">实战模拟</span>
            <span class="luxury-serif transition-colors duration-300 group-hover:text-[#7A6652]" :style="{ color: 'var(--stone)', fontSize: '20px', fontStyle: 'italic' }">——</span>
            <span class="luxury-serif transition-colors duration-300 group-hover:text-[#3D2E1F]" :style="{ color: 'var(--taupe)', fontSize: '20px', fontStyle: 'italic' }">Enter Simulation</span>
            <span
              class="inline-block relative ml-1 transition-all duration-300 group-hover:w-[56px]"
              :style="{
                width: '36px', height: '1px',
                background: 'var(--umber)',
                transform: 'translateY(-5px)'
              }"
            />
          </button>

          <button
            class="group inline-flex items-baseline gap-3 bg-transparent border-0 cursor-pointer luxury-display transition-all duration-300"
            :style="{ color: 'var(--umber)', fontSize: '20px', fontWeight: '400', padding: 0 }"
            @mouseenter="$event.currentTarget.style.color = 'var(--ink)'"
            @mouseleave="$event.currentTarget.style.color = 'var(--umber)'"
            @click="router.push('/teach')"
          >
            <span class="transition-colors duration-300 group-hover:text-[#1a1510]">教学模块</span>
            <span class="luxury-serif transition-colors duration-300 group-hover:text-[#7A6652]" :style="{ color: 'var(--stone)', fontSize: '16px', fontStyle: 'italic' }">——</span>
            <span class="luxury-serif transition-colors duration-300 group-hover:text-[#3D2E1F]" :style="{ color: 'var(--taupe)', fontSize: '16px', fontStyle: 'italic' }">Personalized Learning</span>
            <span
              class="inline-block relative ml-1 transition-all duration-300 group-hover:w-[44px]"
              :style="{
                width: '26px', height: '1px',
                background: 'var(--umber)',
                transform: 'translateY(-4px)'
              }"
            />
          </button>
        </div>

        <!-- Footline stats -->
        <div class="flex items-center gap-6 mt-6" :style="{
          color: 'var(--taupe)',
          fontSize: '9.5px',
          fontWeight: '400',
          letterSpacing: '0.32em',
          textTransform: 'uppercase'
        }">
          <div><span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '13px', letterSpacing: '0' }">472</span> 天修习</div>
          <div><span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '13px', letterSpacing: '0' }">A+</span> 段位 · <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '13px', letterSpacing: '0' }">26</span> 场本月</div>
        </div>
      </section>

      <!-- ═══ MIDDLE: Two-column — Radar+Bars | Courses+Report ═══ -->
      <section class="grid gap-0 px-10 py-6 max-md:block max-sm:px-3 max-sm:py-4" :style="{ gridTemplateColumns: '280px 1fr' }">

        <!-- LEFT column: Radar + Skill Bars -->
        <div class="pr-6 max-md:pr-0 max-md:pb-6 max-md:mb-6" :style="{ borderRight: '1px solid var(--rule-strong)' }">

          <!-- Radar block -->
          <div class="pb-4" :style="{ borderBottom: '1px solid var(--rule)' }">
            <div class="flex items-baseline justify-between gap-3 mb-2">
              <div>
                <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">II — Evaluation</div>
                <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '15px', margin: '2px 0 0' }">七艺之考</h3>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">七维造诣</div>
            </div>
            <div class="flex items-center justify-center" :style="{ height: '220px' }">
              <RadarChart :labels="skills.map(s => s.name)" :data="skills.map(s => s.score)" />
            </div>
          </div>

          <!-- Skill bars with hover effect -->
          <div class="pt-4">
            <div class="flex items-baseline justify-between gap-3 mb-2">
              <div>
                <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">III — Competences</div>
                <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '15px', margin: '2px 0 0' }">技艺七重</h3>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">本月更新</div>
            </div>

            <div class="flex flex-col gap-1.5">
              <div v-for="skill in skills" :key="skill.name"
                class="group grid items-end gap-1 transition-colors duration-200 hover:bg-[rgba(245,240,232,0.5)] px-1 -mx-1"
                :style="{ gridTemplateColumns: '1fr auto', paddingBottom: '3px' }">
                <div :style="{ color: 'var(--espresso)', fontSize: '10.5px' }">
                  {{ skill.name }}
                  <small :style="{ marginLeft: '5px', color: 'var(--taupe)', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }">{{ skill.en }}</small>
                </div>
                <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '12px' }">
                  {{ Math.round(skill.score / 20 * 10) / 10 }}<span :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '8px' }">/5</span>
                </div>
                <div :style="{ gridColumn: '1 / -1', height: '1px', overflow: 'hidden', background: 'var(--rule)' }">
                  <div class="transition-all duration-300 group-hover:brightness-125"
                    :style="{ height: '100%', background: 'var(--espresso)', width: widthFor(skill.score) }" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT column: Courses + Report -->
        <div class="pl-6 max-md:pl-0">

          <!-- Recommended courses -->
          <div class="mb-5">
            <div class="flex items-baseline justify-between gap-3 mb-3">
              <div>
                <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">V — Curriculum</div>
                <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '15px', margin: '2px 0 0' }">推荐课程</h3>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">三册在读</div>
            </div>

            <div class="flex flex-col gap-2.5">
              <button
                v-for="course in courses" :key="course.title"
                class="luxury-card flex flex-col justify-between p-3.5 text-left cursor-pointer border-0 transition-all duration-300 hover:bg-[#F5F0E8]"
                :style="{ background: 'rgba(245,240,232,0.66)', border: '1px solid var(--rule)' }"
                @mouseenter="$event.currentTarget.style.borderColor = 'rgba(61,46,31,0.3)'"
                @mouseleave="$event.currentTarget.style.borderColor = 'var(--rule)'"
                @click="router.push('/teach')"
              >
                <div>
                  <div :style="{ color: 'var(--burgundy)', fontSize: '8.5px', letterSpacing: '0.34em', textTransform: 'uppercase' }">{{ course.issue }}</div>
                  <h5 class="luxury-display mt-1 mb-0.5" :style="{ color: 'var(--espresso)', fontSize: '17px' }">{{ course.title }}</h5>
                  <p class="luxury-serif" :style="{ margin: 0, color: 'var(--umber)', fontSize: '11px', fontStyle: 'italic' }">{{ course.en }}</p>
                </div>
                <div class="flex items-baseline justify-between gap-2 mt-2.5">
                  <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '18px', lineHeight: '1' }">
                    {{ course.progress }}<small :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '9px' }">%</small>
                  </span>
                  <span :style="{ color: 'var(--taupe)', fontSize: '8.5px', letterSpacing: '0.28em', textTransform: 'uppercase' }">{{ course.state }}</span>
                </div>
                <div :style="{ height: '1px', overflow: 'hidden', background: 'var(--rule)', marginTop: '4px' }">
                  <div :style="{ height: '100%', background: 'var(--espresso)', width: widthFor(course.progress) }" />
                </div>
              </button>
            </div>
          </div>

          <!-- Latest report card -->
          <div>
            <div class="flex items-baseline justify-between gap-3 mb-2">
              <div>
                <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">IV — Dernier Rapport</div>
                <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '15px', margin: '2px 0 0' }">近日卷宗</h3>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }">最近一场</div>
            </div>

            <button
              class="w-full grid items-center gap-3.5 p-3.5 text-left cursor-pointer transition-all duration-300 hover:bg-[#F5F0E8]"
              :style="{
                gridTemplateColumns: '1fr auto',
                border: '1px solid var(--rule-strong)',
                background: 'var(--bone)',
                color: 'inherit'
              }"
              @mouseenter="$event.currentTarget.style.borderColor = 'rgba(61,46,31,0.3)'"
              @mouseleave="$event.currentTarget.style.borderColor = 'var(--rule-strong)'"
              @click="router.push('/roleplay/report')"
            >
              <div>
                <div :style="{ color: 'var(--burgundy)', fontSize: '8.5px', letterSpacing: '0.32em', textTransform: 'uppercase' }">2026 · 04 · 01</div>
                <h4 class="luxury-display my-1.5" :style="{ color: 'var(--espresso)', fontSize: '16px' }">
                  高端贵妇 <em :style="{ color: 'var(--burgundy)', fontStyle: 'italic' }">/ 周年礼物选购</em>
                </h4>
                <p class="luxury-serif" :style="{ maxWidth: '40ch', margin: '0 0 5px', color: 'var(--umber)', fontSize: '12px', fontStyle: 'italic', lineHeight: '1.45' }">
                  银发女士，为银婚纪念踌躇于两款手袋之间，她寻找的并非皮具，而是被看见的瞬间。
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="chip in ['情绪 ★★★★★', '产品 ★★★★', '成交 ★★★']" :key="chip"
                    class="transition-colors duration-200 hover:bg-[rgba(245,240,232,0.5)]"
                    :style="{
                      border: '1px solid var(--rule-strong)',
                      color: 'var(--umber)',
                      fontSize: '7.5px',
                      letterSpacing: '0.24em',
                      padding: '2px 6px',
                      textTransform: 'uppercase'
                    }"
                  >{{ chip }}</span>
                </div>
              </div>
              <div class="flex items-center justify-center luxury-display transition-colors duration-300" :style="{
                width: '64px', height: '64px',
                border: '1px solid var(--burgundy)',
                color: 'var(--espresso)',
                fontSize: '24px'
              }">78</div>
            </button>
          </div>
        </div>
      </section>

      <!-- ═══ BOTTOM: Second report + stat summary ═══ -->
      <section class="grid gap-0 px-10 pb-8 max-md:grid-cols-1 max-sm:px-3" :style="{ gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--rule-strong)' }">

        <!-- Second report -->
        <button
          class="flex flex-col justify-between p-4 text-left cursor-pointer border-0 transition-all duration-300 hover:bg-[#F0EBE1]"
          :style="{ background: 'var(--cream)', borderRight: '1px solid var(--rule)' }"
          @click="router.push('/roleplay/report')"
        >
          <div>
            <div :style="{ color: 'var(--burgundy)', fontSize: '8.5px', letterSpacing: '0.34em', textTransform: 'uppercase' }">Archives · N° 46</div>
            <h5 class="luxury-display mt-1 mb-0.5" :style="{ color: 'var(--espresso)', fontSize: '17px' }">年轻买家 / 首次奢侈品体验</h5>
            <p class="luxury-serif" :style="{ margin: 0, color: 'var(--umber)', fontSize: '11px', fontStyle: 'italic' }">Sci-tech client, 29</p>
          </div>
          <div class="flex items-baseline gap-2 mt-3">
            <span class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '26px', lineHeight: '1' }">
              82<small :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '9px' }">/100</small>
            </span>
            <span class="flex-1" :style="{ height: '1px', background: 'var(--rule-strong)' }" />
            <span :style="{ color: 'var(--taupe)', fontSize: '8.5px', letterSpacing: '0.28em', textTransform: 'uppercase' }">03 · 28</span>
          </div>
        </button>

        <!-- Progress summary -->
        <div class="flex items-center justify-around p-4" :style="{ background: 'var(--bone)' }">
          <div class="text-center">
            <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '28px' }">75</div>
            <div :style="{ color: 'var(--taupe)', fontSize: '8.5px', letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: '2px' }">综合均分</div>
          </div>
          <div :style="{ width: '1px', height: '36px', background: 'var(--rule)' }" />
          <div class="text-center">
            <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '28px' }">7</div>
            <div :style="{ color: 'var(--taupe)', fontSize: '8.5px', letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: '2px' }">技能维度</div>
          </div>
          <div :style="{ width: '1px', height: '36px', background: 'var(--rule)' }" />
          <div class="text-center">
            <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '28px' }">40<small :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '10px' }">%</small></div>
            <div :style="{ color: 'var(--taupe)', fontSize: '8.5px', letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: '2px' }">课程进度</div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
