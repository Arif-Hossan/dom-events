// let first = document.getElementById("first");
// first.style.color = 'red';
// first.style.backgroundColor = 'yellow';
document.body.style.backgroundColor = "Tomato";
let author = document.getElementsByClassName("author");
for (let i = 0; i < author.length; i++) {
  let element = author[i];
  element.innerHTML = "Lekhok-" + (i + 1);
  element.setAttribute("title", "All are same");
  element.style.color = "red";
  element.style.margin = "20px";
}

// let author = document.querySelectorAll(".special h3");
// for (let i = 0; i < author.length; i++) {
//   let element = author[i];
//   element.innerHTML = "Lekhok-" + (i + 1);
//   element.style.color = "red";
//   element.style.margin = "20px";
// }
