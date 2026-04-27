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
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <div class="flex-1 flex flex-col overflow-hidden p-5 gap-4 max-sm:p-3 max-md:overflow-visible">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-1.5 text-[13px]">
        <router-link to="/" class="text-[var(--umber)] hover:text-[var(--espresso)] transition-colors">首页</router-link>
        <span class="text-[var(--ink)]">/</span>
        <router-link to="/roleplay/settings" class="text-[var(--umber)] hover:text-[var(--espresso)] transition-colors">参数设置</router-link>
        <span class="text-[var(--ink)]">/</span>
        <span class="text-[var(--ink)]" style="font-weight:500">实战对话</span>
      </div>

      <div class="flex flex-1 overflow-hidden gap-4 max-md:flex-col max-md:overflow-visible">
        <!-- Chat card -->
        <div class="flex-1 luxury-panel flex flex-col overflow-hidden max-md:min-h-[400px]">
          <!-- Messages -->
          <div class="flex-1 overflow-y-auto px-5 py-6 space-y-3" style="background:var(--bone)">
            <div v-for="(msg, i) in messages" :key="i"
              :class="msg.role === 'sa' ? 'flex justify-end' : 'flex justify-start'">
              <div :class="[
                'max-w-sm px-4 py-3 text-[13px] leading-relaxed',
                msg.role === 'sa'
                  ? 'bg-[var(--cream)] text-[var(--ink)]'
                  : 'border border-[var(--rule-strong)] bg-[var(--bone)] text-[var(--ink)]'
              ]">
                <div v-if="msg.role === 'customer'" class="mb-1 text-[var(--taupe)]" style="font-size:8px;font-weight:500;letter-spacing:0.28em;text-transform:uppercase">张磊（顾客）</div>
                <div v-else class="mb-1 text-[var(--taupe)]" style="font-size:8px;font-weight:500;letter-spacing:0.28em;text-transform:uppercase">你（SA）</div>
                {{ msg.text }}
              </div>
            </div>
          </div>

          <!-- Input bar -->
          <div class="border-t border-[var(--rule)] px-5 py-3" style="background:var(--cream)">
            <div class="flex items-end gap-3">
              <textarea
                v-model="inputText"
                @keydown="handleKeydown"
                rows="1"
                placeholder="输入你的回复..."
                class="flex-1 border border-[var(--rule-strong)] px-4 py-2.5 text-[13px] text-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--espresso)] resize-none placeholder-[var(--taupe)]"
                style="background:var(--cream)" />
              <button @click="sendMessage"
                class="bg-[var(--espresso)] text-[var(--bone)] p-2.5 hover:opacity-90 transition-opacity flex-shrink-0">
                <Send :size="16" />
              </button>
            </div>
          </div>
        </div>

        <!-- Right side panel -->
        <div class="w-[260px] flex flex-col gap-3 flex-shrink-0 max-md:w-full max-md:flex-row max-md:flex-wrap max-sm:flex-col">
          <!-- Heart / Purchase intent -->
          <div class="luxury-panel p-5 flex flex-col items-center">
            <div class="relative w-16 h-16 mb-2">
              <svg viewBox="0 0 100 90" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="heartClip">
                    <path d="M50 85 C50 85 5 55 5 25 C5 10 17 2 30 2 C38 2 45 6 50 12 C55 6 62 2 70 2 C83 2 95 10 95 25 C95 55 50 85 50 85Z" />
                  </clipPath>
                  <linearGradient id="heartFill" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#6B3A3A" />
                    <stop :offset="purchaseIntent + '%'" stop-color="#6B3A3A" />
                    <stop :offset="purchaseIntent + '%'" stop-color="#6B3A3A" stop-opacity="0.2" />
                    <stop offset="100%" stop-color="#6B3A3A" stop-opacity="0.2" />
                  </linearGradient>
                </defs>
                <path d="M50 85 C50 85 5 55 5 25 C5 10 17 2 30 2 C38 2 45 6 50 12 C55 6 62 2 70 2 C83 2 95 10 95 25 C95 55 50 85 50 85Z"
                  fill="url(#heartFill)" stroke="#6B3A3A" stroke-width="3" />
              </svg>
            </div>
            <div class="luxury-display text-[24px] text-[var(--burgundy)]">{{ purchaseIntent }}%</div>
            <div class="text-[11px] text-[var(--taupe)] mt-0.5" style="text-transform:uppercase;letter-spacing:0.18em">购买意向</div>
          </div>

          <!-- Customer info -->
          <div class="luxury-panel p-5" style="background:var(--cream)">
            <div class="text-[13px] text-[var(--ink)] mb-3" style="font-weight:500">顾客信息</div>
            <table class="w-full">
              <tbody>
                <tr v-for="info in customerInfo" :key="info.label" class="border-b border-[var(--rule)] last:border-0">
                  <td class="py-1.5 text-[12px] text-[var(--taupe)] pr-2">{{ info.label }}</td>
                  <td class="py-1.5 text-[12px] text-[var(--ink)] text-right" style="font-weight:500">{{ info.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Ask for help -->
          <button
            @click="showHelp = !showHelp"
            class="border border-[var(--rule-strong)] h-9 text-[13px] text-[var(--umber)] hover:bg-[var(--cream)] transition-colors text-center"
            style="font-weight:500">
            Ask for Help
          </button>
          <div v-if="showHelp" class="p-3 text-[12px] text-[var(--umber)] leading-relaxed" style="background:var(--parchment)">
            <span style="font-weight:500">AI Coach:</span> 顾客提到"送人"时，建议深挖场合和收礼人喜好，引导至礼品定制服务。
          </div>
        </div>
      </div>

      <!-- Floating end button -->
      <button @click="router.push('/roleplay/report')"
        class="fixed bottom-6 right-6 bg-[var(--burgundy)] text-[var(--bone)] px-4 py-2.5 text-[13px] shadow-lg hover:opacity-90 transition-opacity z-50"
        style="font-weight:500">
        结束对话
      </button>
    </div>
  </div>
</template>
