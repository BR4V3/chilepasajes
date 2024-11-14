// Se utiliza express y lo declaramos en variable para hacer uso de sus funciones.
const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const app = express();
const PORT = 3000;


// ...
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api/images', imageRoutes);


// ...
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
