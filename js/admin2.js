let orderContainer = document.getElementById("table-body");
let totalItem = JSON.parse(localStorage.getItem("totalitem"));
let numberRandom = Math.floor(Math.random() * 1000000000);
let user = JSON.parse(localStorage.getItem("user")) || [];
let dataProduct = JSON.parse(localStorage.getItem("dataProduct")) || [];
let updateIndex = -1;
let totalmoneyCart = 0;


function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}

// Render các dữ liệu ở trong dataProduct
function renderdataProduct() {
  let tbodyHTML = "";
  let sum = 0;
  for (let i = 0; i < dataProduct.length; i++) {
    tbodyHTML += `
    <tr id="${dataProduct[i].id}">
      <td>${dataProduct[i].id}</td>
      <td>${dataProduct[i].name}</td>
      <td><img width="100px" src="${dataProduct[i].img}"></td>
      <td>${dataProduct[i].price}</td> 
      <td>${dataProduct[i].trangthai}</td>
      <td><button class="btnEdit">Edit</button> <button class="btnDel" id="btnDelete">Delete</button></td>
    </tr>
  `;
  }
  orderContainer.innerHTML = tbodyHTML;
  //   console.log("tbodyHTML: ", tbodyHTML);
}
renderdataProduct();

orderContainer.onclick = function (e) {
  if (e.target.classList.contains("btnDel")) {
    let btnID = +e.target.parentElement.parentElement.id;
    console.log(btnID);

    let findIndex = -1;
    for (let i = 0; i < dataProduct.length; i++) {
      if (btnID == dataProduct[i].id) {
        findIndex = i;
        break;
      }
    }

    if (findIndex > -1) {
      dataProduct.splice(findIndex, 1);
      localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
      renderdataProduct();
    }
  }

  if (e.target.classList.contains("btnEdit")) {
    let id = +e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;

    console.log(id);

    let findIndex = -1;
    for (let i = 0; i < dataProduct.length; i++) {
      if (Number(id) == dataProduct[i].id) {
        findIndex = i;
        break;
      }
    }

    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = dataProduct[findIndex];
      td.innerHTML = `
<tr id="${find.id}">
<td><input  type ="text" value="${find.id}"/></td>
<td><input type ="text" value="${find.name}"/></td>
  <td><img width="100px" src="${find.img}"></td>
  <td><input type ="text" value="${find.price}"/></td>
  <td>
  <select>
    <option selected value="Còn Hàng">Còn Hàng</option>
    <option value="Hết Hàng">Hết Hàng</option>
    <option value="Đang Đặt Hàng">Đang Đặt Hàng</option>
  </select>
</td>
  <td><button class="btn-confirm">Confirm</button> <button class="btn-cancel">Cancel</button></td>
</tr>`;
    }
  }

  // ủy quyền sự kiện cho nút cancel
  if (e.target.classList.contains("btn-cancel")) {
    console.log("aaa");
    renderdataProduct();
  }

  // ủy quyền sự kiện cho nút confirm
  if (e.target.classList.contains("btn-confirm")) {
    // console.log(
    //   e.target.parentElement.parentElement.children[4].children[0].value
    // );
    let id = e.target.parentElement.parentElement.children[0].children[0].value;
    let nameProduct =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let price =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let statuss =
      e.target.parentElement.parentElement.children[4].children[0].value;

    console.log(id, nameProduct, price, statuss);
    dataProduct[updateIndex] = {
      ...dataProduct[updateIndex],
      id: id,
      name: nameProduct,
      price: price,
      trangthai: statuss,
    };
    localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
    renderdataProduct();
  }
};
