// calculateTicketPrice function
let age = prompt("Enter your age");
let day = prompt("Enter the day");

function calculateTicketPrice(age, day) {
  let price;

  if (age < 12) {
    price = 5;
  } else if (age >= 13 && age <= 17) {
    price = 8;
  } else if (age >= 18 && age <= 59) {
    price = 12;
  } else {
    price = 6;
  }
  switch (day) {
    case "saturday":
    case "sunday":
      return price * 0.9;
    default:
      return price;
  }
}

alert(calculateTicketPrice(age, day));
