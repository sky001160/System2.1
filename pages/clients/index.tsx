
const mockClients = [
  { id: 1, name: "王小明", type: "一次性付款", status: "已完成" },
  { id: 2, name: "李大華", type: "3個月週期", status: "待付款" },
  { id: 3, name: "陳美麗", type: "6個月週期", status: "進行中" },
];

export default function Clients() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 客戶列表</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>姓名</th>
            <th>付款類型</th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {mockClients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.type}</td>
              <td>{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <a href="/dashboard" style={{ color: 'blue' }}>⬅ 返回主控台</a>
    </div>
  );
}
