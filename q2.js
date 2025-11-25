"use strict";
// Q2 - Student registration form built dynamically and validated with RegExp.
// The script builds a mini-form, validates inputs on submit, and styles the fields.

(function createStudentForm() {
  // helper to create labeled input
  function makeField(labelText, name, type = "text") {
    const wrapper = document.createElement("div");
    wrapper.style.margin = "6px 0";
    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.display = "block";
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.style.padding = "6px";
    input.style.width = "260px";
    input.style.boxSizing = "border-box";
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    const err = document.createElement("div");
    err.className = "error";
    err.style.color = "red";
    err.style.fontSize = "12px";
    wrapper.appendChild(err);
    return { wrapper, input, err };
  }

  const container = document.createElement("div");
  container.style.fontFamily = "Arial, sans-serif";
  container.style.maxWidth = "360px";
  container.style.margin = "10px";
  const title = document.createElement("h3");
  title.textContent = "Student Registration";
  container.appendChild(title);

  const nameField = makeField("Name (alphabets only):", "name");
  const emailField = makeField("Email:", "email", "email");
  const phoneField = makeField("Phone (10 digits):", "phone", "tel");
  const passField = makeField("Password:", "password", "password");

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "button";
  submitBtn.style.marginTop = "8px";

  [nameField, emailField, phoneField, passField].forEach(f => container.appendChild(f.wrapper));
  container.appendChild(submitBtn);
  document.body.appendChild(container);

  // regex rules
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|]).{8,}$/;

  function setValid(el) {
    el.style.border = "2px solid green";
    el.nextElementSibling.textContent = "";
  }
  function setInvalid(el, message) {
    el.style.border = "2px solid red";
    el.nextElementSibling.textContent = message;
  }

  submitBtn.addEventListener("click", () => {
    const nameVal = nameField.input.value.trim();
    const emailVal = emailField.input.value.trim();
    const phoneVal = phoneField.input.value.trim();
    const passVal = passField.input.value;

    let ok = true;

    if (!nameRegex.test(nameVal)) {
      setInvalid(nameField.input, "Only letters and spaces allowed.");
      ok = false;
    } else setValid(nameField.input);

    if (!emailRegex.test(emailVal)) {
      setInvalid(emailField.input, "Enter a valid email.");
      ok = false;
    } else setValid(emailField.input);

    if (!phoneRegex.test(phoneVal)) {
      setInvalid(phoneField.input, "Phone must be exactly 10 digits.");
      ok = false;
    } else setValid(phoneField.input);

    if (!passwordRegex.test(passVal)) {
      setInvalid(passField.input, "Password must have 1 uppercase, 1 number, 1 special char, min 8 chars.");
      ok = false;
    } else setValid(passField.input);

    if (ok) {
      alert("Registration successful!");
      console.log({ name: nameVal, email: emailVal, phone: phoneVal });
    }
  });
})();
