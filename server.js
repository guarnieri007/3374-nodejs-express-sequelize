const express = require('express');
const routes = require('./src/routes'); // Import your routes
const app = express(); // Create the Express app instance

app.use(express.json()); // Add this middleware here.  BEFORE the routes are added
routes(app); // Pass the app instance directly to your routes
const PORT = process.env.PORT || 3000; // Use environment variable if available
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});