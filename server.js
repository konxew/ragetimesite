const express = require("express");
const app = express();

// Разрешаем JSON для будущей регистрации
app.use(express.json());

// КЛЮЧЕВАЯ КОМАНДА: отдаём все файлы из папки
app.use(express.static(__dirname));

// Простая проверка
app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

// Запуск сервера
app.listen(3000, () => {
    console.log("✅ Сервер запущен!");
    console.log("🌐 Открой в браузере: http://localhost:3000/register.html");
});