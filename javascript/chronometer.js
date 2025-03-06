class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    console.log('start metodo!!!')
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    console.log('STOP metodo!!!')
    clearInterval(this.intervalId);
  }

  reset() {
    console.log('*** RESET metodo!!!');
    this.currentTime = 0;
  }

  split() {
    console.log('*** SPLIT metodo!!!');
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const seg = this.computeTwoDigitNumber(this.getSeconds());
    return `${min}:${seg}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
