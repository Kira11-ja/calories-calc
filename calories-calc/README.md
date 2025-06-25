# 熱量計算機 (Calories Calculator)

一個現代化的 Vue 3 熱量計算機應用程式，幫助用戶計算基礎代謝率 (BMR) 和總熱量消耗 (TDEE)。

## 功能特色

- 🧮 **BMR 計算**: 使用 Mifflin-St Jeor 公式計算基礎代謝率
- ⚡ **TDEE 計算**: 根據活動水平計算總熱量消耗
- 🎯 **目標設定**: 提供減重和增重的熱量建議
- 📊 **營養素分配**: 顯示蛋白質、碳水化合物和脂肪的建議攝取量
- 📱 **響應式設計**: 支援桌面和行動裝置
- 🎨 **現代化 UI**: 使用 Tailwind CSS 設計的美觀介面

## 技術架構

- **前端框架**: Vue 3 + TypeScript
- **狀態管理**: Pinia
- **路由管理**: Vue Router 4
- **建構工具**: Vite
- **樣式框架**: Tailwind CSS
- **程式碼品質**: ESLint + Prettier

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

應用程式將在 `http://localhost:3000` 啟動

### 建構生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
calories-calc/
├── src/
│   ├── components/          # Vue 組件
│   │   ├── HomeView.vue    # 首頁
│   │   ├── CalculatorView.vue  # 計算器頁面
│   │   └── AboutView.vue   # 關於頁面
│   ├── stores/             # Pinia 狀態管理
│   │   └── calculator.ts   # 計算器狀態
│   ├── router/             # 路由配置
│   │   └── index.ts
│   ├── App.vue             # 主要應用組件
│   ├── main.ts             # 應用入口點
│   └── style.css           # 全域樣式
├── public/                 # 靜態資源
├── index.html              # HTML 模板
├── package.json            # 專案配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── tsconfig.json           # TypeScript 配置
```

## 計算公式

### BMR (Mifflin-St Jeor 公式)

- **男性**: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) + 5
- **女性**: (10 × 體重) + (6.25 × 身高) - (5 × 年齡) - 161

### 活動水平係數

- 久坐不動: 1.2
- 輕度活動: 1.375
- 中度活動: 1.55
- 高度活動: 1.725
- 極度活動: 1.9

### TDEE 計算

TDEE = BMR × 活動水平係數

## 開發指南

### 新增功能

1. 在 `src/stores/calculator.ts` 中新增狀態邏輯
2. 在 `src/views/` 中新增頁面組件
3. 在 `src/router/index.ts` 中新增路由配置

### 樣式指南

- 使用 Tailwind CSS 類別
- 遵循現有的設計系統
- 保持響應式設計

## 授權

MIT License

## 免責聲明

本應用程式僅供參考，不應替代專業醫療建議。請在進行任何飲食或運動計劃前諮詢專業醫療人員。 