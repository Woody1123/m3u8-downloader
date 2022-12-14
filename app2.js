const express = require('express')
const app = express()
const port = 8080
 
app.get("/jdsoa/partner/projectStatistic", (req, res) => {
  res.json({ code: 200, msg: "这是8080端口返回的" });
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
