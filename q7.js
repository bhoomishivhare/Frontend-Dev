"use strict";
// Q7 - Login form created dynamically; validates username & password with RegExp.

(function createLoginForm() {
  function field(labelText, name, type = "text") {
    const w = document.createElement("div");
    w.style.margin = "6px 0";
    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.display = "block";
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.style.padding = "6px";
    input.style.width = "220px";
    const err = document.createElement("div");
    err.style.color = "red";
    err.style.fontSize = "12px";
    w.appendChild(label);
    w.appendChild(input);
    w.appendChild(err);
    return { wrapper: w, input, err };
  }

  const container = document.createElement("div");
  container.style.fontFamily = "sans-serif";
  container.style.margin = "8px";
  const heading = document.createElement("h4");
  heading.textContent = "Login";
  container.appendChild(heading);

  const userF = field("Username (min 5 chars):", "username");
  const passF = field("Password (min 8 chars, number, upper, lower, special):", "password", "password");
  const btn = document.createElement("button");
  btn.textContent = "Login";
  btn.type = "button";
  container.appendChild(userF.wrapper);
  container.appendChild(passF.wrapper);
  container.appendChild(btn);
  const result = document.createElement("div");
  result.style.marginTop = "8px";
  container.appendChild(result);
  document.body.appendChild(container);

  // regex rules
  const usernameRegex = /^.{5,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|]).{8,}$/;

  btn.addEventListener("click", () => {
    // reset messages
    userF.err.textContent = "";
    passF.err.textContent = "";
    result.textContent = "";

    const u = userF.input.value.trim();
    const p = passF.input.value;

    let ok = true;
    if (!usernameRegex.test(u)) {
      userF.err.textContent = "Username must be at least 5 characters.";
      ok = false;
    }
    if (!passwordRegex.test(p)) {
      passF.err.textContent = "Password must be at least 8 chars and include uppercase, lowercase, number and special char.";
      ok = false;
    }

    if (ok) {
      result.style.color = "green";
      result.textContent = "Login validation successful!";
      console.log("Login success:", { username: u });
    } else {
      result.style.color = "red";
      result.textContent = "Validation failed. See errors above.";
    }
  });
})();
