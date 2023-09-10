let orderContainer = document.getElementById("table-body");
let totalItem = JSON.parse(localStorage.getItem("totalitem"));
let numberRandom = Math.floor(Math.random() * 1000000000);
let user = JSON.parse(localStorage.getItem("user")) || [];
let dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
let updateIndex = -1;
let totalmoneyCart = 0;
let userLogin = JSON.parse(localStorage.getItem("userLogin")) || [];
let statuss = document.getElementById("status");
console.log(statuss);
function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}

// Render các dữ liệu ở trong dataCart
function renderdataCart() {
  let tbodyHTML = "";
  let sum = 0;
  for (let i = 0; i < dataCart.length; i++) {
    tbodyHTML += `
    <tr id="${dataCart[i].id}">
      <td>${dataCart[i].id}</td>
      <td>${dataCart[i].name}</td>
      <td>${dataCart[i].amount}</td>
      <td>${dataCart[i].price}</td> 
      <td>${userLogin.username}</td>
      <td>${userLogin.address}</td>
      <td>${userLogin.phone}</td>
      <td>${dataCart[i].status}</td>
      <td><button class="btnEdit">Edit</button> <button class="btnDel" id="btnDelete">Delete</button></td>
    </tr>
  `;
  }
  orderContainer.innerHTML = tbodyHTML;
  console.log("tbodyHTML: ", tbodyHTML);
}
renderdataCart();

orderContainer.onclick = function (e) {
  if (e.target.classList.contains("btnDel")) {
    let btnID = +e.target.parentElement.parentElement.id;
    console.log(btnID);

    let findIndex = -1;
    for (let i = 0; i < dataCart.length; i++) {
      if (btnID == dataCart[i].id) {
        findIndex = i;
        break;
      }
    }
 
    // kiểm tra điều kiệntrạng thái
    console.log(dataCart[findIndex]);
    if (findIndex > -1) {
      if (dataCart[findIndex].status == "Đang chờ xác nhận") {
        dataCart.splice(findIndex, 1);
        localStorage.setItem("dataCart", JSON.stringify(dataCart));
        renderdataCart();
      } else {
        alert("Đang trong quá trình xử lý. Không thể xóa được!");
      }
    }
  }

  // Nút edit

  if (e.target.classList.contains("btnEdit")) {
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;

    console.log(id);

    let findIndex = -1;
    for (let i = 0; i < dataCart.length; i++) {
      if (Number(id) == +dataCart[i].id) {
        findIndex = i;
        break;
      }
    }

    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = dataCart[findIndex];

      td.innerHTML = `
  <tr id="${find.id}">
  <td>${find.id}</td>
  <td>${find.name}</td>
  <td>${find.amount}</td>
  <td>${find.price}</td> 
  <td>${userLogin.username}</td>
  <td>${userLogin.address}</td>
  <td>${userLogin.phone}</td>
  <td>
  <select>
    <option selected value="Hoàn Thành">Hoàn Thành</option>
    <option value="Đang chờ xác nhận">Đang chờ xác nhận</option>
    <option value="Đang giao hàng">Đang giao hàng </option>
  </select>
</td>
  <td><button class="btn-confirm">Confirm</button> <button class="btn-cancel">Cancel</button></td>
</tr>`;
    }
  }

  // ủy quyền sự kiện cho nút cancel
  if (e.target.classList.contains("btn-cancel")) {
    console.log("aaa");
    renderdataCart();
  }

  // ủy quyền sự kiện cho nút confirm
  if (e.target.classList.contains("btn-confirm")) {
    let id = e.target.parentElement.parentElement.children[7].children[0].value;
    console.log(id);
    dataCart[updateIndex] = {
      ...dataCart[updateIndex],
      status: id,
    };
    localStorage.setItem("dataCart", JSON.stringify(dataCart));

    renderdataCart();
  }
};
