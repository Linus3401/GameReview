import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve statiska filer från 'public'
app.use(express.static('public'));

// Route för startsidan
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/homepage.html'));
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
