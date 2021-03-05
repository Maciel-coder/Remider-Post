import { View } from './View.js';

const Timer = {
  time: 60 * 60, //initial state, transform in seconds
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,

  //fomatando o tempo. Preechendo o inicio com 0 e tamanho ou length de 2
  formatTime: time => String(time).padStart(2, '0'),

  //function for initialization countDown
  init(time) {
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time //pegando time of initial state e atribuindo ao CurrentTime q esta vazio
    Timer.interval = setInterval(Timer.countDown, 1000) //register countDownin Timer and executing of 100 and 1000 seconds

  },
  countDown() {
    Timer.currentTime = Timer.currentTime - 1; //diminuido o tempo a cada segundo

    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    View.render({
      minutes,
      seconds
    })
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval)//para a contagem quando chega em 0
      return;
    }


  }
}

export { Timer }