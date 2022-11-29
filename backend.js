const express = require('express')
const app = express()
const port = 3000

app.use(express.static('kepek'))
app.use(express.json())


//------------------------     film lekérdezése
app.get('/processzor', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'pcosszerako_kd'
    })
    
    connection.connect()
    
    connection.query('SELECT * from processzor', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})