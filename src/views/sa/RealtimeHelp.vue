<script setup>
import { ref, nextTick } from 'vue'
import SASidebar from '../../components/SASidebar.vue'
import { MessageSquare, Lightbulb, Search, Send, Clock } from 'lucide-vue-next'

const quickActions = [
  { icon: MessageSquare, title: '话术参考', desc: '查看推荐话术库' },
  { icon: Lightbulb, title: '场景策略', desc: 'AI 针对当前场景的建议' },
  { icon: Search, title: '知识速查', desc: '快速查找产品/品牌知识' },
]

const messages = ref([
  {
    role: 'ai',
    text: '你好张敏，我是你的 AI 培训教练。有什么我可以帮助你的吗？无论是话术建议、客户应对策略还是产品知识，随时问我。',
  },
  {
    role: 'user',
    text: '客户说"我再看看"，应该怎么回应？',
  },
  {
    role: 'ai',
    text: '当客户说"我再看看"时，这通常意味着他们还有未解决的顾虑。建议你：\n1. 先认可："当然，好的选择值得慎重考虑"\n2. 探索："方便告诉我您主要在比较哪些方面吗？"\n3. 价值锚定：回到客户最初感兴趣的点\n避免追问"您还有什么疑虑"——这会增加防御心理。',
  },
])

const inputText = ref('')
const chatContainer = ref(null)

function sendMessage() {
  const text = inputText.value.trim()
  if (!text) return
  messages.value.push({ role: 'user', text })
  inputText.value = ''
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
  setTimeout(() => {
    messages.value.push({
      role: 'ai',
      text: '这是一个很好的问题。让我为你分析一下最佳的应对策略...',
    })
    nextTick(() => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
      }
    })
  }, 800)
}

