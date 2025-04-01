import { error } from 'console'
import express from 'express'
const app = express()
const port = 3050

// middlewares
app.use(express.json())

const list = [
    {
        id : 1,
        title: "Education",
        description: "University undergraduate",
        status: true
    },
    {
        id: 2,
        title: "Work",
        description: "Softwre Engineer",
        status: false
    }
]
app.get('/', (request, response, next) => {
    response.send("Todo list")
})
app.get('/list', (req, res) => {
    res.json(list)
})

app.get("/list/:id", (req, res) => {
    console.log(req.params.id)
    let data = list.filter((data) => data.id == req.params.id)
    res.json(data)
})

app.post("/list",(req, res) => {
    let body = req.body
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ error: "Request body cannot be empty" });
    }
    list.push({id: list.length + 1, ...body})
    res.json(list)
})
app.put("/list/:id",(req, res) => {
    let data = list.find(data => data.id == req.params.id)
    if(data) {
        data.title = req.body.title
        data.description = req.body.description
        data.status = req.body.status
        res.json(list)
    } else {
        return res.status(404).json({error: "Todo not found"})
    }
})
app.delete("/list/:id",(req, res) => {
    let indexPos = list.findIndex((data) => data.id == req.params.id)
    if(indexPos != -1) {
        list.splice(indexPos, 1)
        res.json(list)
    } else {
        return res.status(404).json(error({error: "Todo not found"}))
    }

})

app.listen(port, () => {
    console.log(`App is listening in port: ${port}`)
})