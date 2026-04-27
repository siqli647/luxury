export const skillDimensions = [
  { name: '产品知识', en: 'Product Knowledge', score: 86, delta: '+6.8%' },
  { name: '需求挖掘', en: 'Client Discovery', score: 72, delta: '+3.1%' },
  { name: '情绪感知', en: 'Emotional Attunement', score: 81, delta: '+9.4%' },
  { name: '信任建立', en: 'Trust & Rapport', score: 78, delta: '+5.2%' },
  { name: '成交推进', en: 'Closing Momentum', score: 67, delta: '+2.0%' },
  { name: '异议处理', en: 'Objection Handling', score: 64, delta: '-1.8%' },
]

export const teamOverview = {
  teamSize: 42,
  avgTraining: 18.6,
  avgPurchaseIntent: 76.8,
  weeklyChange: '+8.4%',
  monthlyChange: '+14.7%',
  completion: 71,
  activeRate: 86,
  practiceCycles: 782,
}

export const teamTrend = [
  { label: 'W1', purchaseIntent: 66, training: 112 },
  { label: 'W2', purchaseIntent: 69, training: 126 },
  { label: 'W3', purchaseIntent: 73, training: 148 },
  { label: 'W4', purchaseIntent: 77, training: 164 },
  { label: 'W5', purchaseIntent: 76, training: 158 },
  { label: 'W6', purchaseIntent: 81, training: 174 },
]

export const scoreDistribution = [
  { label: '高分人群', en: 'High', value: 34, color: '#536348' },
  { label: '中分人群', en: 'Mid', value: 49, color: '#b18a4a' },
  { label: '低分人群', en: 'Low', value: 17, color: '#6b3a3a' },
]

export const topStrengths = [
  { label: '产品知识', value: 86, insight: '经典系列与材质叙事掌握稳定' },
  { label: '情绪感知', value: 81, insight: '能识别客户犹豫与防御信号' },
  { label: '信任建立', value: 78, insight: '开场破冰与服务姿态较成熟' },
]

export const topWeaknesses = [
  { label: '异议处理', value: 64, insight: '价格异议后容易回到功能讲解' },
  { label: '成交推进', value: 67, insight: 'next step 承诺不够明确' },
  { label: '需求挖掘', value: 72, insight: '送礼场景中决策链确认不足' },
]

export const courseAnalytics = [
  { title: '破冰与信任建立', completion: 92, lift: '+12.4', status: '完成稳定' },
  { title: '产品知识：经典系列', completion: 84, lift: '+9.8', status: '高频复习' },
  { title: '异议处理与价值重构', completion: 63, lift: '+16.7', status: '提升最大' },
  { title: '成交推进与跟进承诺', completion: 58, lift: '+7.2', status: '需加练' },
]

export const scenarioAnalytics = [
  { label: '价格异议', count: 186, failure: 34, tone: 'burgundy' },
  { label: '首次奢侈品体验', count: 142, failure: 22, tone: 'moss' },
  { label: '周年礼物选购', count: 128, failure: 18, tone: 'gold' },
  { label: '竞品比较', count: 96, failure: 29, tone: 'umber' },
]

export const hardPersonas = [
  { name: '资深高净值买家', objection: '我已经有相似款', failRate: 38 },
  { name: '价格敏感首次买家', objection: '为什么比别家贵', failRate: 35 },
  { name: '时间压力送礼客户', objection: '我现在没有时间', failRate: 31 },
]

export const saSummary = {
  total: 42,
  avgPurchaseIntent: 76.8,
  avgTraining: 18.6,
  progressRate: 21.4,
}

export const saSegments = [
  { label: '高潜力 SA', value: 9, note: '训练频次高，PI 提升快', color: '#536348' },
  { label: '长期低活跃 SA', value: 6, note: '连续两周训练少于 2 次', color: '#7a6652' },
  { label: '高频低分 SA', value: 5, note: '练习积极但低于 60 分', color: '#6b3a3a' },
  { label: '需要补课的 SA', value: 12, note: '异议处理 / 成交推进短板', color: '#b18a4a' },
]

export const saWatchlist = [
  {
    name: '林悦',
    store: '上海恒隆',
    type: '高潜力 SA',
    purchaseIntent: 82,
    training: 31,
    progress: '+28%',
    need: '安排高难度竞品比较场景',
  },
  {
    name: '陈子昂',
    store: '北京 SKP',
    type: '长期低活跃 SA',
    purchaseIntent: 61,
    training: 4,
    progress: '+3%',
    need: '主管提醒并分配 3 场基础模拟',
  },
  {
    name: '周文琪',
    store: '深圳万象城',
    type: '高频低分 SA',
    purchaseIntent: 57,
    training: 26,
    progress: '-4%',
    need: '复训需求挖掘与价格异议',
  },
  {
    name: '赵奕',
    store: '成都太古里',
    type: '需要补课的 SA',
    purchaseIntent: 68,
    training: 15,
    progress: '+9%',
    need: '补课成交推进与 next step',
  },
]

export const saMatrix = [
  { label: '产品知识', high: 52, mid: 38, low: 10 },
  { label: '需求挖掘', high: 31, mid: 51, low: 18 },
  { label: '情绪感知', high: 45, mid: 43, low: 12 },
  { label: '信任建立', high: 39, mid: 48, low: 13 },
  { label: '成交推进', high: 24, mid: 50, low: 26 },
  { label: '异议处理', high: 21, mid: 46, low: 33 },
]
