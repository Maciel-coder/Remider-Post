const Notifyer = {
  //async await significa uma promessa (ou seja essa function 
  //ira aguardar a promessa ser finalizada)
  async init() { //função de inicializar
    const permission = await Notification.requestPermission() //this is function native of the browser
    if( permission !== "granted") {
      throw new Error('Permissão negada')
    }
  },
  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon
    })
  }
}

export { Notifyer } 