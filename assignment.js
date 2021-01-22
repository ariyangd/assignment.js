/**
 
 
 
//Question 1 - Kilo Meter to Meter 
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}
var convert = kilometerToMeter(10);
console.log('Kilo Meter to Meter is: ', convert);

//Question 2 - Budget Calculator 
function budgetCalculator(watch,phone,laptop){
   var watch = watch * 50;
   var phone = phone * 100;
   var laptop = laptop * 500;
   
   return watch, phone, laptop; 
}

var totalBudget = budgetCalculator(10,10,10);
console.log('Total Bedget Need is: ', totalBudget);

*/

//Question 3 - Hotel Cost
function hotelCost(days){
    var days;
    var totalDays = days* days;
    
    if(days <= 10){
        console.log('Hotel Cost is: 100', );
    }
    else if (days >= 10 && days <=20){
        console.log('Hotel Cost is: 80');
    }
    else{
        console.log('Hotel Cost is: 50');
    }
    return days;
}
var totalDays = hotelCost(20);
console.log(totalDays);



// //Question 4 - Mega Friend


// function arry(large) {
//     var arr = ['Ariyan', 'Rakib', 'Mumit', 'Saju', 'Hasan'];

//     var lgth = 0;
//     var longest;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length > lgth) {
//             var lgth = arr[i].length;
//             longest = arr[i];
//             var large = longest;
//         }
//         return large;
//     }
// }
// console.log(large);