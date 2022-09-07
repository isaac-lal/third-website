function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "isaaclal124@gmail.com",
        Password: "A454B86888B1587CFB603A6693ECD264D76D",
        To: 'isaaclal124@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact From isaaclal.com!",
        Body: "Name:" + document.getElementById("name").value
              + "<br> Subject: " + document.getElementById("subject").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br><br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Thank you for filling out the form!")
    );
}