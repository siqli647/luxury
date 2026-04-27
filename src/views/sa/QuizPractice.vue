<script setup>
import { ref, computed } from 'vue'
import SASidebar from '../../components/SASidebar.vue'
import { CheckCircle, XCircle, ChevronRight, Target, Zap, Trophy } from 'lucide-vue-next'

const questions = [
  {
    id: 1,
    category: '产品知识',
    difficulty: '中等',
    question: '以下哪项不是 Hermes Birkin 手袋的标志性特征？',
    options: ['手工鞍缝工艺', '旋转锁扣设计', '可拆卸肩带', 'Togo 小牛皮材质'],
    correct: 2,
    explanation: 'Birkin 手袋标志性设计包括手工鞍缝、旋转锁扣和多种皮革选择（包括 Togo），但经典款不配备可拆卸肩带。',
  },
  {
    id: 2,
    category: '异议处理',
    difficulty: '困难',
    question: '客户说"我在别家看到类似的款式，价格便宜很多"，最佳应对策略是？',
    options: [
      '直接指出竞品的质量问题',
      '认可客户的比较意识，从工艺传承角度建立差异',
      '提供折扣以匹配竞品价格',
      '建议客户先去竞品店体验再做决定',
    ],
    correct: 1,
    explanation: '最佳策略是先认可客户的理性比较，再从工艺、传承、专属服务等维度建立不可比拟的价值感，而非攻击竞品或降价。',
  },
  {
    id: 3,
    category: '情绪感知',
    difficulty: '中等',
    question: '当客户频繁查看手机并缩短回答时，最可能表示？',
    options: [
      '对产品非常感兴趣在查资料',
      '时间压力增大，需要加速推进',
      '对当前对话失去兴趣',
      '在与同伴讨论购买决定',
    ],
    correct: 1,
    explanation: '频繁看手机 + 缩短回答通常说明客户时间紧迫。此时应简化推荐流程，聚焦 1-2 个核心选项，并提供便捷的后续跟进方式。',
  },
]

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const submitted = ref(false)

const currentQuestion = computed(() => questions[currentIndex.value])

const isCorrect = computed(() => {
  if (selectedAnswer.value === null) return null
  return selectedAnswer.value === currentQuestion.value.correct
})

function selectAnswer(index) {
  if (submitted.value) return
  selectedAnswer.value = index
}

function submitAnswer() {
  if (selectedAnswer.value === null) return
  submitted.value = true
}

function nextQuestion() {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    submitted.value = false
  }
}

function categoryColor(cat) {
  if (cat === '产品知识') return 'var(--gold)'
  if (cat === '异议处理') return 'var(--burgundy)'
  if (cat === '情绪感知') return 'var(--moss)'
  return 'var(--umber)'
}

function difficultyColor(diff) {
  if (diff === '困难') return 'var(--burgundy)'
  if (diff === '中等') return 'var(--gold)'
  return 'var(--moss)'
}

const history = [
  { category: '产品知识', correct: true },
  { category: '异议处理', correct: false },
  { category: '情绪感知', correct: true },
  { category: '成交推进', correct: true },
  { category: '需求挖掘', correct: true },
]
</script>

