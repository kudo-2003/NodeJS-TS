document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Ngăn việc tải lại trang
    
    const email = form.email.value;

    const response = await fetch("/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const result = await response.json();
    message.textContent = result.message;
  });
});
