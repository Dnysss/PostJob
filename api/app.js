const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//db connection
db.authenticate().then(() => {
    console.log('Connected to the database successfully!');
}).catch(err => {
    console.log("An error occurred while connecting", err);
})

//routes
app.get('/', (req, res) => {
    res.send("Running.");
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));
