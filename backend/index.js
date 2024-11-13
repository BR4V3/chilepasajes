const express = require('express');
const app = express();
const PORT = 3000;

// Importamos las rutas
const imageRoutes = require('./routes/imageRoutes');

// Usamos las rutas
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
