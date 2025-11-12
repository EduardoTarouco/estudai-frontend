const os = require("os")
const jsonServer = require("json-server")
const authMiddleware = require("./authMiddleware")
const server = jsonServer.create()
const path = require("path")
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

function getLocalIP() {
  const nets = os.networkInterfaces()
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address
      }
    }
  }
  return "localhost"
}

server.use(middlewares) // Middlewares padrão (logger, static, cors, etc)
server.use(jsonServer.bodyParser) // Permite interpretar JSON no body
server.use(authMiddleware) // Middleware customizado de autenticação
server.use(jsonServer.rewriter(require("./routes.json"))) // Rotas customizadas
server.use(router) // Roteador padrão (CRUD no db.json)

server.listen(8084, "0.0.0.0", () => {
  console.log("JSON Server is running 🚀");
  console.log("➡️ Localhost: http://localhost:8084");
  console.log(`➡️ Rede: http://${getLocalIP()}:8084`);
})