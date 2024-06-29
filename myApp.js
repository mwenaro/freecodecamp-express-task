let express = require('express');
let app = express();
const VIEWS_PATH = __dirname+'/views/'
app.use(express.static(__dirname+'/public'))
console.log("Hello World")
app.get("/", (req, res) => {
    res.sendFile(VIEWS_PATH+'index.html')
})




// module.exports = router





























module.exports = app;
