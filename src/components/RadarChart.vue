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
    default: () => [72, 65, 80, 58, 75, 70, 62],
  },
})

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: '能力评估',
      data: props.data,
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      borderColor: 'rgba(0, 0, 0, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      pointRadius: 3,
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
        font: { size: 11 },
        color: '#374151',
      },
      grid: {
        color: 'rgba(0,0,0,0.08)',
      },
      angleLines: {
        color: 'rgba(0,0,0,0.08)',
      },
    },
  },
}
</script>

<template>
  <Radar :data="chartData" :options="chartOptions" />
</template>
