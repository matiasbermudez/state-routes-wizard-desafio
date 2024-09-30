import { footerInit } from './components/footer';
import { headerInit } from './components/header';
import { initWelcome } from './pages/welcome';
import './style.css'
import './pages/welcome/welcomeStyle.css'
import { initRouter } from './routes';


(function main(){

  const root = document.querySelector('#root');

  initRouter(root)
  
  headerInit();
  footerInit();

 
})();