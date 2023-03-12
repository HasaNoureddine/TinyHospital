let UserContainer = document.getElementById("userimgs");
axios({
  method: "post",
  url: `http://localhost/TinyHospital/TinyHospital_BE/get_users.php`,
}).then(async (res) => {
  const users = res.data.users;
  console.log(users);
  users.forEach((user) => {
    console.log(`loop`);
    if (user.usertype_id == 3) {
      console.log(`condition`);
      UserContainer.innerHTML += `
      <div class="card">
      <img src="../TinyHospital_FE/images/patient (2).svg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b>${user.idusers}</b></h4>
          <p>${user.name}</p>
          <p>${user.dob}</p>
      </div>
      <button id="assign" value="${user.idusers}"><b>Assign</b></button>
  </div>
    `;
    }
  });
});

let assign_btn = document.getElementById("assign");
submit_btn.onclick = (e) => {
  e.preventDefault();
  assign_patient();
};
function assign_patient() {
  axios({
    method: "post",
    url: `http://localhost/TinyHospital/TinyHospital_BE/get_users.php`,
  }).then(async (res) => {
    const users = res.data.users;
    console.log(users);
    users.forEach((user) => {
      console.log(`loop`);
      if (user.usertype_id == 3) {
        console.log(`condition`);
        UserContainer.innerHTML += `
      <div class="card">
      <img src="../TinyHospital_FE/images/patient (2).svg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b>${user.idusers}</b></h4>
          <p>${user.name}</p>
          <p>${user.dob}</p>
      </div>
      <button id="assign" value="${user.idusers}"><b>Assign</b></button>
  </div>
    `;
      }
    });
  });

  let name = document.getElementById("fname").value;
  let brand = document.getElementById("brand").value;
  let price = document.getElementById("price").value;

  let data = new FormData();
  data.append("name", name);
  data.append("brand", brand);
  data.append("price", price);

  axios({
    method: "post",
    url: "http://localhost/ecommerce-backend/add_product.php",
    data: data,
  })
    .then((result) => {
      if (result.data.status == "success") {
        alert("Product Added!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
