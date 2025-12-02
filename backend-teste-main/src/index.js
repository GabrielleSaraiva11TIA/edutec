import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.post("/cadastrar", (request, response) => {
    const { name, email, age, password } = request.body.user

    // 1. Verificar se o e-mail já está cadastrado
    const checkEmailQuery = "SELECT email FROM edutec_malgl WHERE email = ?"

    database.query(checkEmailQuery, [email], (error, results) => {
        if(error) {
            console.log(error)
            return response.status(500).json({ message: "Erro no servidor." })
        }

        // SE O E-MAIL EXISTE → cancelar cadastro
        if(results.length > 0) {
            return response.status(400).json({ message: "Este e-mail já está cadastrado!" })
        }

        // 2. SE NÃO EXISTE → cadastrar o usuário
        const insertCommand = `
            INSERT INTO edutec_malgl(name, email, age, password)
            VALUES(?, ?, ?, ?)
        `
        database.query(insertCommand, [name, email, age, password], (error) => {
            if(error) {
                console.log(error)
                return response.status(500).json({ message: "Erro ao cadastrar usuário." })
            }

            return response.status(201).json({ message: "Usuário cadastrado com sucesso!" })
        })
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})

const database = mysql.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "web_02ma",
    connectionLimit: 10
})