import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/sa/Dashboard.vue'
import RoleplaySettings from '../views/sa/RoleplaySettings.vue'
import RoleplayCustom from '../views/sa/RoleplayCustom.vue'
import RoleplayChat from '../views/sa/RoleplayChat.vue'
import EvaluationReport from '../views/sa/EvaluationReport.vue'
import TeachModule from '../views/sa/TeachModule.vue'

import AdminDashboard from '../views/trainer/AdminDashboard.vue'
import MaterialManage from '../views/trainer/MaterialManage.vue'
import TrainingAnalytics from '../views/trainer/TrainingAnalytics.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/roleplay/settings', component: RoleplaySettings },
  { path: '/roleplay/custom', component: RoleplayCustom },
  { path: '/roleplay/chat', component: RoleplayChat },
  { path: '/roleplay/report', component: EvaluationReport },
  { path: '/teach', component: TeachModule },
  { path: '/trainer', component: AdminDashboard },
  { path: '/trainer/materials', component: MaterialManage },
  { path: '/trainer/analytics', component: TrainingAnalytics },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
