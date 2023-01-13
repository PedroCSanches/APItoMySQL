import express from "express"
import mongoose from 'mongoose'

import User from './models/User.js'

const app = express()

app.use(express.json())



app.get("/users", async (request, responde) => {
    const users = await User.find()

    return Response.status(200).json(users)
});

app.post("/users", async (resquest, response) => {
    const user = resquest.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
});

mongoose.connect("mongodb+srv://pedro:cpoamkW2dO9PxIfz@cluster0.8zd9zr9.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Banco de dados conectado"))
    .catch(() => console.log("Deu RUIM"))

app.listen(3000)