const Timer = {
  time: 25 * 60, //initial state, transform in seconds
  currentTime: 0,
  //function for initialization countDown
  init(time) { 
    //this function default of browser
    //setInterval(() =>{ //erow function for execution a thik in time interval
      //console.log('Alguma coisa')
    //}, 1000)//time interval in miliseconds
    Timer.currentTime = Timer.time //pegando time of initial state e atribuindo ao CurrentTime q esta vazio
    console.log(Timer.currentTime)
    setInterval(Timer.countDown, 1000) //register countDownin Timer and executing of 100 and 1000 seconds
    
  },
  countDown(){
    Timer.currentTime = Timer.currentTime - 1; //diminuido o tempo a cada segundo
    console.log(Timer.currentTime)

  }
}

export { Timer }