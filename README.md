# 使用React + Redux 建立一個簡單的訂購飲料的網站
使用React+Redux建立一個簡單的訂購飲料網站，從而練習對於前端網頁的增刪查改。

# 介紹
此專案中是使用了Create-react-app所建立的React專案，而資料處理的部分則是由原本的React內建state更改為使用Redux
來進行整個專案數據的管理，而串接的後端API則是使用JSON-Server建立的一個類似於後端數據庫的方法並將他部屬到"heroku"中
使用了axios進行網路數據請求，而畫面的部分使用CSS RWD建立了手機板跟電腦版。

# 功能
1. 可以點擊主頁中的Add按鈕便可以開啟新增飲料的介面，輸入完所需要的設定後按下ADD便會將輸入的資訊傳遞給伺服器中，並將畫面再次渲染。
2. 點擊飲料項目中的Delete便可將所指定的item進行刪除。
3. 點擊飲料項目中的Edit便可以開啟編輯飲料界面，上面所存在的數據便是指定item當下的數據可以對其進行更改，更改完成後按下Edit便可以將此item進行更改。
4. 無論是新增、刪除還是更改，都有使用react-toastify彈出成功與失敗提示以便提升使用者體驗。

# URL

Live URL : https://daily-drink.fandix.vercel.app/

# 照片

## Main Page
![Main Page](https://ithelp.ithome.com.tw/upload/images/20200718/20124767ouOJ1r6KRf.png)<br><br>

# Add Panel
![Add Panel](https://ithelp.ithome.com.tw/upload/images/20200718/20124767MWbNZnZ6wA.png)<br><br>

# Edit Panel
![Edit Page](https://ithelp.ithome.com.tw/upload/images/20200718/20124767kxAAhkaa75.png)<br><br>

# Mobile Page
![Mobile Page](https://ithelp.ithome.com.tw/upload/images/20200718/20124767UrxYNkOkeV.png)<br><br>

# 使用技術
1. ReactJS
2. Redux
3. Redux-middleware(redux-thunk)
4. axios 非同步請求網路數據 (Get,POST,PUT)
5. CSS RWD
6. CSS flexbox



