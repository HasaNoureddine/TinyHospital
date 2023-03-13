let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", signin);

function signin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = new FormData();
  data.append("email", email);
  data.append("password", password);

  axios({
    method: "post",
    url: "http://localhost/TinyHospital/TinyHospital_BE/login.php",
    data: data,
  }).then((result) => {
    if (result.data.user_type == 1) {
      window.location.replace("../index.html");
    } else if (result.data.user_type == 2) {
      window.location.replace("../pages/employee.html");
      ("../pages/employee.html");
    } else if (result.data.user_type == 3) {
      window.location.replace("../pages/patient.html");
    }
  });
}
