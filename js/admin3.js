let orderContainer = document.getElementById("table-body");
let totalItem = JSON.parse(localStorage.getItem("totalitem"));
let numberRandom = Math.floor(Math.random() * 1000000000);
// let user = JSON.parse(localStorage.getItem("user")) || [];
let user = JSON.parse(localStorage.getItem("user")) || [];
let updateIndex = -1;
let totalmoneyCart = 0;

function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}

// Render các dữ liệu ở trong user
function renderuser() {
  let tbodyHTML = "";
  for (let i = 0; i < user.length; i++) {
    tbodyHTML += `
    <tr id="${user[i].id}">
      <td>${user[i].id}</td>
      <td>${user[i].username}</td>
      <td>${user[i].email}</td>
      <td>${user[i].password}</td> 
      <td>${user[i].phone}</td>
      <td><button class="btnEdit">Edit</button> <button class="btnDel" id="btnDelete">Delete</button></td>
    </tr>
  `;
  }
  orderContainer.innerHTML = tbodyHTML;
  //   console.log("tbodyHTML: ", tbodyHTML);
}
renderuser();

orderContainer.onclick = function (e) {
  if (e.target.classList.contains("btnDel")) {
    let btnID = e.target.parentElement.parentElement.id;
    console.log(btnID);

    let findIndex = -1;
    for (let i = 0; i < user.length; i++) {
      if (btnID == user[i].id) {
        findIndex = i;
        break;
      }
    }

    if (findIndex > -1) {
      user.splice(findIndex, 1);
      localStorage.setItem("user", JSON.stringify(user));
      renderuser();
    }
  }

  if (e.target.classList.contains("btnEdit")) {
    console.log("heloo");
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;

    console.log(id);

    let findIndex = -1;
    for (let i = 0; i < user.length; i++) {
      if (Number(id) == +user[i].id) {
        findIndex = i;
        break;
      }
    }
    console.log(findIndex);

    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = user[findIndex];
      td.innerHTML = `
<tr id="${find.id}">
<td><input  type ="text" value="${find.id}"/></td>
<td><input type ="text" value="${find.username}"/></td>
  <td><input type ="text" value="${find.email}"/></td>
  <td><input type ="text" value="${find.password}"/></td>
  <td><input type ="text" value="${find.phone}"/></td>
  <td><button class="btn-confirm">Confirm</button> <button class="btn-cancel">Cancel</button></td>
</tr>`;
    }
  }

  // ủy quyền sự kiện cho nút cancel
  if (e.target.classList.contains("btn-cancel")) {
    console.log("aaa");
    renderuser();
  }

  // ủy quyền sự kiện cho nút confirm
  if (e.target.classList.contains("btn-confirm")) {
    console.log(
      e.target.parentElement.parentElement.children[3].children[0].value
    );
    let id = e.target.parentElement.parentElement.children[0].children[0].value;
    let fname =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let email =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let password =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let phone =
      e.target.parentElement.parentElement.children[4].children[0].value;

    console.log(id, fname, email, password, phone);
    user[updateIndex] = {
      ...user[updateIndex],
      id: id,
      fname: fname,
      email: email,
      password: password,
      phone: phone,
    };
    localStorage.setItem("user", JSON.stringify(user));
    renderuser();
  }
};
