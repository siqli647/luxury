import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/sa/Dashboard.vue'
import RoleplaySettings from '../views/sa/RoleplaySettings.vue'
import RoleplayCustom from '../views/sa/RoleplayCustom.vue'
import RoleplayChat from '../views/sa/RoleplayChat.vue'
import EvaluationReport from '../views/sa/EvaluationReport.vue'
import TeachModule from '../views/sa/TeachModule.vue'
import AbilityProfile from '../views/sa/AbilityProfile.vue'
import GrowthArchive from '../views/sa/GrowthArchive.vue'
import RealtimeHelp from '../views/sa/RealtimeHelp.vue'
import SavedNotes from '../views/sa/SavedNotes.vue'
import QuizPractice from '../views/sa/QuizPractice.vue'

import AdminDashboard from '../views/trainer/AdminDashboard.vue'
import MaterialManage from '../views/trainer/MaterialManage.vue'
import TrainingAnalytics from '../views/trainer/TrainingAnalytics.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/profile', component: AbilityProfile },
  { path: '/roleplay/settings', component: RoleplaySettings },
  { path: '/roleplay/custom', component: RoleplayCustom },
  { path: '/roleplay/chat', component: RoleplayChat },
  { path: '/roleplay/report', component: EvaluationReport },
  { path: '/teach', component: TeachModule },
  { path: '/help', component: RealtimeHelp },
  { path: '/growth', component: GrowthArchive },
  { path: '/notes', component: SavedNotes },
  { path: '/quiz', component: QuizPractice },
  { path: '/trainer', component: AdminDashboard },
  { path: '/trainer/materials', component: MaterialManage },
  { path: '/trainer/analytics', component: TrainingAnalytics },
  { path: '/trainer/tasks', component: AdminDashboard },
  { path: '/trainer/scenarios', component: AdminDashboard },
  { path: '/trainer/personas', component: AdminDashboard },
  { path: '/trainer/competency', component: AdminDashboard },
  { path: '/trainer/insights', component: AdminDashboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
