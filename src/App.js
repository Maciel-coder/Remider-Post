import { Notifyer } from './Notfyer.js';
import { Timer } from './Timer.js';
const App = {
  async start() {
    Timer.init()
    //try {
      //await Notifyer.init()
      //Notifyer.notify({
        //title: "Hora do Post",
        //body: "Crie algum conteúdo para ajudar a comunidade"
      //})
    //} catch (err) {
      //console.log(err.message)
    //}
  }
}

export { App } 