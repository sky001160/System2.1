
export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎉 登入成功</h1>
      <p>這是主控台首頁。</p>
      <ul>
        <li>✅ 客戶總數：12</li>
        <li>📅 即將到期付款：3 筆</li>
        <li>📥 上傳憑證功能：尚未完成</li>
      </ul>
      <br />
      <a href="/clients" style={{ color: 'blue' }}>➡ 前往客戶列表</a>
    </div>
  );
}
