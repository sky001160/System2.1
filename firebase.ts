import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Firebase 環境變數偵測：會在登入頁 console 中顯示
console.log("✅ Firebase 環境變數偵測中...");
console.log("API_KEY =", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log("AUTH_DOMAIN =", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
console.log("PROJECT_ID =", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
console.log("STORAGE_BUCKET =", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
console.log("APP_ID =", process.env.NEXT_PUBLIC_FIREBASE_APP_ID);

// ✅ Firebase 設定參數（來自 Vercel 設定的環境變數）
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ✅ 初始化 Firebase 應用
const app = initializeApp(firebaseConfig);

// ✅ 匯出 Firebase 驗證物件
export const auth = getAuth(app);
