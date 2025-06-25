import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface UserData {
  age: number
  gender: 'male' | 'female'
  weight: number // kg
  height: number // cm
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
}

export interface CalculationResult {
  bmr: number
  tdee: number
  weightLoss: number
  weightGain: number
}

export const useCalculatorStore = defineStore('calculator', () => {
  const userData = ref<UserData>({
    age: 25,
    gender: 'male',
    weight: 70,
    height: 170,
    activityLevel: 'moderate'
  })

  const activityMultipliers = {
    sedentary: 1.2,      // 久坐不動
    light: 1.375,        // 輕度活動
    moderate: 1.55,      // 中度活動
    active: 1.725,       // 高度活動
    very_active: 1.9     // 極度活動
  }

  // 計算 BMR (基礎代謝率) - 使用 Mifflin-St Jeor 公式
  const calculateBMR = computed(() => {
    const { age, gender, weight, height } = userData.value
    let bmr = 10 * weight + 6.25 * height - 5 * age
    
    if (gender === 'male') {
      bmr += 5
    } else {
      bmr -= 161
    }
    
    return Math.round(bmr)
  })

  // 計算 TDEE (總熱量消耗)
  const calculateTDEE = computed(() => {
    const multiplier = activityMultipliers[userData.value.activityLevel]
    return Math.round(calculateBMR.value * multiplier)
  })

  // 計算減重熱量 (TDEE - 500)
  const calculateWeightLoss = computed(() => {
    return Math.round(calculateTDEE.value - 500)
  })

  // 計算增重熱量 (TDEE + 500)
  const calculateWeightGain = computed(() => {
    return Math.round(calculateTDEE.value + 500)
  })

  // 獲取完整計算結果
  const getCalculationResult = computed((): CalculationResult => ({
    bmr: calculateBMR.value,
    tdee: calculateTDEE.value,
    weightLoss: calculateWeightLoss.value,
    weightGain: calculateWeightGain.value
  }))

  // 更新用戶數據
  const updateUserData = (newData: Partial<UserData>) => {
    userData.value = { ...userData.value, ...newData }
  }

  return {
    userData,
    calculateBMR,
    calculateTDEE,
    calculateWeightLoss,
    calculateWeightGain,
    getCalculationResult,
    updateUserData
  }
}) 