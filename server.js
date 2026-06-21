import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');

app.disable('x-powered-by');

app.use(
  express.static(distPath, {
    extensions: ['html'],
    maxAge: '1d',
  })
);

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio app listening on port ${port}`);
});
