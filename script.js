// function findAge(currentDay, currentMonth, currentYear, birthday, birthMonth, birthYear){

//     var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
//     if (birthday > currentDay) {
//         currentDay = currentDay + month[birthMonth - 1]; //there's a problem calculating days
//         currentMonth = currentMonth - 1;
//     }
//     if (birthMonth > currentMonth) {
//         currentYear = currentYear - 1;
//         currentMonth = currentMonth + 12;
//     }
//     var cdate = currentDay - birthday;
//     var cmonth = currentMonth - birthMonth;
//     var cyear = currentYear - birthYear;

//     var output = "You are "+cyear+" years, "+cmonth+" months, and "+cdate+" days old!"
//     alert(output);

//     var diff = 90 - cyear;
//     var diffm = 12 - cmonth;
//     var diffmo = diff * 12;
//     var diffmonth = diffmo + diffm;

//     var output2 = "If you were to live to 90, you have "+diff+" years and "+diffm+" months left. Or "+diffmonth+" months"
//     console.log(output2);
// }
// findAge(prompt("Enter current day"), prompt("Enter current month"), prompt("Enter current year"), prompt("Enter day of birth"), prompt("Enter birth month"), prompt("Enter birth year"));



var userAge = parseInt(prompt("Enter your age"));
var tage = 90;
function lifeInWeeks(age) {
    years = tage - userAge;
    days = years * 365;
    weeks = Math.round(days / 7);
    months = years * 12;

    result = "You have "+days+" days, "+weeks+" weeks, and "+months+" months left. Make the best of it!"
    console.log(result);
}
lifeInWeeks(userAge);




