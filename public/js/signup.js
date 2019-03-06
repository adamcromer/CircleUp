$(document).ready(function () {
  // close about info
  $('#btn-about').click(function () {
    $('.about').css('opacity', '0').css('z-index', '0');
    $('.signup').css('display', 'block');
  });

  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var nameInput = $("input#name-input");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    console.log("buttonclick");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name: nameInput.val().trim()
    };
    console.log(userData);
    if (!userData.email || !userData.password || !userData.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.name);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, name) {
    $.post("/api/signup", {
      email: email,
      password: password,
      name: name
    })
      .then(function (data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  // function handleLoginErr(err) {
  //   console.log("helloFrontend");
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }

  function handleLoginErr() {
    alert("Duplicate entry: Please sing in with a different email.");
    console.log("helloFrontend");
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
