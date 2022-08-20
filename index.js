let image = document.getElementById("image");
let i = 0;
function changeImage() {
  i++;
  if (i % 2 == 0) {
    this.src =
      "https://www.dropbox.com/s/8xdfslv74frgoup/yellow%20cat%20meow.jpg?dl=0&raw=1";
  } else {
    this.src =
      "https://www.dropbox.com/s/of1l38859yvb01z/yellow%20cat.jpg?dl=0&raw=1";
  }
}
image.addEventListener("click", changeImage);

let button = document.querySelector("button");

function orderSphynx() {
  let name = prompt("What is your name?");
  let catsAmount = prompt("How many cats do you want to have?");
  let phoneNumber = prompt("What is your phone number?");
  if (catsAmount > 1) {
    alert(
      `Thanks, ${name} for contact us. We will check if we have ${catsAmount} cats available  for you and call you back later. Your phone number is ${phoneNumber}`
    );
  } else {
    alert(
      `Thanks, ${name} for contact us. We will check if we have ${catsAmount} cat available for you and call you back later. Your phone number is ${phoneNumber}`
    );
  }
}

button.addEventListener("click", orderSphynx);
