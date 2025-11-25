"use strict";
// Q8 - Build a form to edit a user object in real time and show updated object below.

const user = { name: "John", email: "john@mail.com", age: 21 };

// build UI
const container = document.createElement("div");
container.style.fontFamily = "sans-serif";
container.style.margin = "10px";
const title = document.createElement("h4");
title.textContent = "Edit User (changes update the object in real time)";
container.appendChild(title);

const nameInp = document.createElement("input");
const emailInp = document.createElement("input");
const ageInp = document.createElement("input");
nameInp.value = user.name;
emailInp.value = user.email;
ageInp.value = user.age;
[nameInp, emailInp, ageInp].forEach(i => { i.style.display = "block"; i.style.margin = "6px 0"; i.style.padding = "6px"; container.appendChild(i); });

const display = document.createElement("pre");
display.style.background = "#f8f8f8";
display.style.padding = "8px";
display.style.marginTop = "8px";
container.appendChild(display);
document.body.appendChild(container);

function renderUser() {
  display.textContent = JSON.stringify(user, null, 2);
}

// update object in real time
nameInp.addEventListener("input", (e) => { user.name = e.target.value; renderUser(); });
emailInp.addEventListener("input", (e) => { user.email = e.target.value; renderUser(); });
ageInp.addEventListener("input", (e) => { user.age = Number(e.target.value) || 0; renderUser(); });

renderUser();
