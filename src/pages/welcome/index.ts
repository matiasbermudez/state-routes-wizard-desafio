import { state } from "../../state"
export function initWelcome(params: any){

   
   
    const divEl = document.createElement('div')
    divEl.classList.add('welcome__contenedor')
    divEl.innerHTML = `
        <h1 class="welcome__titulo"> Te damos la bienvenida a esta página </h1>
        <strong>Para continuar ingresá tu nombre</strong>

        <form action="#" class="welcome__form">
            <label id="nombre" class="welcome__label">Nombre</label>
            <input type="text" name="nombre" id="nombre" class="welcome__input">
            <button type="submit" class="welcome__boton">Comenzar</button>
        </form>
        
    `
    const formEvento = divEl.querySelector('.welcome__form');
    formEvento?.addEventListener('submit', (e) =>{
        e.preventDefault();
        const evento = e.target?.nombre
        state.setState(evento.value)
        
        params.goTo("/form")
    })
    return divEl;

}