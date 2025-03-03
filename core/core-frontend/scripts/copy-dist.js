const fs = require('fs-extra');
const path = require('path');

// 定义前端和后端的目录
const distPath = path.join(__dirname, '../dist'); // 前端构建产物
const backendStaticPath = path.join(__dirname, '../../core-backend/src/main/resources/static'); // 后端静态资源路径

// 确保后端 static 目录存在
fs.ensureDirSync(backendStaticPath);

// 复制前端 dist 到后端 static
fs.copy(distPath, backendStaticPath)
  .then(() => console.log('✅ 前端 dist 目录已成功复制到后端 static'))
  .catch(err => console.error('❌ 复制 dist 失败:', err));
