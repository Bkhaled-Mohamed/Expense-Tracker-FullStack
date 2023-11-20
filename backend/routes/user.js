const { registerUser, loginUser } = require("../controllers/auth");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// .get('/login', getUser)

module.exports = router;
