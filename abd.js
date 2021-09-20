//1. Convert seer to mon

//function declare and parameter
function seerToMon(seer)
{ 
  //condition for any case of not a number
  if(typeof seer!='number'){
  return 'please enter a number'
  }
  //condition for any case of not a positive number
  if(seer<=-1){
  return 'énter a positive number'
  }
  var mon=seer/40;
  //return from function
  return mon; 
}
//calling the function
var result=seerToMon(1200);
console.log(result)



//2. Find total sales
const shirtPrice=100;
const pantPrice=200;
const shoePrice=500;
//function declare and parameter
function totalSales(shirtQuantity,pantQuantity,shoeQuantity)
{
  //condition for any case of not a number
  if(typeof (shirtQuantity||pantQuantity||shoeQuantity)!='number'){
    return 'énter a number'
  }
  //condition for any case of not a positive number
  if((shirtQuantity<=-1||pantQuantity<=-1||shoeQuantity<=-1)){
    return 'énter a positive number'
  }

  var shirtTotalCost=shirtPrice*shirtQuantity;
  var pantTotalCost=pantPrice*pantQuantity;
  var shoeTotalCost=shoePrice*shoeQuantity;
  var totalCost=shirtTotalCost+pantTotalCost+shoeTotalCost;
  //return from function
  return totalCost;
}
//calling the function
var total=totalSales(5,4,3);
console.log(total);


//3. Finding delivery cost 
//function declare and parameter
function deliveryCost(shirtNumber)
{
  //condition for any case of not a number
  if(typeof (shirtNumber)!='number'){
    return 'énter a number'
  }
  //condition for any case of not a positive number
  if(shirtNumber<-1){
    return 'énter a positive number'
  }
  //for shirt less than or equal to 100
   if (shirtNumber<=100) 
   {
      var shippingCost=shirtNumber*100;   
   }
   //for shirt number more than or equal to 100 to 200
   else if(shirtNumber>=100 && shirtNumber<=200) 
   {
      var shippingCost=(100*100)+((shirtNumber-100)*80)
   }
   //for shirt number more than 200
   else 
   {
      var shippingCost=(100*100)+(100*80)+((shirtNumber-200)*50);
   }
   //return from function
   return shippingCost;
}

var totalAmount=deliveryCost(220);//calling the function
console.log(totalAmount)


//4, Finding name from friends array

var friends=['Abula','Maria','Sahed','Mary','Shahril'];
//declare function and parameter
function perfectFriend(name) 
{ 
  for (const name of friends){
    //main condition
    if(name.length==5)
    {
      //return from function
      return name;
    }
  }   
}
//call function
const myFriend=perfectFriend(friends);
console.log(myFriend);