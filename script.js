function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_tdmz4rg";  
    const templateID = "template_re3im3w"; 

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("message sent !");
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(err => console.log(err));
}
