let UserContainer = document.getElementById("userimgs");
axios({
  method: "post",
  url: `http://localhost/TinyHospital/TinyHospital_BE/get_medications.php`,
}).then(async (res) => {
  const meds = res.data.patients;
  meds.forEach((med) => {
    UserContainer.innerHTML += `
      <div class="card">
      <img src="../images/meds (2).svg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b> Name:${med.name}</b></h4>
          <p> Cost:${med.cost}</p>
      </div>
      <button class="assign">Assign</button>
     
  </div>
    `;
  });
});
let RoomContainer = document.getElementById("userimgs");
axios({
  method: "post",
  url: `http://localhost/TinyHospital/TinyHospital_BE/get_rooms.php`,
}).then(async (res) => {
  const rooms = res.data.rooms;
  rooms.forEach((room) => {
    RoomContainer.innerHTML += `
      <div class="card">
      <img src="../images/Bed (2).svg" alt="Avatar" style="width:100%">
      <div class="container">
          <h4><b> ID:${room.room_number}</b></h4>
          <p> Dpt.ID:${room.department_id}</p>
          <p> Floor:${room.floor_number}</p>
          <p> Bed/s:${room.number_beds}</p>
      </div>
      <button class="assign">Assign</button>
     
  </div>
    `;
  });
});

let sidesubmit = document.getElementById("sidebarsubmit");

sidesubmit.addEventListener("click", assign_room);

function assign_room() {
  let userid = document.getElementById("idusers").value;
  let roomid = document.getElementById("idrooms").value;
  let bedid = document.getElementById("idbeds").value;

  let data = new FormData();
  data.append("idusers", userid);
  data.append("idrooms", roomid);
  data.append("idbeds", bedid);

  axios({
    method: "post",
    url: "http://localhost/TinyHospital/TinyHospital_BE/assign_room.php",
    data: data,
  }).then((result) => {
    console.log(result.data);
  });
}

let medsubmit = document.getElementById("medsubmit");

medsubmit.addEventListener("click", assign_med);

function assign_med() {
  let userid = document.getElementById("idusers").value;
  let medid = document.getElementById("idmedications").value;

  let data = new FormData();
  data.append("idusers", userid);
  data.append("idmeds", medid);

  axios({
    method: "post",
    url: "http://localhost/TinyHospital/TinyHospital_BE/assign_room.php",
    data: data,
  }).then((result) => {
    console.log(result.data);
  });
}