const recentQuestions = [
  { title: '价格异议的 3 种应对框架', date: '2天前' },
  { title: '如何识别客户的隐性需求', date: '4天前' },
  { title: 'VIP 客户复购话术', date: '1周前' },
  { title: '竞品比较时的价值重构', date: '2周前' },
]
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <div class="flex max-md:flex-col">
        <!-- Left main area -->
        <div class="flex-1 min-w-0">

          <!-- Header -->
          <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
            <div class="luxury-eyebrow mb-2">AI Coach &middot; Real-time</div>
            <h1 class="luxury-display mt-3 max-sm:text-[28px]" :style="{ color: 'var(--espresso)', fontSize: '42px', lineHeight: '1' }">
              实时求助
            </h1>
            <p class="luxury-serif mt-4" :style="{
              maxWidth: '50ch',
              color: 'var(--umber)',
              fontSize: '16px',
              fontStyle: 'italic',
              lineHeight: '1.55',
              fontWeight: '400'
            }">
              你的 24/7 AI 培训师，随时为你提供策略建议和话术参考。
            </p>
          </section>

          <!-- Quick action cards -->
          <section class="px-10 py-6 max-sm:px-3">
            <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
              <button
                v-for="action in quickActions"
                :key="action.title"
                class="luxury-panel flex items-start gap-3 p-5 text-left cursor-pointer transition-all duration-300 hover:bg-[var(--cream)]"
                :style="{ border: '1px solid var(--rule-strong)', background: 'rgba(250,248,243,0.82)' }"
                @mouseenter="$event.currentTarget.style.borderColor = 'rgba(61,46,31,0.35)'"
                @mouseleave="$event.currentTarget.style.borderColor = 'var(--rule-strong)'"
              >
                <div class="flex items-center justify-center flex-shrink-0"
                  :style="{ width: '36px', height: '36px', border: '1px solid var(--rule)', color: 'var(--burgundy)' }">
                  <component :is="action.icon" :size="16" />
                </div>
                <div>
                  <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '16px' }">{{ action.title }}</div>
                  <div :style="{ color: 'var(--umber)', fontSize: '12px', marginTop: '3px', lineHeight: '1.4' }">{{ action.desc }}</div>
                </div>
              </button>
            </div>
          </section>

          <!-- Chat interface -->
          <section class="px-10 pb-8 max-sm:px-3">
            <div class="luxury-panel" :style="{ border: '1px solid var(--rule-strong)' }">

              <!-- Chat header -->
              <div class="flex items-center gap-2 px-5 py-3" :style="{ borderBottom: '1px solid var(--rule)' }">
                <div class="flex items-center justify-center"
                  :style="{ width: '24px', height: '24px', background: 'var(--burgundy)', color: 'var(--bone)' }">
                  <MessageSquare :size="12" />
                </div>
                <span :style="{ color: 'var(--espresso)', fontSize: '13px', letterSpacing: '0.04em' }">AI Coach</span>
                <span :style="{ color: 'var(--taupe)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', marginLeft: '4px' }">Online</span>
              </div>

              <!-- Chat messages -->
              <div
                ref="chatContainer"
                class="flex flex-col gap-4 px-5 py-5 overflow-y-auto"
                :style="{ height: '400px' }"
              >
                <div
                  v-for="(msg, i) in messages"
                  :key="i"
                  class="flex"
                  :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
                >
                  <div
                    :style="{
                      maxWidth: '80%',
                      padding: '12px 16px',
                      fontSize: '13px',
                      lineHeight: '1.65',
                      whiteSpace: 'pre-line',
                      ...(msg.role === 'ai'
                        ? { background: 'var(--cream)', color: 'var(--ink)', border: '1px solid var(--rule)' }
                        : { background: 'var(--espresso)', color: 'var(--bone)', border: '1px solid var(--espresso)' }
                      )
                    }"
                  >
                    <div v-if="msg.role === 'ai'" :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '6px' }">AI Coach</div>
                    {{ msg.text }}
                  </div>
                </div>
              </div>

              <!-- Input area -->
              <div class="flex items-center gap-3 px-5 py-4" :style="{ borderTop: '1px solid var(--rule)' }">
                <input
                  v-model="inputText"
                  type="text"
                  placeholder="输入你的问题..."
                  class="flex-1 bg-transparent outline-none"
                  :style="{
                    border: '1px solid var(--rule-strong)',
                    padding: '10px 14px',
                    fontSize: '13px',
                    color: 'var(--ink)',
                    fontFamily: 'var(--sans)',
                    background: 'var(--bone)',
                  }"
                  @keydown.enter="sendMessage"
                />
                <button
                  class="flex items-center justify-center cursor-pointer transition-all duration-200"
                  :style="{
                    width: '40px',
                    height: '40px',
                    background: inputText.trim() ? 'var(--espresso)' : 'var(--cream)',
                    color: inputText.trim() ? 'var(--bone)' : 'var(--taupe)',
                    border: '1px solid var(--rule-strong)',
                  }"
                  @mouseenter="(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bone)' }"
                  @mouseleave="(e) => { e.currentTarget.style.background = inputText.trim() ? 'var(--espresso)' : 'var(--cream)'; e.currentTarget.style.color = inputText.trim() ? 'var(--bone)' : 'var(--taupe)' }"
                  @click="sendMessage"
                >
                  <Send :size="15" />
                </button>
              </div>
            </div>
          </section>

        </div>

        <!-- Right sidebar: recent questions -->
        <div class="flex-shrink-0 py-10 pr-10 max-md:w-full max-md:px-10 max-md:py-6 max-sm:px-3" :style="{ width: '280px' }">
          <div class="max-md:border-l-0 max-md:border-t max-md:border-[var(--rule-strong)] max-md:pt-5 max-md:pl-0" :style="{ borderLeft: '1px solid var(--rule-strong)', paddingLeft: '20px' }">
            <div class="luxury-eyebrow mb-3">Recent Questions</div>
            <h3 class="luxury-display mb-4" :style="{ color: 'var(--espresso)', fontSize: '15px' }">近期求助</h3>

            <div class="flex flex-col">
              <button
                v-for="(q, i) in recentQuestions"
                :key="i"
                class="flex flex-col gap-1 py-3 text-left cursor-pointer transition-all duration-200 hover:bg-[var(--cream)] bg-transparent border-0"
                :style="{
                  borderBottom: '1px solid var(--rule)',
                  padding: '10px 8px',
                  fontFamily: 'var(--sans)',
                }"
                @mouseenter="$event.currentTarget.style.background = 'var(--cream)'"
                @mouseleave="$event.currentTarget.style.background = 'transparent'"
              >
                <div :style="{ color: 'var(--espresso)', fontSize: '12px', lineHeight: '1.45' }">{{ q.title }}</div>
                <div class="flex items-center gap-1.5" :style="{ color: 'var(--taupe)', fontSize: '10px' }">
                  <Clock :size="10" />
                  <span>{{ q.date }}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>
