const express = require("express")
const server = express()


//Configurar pasta publica
server.use(express.static("public"))



//utiliando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express:server,
    noCache: true
})

//configurar caminhos (Rotas) na minha aplicacao
//pagina inicial
//req: Requisicao
//res: Resposta

server.get("/", (req, res) =>{
    return res.render("index.html", { title: "Um titulo"})
})

server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req, res) =>{
    return res.render("search-results.html")
})



//ligar o servidor
server.listen(3000)
