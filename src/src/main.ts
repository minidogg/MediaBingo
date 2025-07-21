import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = /*html*/`
    <div id="menu">
      <h1>Media Bingo</h1>
      <input type="file" name="" id="uploaddata" accept="application/json">
      <button id="gen" disabled>Generate Cards</button>
      <button id="bingo" disabled>Bingo</button>
    </div>
`
const menu = document.querySelector<HTMLDivElement>("#menu")
const uploadInput = app.querySelector<HTMLInputElement>("#uploaddata")
uploadInput?.addEventListener("change", async(ev)=>{
  if(!uploadInput.files)return;
  let json = {}
  try{
    json = JSON.parse(await uploadInput.files[0].text())
  }catch(err){
    alert(err)
    return;
  }
  console.log("upload", json)

  for(let item of menu?.querySelectorAll("button")!){
    item.disabled = false
  }
})