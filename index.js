// timer start
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return { total, hours, minutes, seconds }
  }
  
    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);

        const hoursSpan1 = clock.querySelector('.hours1');  
        const hoursSpan2 = clock.querySelector('.hours2');

        const minutesSpan1 = clock.querySelector('.minutes1');  
        const minutesSpan2 = clock.querySelector('.minutes2');

        const secondsSpan1 = clock.querySelector('.seconds1');
        const secondsSpan2 = clock.querySelector('.seconds2');

        function updateClock() {
            const total = getTimeRemaining(endtime);
            const { hours, minutes, seconds } = total;

            hoursSpan1.innerHTML = (`0${hours}`).slice(1, 2);
            hoursSpan2.innerHTML = (`0${hours}`).slice(2);

            minutesSpan1.innerHTML = (`0${minutes}`).slice(1, 2);
            minutesSpan2.innerHTML = (`0${minutes}`).slice(2);

            secondsSpan1.innerHTML = (`0${seconds}`).slice(1, 2);
            secondsSpan2.innerHTML = (`0${seconds}`).slice(2);

            if (total.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
  // timer end