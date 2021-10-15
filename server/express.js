const express = require('express')
// const bodyParser = require('body-parser')

const server = express()
const port = process.env.PORT || 8090;

// server.use(bodyParser.json({ limit: "1mb" }))
server.use(express.json({ limit: "1mb" }));
server.use((req, res, next) => {
  console.log(`${new Date()} ${req.url} ${req.method}`), next();
})

server.get('/api/v1/server', (req, res) => {
  res.json({ message: 'wellcome to Express server'})
})

server.get('/api/v1/user/:user', (req, res) => {
  res.send(`hello ${req.params.user}`)
})

server.post('/api/v1/body', (req, res) => {
  const user = {
    name: req.body.name,
    age: req.body.age
  }
  res.json(user);
})

server.use("/api/v1/", (req, res) => {
  res.status(403);
  res.end();
});


server.listen(port, () => {
  console.log(`Serving at http:localhost:${port}`)
})