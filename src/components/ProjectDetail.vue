<template>
  <div class="project-detail-container">
    <!-- Header -->
    <header class="app-header">
      <div class="header-left">
        <p class="logo-text">planning</p>
      </div>
      <div class="header-spacer"></div>
      <div class="user-avatar"></div>
    </header>

    <!-- Main Content -->
    <main class="main-container">
      <div class="content-wrapper">
        <!-- Back Button -->
        <div class="back-section">
          <button @click="goBack" class="back-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 4.5L5.5 9.5L10.5 14.5" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Zurück zur Projektliste</span>
          </button>
        </div>

        <!-- Project Details -->
        <div class="detail-card" v-if="project">
          <div class="detail-header">
            <div class="detail-title">
              <div class="title-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4C2 3.44772 2.44772 3 3 3H8.58579C8.851 3 9.10536 3.10536 9.29289 3.29289L11.7071 5.70711C11.8946 5.89464 12.149 6 12.4142 6H17C17.5523 6 18 6.44772 18 7V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V4Z" stroke="#64748B" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
              <h1 class="title-text">{{ project.number }}</h1>
            </div>
            <div class="variant-badge" :class="`variant-${variant.toLowerCase()}`">
              {{ variant }}
            </div>
          </div>

          <div class="detail-content">
            <div class="detail-section">
              <h2 class="section-title">Kundeninformationen</h2>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Kundenname:</span>
                  <span class="info-value">{{ project.customerName }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Adresse:</span>
                  <span class="info-value">{{ project.address }}</span>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <h2 class="section-title">Projektstatus</h2>
              <div class="status-badge status-open">
                <span>Offen</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="error-message">
          <p>Projekt nicht gefunden</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Project {
  number: string
  customerName: string
  address: string
}

const props = defineProps<{
  variant: 'TC' | 'EC'
}>()

const route = useRoute()
const router = useRouter()

// Sample projects data - in a real app, this would come from an API or store
const allProjects: Project[] = [
  { number: 'BV-2025-001', customerName: 'Thomas Müller', address: 'Gartenweg 5, 20095 Hamburg' },
  { number: 'BV-2024-002', customerName: 'Anna Schmidt', address: 'Hauptstraße 15, 19489, Hamburg' },
  { number: 'BV-2025-003', customerName: 'Michael Weber', address: 'Lindenstraße 24, 80331 München' },
  { number: 'BV-2024-004', customerName: 'Julia Wagner', address: 'Goethestraße 8, 60311 Frankfurt am Main' },
  { number: 'BV-2024-005', customerName: 'Andreas Becker', address: 'Bergstraße 12, 70173 Stuttgart' },
  { number: 'BV-2024-006', customerName: 'Stefanie Hoffmann', address: 'Schloßplatz 3, 01067 Dresden' },
  { number: 'BV-2024-007', customerName: 'Markus Schulz', address: 'Rheinstraße 45, 40213 Düsseldorf' },
  { number: 'BV-2024-008', customerName: 'Christina Koch', address: 'Bahnhofstraße 99, 50667 Köln' },
  { number: 'BV-2024-009', customerName: 'Uwe Richter', address: 'Markt 7, 04109 Leipzig' },
  { number: 'BV-2024-010', customerName: 'Kerstin Bauer', address: 'Parkallee 15, 28209 Bremen' }
]

const projectId = computed(() => route.params.id as string)

const project = computed(() => {
  return allProjects.find(p => p.number === projectId.value)
})

const goBack = () => {
  router.push(`/${props.variant}/projects`)
}
</script>

<style scoped>
.project-detail-container {
  width: 100%;
  min-height: 100vh;
  background: #f2f4f8;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  flex-shrink: 0;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 38.64px;
  color: #2563eb;
  margin: 0;
}

.header-spacer {
  flex: 1 0 0;
  min-width: 1px;
  min-height: 1px;
}

.user-avatar {
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: #e6e9ed;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;
}

.main-container {
  flex: 1;
  overflow: auto;
  position: relative;
}

.content-wrapper {
  max-width: 1200px;
  width: 900px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.back-section {
  width: 100%;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 17px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #475569;
  transition: background-color 0.2s, border-color 0.2s;
}

.back-button:hover {
  background: #f8fafc;
}

.detail-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 24px;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.detail-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  flex-shrink: 0;
}

.title-text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
  color: #111111;
  margin: 0;
}

.variant-badge {
  padding: 6px 12px;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
}

.variant-tc {
  background: #dbeafe;
  color: #1e40af;
}

.variant-ec {
  background: #fef3c7;
  color: #92400e;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin: 0;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #64748b;
}

.info-value {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #111111;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  width: fit-content;
}

.status-open {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
}

.error-message {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 24px;
  text-align: center;
}

.error-message p {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin: 0;
}

@media (max-width: 1024px) {
  .content-wrapper {
    width: 100%;
    padding: 24px 16px;
  }
}
</style>
