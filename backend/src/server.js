import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000; // Порт из .env или 5000 по умолчанию

// Middleware
app.use(cors({
  origin: 'http://localhost:5173' // URL вашего React-приложения
}));
app.use(express.json()); // Для парсинга JSON

// Тестовый роут
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Backe d!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 