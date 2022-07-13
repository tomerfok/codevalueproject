const express = require('express');
const app = express();
const routes = require('./api/api.routes');
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});