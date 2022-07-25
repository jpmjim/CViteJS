import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import buttonModule from './button.module.css'
import img from './one_piece.png'
import data from './data.json'
import suma from './suma.ts'

console.log(`suma 2+3 = ${suma(2, 3)}`)

const modules = import.meta.glob('./modules/*.js')
console.log(modules)
for (const path in modules) {
  modules[path]().then((module) => {
    module.load()
  })
}
console.log(buttonModule)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello J2Anime!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">
      Click!
    </button>
    <img src="${img}" alt="One Piece" class="one-piece"/>
  </div>

  <pre>${JSON.stringify(data)}</pre>
  <pre>${JSON.stringify(data.user)}</pre>

`

document.getElementById('btn').className = buttonModule.btn

setupCounter(document.querySelector('#counter'))
