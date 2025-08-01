/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTA: Atualizar o caminho do 'content' para incluir todos os arquivos que utilizarem de classes do Nativewind.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
