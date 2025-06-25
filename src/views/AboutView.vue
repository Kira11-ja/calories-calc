<template>
  <div class="about">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">關於熱量計算機</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        了解我們的計算方法和健康建議
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">什麼是 BMR？</h2>
          <p class="text-gray-600 mb-4">
            基礎代謝率 (Basal Metabolic Rate, BMR) 是指身體在完全休息狀態下，
            維持基本生命功能（如呼吸、血液循環、細胞生長等）所需的熱量。
          </p>
          <p class="text-gray-600">
            BMR 佔據人體每日總熱量消耗的 60-75%，是制定飲食計劃的重要基礎。
          </p>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">什麼是 TDEE？</h2>
          <p class="text-gray-600 mb-4">
            總熱量消耗 (Total Daily Energy Expenditure, TDEE) 是指一個人
            在一天內消耗的總熱量，包括基礎代謝、日常活動和運動。
          </p>
          <p class="text-gray-600">
            TDEE = BMR × 活動水平係數，是制定減重或增重計劃的關鍵指標。
          </p>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">活動水平說明</h2>
          <div class="space-y-3">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold">久坐不動 (1.2)</h3>
              <p class="text-sm text-gray-600">辦公室工作，很少或沒有運動</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-semibold">輕度活動 (1.375)</h3>
              <p class="text-sm text-gray-600">每週運動 1-3 次，輕度運動</p>
            </div>
            <div class="border-l-4 border-yellow-500 pl-4">
              <h3 class="font-semibold">中度活動 (1.55)</h3>
              <p class="text-sm text-gray-600">每週運動 3-5 次，中等強度運動</p>
            </div>
            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="font-semibold">高度活動 (1.725)</h3>
              <p class="text-sm text-gray-600">每週運動 6-7 次，高強度運動</p>
            </div>
            <div class="border-l-4 border-red-500 pl-4">
              <h3 class="font-semibold">極度活動 (1.9)</h3>
              <p class="text-sm text-gray-600">每天運動或從事體力勞動工作</p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">計算公式</h2>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Mifflin-St Jeor 公式</h3>
            <p class="text-sm text-gray-600 mb-2">
              這是目前最準確的 BMR 計算公式之一：
            </p>
            <div class="text-sm font-mono bg-white p-3 rounded border">
              <p>男性: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) + 5</p>
              <p>女性: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) - 161</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">健康建議</h2>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-900 mb-2">減重建議</h3>
              <p class="text-sm text-blue-700">
                每日攝取 TDEE - 500 卡路里，可安全減重約 0.5 公斤/週
              </p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-900 mb-2">維持體重</h3>
              <p class="text-sm text-green-700">
                攝取等於 TDEE 的熱量，配合適當運動維持健康體重
              </p>
            </div>
            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-semibold text-orange-900 mb-2">增重建議</h3>
              <p class="text-sm text-orange-700">
                每日攝取 TDEE + 500 卡路里，配合重量訓練增加肌肉量
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">注意事項</h2>
          <div class="space-y-3 text-sm text-gray-600">
            <p>⚠️ 本計算器僅供參考，不應替代專業醫療建議</p>
            <p>⚠️ 孕婦、哺乳期婦女或有特殊健康狀況者請諮詢醫生</p>
            <p>⚠️ 計算結果會因個體差異而有所不同</p>
            <p>⚠️ 建議配合專業營養師制定個人化飲食計劃</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 關於頁面組件邏輯
</script> 