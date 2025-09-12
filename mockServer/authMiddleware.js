// authMiddleware.js
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/auth/login") {
    const { email, senha } = req.body;

    // Simulação de validação
    if (email === "mateustarouco058@gmail.com" && senha === "12345678") {
      return res.json({
        id: 1,
        nome: "Usuário teste",
        token: "fake-jwt-token-123456"
      });
    } else {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
  }

  next();
};
