// =============================
// Requirements
// =============================

var express = require('express');
var	app = express();
var	port = process.env.PORT || 3000;

// =============================
// Middleware
// =============================

app.use(express.static('public'));

// =============================
// Listener
// =============================

app.listen(port);