<template>
  <div class="flex h-screen overflow-hidden luxury-shell max-md:h-auto max-md:min-h-screen max-md:flex-col max-md:overflow-visible">
    <SASidebar />

    <main class="flex-1 overflow-y-auto max-md:overflow-visible" :style="{ background: 'var(--bone)' }">

      <!-- Header -->
      <section class="px-10 pt-10 pb-8 max-sm:px-3 max-sm:py-4" :style="{ borderBottom: '1px solid var(--rule-strong)' }">
        <div class="luxury-eyebrow mb-2">Practice &middot; Knowledge Test</div>
        <h1 class="luxury-display mt-3 max-sm:text-[28px]" :style="{ color: 'var(--espresso)', fontSize: '42px', lineHeight: '1' }">
          做题
        </h1>
        <p class="luxury-serif mt-4" :style="{
          maxWidth: '52ch',
          color: 'var(--umber)',
          fontSize: '16px',
          fontStyle: 'italic',
          lineHeight: '1.55',
          fontWeight: '400'
        }">
          AI 根据你的能力短板自动生成练习题，巩固薄弱环节。
        </p>
      </section>

      <!-- Centered content -->
      <div class="max-sm:!px-3 max-sm:!py-4" :style="{ maxWidth: '720px', margin: '0 auto', padding: '24px 40px 60px' }">

        <!-- Quiz stats -->
        <div class="grid grid-cols-3 gap-0 mb-8 max-sm:grid-cols-1" :style="{ border: '1px solid var(--rule-strong)' }">
          <div class="flex items-center gap-3 p-4" :style="{ borderRight: '1px solid var(--rule)' }">
            <div class="flex items-center justify-center flex-shrink-0"
              :style="{ width: '32px', height: '32px', border: '1px solid var(--rule)', color: 'var(--gold)' }">
              <Target :size="14" />
            </div>
            <div>
              <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '22px', lineHeight: '1' }">
                8<span :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '10px', marginLeft: '2px' }">题</span>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase', marginTop: '2px' }">今日已答</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4" :style="{ borderRight: '1px solid var(--rule)' }">
            <div class="flex items-center justify-center flex-shrink-0"
              :style="{ width: '32px', height: '32px', border: '1px solid var(--rule)', color: 'var(--moss)' }">
              <Zap :size="14" />
            </div>
            <div>
              <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '22px', lineHeight: '1' }">
                75<span :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '10px', marginLeft: '1px' }">%</span>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase', marginTop: '2px' }">正确率</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-4">
            <div class="flex items-center justify-center flex-shrink-0"
              :style="{ width: '32px', height: '32px', border: '1px solid var(--rule)', color: 'var(--burgundy)' }">
              <Trophy :size="14" />
            </div>
            <div>
              <div class="luxury-display" :style="{ color: 'var(--espresso)', fontSize: '22px', lineHeight: '1' }">
                4<span :style="{ color: 'var(--taupe)', fontFamily: 'var(--sans)', fontSize: '10px', marginLeft: '2px' }">题</span>
              </div>
              <div :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase', marginTop: '2px' }">连续答对</div>
            </div>
          </div>
        </div>

        <!-- Question progress -->
        <div class="flex items-center justify-between mb-4 px-1">
          <span :style="{ color: 'var(--taupe)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase' }">
            Question {{ currentIndex + 1 }} / {{ questions.length }}
          </span>
          <div class="flex items-center gap-1">
            <div
              v-for="(q, i) in questions"
              :key="q.id"
              :style="{
                width: '24px',
                height: '3px',
                background: i === currentIndex ? 'var(--espresso)' : 'var(--rule)',
                transition: 'background 0.3s',
              }"
            />
          </div>
        </div>

        <!-- Current question card -->
        <div class="luxury-panel mb-6" :style="{ border: '1px solid var(--rule-strong)', padding: '28px 32px' }">

          <!-- Tags row -->
          <div class="flex items-center gap-2 mb-5">
            <span :style="{
              fontSize: '9px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: categoryColor(currentQuestion.category),
              padding: '3px 10px',
              border: '1px solid',
              borderColor: categoryColor(currentQuestion.category),
              fontWeight: '500',
            }">
              {{ currentQuestion.category }}
            </span>
            <span :style="{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: difficultyColor(currentQuestion.difficulty),
              padding: '3px 10px',
              border: '1px solid var(--rule)',
            }">
              {{ currentQuestion.difficulty }}
            </span>
          </div>

          <!-- Question text -->
          <h2 class="luxury-display mb-6" :style="{ color: 'var(--espresso)', fontSize: '22px', lineHeight: '1.35', margin: '0 0 24px' }">
            {{ currentQuestion.question }}
          </h2>

          <!-- Options -->
          <div class="flex flex-col gap-2.5 mb-6">
            <button
              v-for="(opt, i) in currentQuestion.options"
              :key="i"
              class="w-full text-left cursor-pointer transition-all duration-200 border-0"
              :style="{
                padding: '14px 18px',
                fontSize: '13px',
                lineHeight: '1.5',
                fontFamily: 'var(--sans)',
                fontWeight: '400',
                border: '1px solid',
                borderColor:
                  submitted && i === currentQuestion.correct ? 'var(--moss)' :
                  submitted && i === selectedAnswer && i !== currentQuestion.correct ? 'var(--burgundy)' :
                  selectedAnswer === i ? 'var(--espresso)' :
                  'var(--rule)',
                background:
                  submitted && i === currentQuestion.correct ? 'rgba(83,99,72,0.08)' :
                  submitted && i === selectedAnswer && i !== currentQuestion.correct ? 'rgba(107,58,58,0.08)' :
                  selectedAnswer === i ? 'var(--espresso)' :
                  'rgba(245,240,232,0.66)',
                color:
                  selectedAnswer === i && !submitted ? 'var(--bone)' :
                  'var(--ink)',
              }"
              @mouseenter="!submitted && selectedAnswer !== i && ($event.currentTarget.style.background = 'var(--cream)')"
              @mouseleave="!submitted && selectedAnswer !== i && ($event.currentTarget.style.background = 'rgba(245,240,232,0.66)')"
              @click="selectAnswer(i)"
            >
              <div class="flex items-center gap-3">
                <span :style="{
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor:
                    selectedAnswer === i && !submitted ? 'var(--bone)' :
                    submitted && i === currentQuestion.correct ? 'var(--moss)' :
                    submitted && i === selectedAnswer ? 'var(--burgundy)' :
                    'var(--rule-strong)',
                  fontSize: '10px',
                  color:
                    selectedAnswer === i && !submitted ? 'var(--bone)' :
                    submitted && i === currentQuestion.correct ? 'var(--moss)' :
                    submitted && i === selectedAnswer ? 'var(--burgundy)' :
                    'var(--umber)',
                }">
                  <CheckCircle v-if="submitted && i === currentQuestion.correct" :size="14" :style="{ color: 'var(--moss)' }" />
                  <XCircle v-else-if="submitted && i === selectedAnswer && i !== currentQuestion.correct" :size="14" :style="{ color: 'var(--burgundy)' }" />
                  <span v-else>{{ String.fromCharCode(65 + i) }}</span>
                </span>
                <span>{{ opt }}</span>
              </div>
            </button>
          </div>

          <!-- Submit / Next button -->
          <div v-if="!submitted" class="flex justify-end">
            <button
              class="cursor-pointer transition-all duration-200 border-0"
              :style="{
                padding: '10px 28px',
                fontSize: '12px',
                letterSpacing: '0.12em',
                fontFamily: 'var(--sans)',
                fontWeight: '400',
                background: selectedAnswer !== null ? 'var(--espresso)' : 'var(--cream)',
                color: selectedAnswer !== null ? 'var(--bone)' : 'var(--taupe)',
                border: '1px solid',
                borderColor: selectedAnswer !== null ? 'var(--espresso)' : 'var(--rule)',
                opacity: selectedAnswer !== null ? 1 : 0.6,
              }"
              :disabled="selectedAnswer === null"
              @mouseenter="selectedAnswer !== null && ($event.currentTarget.style.background = 'var(--ink)')"
              @mouseleave="selectedAnswer !== null && ($event.currentTarget.style.background = 'var(--espresso)')"
              @click="submitAnswer"
            >
              提交答案
            </button>
          </div>

          <!-- Explanation panel -->
          <div v-if="submitted" class="mt-2">
            <div :style="{
              padding: '16px 20px',
              background: isCorrect ? 'rgba(83,99,72,0.06)' : 'rgba(107,58,58,0.06)',
              border: '1px solid',
              borderColor: isCorrect ? 'rgba(83,99,72,0.2)' : 'rgba(107,58,58,0.2)',
            }">
              <div class="flex items-center gap-2 mb-2">
                <CheckCircle v-if="isCorrect" :size="14" :style="{ color: 'var(--moss)' }" />
                <XCircle v-else :size="14" :style="{ color: 'var(--burgundy)' }" />
                <span :style="{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  color: isCorrect ? 'var(--moss)' : 'var(--burgundy)',
                }">
                  {{ isCorrect ? '回答正确' : '回答错误' }}
                </span>
              </div>
              <p :style="{ color: 'var(--umber)', fontSize: '13px', lineHeight: '1.65', margin: 0 }">
                {{ currentQuestion.explanation }}
              </p>
            </div>

            <div class="flex justify-end mt-4" v-if="currentIndex < questions.length - 1">
              <button
                class="flex items-center gap-2 cursor-pointer transition-all duration-200 border-0"
                :style="{
                  padding: '10px 24px',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  fontFamily: 'var(--sans)',
                  fontWeight: '400',
                  background: 'var(--espresso)',
                  color: 'var(--bone)',
                  border: '1px solid var(--espresso)',
                }"
                @mouseenter="$event.currentTarget.style.background = 'var(--ink)'"
                @mouseleave="$event.currentTarget.style.background = 'var(--espresso)'"
                @click="nextQuestion"
              >
                <span>下一题</span>
                <ChevronRight :size="14" />
              </button>
            </div>
          </div>
        </div>

        <!-- Question history -->
        <div>
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <div :style="{ color: 'var(--burgundy)', fontSize: '9px', letterSpacing: '0.34em', textTransform: 'uppercase' }">History</div>
              <h3 class="luxury-display mt-0.5" :style="{ color: 'var(--espresso)', fontSize: '15px', margin: '2px 0 0' }">答题记录</h3>
            </div>
            <span :style="{ color: 'var(--taupe)', fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase' }">最近 5 题</span>
          </div>

          <div class="flex flex-col">
            <div
              v-for="(h, i) in history"
              :key="i"
              class="flex items-center justify-between py-3 transition-all duration-200 cursor-pointer"
              :style="{
                borderBottom: '1px solid var(--rule)',
                padding: '10px 8px',
              }"
              @mouseenter="$event.currentTarget.style.background = 'var(--cream)'"
              @mouseleave="$event.currentTarget.style.background = 'transparent'"
            >
              <div class="flex items-center gap-3">
                <span :style="{
                  width: '6px',
                  height: '6px',
                  flexShrink: 0,
                  background: h.correct ? 'var(--moss)' : 'var(--burgundy)',
                }" />
                <span :style="{ color: 'var(--espresso)', fontSize: '12px' }">{{ h.category }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <CheckCircle v-if="h.correct" :size="13" :style="{ color: 'var(--moss)' }" />
                <XCircle v-else :size="13" :style="{ color: 'var(--burgundy)' }" />
                <span :style="{
                  fontSize: '11px',
                  color: h.correct ? 'var(--moss)' : 'var(--burgundy)',
                  letterSpacing: '0.04em',
                }">
                  {{ h.correct ? '正确' : '错误' }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
