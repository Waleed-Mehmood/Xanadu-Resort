const app = require("express");
const router = app.Router();
const{ signIn, signUp} = require("../controllers/auth");

router.post("/signup", signUp);
router.post("/login", signIn);

router.get("/", (req, res) => {
  res.send("auth route");
});

module.exports = router;