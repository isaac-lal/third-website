function sendEmail() {
    Email.send({
        SecureToken: 'be69f8aa-68b2-4e71-95c0-a037e186316e',
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