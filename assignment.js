
//https://github.com/ariyangd/assignment.js


//Question 1 - KiloMeter to Meter 
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

var totalBudget = budgetCalculator(10,20,30);
console.log('Total Bedget Need is: ', totalBudget);



//Question 3 - Hotel Cost
function hotelCost(days){
  var cost = 0;
    
    if(days <= 10){
        var charge = days * 100;
        cost = charge;
    }
    else if (days >=10 && days <=20 ){
        var charge1 = 10*100;
        var daysRemaining = days - 10;
        var charge2 = daysRemaining*80;
        cost = charge1 + charge2;
    }
    else{
      charge1 = 10*100;
      charge2 = 10* 80;
      daysRemaining = days - 20;
      charge3 = daysRemaining*50;
      cost = charge1 + charge2 + charge3;
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log('Total Staying Cost is: ', totalCost);



//Question 4 - Mega Friend
function findLongestWord(name) {
var name= ['Ariyan', 'Rakib', 'Mumit', 'Saju', 'Hasan'];
    var lgth = 0;
    var longest;

    for (var i = 0; i < name.length; i++) {
        if (name[i].length > lgth) {
            var lgth = name[i].length;
            longest = name[i];
            var large = longest;
            large = large.toString(); //tried something new 
        }
      return large;
    }
  }
  var friendName = findLongestWord();
  console.log('Longest Word is: ', friendName);
  