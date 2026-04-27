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
    default: () => ['#536348', '#b18a4a', '#6b3a3a'],
  },
  labels: {
    type: Array,
    default: () => [],
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
  labels: props.labels,
  datasets: [
    {
      data: props.segments,
      backgroundColor: props.colors,
      borderWidth: 2,
      borderColor: props.dark ? '#2A2218' : '#FAF8F3',
      hoverOffset: 6,
      hoverBorderColor: props.dark ? '#2A2218' : '#EFE7D9',
      hoverBorderWidth: 3,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '70%',
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#2A2218',
      titleColor: '#FAF8F3',
      bodyColor: '#E8DFCD',
      borderColor: 'rgba(196,168,124,0.3)',
      borderWidth: 1,
      titleFont: { family: 'Inter, system-ui, sans-serif', size: 11, weight: '400' },
      bodyFont: { family: 'Inter, system-ui, sans-serif', size: 12, weight: '300' },
      padding: { top: 8, bottom: 8, left: 12, right: 12 },
      cornerRadius: 0,
      displayColors: true,
      boxWidth: 8,
      boxHeight: 8,
      boxPadding: 4,
      callbacks: {
        label: (ctx) => ` ${ctx.formattedValue}%`,
      },
    },
  },
  animation: {
    animateRotate: true,
    duration: 900,
    easing: 'easeOutQuart',
  },
}
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <Doughnut :data="chartData" :options="chartOptions" class="max-w-full max-h-full" />
    <div v-if="centerText" class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span class="luxury-display text-[#3D2E1F]" style="font-size:clamp(16px, 2.5vw, 24px);">{{ centerText }}</span>
    </div>
  </div>
</template>
