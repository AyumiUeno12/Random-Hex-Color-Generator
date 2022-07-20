//Show random number between 0 and 0.999
// let color = Math.random();

// let color = Math.random().toString(16);
// let color = Math.random().toString(16).substring(2, 8);

// console.log(color);

// Hex numbering system uses the Base 16 system
// from 0 to 15. = toString(16): he contain letters and numbers so you need them to convert strings

// Hex is alway a combination of 6
// When run random Number, ex 0.8e9c5a3f4b...
// substring(2, 8)
// substring extract charactors from strings
// substring(x, y) x = start, y = end
// ex, 0.d09c7a96ee3c
// 0 = 0, . = 1, d = 2, a = 8
// 8 - 2 = 6 charactors = this will create random combinations of letters and numbers (hex)

const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);
