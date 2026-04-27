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
            @click="router.push('/roleplay/settings')"
            class="px-6 py-2 text-[13px] tracking-wide border border-[var(--rule-strong)] hover:opacity-80 transition-opacity"
            style="background: transparent; color: var(--umber);">
            预设角色
          </button>
          <button
            class="px-6 py-2 text-[13px] tracking-wide border border-[var(--espresso)]"
            style="background: var(--espresso); color: var(--bone);">
            自定义
          </button>
        </div>

        <!-- Form -->
        <div class="luxury-panel p-6 space-y-5">
          <!-- Name -->
          <div>
            <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">角色名称</label>
            <input v-model="form.name" type="text" placeholder="输入角色名称"
              class="w-full border px-4 py-2.5 text-[13px] focus:outline-none"
              style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);"
              :style="{ '::placeholder': 'color: var(--taupe)' }" />
          </div>

          <!-- Birthday -->
          <div>
            <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">出生年月日</label>
            <input v-model="form.birthday" type="date"
              class="w-full border px-4 py-2.5 text-[13px] focus:outline-none"
              style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);" />
          </div>

          <!-- MBTI + Level -->
          <div class="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <div>
              <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">MBTI类型</label>
              <select v-model="form.mbti"
                class="w-full border px-4 py-2.5 text-[13px] focus:outline-none appearance-none"
                style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);">
                <option value="" disabled>选择 MBTI</option>
                <option v-for="m in mbtiOptions" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div>
              <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">海淀等级</label>
              <select v-model="form.level"
                class="w-full border px-4 py-2.5 text-[13px] focus:outline-none appearance-none"
                style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);">
                <option value="" disabled>选择等级</option>
                <option v-for="l in levelOptions" :key="l" :value="l">{{ l }}</option>
              </select>
            </div>
          </div>

          <!-- Brand prefs -->
          <div>
            <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">品牌偏好</label>
            <input type="text" placeholder="输入品牌名称"
              class="w-full border px-4 py-2.5 text-[13px] focus:outline-none mb-3"
              style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);" />
            <div class="flex flex-wrap gap-2">
              <button v-for="brand in brands" :key="brand"
                @click="toggleBrand(brand)"
                :style="form.brandPrefs.includes(brand)
                  ? 'background: var(--espresso); color: var(--bone); border-color: var(--espresso);'
                  : 'background: transparent; color: var(--umber); border-color: var(--rule-strong);'"
                class="px-3 py-1.5 text-[12px] border transition-all hover:opacity-80">
                {{ brand }}
              </button>
            </div>
          </div>

          <!-- Desc + personality tags -->
          <div>
            <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">性格描述</label>
            <textarea v-model="form.desc" rows="3" placeholder="描述角色的性格特征、消费习惯等..."
              class="w-full border px-4 py-3 text-[13px] focus:outline-none resize-none mb-3"
              style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);" />
            <div class="flex flex-wrap gap-2">
              <button v-for="tag in personalityTags" :key="tag"
                @click="toggleTag(tag)"
                :style="form.personalityTags.includes(tag)
                  ? 'background: var(--espresso); color: var(--bone); border-color: var(--espresso);'
                  : 'background: transparent; color: var(--umber); border-color: var(--rule-strong);'"
                class="px-3 py-1.5 text-[12px] border transition-all hover:opacity-80">
                {{ tag }}
              </button>
            </div>
          </div>

          <!-- Scene -->
          <div>
            <label class="block text-[12px] mb-1.5" style="color: var(--espresso); letter-spacing: 0.08em;">场景 / 目标</label>
            <select v-model="form.scene"
              class="w-full border px-4 py-2.5 text-[13px] focus:outline-none appearance-none"
              style="border-color: var(--rule-strong); background: var(--cream); color: var(--ink);">
              <option value="" disabled>选择场景类型</option>
              <option v-for="scene in scenes" :key="scene" :value="scene">{{ scene }}</option>
            </select>
          </div>
        </div>

        <!-- Start button -->
        <div class="flex justify-end mt-8">
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
