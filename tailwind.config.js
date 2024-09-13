module.exports = {
   content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
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
