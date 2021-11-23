const express = require('express') //we install the package express
const app = express() //then express allows us to create one variable called app
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
        console.log('local root called')  //if u wanna check if something is called
    res.send('dpe daar  verandering') //if u make a request u get a responce
})

app.get('/test', (req, res)=>{
    res.send('test succeeded') 
});

app.get('/test', (req, res)=>{
    let exampledata ={
        name: 'widi',
        age: 19
    }
    res.send(exampledata) 
});

console.log('een test')
app.listen(port, () => { //app listing means hey start my server on this port and do something when it's done
  console.log(`Example app listening at http://localhost:${port}`)
}) 