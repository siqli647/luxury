<script setup>
import SASidebar from '../../components/SASidebar.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const selectedPersona = ref(0)
const selectedScene = ref('')

const personas = [
  {
    id: 0,
    name: '王丽华',
    age: '45 岁',
    desc: '注重品质与细节，偏爱经典款式',
    tags: ['品质至上', '经典偏好', '细节敏感'],
  },
  {
    id: 1,
    name: '陈子豪',
    age: '28 岁',
    desc: '金融新贵，追求潮流与个性',
    tags: ['潮流追求', '个性消费', '品牌敏感'],
  },
  {
    id: 2,
    name: '李美琪',
    age: '38 岁',
    desc: '第一次购买奢侈品，需要引导',
    tags: ['首次购买', '需要引导', '价格敏感'],
  },
  {
    id: 3,
    name: '张国强',
    age: '55 岁',
    desc: '资深消费者，极高期望值',
    tags: ['资深消费', '高期望', '品味挑剔'],
  },
]

const scenes = [
  '初步接触 · 品牌认知',
  '需求挖掘 · 深度对话',
  '产品推荐 · SKU匹配',
  '异议处理 · 价格谈判',
  '成交推进 · 临门一脚',
  '客户维护 · 售后跟进',
]
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible">
      <div class="max-w-3xl mx-auto px-8 py-10 max-sm:px-3 max-sm:py-4">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-[13px] mb-8" style="color: var(--umber);">
          <router-link to="/" class="hover:opacity-70 transition-opacity" style="color: var(--umber);">首页</router-link>
          <span style="color: var(--taupe);">/</span>
          <span style="color: var(--ink);">参数设置</span>
        </div>

        <!-- Title -->
        <h1 class="luxury-display mb-1 max-sm:text-[26px]" style="font-size: 34px; color: var(--espresso);">参数设置</h1>
        <p class="luxury-serif italic mb-8" style="font-size: 15px; color: var(--umber);">设定客户画像、场景目标与教练模式</p>

        <!-- Tabs -->
        <div class="flex w-fit mb-8">
          <button
            class="px-6 py-2 text-[13px] tracking-wide border border-[var(--espresso)]"
            style="background: var(--espresso); color: var(--bone);">
            预设角色
          </button>
          <button
            @click="router.push('/roleplay/custom')"
            class="px-6 py-2 text-[13px] tracking-wide border border-[var(--rule-strong)] hover:opacity-80 transition-opacity"
            style="background: transparent; color: var(--umber);">
            自定义
          </button>
        </div>

        <!-- Persona Grid -->
        <div class="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
          <div v-for="persona in personas" :key="persona.id"
            @click="selectedPersona = persona.id"
            :class="selectedPersona === persona.id
              ? 'border-[2px]'
              : 'border'"
            :style="selectedPersona === persona.id
              ? 'border-color: var(--burgundy); background: rgba(245, 240, 232, 0.66);'
              : 'border-color: var(--rule-strong); background: rgba(250, 248, 243, 0.82);'"
            class="p-5 cursor-pointer transition-all luxury-panel"
            style="box-shadow: 0 22px 55px rgba(61, 46, 31, 0.07);">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="luxury-display" style="font-size: 18px; color: var(--espresso);">{{ persona.name }}</span>
              <span class="text-[12px]" style="color: var(--taupe);">{{ persona.age }}</span>
            </div>
            <p class="text-[12px] mb-3 leading-relaxed" style="color: var(--umber);">{{ persona.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in persona.tags" :key="tag"
                class="text-[11px] px-2.5 py-0.5 border"
                style="border-color: var(--rule-strong); color: var(--umber); background: transparent;">{{ tag }}</span>
            </div>
          </div>
        </div>

        <!-- Scene select -->
        <div class="luxury-panel p-5 mb-8">
          <label class="block text-[12px] mb-3" style="color: var(--espresso); letter-spacing: 0.08em;">场景 / 目标</label>
          <select v-model="selectedScene"
            class="w-full border px-4 py-2.5 text-[13px] focus:outline-none appearance-none"
            style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);">
            <option value="" disabled style="color: var(--taupe);">选择场景类型</option>
            <option v-for="scene in scenes" :key="scene" :value="scene">{{ scene }}</option>
          </select>
        </div>

        <!-- Start button -->
        <div class="flex justify-end">
          <button @click="router.push('/roleplay/chat')"
            class="px-7 py-3 text-[13px] tracking-widest uppercase hover:opacity-90 transition-opacity"
            style="background: var(--espresso); color: var(--bone);">
            开始实战
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
