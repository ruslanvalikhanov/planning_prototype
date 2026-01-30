<template>
  <div class="projects-list-container">
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
        <!-- Page Header -->
        <div class="page-header">
          <div class="page-title">
            <div class="title-icon">
              <!-- Folder icon placeholder - can be replaced with SVG -->
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C2 3.44772 2.44772 3 3 3H8.58579C8.851 3 9.10536 3.10536 9.29289 3.29289L11.7071 5.70711C11.8946 5.89464 12.149 6 12.4142 6H17C17.5523 6 18 6.44772 18 7V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V4Z" stroke="#64748B" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <h1 class="title-text">Projektliste</h1>
          </div>
          <div class="search-container">
            <input 
              type="text" 
              id="dashboardSearch" 
              class="search-input" 
              placeholder="Projekte filtern"
            />
            <div class="search-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3Z" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
                <path d="M12.5 12.5L15.5 15.5" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="table-container">
          <table class="projects-table">
            <thead>
              <tr>
                <th class="col-project-number">Projekt-Nummer</th>
                <th class="col-customer-name">Kundenname</th>
                <th class="col-customer-address">Kundenadresse</th>
                <th class="col-action"></th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(project, index) in projects" 
                :key="project.number"
                :class="{ 'row-alt': index % 2 === 1 }"
              >
                <td class="cell-project-number">{{ project.number }}</td>
                <td class="cell-customer-name">{{ project.customerName }}</td>
                <td class="cell-customer-address">{{ project.address }}</td>
                <td class="cell-action">
                  <button class="action-button">
                    <span>Offen</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
          <div class="pagination-controls">
            <button class="pagination-btn pagination-prev" disabled>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 4.5L5.5 9.5L10.5 14.5" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Vorherige</span>
            </button>
            <button class="pagination-number pagination-active">1</button>
            <button class="pagination-number">2</button>
            <button class="pagination-number">3</button>
            <div class="pagination-ellipsis">...</div>
            <button class="pagination-number">777</button>
            <button class="pagination-btn pagination-next">
              <span>Nächste</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 4.5L12.5 9.5L7.5 14.5" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  number: string
  customerName: string
  address: string
}

const projects = ref<Project[]>([
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
])
</script>

<style scoped>
.projects-list-container {
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

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.page-title {
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

.search-container {
  position: relative;
  width: 280px;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 12px 0 40px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  background: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #111111;
  outline: none;
}

.search-input::placeholder {
  color: #94a3b8;
}

.search-input:focus {
  border-color: #2563eb;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.table-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.projects-table {
  width: 100%;
  border-collapse: collapse;
}

.projects-table thead {
  background: #ffffff;
  border-bottom: 1px solid #b5c4d9;
}

.projects-table th {
  padding: 12px 16px;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #64748b;
}

.col-project-number {
  width: 178px;
}

.col-customer-name {
  width: 231px;
}

.col-customer-address {
  width: auto;
}

.col-action {
  width: auto;
}

.projects-table tbody tr {
  border-bottom: 1px solid #e2e8f0;
}

.projects-table tbody tr.row-alt {
  background: #f8fafc;
}

.projects-table td {
  padding: 12px 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 22.4px;
  color: #111111;
}

.cell-project-number {
  font-weight: 600;
}

.cell-customer-name {
  font-weight: 400;
}

.cell-customer-address {
  font-weight: 400;
}

.cell-action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 17px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #111111;
  transition: background-color 0.2s, border-color 0.2s;
}

.action-button:hover {
  background: #f8fafc;
}

.action-button:active {
  background: #f1f5f9;
}

.action-button svg {
  flex-shrink: 0;
}

.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-btn {
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
  transition: background-color 0.2s, border-color 0.2s, opacity 0.2s;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-prev {
  color: #475569;
}

.pagination-next {
  color: #2563eb;
  border-color: #2563eb;
}

.pagination-number {
  min-width: 32px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #334155;
  transition: background-color 0.2s, border-color 0.2s;
}

.pagination-number:hover {
  background: #f8fafc;
}

.pagination-active {
  background: #e2e8f0;
  border-color: #e2e8f0;
}

.pagination-ellipsis {
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #334155;
}

@media (max-width: 1024px) {
  .content-wrapper {
    width: 100%;
    padding: 24px 16px;
  }
  
  .page-header {
    flex-direction: column;
    gap: 16px;
  }
  
  .search-container {
    width: 100%;
  }
}
</style>
