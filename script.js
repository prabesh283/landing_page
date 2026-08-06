const leadForm = document.querySelector("#leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const inquiry = Object.fromEntries(formData.entries());
    localStorage.setItem("prabeshLeadInquiry", JSON.stringify(inquiry));

    window.location.href = "thank-you.html";
  });
}
