import express from "express"
import bodyParser from "body-parser";
import {date, year, toDoList, toDoWorkList} from "./public/Consts.js";


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index.ejs',
        {
            date: date,
            toDoTodayList: toDoList.reverse(),
            yearForCopyright: year
        })
})

app.get('/work', (req, res) => {
    res.render('work.ejs', {
        date: date,
        toDoWorkList: toDoWorkList.reverse(),
        yearForCopyright: year
    })
})

app.post('/work', (req, res) => {

    if (req.body.newItem !== '') {
        toDoWorkList.push(req.body.newItem)

        res.render('work.ejs',
            {
                date: date,
                toDoWorkList: toDoWorkList.reverse(),
                yearForCopyright: year
            })
    }

})

app.post('/', (req, res) => {

    if (req.body.newItem !== '') {
        toDoList.push(req.body.newItem)
        res.render('index.ejs',
            {
                date: date,
                toDoTodayList: toDoList.reverse(),
                yearForCopyright: year
            })
    }

})


app.listen(port, () => {
    console.log('listening on port 3000')
})