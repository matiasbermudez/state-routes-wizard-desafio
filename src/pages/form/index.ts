import { state } from "../../state";
import './formStyle.css'
interface formulario {
  nombre: string,
  email?: string,
  comida?: string,
  juego?: string
}

export function initForm(params : any){
  const divEl = document.createElement('div')

  divEl.innerHTML = `

      <div class="form__contenedor">
      <h1 class="form__titulo">Hola ${state.data.nombre}</h1>
      <strong class="form__strong"> Necesitamos algunos datos más </strong>

      <form action="#" class="form__form">
        <label for="" id="email" class="form__label">
          Email
          <input type="text" name="email" id="email" required>
        </label>
        <label for="" id="comida" class="form__label">
          Comida favorita
          <input type="text" name="comida" id="comida" required>
        </label>
        <select name="juego" id="juego" class="form__select">
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
        <button  type="submit" class="boton__enviar boton">Enviar</button>
      </form>
      <button class="boton__volver boton">Volver</button>  
    </div>
    
  `

  const botonVolver = divEl.querySelector('.boton__volver');
  const formularioEnviar = divEl.querySelector('.form__form')
  console.log(formularioEnviar)


  formularioEnviar?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const evento = e.target
    const prevState = state.getState()
    console.log("PREV STATE: ", prevState)
    const newState:formulario = {
      nombre : prevState.nombre,
      email: evento?.email.value,
      comida: evento?.comida.value,
      juego: evento?.juego.value
    }
    state.setState(newState)

    const newNewState = state.getState()
    console.log("newNewState: ",newNewState)
  })

  
  
  botonVolver?.addEventListener('click', ()=>{
    params.goTo("/welcome")
  })

  return divEl

}