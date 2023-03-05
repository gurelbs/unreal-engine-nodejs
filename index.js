import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'))
})

app.get('/car', (req, res) => {
    res.sendFile(join(__dirname, 'public/MyProject4.html'))
})
const PORT = process.env['PORT'] || 3000;
app.listen(PORT, () => console.log(`server is up and running on http://localhost:${PORT}`));