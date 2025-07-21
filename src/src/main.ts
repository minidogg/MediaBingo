import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = /*html*/`
    <div id="menu">
      <h1>Media Bingo</h1>
      <input type="file" name="" id="uploaddata">
      <button id="gen" disabled>Generate Cards</button>
      <button id="bingo" disabled>Bingo</button>
    </div>
`

const uploadInput = app.querySelector<HTMLInputElement>("#uploaddata")
uploadInput?.addEventListener("change", ()=>{
  console.log("upload")
})