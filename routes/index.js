var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Route xử lý agent
app.post("/agent", (req, res) => {
  const { task, params } = req.body;

  let result = null;

  switch (task) {
    case "sum":
      result = params.reduce((acc, curr) => acc + curr, 0);
      break;
    case "average":
      result = params.reduce((acc, curr) => acc + curr, 0) / params.length;
      break;
    case "max":
      result = Math.max(...params);
      break;
    default:
      return res.status(400).json({ error: "Unsupported task" });
  }

  return res.json({ result });
});

module.exports = router;
