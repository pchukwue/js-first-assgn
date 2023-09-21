

////Use prompt method to get both the name and weight in kg. 
//Use prompt method to display the function's return statement for a user to see on the browser


const sayYourNameandWeight = () => {

  let name = prompt("Please enter your name:");
  let weightInKgs = parseFloat(prompt("please enter your weight in Kilograms:"));
  let weightInLbs = weightInKgs * 2.204;
  let resultString = "Hi " + name + "! Your weight is " + weightInLbs.toFixed(2) + " pounds.";

alert(resultString);

};

sayYourNameandWeight();



  