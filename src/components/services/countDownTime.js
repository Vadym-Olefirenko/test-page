// import moment from 'moment';

// const CountdownTime = (timeCounterResult = null) => {
    
//     let a = moment();
//     let b = moment([10,0,0], "HH:mm:ss");
//     let d = moment([19,0,0], "HH:mm:ss");
    
//     let hours = timeCounterResult;
//     let fullHours = hours / (1000 * 60 * 60);
//     console.log('полные часы', fullHours);

//     let rest = fullHours - Math.floor (fullHours);
//     console.log('ostatok', rest);

//     if (rest <= 0.5) {
//         a.add(30, 'minutes');
//         fullHours = Math.floor(fullHours);
//     } else {
//         fullHours = Math.ceil(fullHours);
//         console.log('ceil hours', fullHours);
//     }

//     const checkDay = (dayNum, hoursAdd, dayAdd) => {
//         if (b.isoWeekday() === dayNum) {
//             a = a.add(hoursAdd,'hours');
//             b.add(dayAdd, 'days');
//             d.add(dayAdd, 'days');
//         }

//         console.log('after func', b, d);
//     }

//     for (let i = 0; i < fullHours; i++) {
        
//         a.add(1,'hours'); 
//         if (!a.isBetween(b, d)) {
//             a.add(15,'hours');
//             b.add(1, 'days');
//             d.add(1, 'days');
//             checkDay(6, 48, 2);
//             checkDay(7, 24, 1);
//             continue;
//         } 
//     }

//     function round(date, duration, method) {
//         return moment(Math[method]((+date) / (+duration)) * (+duration)); 
//     }

//     let roundedDate = round(a, moment.duration(30, "minutes"), "ceil");
   
    
//     return roundedDate.format('DD.MM.YYYY об HH:mm');
    
// }

// export default CountdownTime;
// -----------------------------------------------------------------------------------------**

import moment from 'moment';

const CountdownTime = (startDate, timeCounterResult = null) => {
    
    let currentMoment = moment(startDate);
    
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
                let resultMoloseconds =  currentMoment.valueOf() + countDown;
                let finalResult = moment(resultMoloseconds);

                    
                let roundedDate = round(finalResult, moment.duration(30, "minutes"), "ceil");
                return roundedDate.format('DD.MM.YYYY об HH:mm');
              }
          
              countDown = countDown - leftToEndDay;
          
              currentMoment.add(1, 'days').set({ hours: '10', minutes: '00' });

            }
    
}

export default CountdownTime;


