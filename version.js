// version.js
const VERSION_DATA = {
  versions: [
    {
      version: "v0.26.5",
      date: "2026-09-16",
      changes: [
        { type: "add", text: "新增窩位顯示精靈圖片" },
        {
          type: "imp",
          text: "改善願望清單及兩步孵化邏輯",
          details: [
            "遍歷所有目標，判斷哪些可以直接孵化（有異色公在同蛋組），分為可直接孵化和不能直接孵化",
            "先處理願望清單中的精靈（無論是直接孵化還是兩步孵化）",
            "再處理非願望清單中可以直接孵化的精靈",
            "如果還有窩位，才處理非願望清單中不能直接孵化的精靈"
          ]
        },
        { type: "imp", text: "改善選單字體" },
        { type: "imp", text: "改善窩位代碼結構" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.26.4",
      date: "2026-09-14",
      changes: [
        { type: "add", text: "系統自動修正精靈性別" },
        { type: "imp", text: "輸入框支援簡體搜索，將高階精靈搜索結果併入初階精靈" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.26.3",
      date: "2026-09-10",
      changes: [
        { type: "add", text: "新增S4賽季異色精靈" },
        { type: "imp", text: "修改頁面整體風格" },
        { type: "del", text: "移除一鍵排除S4精靈" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.26.2",
      date: "2026-09-07",
      changes: [
        { type: "add", text: "新增自行選擇目標精靈搜尋框" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.26.1",
      date: "2026-09-07",
      changes: [
        { type: "add", text: "臨時新增一鍵排除S4精靈" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.26.0",
      date: "2026-09-07",
      changes: [
        { type: "add", text: "新增S4常駐異色精靈" },
        { type: "add", text: "新增在空窩位中可自行選擇目標精靈" },
        { type: "del", text: "移除收集所有異色後的選擇目標精靈卡片" },
        { type: "del", text: "移除日間夜間模式切換" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.25.2",
      date: "2026-08-24",
      changes: [
        { type: "add", text: "新增系別篩選" },
        { type: "imp", text: "區分海盔蟲和地鼠兩個樣子" },
        { type: "imp", text: "在窩位卡片內顯示精靈系別" },
        { type: "fix", text: "當重新整理推薦時不會再從已匯入資料讀取優先孵化賽季" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.25.1",
      date: "2026-08-19",
      changes: [
        { type: "add", text: "新增查看版本更新紀錄功能" },
        { type: "add", text: "新增日間夜間模式切換" },
        { type: "imp", text: "將排除清單和願望清單移至窩位卡片內" },
        { type: "imp", text: "改善優先孵化賽季選擇器手機端顯示" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    },
    {
      version: "v0.25.0",
      date: "2026-08-19",
      changes: [
        { type: "add", text: "新增優先孵化賽季功能" },
        { type: "fix", text: "解決一些已知問題" }
      ]
    }
  ]
};
