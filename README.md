# Taiwan Travel Website 台灣旅遊資訊查詢網
> THE F2E 3rd 第一關－台灣旅遊景點導覽

---
### 介紹
使用 **React** 串接 [TDX（運輸資料流通服務）API](https://tdx.transportdata.tw/) ，提供台灣旅遊資訊查詢的服務。
> 因時間關係有許多功能尚未實現，將在日後補上。

---
### 作者
- UI/UX：[Frank Peng](https://2021.thef2e.com/users/6296432819610583736?week=1&type=1)
- Front-End：[Yu-Shan Lin](https://github.com/olivialin21)

---
### 功能
- [x] 匯入不同分類資料（景點、餐廳、旅宿、活動）
- [ ] 縣市篩選功能
- [ ] 關鍵字篩選功能
- [ ] 詳細資料頁
- [ ] 將資料清單分頁呈現
- [ ] 我的最愛
- [ ] RWD

---
### 執行方式
1. 下載 **node.js**
2. 下載 **yarn**（開啟命令提示字元執行 ```npm install -g yarn``` ）
3. 在命令提示字元中移動到想下載的位置，輸入 ```git clone https://github.com/olivialin21/Taiwan-Travel-Website```
4. ```cd Taiwan-Travel-Website```
5. ```yarn start```
6. 成功開啟專案

---
### 使用技術
- React.js
- Axios
- Bootstrap
---
### Sitemap
```
|- 景點 /attrctions
|- 餐飲 /restaurant
|- 旅宿 /hotel
|- 活動 /activity
```