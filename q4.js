"use strict";
// Q4 - Dynamic FormBuilder that creates a form from an array of field descriptors.
// Exposes getFormData() that returns an object of field values on submit.

class FormBuilder {
  constructor(fields = [], mountPoint = document.body) {
    this.fields = fields;
    this.mountPoint = mountPoint;
    this.form = document.createElement("form");
    this.form.style.border = "1px solid #ccc";
    this.form.style.padding = "10px";
    this.form.style.maxWidth = "420px";
    this.inputs = {};
    this._build();
  }

  _build() {
    this.fields.forEach(f => {
      const wrapper = document.createElement("div");
      wrapper.style.margin = "6px 0";
      const label = document.createElement("label");
      label.textContent = f.label || f.name;
      label.style.display = "block";
      const input = document.createElement("input");
      input.type = f.type || "text";
      input.name = f.name;
      input.placeholder = f.placeholder || "";
      input.style.width = "100%";
      input.style.padding = "6px";
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      this.form.appendChild(wrapper);
      this.inputs[f.name] = input;
    });

    const submit = document.createElement("button");
    submit.type = "button";
    submit.textContent = "Submit";
    submit.style.marginTop = "8px";
    submit.addEventListener("click", () => {
      const data = this.getFormData();
      console.log("Form Data:", data);
      resultBox.textContent = JSON.stringify(data, null, 2);
    });

    this.form.appendChild(submit);
    const resultBox = document.createElement("pre");
    resultBox.style.background = "#f7f7f7";
    resultBox.style.padding = "8px";
    resultBox.style.marginTop = "8px";

    this.mountPoint.appendChild(this.form);
    this.mountPoint.appendChild(resultBox);
  }

  getFormData() {
    const obj = {};
    Object.keys(this.inputs).forEach(name => {
      obj[name] = this.inputs[name].value;
    });
    return obj;
  }
}

// Example usage: build a form with username and email
const builderFields = [
  { type: "text", name: "username", label: "Username" },
  { type: "email", name: "email", label: "Email" },
  { type: "password", name: "password", label: "Password" }
];
new FormBuilder(builderFields);
