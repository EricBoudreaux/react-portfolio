/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
        wordsets: {
            words: {
                words: ['Developer', 'Designer', 'Musician', 'Cat Dad', 'Artist', 'Director'],
                delay: 2,
                writeSpeed: 0.2,
                eraseSpeed: 0.2,
                caretColor: '#FFF',
                caretWidth: '5px',
                caretSpacing: '10 px',
            }
        }
    })
] 
}