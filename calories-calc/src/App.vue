<template>
  <div id="app">
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">熱量計算機</h1>
          </div>
          <nav class="flex space-x-8">
            <router-link 
              to="/" 
              class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              首頁
            </router-link>
            <router-link 
              to="/calculator" 
              class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              計算器
            </router-link>
            <router-link 
              to="/about" 
              class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-blue-600"
            >
              關於
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>

    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          © 2024 熱量計算機. 僅供參考，請諮詢專業醫療人員。
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 組件邏輯將在這裡
</script> 