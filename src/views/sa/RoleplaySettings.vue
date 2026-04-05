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
  <div class="flex h-screen overflow-hidden bg-white">
    <SASidebar />

    <main class="flex-1 overflow-y-auto">
      <div class="max-w-3xl mx-auto px-8 py-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-1.5 text-[13px] mb-6">
          <router-link to="/" class="text-[#737373] hover:text-[#525252] transition-colors">首页</router-link>
          <span class="text-[#0a0a0a]">/</span>
          <span class="text-[#0a0a0a] font-medium">参数设置</span>
        </div>

        <h1 class="text-[28px] font-semibold text-[#09090B] mb-1">参数设置</h1>
        <p class="text-[14px] text-[#71717A] mb-6">设定客户画像、场景目标与教练模式</p>

        <!-- Tabs -->
        <div class="flex gap-1 bg-[#F4F4F5] p-1 rounded-lg w-fit mb-6 h-9">
          <button
            class="px-5 flex items-center rounded-md text-[13px] font-medium bg-white text-[#09090B] shadow-sm transition-all">
            预设角色
          </button>
          <button
            @click="router.push('/roleplay/custom')"
            class="px-5 flex items-center rounded-md text-[13px] text-[#71717A] hover:text-[#09090B] transition-all">
            自定义
          </button>
        </div>

        <!-- Persona Grid -->
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div v-for="persona in personas" :key="persona.id"
            @click="selectedPersona = persona.id"
            :class="selectedPersona === persona.id
              ? 'border-[#18181B] border-2'
              : 'border-[#E4E4E7] border hover:border-[#a1a1aa]'"
            class="bg-white rounded-2xl p-5 cursor-pointer transition-all">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[14px] font-semibold text-[#09090B]">{{ persona.name }}</span>
              <span class="text-[12px] text-[#A1A1AA]">{{ persona.age }}</span>
            </div>
            <p class="text-[12px] text-[#71717A] mb-3 leading-relaxed">{{ persona.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in persona.tags" :key="tag"
                class="text-[11px] px-2 py-0.5 bg-[#F4F4F5] text-[#71717A] rounded-full">{{ tag }}</span>
            </div>
          </div>
        </div>

        <!-- Scene select -->
        <div class="bg-white rounded-2xl p-5 border border-[#E4E4E7] mb-8">
          <label class="block text-[13px] font-medium text-[#09090B] mb-3">场景 / 目标</label>
          <select v-model="selectedScene"
            class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#18181B] focus:border-transparent appearance-none">
            <option value="" disabled>选择场景类型</option>
            <option v-for="scene in scenes" :key="scene" :value="scene">{{ scene }}</option>
          </select>
        </div>

        <!-- Start button -->
        <div class="flex justify-end">
          <button @click="router.push('/roleplay/chat')"
            class="bg-[#18181B] text-white px-6 h-11 rounded-lg text-[14px] font-medium hover:bg-[#27272a] transition-colors">
            开始实战 →
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
