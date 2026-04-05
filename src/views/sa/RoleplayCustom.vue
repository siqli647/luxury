<script setup>
import SASidebar from '../../components/SASidebar.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const form = ref({
  name: '',
  birthday: '',
  mbti: '',
  level: '',
  brandPrefs: [],
  desc: '',
  personalityTags: [],
  scene: '',
})

const brands = ['爱马仕', 'Round', 'LV', 'Chanel', 'Cartier', 'Dior']
const personalityTags = ['谨慎选购', '精准购物', '全程参观', '重复消费', '签单手法', '客服特点']
const mbtiOptions = ['INTJ', 'INFJ', 'ENTJ', 'ENFJ', 'INTP', 'INFP', 'ENTP', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']
const levelOptions = ['顶奢', '轻奢', '大众奢侈', '入门级']
const scenes = [
  '初步接触 · 品牌认知',
  '需求挖掘 · 深度对话',
  '产品推荐 · SKU匹配',
  '异议处理 · 价格谈判',
  '成交推进 · 临门一脚',
]

function toggleBrand(brand) {
  const idx = form.value.brandPrefs.indexOf(brand)
  if (idx === -1) form.value.brandPrefs.push(brand)
  else form.value.brandPrefs.splice(idx, 1)
}

function toggleTag(tag) {
  const idx = form.value.personalityTags.indexOf(tag)
  if (idx === -1) form.value.personalityTags.push(tag)
  else form.value.personalityTags.splice(idx, 1)
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[#FAFAFA]">
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
            @click="router.push('/roleplay/settings')"
            class="px-5 flex items-center rounded-md text-[13px] text-[#71717A] hover:text-[#09090B] transition-all">
            预设角色
          </button>
          <button
            class="px-5 flex items-center rounded-md text-[13px] font-medium bg-white text-[#09090B] shadow-sm transition-all">
            自定义
          </button>
        </div>

        <!-- Form -->
        <div class="bg-white rounded-2xl p-6 border border-[#E4E4E7] space-y-5">
          <!-- Name -->
          <div>
            <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">角色名称</label>
            <input v-model="form.name" type="text" placeholder="输入角色名称"
              class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B] placeholder-[#a1a1aa]" />
          </div>

          <!-- Birthday -->
          <div>
            <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">出生年月日</label>
            <input v-model="form.birthday" type="date"
              class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B]" />
          </div>

          <!-- MBTI + Level -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">MBTI类型</label>
              <select v-model="form.mbti"
                class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B]">
                <option value="" disabled>选择 MBTI</option>
                <option v-for="m in mbtiOptions" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div>
              <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">海淀等级</label>
              <select v-model="form.level"
                class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B]">
                <option value="" disabled>选择等级</option>
                <option v-for="l in levelOptions" :key="l" :value="l">{{ l }}</option>
              </select>
            </div>
          </div>

          <!-- Brand prefs -->
          <div>
            <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">品牌偏好</label>
            <input type="text" placeholder="输入品牌名称"
              class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B] placeholder-[#a1a1aa] mb-2" />
            <div class="flex flex-wrap gap-2">
              <button v-for="brand in brands" :key="brand"
                @click="toggleBrand(brand)"
                :class="form.brandPrefs.includes(brand)
                  ? 'bg-[#18181B] text-white border-[#18181B]'
                  : 'bg-white text-[#71717A] border-[#E4E4E7] hover:border-[#a1a1aa]'"
                class="px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all">
                {{ brand }}
              </button>
            </div>
          </div>

          <!-- Desc + personality tags -->
          <div>
            <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">性格描述</label>
            <textarea v-model="form.desc" rows="3" placeholder="描述角色的性格特征、消费习惯等..."
              class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-3 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B] placeholder-[#a1a1aa] resize-none mb-2" />
            <div class="flex flex-wrap gap-2">
              <button v-for="tag in personalityTags" :key="tag"
                @click="toggleTag(tag)"
                :class="form.personalityTags.includes(tag)
                  ? 'bg-[#18181B] text-white border-[#18181B]'
                  : 'bg-white text-[#71717A] border-[#E4E4E7] hover:border-[#a1a1aa]'"
                class="px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all">
                {{ tag }}
              </button>
            </div>
          </div>

          <!-- Scene -->
          <div>
            <label class="block text-[13px] font-medium text-[#09090B] mb-1.5">场景 / 目标</label>
            <select v-model="form.scene"
              class="w-full border border-[#e5e5e5] rounded-md bg-[#fafafa] px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-2 focus:ring-[#18181B]">
              <option value="" disabled>选择场景类型</option>
              <option v-for="scene in scenes" :key="scene" :value="scene">{{ scene }}</option>
            </select>
          </div>
        </div>

        <!-- Start button -->
        <div class="flex justify-end mt-6">
          <button @click="router.push('/roleplay/chat')"
            class="bg-[#18181B] text-white px-6 h-11 rounded-lg text-[14px] font-medium hover:bg-[#27272a] transition-colors">
            开始实战 →
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
