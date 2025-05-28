const mysql = require('mysql2');


function connectMySQL() {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "010203",
        database: "electronics"
    });

    con.connect(function(err) {
        if (err) {
            console.error("❌ Lỗi kết nối MySQL:", err);
            process.exit(1);
        }
        console.log("✅ Đã kết nối database MySQL thành công!");
    });

    return con; // Trả về kết nối để sử dụng
}

module.exports = connectMySQL;
