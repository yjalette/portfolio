const form = document.getElementById("contact__form")
const form__btn = document.getElementById("contact__btn");
const email = document.getElementById("contact__email");
const subject = document.getElementById("contact__subject");
const message = document.getElementById("contact__message");
const response_msg = document.getElementById("contact__form-response");

function sendEmail(e) {
    e.preventDefault();
    fetch("/", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.value, subject: subject.value, message: message.value })
    }).then(res => res.json()).then(({ status }) => {
        if (status === "ok") response_msg.innerHTML = "Sent! Thank you for your message!";
        else {
            response_msg.innerHTML = "Please try again"
            response_msg.style.color = "#f68484"
        }
    })
}

form.addEventListener('submit', sendEmail)