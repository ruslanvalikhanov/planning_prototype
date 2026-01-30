<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-section">
        <img src="/Logo_planning.png" alt="Planning Logo" class="logo-image" />
      </div>

      <!-- Buttons Section -->
      <div class="buttons-section">
        <!-- Primary Button -->
        <button class="btn btn-primary" @click="handleThermondoLogin">
          <div class="btn-content">
            <div class="btn-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span class="btn-text">Mit thermondo-Konto anmelden</span>
          </div>
        </button>

        <!-- Secondary Button -->
        <button class="btn btn-secondary" @click="handleSalesforceLogin">
          <div class="btn-content">
            <span class="btn-text">Mit Salesforce-Konto anmelden</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'TC' | 'EC'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'TC'
})

const handleThermondoLogin = () => {
  // Mock handler for prototype
  console.log(`Thermondo login clicked for variant: ${props.variant}`)
  // In production, this would trigger SSO flow
}

const handleSalesforceLogin = () => {
  // Mock handler for prototype
  console.log(`Salesforce login clicked for variant: ${props.variant}`)
  // In production, this would trigger SSO flow
}
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f4f8;
  padding: 20px;
}

.login-card {
  width: 322px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.logo-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.buttons-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn {
  width: 100%;
  height: 48px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s, border-color 0.2s;
}

.btn-primary {
  background-color: #2563eb;
}

.btn-primary:hover {
  background-color: #0357c4;
}

.btn-primary:active {
  background-color: #024193;
}

.btn-secondary {
  background-color: #ffffff;
  border: 1px solid #333333;
}

.btn-secondary:hover {
  border-color: #525252;
}

.btn-secondary:active {
  border-color: #404040;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
}

.btn-icon {
  display: flex;
  align-items: center;
  padding: 4px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.btn-text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}

.btn-primary .btn-text {
  color: #ffffff;
}

.btn-secondary .btn-text {
  color: #111111;
}

@media (max-width: 480px) {
  .login-card {
    width: 100%;
    max-width: 322px;
  }
}
</style>
