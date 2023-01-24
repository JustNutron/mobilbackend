const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
var connection 

function kapcsolat() {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pcosszerako_kd'
  })
  connection.connect()
}

app.use(express.static('kepek'))
app.use(express.json())


//------------------------     processzor lekérdezése     ------------------------
app.get('/processzor', (req, res) => {



    kapcsolat()
      
    connection.query('SELECT * from processzor', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })


//------------------------     alaplapok lekérdezése     ------------------------

  app.get('/alaplap', (req, res) => {
    
    
    kapcsolat()
    
    connection.query('SELECT * from alaplap', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })


  
//------------------------     Pc Hírek lekérdezése     ------------------------

  app.get('/pc_hirek', (req, res) => {
    
    
    kapcsolat()
    
    connection.query('SELECT * from pc_hirek', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })

//------------------------     Processzor hűtők lekérdezése     ------------------------

app.get('/processzor_hutok', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from processzor_huto', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

//------------------------     Processzor hűtők lekérdezése     ------------------------

app.get('/tapegyseg', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from tapegyseg', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

//------------------------     Videókártyák lekérdezése     ------------------------

app.get('/videokartya', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from videokartya', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})

//------------------------     Memóriák lekérdezése     ------------------------

app.get('/memoria', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from memoria', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})


//------------------------     Háttértárak lekérdezése     ------------------------


app.get('/hattertar', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from hattertar', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})


//------------------------     Gépház lekérdezése     ------------------------


app.get('/gephaz', (req, res) => {
    
    
  kapcsolat()
  
  connection.query('SELECT * from gephaz', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


