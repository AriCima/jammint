/*   * * * * * * https://www.w3schools.com/js/js_dates.asp * * * * *  --> interesante
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
*/

var dateIn = document.getElementById('inDate').value;
var dateOut = document.getElementById('outDate').value;


document.getElementById('ingreso').innerHTML = inDate;
document.getElementById('egreso').innerHTML = outDate;




/*
var checkInDate = prompt('Enter your Check-In date please', 'Check-in');
var checkOutDate = prompt('Enter your Check-Out date please', 'Check-Out');

var indate = new Date(checkInDate);

/*var dayIn = checkInDate.getDate();
var monthIn = checkInDate.getMonth()+1;
var yearIn = checkInDate.getFullYear();

var dayOut = checkOutDate.getDate();
var monthOut = checkOutDate.getMonth()+1;
var yearOut = checkOutDate.getFullYear();


console.log('día de entrada: '+indate) //+ ' mes de entrada '+monthIn + ' año de entrada ' + yearIn);
//Console.log('día de salida: '+dayOut+ ' mes de salida '+monthout + ' año de salida ' + yearOut);

function daysOfMonth(month){
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        return 31
    } else {
        return 30
    };
};

function partialMonthRent(day, month){
    return daysOfMonth(month)-(day) * rent
};

console.log(monthIn + ' ' + rent)
for (i = monthIn+1; i< monthOut;){
    console.log(monthIn + ' ' + partialMonthRent(dayIn, monthIn))
}

*/ 