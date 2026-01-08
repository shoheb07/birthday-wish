function wish() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  document.getElementById("output").innerText =
    `🎂 Happy ${age}th Birthday, ${name}! 🎉
     May all your dreams come true.`;
}
