const thimble1 = document.getElementById("thimble1");
const thimble2 = document.getElementById("thimble2");
const thimble3 = document.getElementById("thimble3");

function swapThimbles() {
  thimble1.classList.add("move");
  thimble2.classList.add("move");
  thimble3.classList.add("move");
}

setTimeout(swapThimbles, 2000);
