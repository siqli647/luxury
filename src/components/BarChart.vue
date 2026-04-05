<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const props = defineProps({
  labels: {
    type: Array,
    default: () => ['10月', '11月', '12月', '1月', '2月', '3月'],
  },
  data: {
    type: Array,
    default: () => [18, 22, 15, 28, 35, 42],
  },
  activeIndices: {
    type: Array,
    default: () => [4, 5],
  },
})

const colors = props.data.map((_, i) =>
  props.activeIndices.includes(i) ? '#3b82f6' : '#d1d5db'
)

const chartData = {
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: colors,
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#64748b', font: { size: 11 } },
      border: { display: false },
    },
    y: {
      grid: { color: '#f1f5f9' },
      ticks: { color: '#64748b', font: { size: 11 } },
      border: { display: false },
    },
  },
}
</script>

<template>
  <div class="w-full h-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
