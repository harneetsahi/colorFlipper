const colors = [
  "green",
  "red",
  "blue",
  "orange",
  "purple",
  "lime",
  "brown",
  "lightpink",
  "sandybrown",
  "burlywood",
  "darkgoldenrod",
  "khaki",
  "beige",
  "darksalmon",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number betwen 0-3
  const randomNumber = getRandomNum();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
