<script setup>
import SASidebar from '../../components/SASidebar.vue'
import { useRouter } from 'vue-router'
import { ref, nextTick } from 'vue'
import { Send } from 'lucide-vue-next'

const router = useRouter()

const messages = ref([
  { role: 'customer', text: '您好，我是张磊，请问今天有什么新品推荐？' },
  { role: 'sa', text: '您好张磊先生！我叫小雯。您上次在3月份参观的那套奢华系列新款刚到，这次升级了皮革工艺，非常值得一看。请问这次是您自用，还是有什么特别的场合？' },
  { role: 'customer', text: '主要是自用，但也可能送人。你们最近有什么热门款吗？' },
  { role: 'sa', text: '当然！最近特别受欢迎的是限量版铂金包，已经有很多顾客在等候名单上了。不过考虑到您的品味，我觉得这款经典款Birkin更符合您的气质，既低调又有品位。' },
])

const inputText = ref('')
const purchaseIntent = ref(35)
const showHelp = ref(false)

const customerInfo = [
  { label: '年龄', value: '46岁' },
  { label: '收入', value: '8万/月' },
  { label: '国籍', value: '中国' },
  { label: '购买力', value: '天井组' },
  { label: '消费特征', value: '价格导向' },
]

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return
  messages.value.push({ role: 'sa', text })
  inputText.value = ''

  await nextTick()
  setTimeout(() => {
    messages.value.push({
      role: 'customer',
      text: '好的，我了解了。能不能给我看看那款Birkin？价格方面有没有什么优惠？',
    })
    purchaseIntent.value = Math.min(95, purchaseIntent.value + 8)
  }, 1200)
}

function handleKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-white">
    <SASidebar />

    <div class="flex-1 flex flex-col overflow-hidden p-5 gap-4">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-1.5 text-[13px]">
        <router-link to="/" class="text-[#737373] hover:text-[#525252] transition-colors">首页</router-link>
        <span class="text-[#0a0a0a]">/</span>
        <router-link to="/roleplay/settings" class="text-[#737373] hover:text-[#525252] transition-colors">参数设置</router-link>
        <span class="text-[#0a0a0a]">/</span>
        <span class="text-[#0a0a0a] font-medium">实战对话</span>
      </div>

      <div class="flex flex-1 overflow-hidden gap-4">
        <!-- Chat card -->
        <div class="flex-1 bg-white rounded-2xl border border-[#E4E4E7] flex flex-col overflow-hidden">
          <!-- Messages -->
          <div class="flex-1 overflow-y-auto px-5 py-6 space-y-3">
            <div v-for="(msg, i) in messages" :key="i"
              :class="msg.role === 'sa' ? 'flex justify-end' : 'flex justify-start'">
              <div :class="[
                'max-w-sm px-4 py-3 rounded-2xl text-[13px] leading-relaxed',
                msg.role === 'sa'
                  ? 'bg-[#F4F4F5] text-[#09090B] rounded-br-sm'
                  : 'bg-[#FAFAFA] text-[#09090B] border border-[#E4E4E7] rounded-bl-sm'
              ]">
                <div v-if="msg.role === 'customer'" class="text-[11px] font-medium text-[#A1A1AA] mb-1">张磊（顾客）</div>
                <div v-else class="text-[11px] font-medium text-[#A1A1AA] mb-1">你（SA）</div>
                {{ msg.text }}
              </div>
            </div>
          </div>

          <!-- Input bar -->
          <div class="border-t border-[#F4F4F5] px-5 py-3">
            <div class="flex items-end gap-3">
              <textarea
                v-model="inputText"
                @keydown="handleKeydown"
                rows="1"
                placeholder="输入你的回复..."
                class="flex-1 border border-[#E4E4E7] rounded-lg px-4 py-2.5 text-[13px] text-[#09090B] focus:outline-none focus:ring-1 focus:ring-[#18181B] resize-none placeholder-[#a1a1aa]" />
              <button @click="sendMessage"
                class="bg-[#18181B] text-white p-2.5 rounded-lg hover:bg-[#27272a] transition-colors flex-shrink-0">
                <Send :size="16" />
              </button>
            </div>
          </div>
        </div>

        <!-- Right side panel -->
        <div class="w-[260px] flex flex-col gap-3 flex-shrink-0">
          <!-- Heart / Purchase intent -->
          <div class="bg-white rounded-2xl border border-[#E4E4E7] p-5 flex flex-col items-center">
            <div class="relative w-16 h-16 mb-2">
              <svg viewBox="0 0 100 90" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="heartClip">
                    <path d="M50 85 C50 85 5 55 5 25 C5 10 17 2 30 2 C38 2 45 6 50 12 C55 6 62 2 70 2 C83 2 95 10 95 25 C95 55 50 85 50 85Z" />
                  </clipPath>
                  <linearGradient id="heartFill" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#ef4444" />
                    <stop :offset="purchaseIntent + '%'" stop-color="#ef4444" />
                    <stop :offset="purchaseIntent + '%'" stop-color="#fecaca" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#fecaca" stop-opacity="0.4" />
                  </linearGradient>
                </defs>
                <path d="M50 85 C50 85 5 55 5 25 C5 10 17 2 30 2 C38 2 45 6 50 12 C55 6 62 2 70 2 C83 2 95 10 95 25 C95 55 50 85 50 85Z"
                  fill="url(#heartFill)" stroke="#ef4444" stroke-width="3" />
              </svg>
            </div>
            <div class="text-[20px] font-bold text-red-500">{{ purchaseIntent }}%</div>
            <div class="text-[12px] text-[#A1A1AA] mt-0.5">购买意向</div>
          </div>

          <!-- Customer info -->
          <div class="bg-white rounded-2xl border border-[#E4E4E7] p-5">
            <div class="text-[13px] font-medium text-[#09090B] mb-3">顾客信息</div>
            <table class="w-full">
              <tbody>
                <tr v-for="info in customerInfo" :key="info.label" class="border-b border-[#F4F4F5] last:border-0">
                  <td class="py-1.5 text-[12px] text-[#A1A1AA] pr-2">{{ info.label }}</td>
                  <td class="py-1.5 text-[12px] text-[#09090B] font-medium text-right">{{ info.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Ask for help -->
          <button
            @click="showHelp = !showHelp"
            class="bg-white border border-[#E4E4E7] rounded-lg h-9 text-[13px] font-medium text-[#71717A] hover:border-[#a1a1aa] transition-colors text-center">
            Ask for Help
          </button>
          <div v-if="showHelp" class="bg-amber-50 rounded-xl p-3 text-[12px] text-amber-700 leading-relaxed">
            <strong>AI Coach:</strong> 顾客提到"送人"时，建议深挖场合和收礼人喜好，引导至礼品定制服务。
          </div>
        </div>
      </div>

      <!-- Floating end button -->
      <button @click="router.push('/roleplay/report')"
        class="fixed bottom-6 right-6 bg-[#EF4444] text-white px-4 py-2.5 rounded-lg text-[13px] font-medium shadow-lg hover:bg-red-600 transition-colors z-50">
        结束对话
      </button>
    </div>
  </div>
</template>
