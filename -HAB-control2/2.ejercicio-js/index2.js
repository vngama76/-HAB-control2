const start = +new Date();
const startTime = new Date();
console.log('Start time: ' + startTime);

setInterval(function () {
  function secondsToString() {
    const now = +new Date();
    const dif = now - start;

    const second = Math.floor(dif / 1000);
    const day = Math.floor(second / 86400);
    const hour = Math.floor(second / 3600);

    const minute = Math.floor((second / 60) % 60);

    const seconds = second % 60;

    return (
      day +
      ' days, ' +
      hour +
      ' hours, ' +
      minute +
      ' minutes and ' +
      seconds +
      ' seconds since I first met youuuu'
    );
  }
  console.log(secondsToString());
}, 5000);
