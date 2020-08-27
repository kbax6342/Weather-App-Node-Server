const express = require('express')
const path = require('path')
const hbs = require('hbs')

//app is the application being initiliazed
const app = express()

//Mapping to the files
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(___dirname, ',,/templates/partials')

//Configuration
//This is a line of code connecting handle bars to express
app.set('view engine', 'hbs')

//This is directing the app to the customized folder name
app.set('views', viewsPath)

hbs.registerPartials(partialPath)


//This is the line of code that is connecting the express.ls which is a framework for node.js
app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kevin Baxter'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Kevin Baxter'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'This is the help page'

    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
//app.com