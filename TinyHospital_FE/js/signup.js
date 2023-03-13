let signup_btn = document.getElementById("signup");
signup_btn.addEventListener("click", signup);

function signup() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let position = document.getElementById("position").value;

  let data = new FormData();
  data.append("name", name);
  data.append("dob", dob);
  data.append("password", password);
  data.append("email", email);
  data.append("position", position);

  axios({
    method: "post",
    url: "http://localhost/TinyHospital/TinyHospital_BE/signup.php",
    data: data,
  }).then((result) => {
    console.log(result.data.status);
    if (result.data.status == 1) {
      window.location.replace("../index.html");
    } else if (result.data.status == 2) {
      window.location.replace("../pages/employee.html");
      ("../pages/employee.html");
    } else if (result.data.status == 3) {
      window.location.replace("../pages/patient.html");
    }
  });
}
