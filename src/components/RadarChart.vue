<script setup>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const props = defineProps({
  labels: {
    type: Array,
    default: () => ['产品知识', '需求挖掘', '沟通表达', '异议处理', '情绪感知', '信任建立', '成交推进'],
  },
  data: {
    type: Array,
    default: () => [84, 70, 80, 56, 74, 64, 60],
  },
})

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: '能力评估',
      data: props.data,
      backgroundColor: 'rgba(107, 58, 58, 0.06)',
      borderColor: 'rgba(61, 46, 31, 0.78)',
      borderWidth: 1.2,
      pointBackgroundColor: '#3D2E1F',
      pointBorderColor: '#3D2E1F',
      pointRadius: 2,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        display: false,
        stepSize: 20,
      },
      pointLabels: {
        font: { size: 10 },
        color: '#7A6652',
      },
      grid: {
        color: 'rgba(61,46,31,0.08)',
      },
      angleLines: {
        color: 'rgba(61,46,31,0.10)',
      },
    },
  },
}
</script>

<template>
  <Radar :data="chartData" :options="chartOptions" />
</template>
