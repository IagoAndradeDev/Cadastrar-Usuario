import express from "express"
import { db } from "./db/src/prisma/db.js"
import cors from 'cors'

const data = db.orm.User


const app = express()
app.use(express.json())
app.use(cors("http://localhost:5173"))
 
app.listen(3000, () => {
    console.log("Iniciando servidor! Porta: 3000")
})

app.get('/usuarios', async (req, res) => {
    const users =  await data.all()
    res.status(200).json({mensagem: `Veja todos os usuarios!`, resultado: users})
})

app.post('/usuarios', async (req, res) => {
    try {
        const user = await data.create({
            name: req.body.name,
            idade: req.body.idade,
            email: req.body.email,
        })
        res.status(201).json({mensagem: `Usuario criado com sucesso!`, resultado: user})
    } catch (error) {
        if (error.code == 11000){
            return res.status(409).json({mensagem: "E-mail ou nome já cadastrado."})
        }
    }
})

/*
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const resultado = await data.where({ id }).delete()
    res.status(200).json({mensagem: `Removido usuario com o id: ${id}`, resultado: resultado})
})
*/

app.delete('/usuarios', async (req, res) => {
    
    const { id } = req.body
    const resultado = await data.where({ id: id }).delete()

    if (!id) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.status(200).json({mensagem: `Removido usuario com o id: ${id}`, resultado: resultado})
    
})

app.put('/usuarios/:id', async (req, res) => {
    try {

        const { id } = req.params
        const {email, name} = req.body
        const resultado = await data.where({ id }).update({
            name: name,
            email: email
        })
        res.status(201).json({messagem: "Dados atualizados!", resultado: resultado})
    } catch(error) {
        console.error(error)
    }
})