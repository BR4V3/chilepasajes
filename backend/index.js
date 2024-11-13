const express = require('express');
const cors = require('cors'); 
const app = express();
app.use(cors());
const PORT = 3000;

// Importamos las rutas
const imageRoutes = require('./routes/imageRoutes');

// Usamos las rutas
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


