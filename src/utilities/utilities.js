moment = require('moment');

function getAnio(edad) {
    let bornDate = edad;
    let e = moment(bornDate, "YYYYMMDD").fromNow();
    res = e.split(" ",2)
    console.log(res[0]);
    return res[0];
 }

module.exports ={
    getAnio
}

