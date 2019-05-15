//1.导入模块
const express = require('express');
const db = require('./db');

//2.创建服务器
let app = express();

// 设置静态资源
app.use(express.static(path.join(__dirname, 'public')));



//3.开启服务器
app.listen(4000,()=>{
console.log('success');
});