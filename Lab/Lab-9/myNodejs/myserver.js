const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000; 
const PAGE_DIR = path.join(__dirname, "mypage"); 

// อ่านไฟล์ HTML แล้วส่งกลับไปที่ Browser
function sendFile(res, fileName, statusCode) {
    const filePath = path.join(PAGE_DIR, fileName);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("ไม่สามารถอ่านไฟล์ได้");
            return;
        }

        res.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
    });
}

// สร้างเซิร์ฟเวอร์ แล้วแยกหน้าตาม URL ที่ user ป้อน
const server = http.createServer(function (req, res) {
    const urlPath = req.url.split("?")[0]; // ตัด query string ออก เหลือแค่ path

    if (urlPath === "/" || urlPath === "/index.html") {
        sendFile(res, "index.html", 200); // หน้าแรก
    } else if (urlPath === "/menu.html") {
        sendFile(res, "menu.html", 200); // หน้าเมนู
    } else {
        sendFile(res, "404.html", 404); // URL อื่นที่ไม่มีในระบบ
    }
});

server.listen(PORT, function () {
    console.log("Server is running at http://localhost:" + PORT);
});
