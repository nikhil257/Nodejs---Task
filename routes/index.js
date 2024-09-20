var express = require('express');
var router = express.Router();
const client = require("../config/cache")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Homepage", user: req.user });
});


router.post("/createcache", (req, res) => {
  client.setEx(
    "user:profile:1234",
    10,
    JSON.stringify({ message: "Important Data !!!" })
  );
  res.status(200).json({ message: "Cache Created" });
});

router.get("/getcache", async (req, res) => {
  const data = await client.get("user:profile:1234");
  res.status(200).json({
    message: "Cache Retrieved",
    data: JSON.parse(data),
  });
});

router.get("/delcache", async (req, res) => {
  await client.del("user:profile:1234"),
    res.status(200).json({
      message: "Cache deleted",
    });
});

module.exports = router;
