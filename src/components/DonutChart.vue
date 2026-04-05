<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  segments: {
    type: Array,
    default: () => [45, 31, 20, 4],
  },
  colors: {
    type: Array,
    default: () => ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'],
  },
  centerText: {
    type: String,
    default: '',
  },
  dark: {
    type: Boolean,
    default: false,
  },
})

const chartData = {
  datasets: [
    {
      data: props.segments,
      backgroundColor: props.colors,
      borderWidth: 2,
      borderColor: props.dark ? '#27272a' : '#ffffff',
      hoverOffset: 4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '72%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
}
</script>

<template>
  <div class="relative inline-flex items-center justify-center">
    <Doughnut :data="chartData" :options="chartOptions" />
    <div v-if="centerText" class="absolute inset-0 flex items-center justify-center">
      <span :class="dark ? 'text-white' : 'text-gray-800'" class="text-2xl font-bold">{{ centerText }}</span>
    </div>
  </div>
</template>
