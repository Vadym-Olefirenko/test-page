
import moment from 'moment';

const CountdownTime = (startDate, timeCounterResult = null) => {

  let currentMoment = moment(startDate);
  console.log(currentMoment)

  function round(date, duration, method) {
    return moment(Math[method]((+date) / (+duration)) * (+duration));
  }

  let countDown = timeCounterResult;

  while (true) {
    let startWorkDay = moment(currentMoment).startOf('day').hour(10).minute(0).valueOf();
    let endWorkDay = moment(currentMoment).startOf('day').hour(19).minute(0).valueOf();

    if (currentMoment.valueOf() > endWorkDay) {
      currentMoment.add(1, 'days').set({ hours: '10', minutes: '00' });
      continue;
    }


    if (currentMoment.day() === 6) {
      currentMoment.add(2, 'days').set({ hours: '10', minutes: '00' });
      continue;
    }

    if (currentMoment.day() === 7) {
      currentMoment.add(1, 'days').set({ hours: '10', minutes: '00' });
      continue;
    }



    if (currentMoment.valueOf() < startWorkDay) {
      currentMoment.set({ hours: '10', minutes: '00' });
    }

    const leftToEndDay = endWorkDay - currentMoment.valueOf();

    if (countDown < leftToEndDay) {
      let resultMoloseconds = currentMoment.valueOf() + countDown;
      let finalResult = moment(resultMoloseconds);


      let roundedDate = round(finalResult, moment.duration(30, "minutes"), "ceil");

      return roundedDate.valueOf();
    }

    countDown = countDown - leftToEndDay;

    currentMoment.add(1, 'days').set({ hours: '10', minutes: '00' });

  }

}

export default CountdownTime;


