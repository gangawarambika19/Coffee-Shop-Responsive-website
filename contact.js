document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can perform further actions, like sending the data to a server or displaying a thank you message.
    // For this example, let's just update the response message on the page.
    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;

    // You can reset the form if needed
    // event.target.reset();
});
