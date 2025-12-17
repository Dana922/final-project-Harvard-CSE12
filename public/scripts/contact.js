import Pristine from "pristinejs";

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form1");
    if (!form) return;

    const pristine = new Pristine(form, {
      classTo: "field",
      errorTextParent: "field",
      errorTextTag: "div",
      errorTextClass: "pristine-error",
    });

    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => pristine.validate(field));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valid = pristine.validate();
      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
        pristine.reset();
      }
    });
  });
}
