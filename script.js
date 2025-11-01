document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const container = document.getElementById("container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Replace everything inside the container
    container.innerHTML = `
      <h1 style="
        text-align: center;
        color: #00d9ffff;
        font-family: Poppins, sans-serif;
        font-size: 28px;
      ">
        Thank you for your feedback!
      </h1>
    `;
  });
});
