module.exports = {
   content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './app.vue', // Se houver um arquivo app.vue na raiz do projeto
      './nuxt.config.{js,ts}', // Para ler o arquivo de configuração do Nuxt.js
   ],

   theme: {
      extend: {
         colors: {
            primary: '#24F07D', // Define a cor primária personalizada (azul, por exemplo)
         },
      },
   },
   plugins: [],
}
