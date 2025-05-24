// F:\File\NodeJS-TS\fresh-food-ts\src\index.ts
import app from './server';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
