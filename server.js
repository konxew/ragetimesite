const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Раздаём все статические файлы из папки 'public'
app.use(express.static('public'));

// 2. *** ЭТО САМОЕ ГЛАВНОЕ ***
// Говорим серверу: "Когда заходят на сайт, покажи main_page.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main_page.html'));
});

// 3. (Необязательно) Обработка для всех остальных страниц
// Теперь когда вы переходите на /register.html или /support.html, сервер знает, где их искать
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});
app.get('/support.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'support.html'));
});
app.get('/rules.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rules.html'));
});
app.get('/banned_mods.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'banned_mods.html'));
});
app.get('/appeal.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'appeal.html'));
});
app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});
app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту ${PORT}`);
});
