let UserContainer = document.getElementById("userimgs");
axios({
  method: "post",
  url: `http://localhost/TinyHospital/TinyHospital_BE/get_users.php`,
}).then(async (res) => {
  const users = res.data.users;
  users.forEach((user) => {
    if (user.usertype_id == 3) {
      console.log(`condition`);
      UserContainer.innerHTML += `
      <div class="card">
      <img src="../TinyHospital_FE/images/patient (2).svg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b>UserID${user.idusers}</b></h4>
          <p>Name ${user.name}</p>
          <p>DOB:${user.dob}</p>
      </div>
      <button class="assign">Assign</button>
     
  </div>
    `;
    }
  });
});

// let btns = document.getElementsByClassName("assign");
// let side = document.getElementById("sidebar");
// console.log(btns);
// btns.onclick = () => {
//   side.classList.remove("hide");
//   side.classList.add("flex");
// };

let sidesubmit = document.getElementById("sidebarsubmit");

sidesubmit.addEventListener("click", assign_patient);

function assign_patient() {
  console.log(`clicked`);
  let userid = document.getElementById("patientid").value;
  let hospitalid = document.getElementById("hospitalid").value;

  let data = new FormData();
  data.append("idusers", userid);
  data.append("idhospitals", hospitalid);

  axios({
    method: "post",
    url: "http://localhost/TinyHospital/TinyHospital_BE/assign_hospital.php",
    data: data,
  }).then((result) => {
    console.log(result.data);
  });
  side.classList.add("hide");
  side.classList.remove("flex");
}
