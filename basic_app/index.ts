import express from 'express'
import { Request, Response } from 'express'
const app = express()

app.get("/root", (req: Request, res: Response) => {
    res.json([
        {
            id: 1,
            name: "Sarfraz",
            age: 21
        },
        {
            id: 2,
            name: "Ashik",
            age: 19
        }
    ])
})

app.listen(5000,()=>{
    console.log("App is running")
})