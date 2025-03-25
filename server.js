// 简单的Node.js HTTP服务器，用于本地部署原型
const http = require('http');
const fs = require('fs');
const path = require('path');

// 可配置的端口号
const PORT = process.env.PORT || 8080;

// MIME类型映射
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4'
};

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // 解析请求的URL路径
    let filePath = '.' + req.url;
    
    // 默认提供start.html作为首页
    if (filePath === './') {
        filePath = './start.html';
    }
    
    // 获取文件扩展名
    const extname = path.extname(filePath).toLowerCase();
    
    // 默认的内容类型
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    // 读取文件
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，返回404
                fs.readFile('./404.html', (err, content) => {
                    if (err) {
                        // 如果没有自定义404页面，返回简单的错误消息
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // 服务器错误
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>500 Internal Server Error</h1><p>${error.code}</p>`);
            }
        } else {
            // 成功读取文件
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// 启动服务器
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`- 展示模式: http://localhost:${PORT}/index.html`);
    console.log(`- 交互模式: http://localhost:${PORT}/app.html`);
    console.log('Press Ctrl+C to stop the server');
}); 