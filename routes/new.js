var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.render("form", { title: "Add message" });
});

// router.post("/", function (req, res, next) {
//     messages.push({
//         text: req.body.messageText,
//         user: req.body.messageUser,
//         added: new Date(),
//     });
//     next();
// });

module.exports = router;
