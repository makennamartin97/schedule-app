const express = require("express"),
      app = express(),
      cors = require("cors"),
      port = 8000,
      dbname = "scheduleapp";
    

app.use(cors());
app.use(express.json());

require('./server/config/mongoose')(dbname);
require('./server/routes/schedule.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

