const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

require("dotenv").config({ quiet: true })
const express = require("express")
const morgan = require("morgan")

const path = require("path")
const app = express()

const PORT = 3000

app.listen(PORT, () => {
  console.log(`My server is listening on port ${PORT} =>`)
})
