<template>
  <div class="home">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        歡迎使用熱量計算機
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        精確計算您的基礎代謝率 (BMR) 和總熱量消耗 (TDEE)，
        幫助您制定科學的飲食和運動計劃。
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="card text-center">
        <div class="text-4xl text-blue-600 mb-4">🧮</div>
        <h3 class="text-xl font-semibold mb-2">BMR 計算</h3>
        <p class="text-gray-600">
          基礎代謝率是身體在完全休息狀態下維持基本生命功能所需的熱量
        </p>
      </div>

      <div class="card text-center">
        <div class="text-4xl text-green-600 mb-4">⚡</div>
        <h3 class="text-xl font-semibold mb-2">TDEE 計算</h3>
        <p class="text-gray-600">
          總熱量消耗包含日常活動和運動所消耗的總熱量
        </p>
      </div>

      <div class="card text-center">
        <div class="text-4xl text-purple-600 mb-4">🎯</div>
        <h3 class="text-xl font-semibold mb-2">目標設定</h3>
        <p class="text-gray-600">
          根據您的目標提供減重或增重的熱量建議
        </p>
      </div>
    </div>

    <div class="text-center">
      <router-link 
        to="/calculator" 
        class="btn-primary text-lg px-8 py-3 inline-block"
      >
        開始計算
      </router-link>
    </div>

    <div class="mt-16 bg-blue-50 rounded-xl p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">計算公式說明</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-2">BMR (Mifflin-St Jeor 公式)</h3>
          <p class="text-gray-600 mb-2">
            男性: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) + 5
          </p>
          <p class="text-gray-600">
            女性: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) - 161
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">活動水平係數</h3>
          <ul class="text-gray-600 space-y-1">
            <li>久坐不動: 1.2</li>
            <li>輕度活動: 1.375</li>
            <li>中度活動: 1.55</li>
            <li>高度活動: 1.725</li>
            <li>極度活動: 1.9</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 首頁組件邏輯
</script> 