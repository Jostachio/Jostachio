const formContactUs = document.getElementById("form-contact-us")

formContactUs.addEventListener("submit", (e) => {

    const fieldNama = document.getElementById("field-name").value
    const fieldEmail = document.getElementById("field-email").value
    const fieldMessage = document.getElementById("field-message").value

    e.preventDefault()
    console.log(`${fieldNama} ${fieldEmail} ${fieldMessage}`) 
})