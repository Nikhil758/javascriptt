const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//middleware
// app.use(express.static(path.join(__dirname,"public")))

// const midd=(req,res,next)=>{
//   console.log(req)
// }
// app.use(midd)


app.get('/:n', (req, res) => {
  res.send('Hello '+req.params.n)
})

app.get('/about', (req, res) => {
    // res.send("ABOUT")
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({
      "Name":"NICK"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})