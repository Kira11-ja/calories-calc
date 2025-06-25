<template>
  <div class="calculator">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">熱量計算器</h1>
      <p class="text-gray-600">請輸入您的個人資訊以計算 BMR 和 TDEE</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <!-- 輸入表單 -->
      <div class="card">
        <h2 class="text-xl font-semibold mb-6">個人資訊</h2>
        
        <form @submit.prevent="calculateResults" class="space-y-4">
          <div class="form-group">
            <label class="form-label">年齡</label>
            <input
              v-model.number="userData.age"
              type="number"
              min="15"
              max="100"
              class="input-field"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">性別</label>
            <select v-model="userData.gender" class="input-field" required>
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">體重 (公斤)</label>
            <input
              v-model.number="userData.weight"
              type="number"
              step="0.1"
              min="30"
              max="300"
              class="input-field"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">身高 (公分)</label>
            <input
              v-model.number="userData.height"
              type="number"
              min="100"
              max="250"
              class="input-field"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">活動水平</label>
            <select v-model="userData.activityLevel" class="input-field" required>
              <option value="sedentary">久坐不動 (辦公室工作，很少運動)</option>
              <option value="light">輕度活動 (每週運動 1-3 次)</option>
              <option value="moderate">中度活動 (每週運動 3-5 次)</option>
              <option value="active">高度活動 (每週運動 6-7 次)</option>
              <option value="very_active">極度活動 (每天運動或體力勞動)</option>
            </select>
          </div>

          <button type="submit" class="btn-primary w-full">
            計算結果
          </button>
        </form>
      </div>

      <!-- 計算結果 -->
      <div class="card">
        <h2 class="text-xl font-semibold mb-6">計算結果</h2>
        
        <div v-if="showResults" class="space-y-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">基礎代謝率 (BMR)</h3>
            <p class="text-2xl font-bold text-blue-600">{{ results.bmr }} 卡路里/天</p>
            <p class="text-sm text-blue-700 mt-1">
              身體在完全休息狀態下維持基本生命功能所需的熱量
            </p>
          </div>

          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">總熱量消耗 (TDEE)</h3>
            <p class="text-2xl font-bold text-green-600">{{ results.tdee }} 卡路里/天</p>
            <p class="text-sm text-green-700 mt-1">
              包含日常活動和運動的總熱量消耗
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-900 mb-2">減重目標</h3>
              <p class="text-xl font-bold text-red-600">{{ results.weightLoss }} 卡路里/天</p>
              <p class="text-xs text-red-700 mt-1">TDEE - 500</p>
            </div>

            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-semibold text-orange-900 mb-2">增重目標</h3>
              <p class="text-xl font-bold text-orange-600">{{ results.weightGain }} 卡路里/天</p>
              <p class="text-xs text-orange-700 mt-1">TDEE + 500</p>
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">營養素分配建議</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>蛋白質:</span>
                <span class="font-medium">{{ Math.round(results.tdee * 0.25 / 4) }}g (25%)</span>
              </div>
              <div class="flex justify-between">
                <span>碳水化合物:</span>
                <span class="font-medium">{{ Math.round(results.tdee * 0.45 / 4) }}g (45%)</span>
              </div>
              <div class="flex justify-between">
                <span>脂肪:</span>
                <span class="font-medium">{{ Math.round(results.tdee * 0.30 / 9) }}g (30%)</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-gray-500 py-12">
          <div class="text-4xl mb-4">📊</div>
          <p>請填寫個人資訊並點擊計算按鈕</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useCalculatorStore, type UserData } from '@/stores/calculator'

const calculatorStore = useCalculatorStore()

const userData = reactive<UserData>({
  age: 25,
  gender: 'male',
  weight: 70,
  height: 170,
  activityLevel: 'moderate'
})

const showResults = ref(false)
const results = ref({
  bmr: 0,
  tdee: 0,
  weightLoss: 0,
  weightGain: 0
})

const calculateResults = () => {
  calculatorStore.updateUserData(userData)
  const calculationResult = calculatorStore.getCalculationResult
  results.value = calculationResult
  showResults.value = true
}
</script> 