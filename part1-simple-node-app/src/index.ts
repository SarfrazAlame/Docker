import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/root",(req,res)=>{
  res.json({
    message:"Im in root route"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
