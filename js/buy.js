// let dataProduct = [
//   {
//     name: "ÁO SƠ MI OXFORD CỔ TRỤ",
//     price: "899.000",
//     img: "../img/buy1.jpeg",
//     img1: "../img/buy11.jpeg",
//     img2: "../img/buy12.jpeg",
//     img3: "../img/buy13.jpeg",
//     id: 1,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI LINEN - COTTON",
//     price: "1.299.000",
//     img: "../img/buy2.jpeg",
//     img1: "../img/buy21.jpeg",
//     img2: "../img/buy22.jpeg",
//     img3: "../img/buy23.jpeg",
//     id: 2,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI LINEN  COTTON",
//     price: "1.299.000",
//     img: "../img/buy3.jpeg",
//     img1: "../img/buy31.jpeg",
//     img2: "../img/buy32.jpeg",
//     img3: "../img/buy33.jpeg",
//     id: 3,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI COTTON - LINEN CHẦN CHỈ NỔI",
//     price: "1.299.000",
//     img: "../img/buy4.jpeg",
//     img1: "../img/buy41.jpeg",
//     img2: "../img/buy42.jpeg",
//     img3: "../img/buy43.jpeg",
//     id: 4,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI DỆT",
//     price: "1.299.000",
//     img: "../img/buy5.jpeg",
//     img1: "../img/buy51.jpeg",
//     img2: "../img/buy52.jpeg",
//     img3: "../img/buy53.jpeg",
//     id: 5,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI JACQUARD HỌA TIẾT CÂY CỌ",
//     price: "1.299.000",
//     img: "../img/buy6.jpeg",
//     img1: "../img/buy61.jpeg",
//     img2: "../img/buy62.jpeg",
//     img3: "../img/buy63.jpeg",
//     id: 6,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI LINEN - VISCOSE",
//     price: "1.299.000",
//     img: "../img/buy7.jpeg",
//     img1: "../img/buy71.jpeg",
//     img2: "../img/buy72.jpeg",
//     img3: "../img/buy73.jpeg",
//     id: 7,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI DỆT",
//     price: "1.299.000",
//     img: "../img/buy8.jpeg",
//     img1: "../img/buy81.jpeg",
//     img2: "../img/buy82.jpeg",
//     img3: "../img/buy83.jpeg",
//     id: 8,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI DỆT",
//     price: "1.299.000",
//     img: "../img/buy9.jpeg",
//     img1: "../img/buy91.jpeg",
//     img2: "../img/buy92.jpeg",
//     img3: "../img/buy93.jpeg",
//     id: 9,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI DỆT CO GIÃN",
//     price: "1.299.000",
//     img: "../img/buy10.jpeg",
//     img1: "../img/buy101.jpeg",
//     img2: "../img/buy102.jpeg",
//     img3: "../img/buy103.jpeg",
//     id: 10,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI OXFORD",
//     price: "1.299.000",
//     img: "../img/buy11.jpeg",
//     img1: "../img/buy111.jpeg",
//     img2: "../img/buy112.jpeg",
//     img3: "../img/buy113.jpeg",
//     id: 11,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
//   {
//     name: "ÁO SƠ MI VẢI LYOCELL - COTTON",
//     price: "1.299.000",
//     img: "../img/buy12.jpeg",
//     img1: "../img/buy121.jpeg",
//     img2: "../img/buy122.jpeg",
//     img3: "../img/buy123.jpeg",
//     id: 12,
//     quantity: 100,
//     amount: 1,
//     status: "Đang chờ xác nhận",
//     trangthai: "Còn hàng",
//   },
// ];

// localStorage.setItem("dataProduct", JSON.stringify(dataProduct));

let dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
// console.log(dataProduct);
let dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
// console.log(dataCart);

let mainElemet = document.getElementById("main");
//   console.log(mainElemet);
let money = document.getElementById("money");
// console.log(money);

function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}
//   Thuc thi ham in san pham

function renderProduct() {
  let product = "";
  for (let i = 0; i < dataProduct.length; i++) {
    // console.log(dataProduct[i]);
    mainElemet.innerHTML =
      mainElemet.innerHTML +
      `    <div class="img1" id="${dataProduct[i].id}">
      <div class="iconadd add"><i class="fa-sharp fa-solid fa-plus"></i></div>
        <img class="image" src="${dataProduct[i].img}" alt="">

        <div class="subimg">
            <div>${dataProduct[i].name}</div>
            <div id="money"> ${dataProduct[i].price} VND</div>


        </div>
    </div>`;
  }
  // mainElemet.innerHTML = product;
}

renderProduct();

// gắn link để chuyển sang trang detail

// let img = document.getElementsByClassName("img1");
// console.log(img);
// img.onclick = function () {
//   window.location = "http://127.0.0.1:5500/login.html";
// };

// gan link de chuyen sang  trang gio hang
let bagicon = document.getElementById("icon-bag");
// console.log(bagIcon);
bagicon.onclick = function () {
  window.location = "http://127.0.0.1:5500/html/Cart.html";
};

// Ủy quyền sự kiện cho nút add của mỗi nút cộng trong ảnh
// console.log(mainElemet);
mainElemet.onclick = function (e) {
  // console.log(e.target.classList.contains("add"));
  if (e.target.classList.contains("add")) {
    // e.target.parentElement   --------    Trỏ đến thằng cha chứa nút add cần lấy
    let myId = +e.target.parentElement.id; // lấy Id Add của thằng cha vừa lấy
    console.log(Number(myId)); //------ Kiểm tra xem đã lấy đúng thằng ID của nút khi ấn chưa

    // Tim ra vi tri san pham vua bam dua vao id la thằng ở vị trí bao nhiều trong thằng dataProduct ấy
    let findIndex = -1;
    for (let i = 0; i < dataProduct.length; i++) {
      if (myId === dataProduct[i].id) {
        // so sánh với từng thằng ở trong dataProduct
        findIndex = i;
      }
    }
    let clickProduct = dataProduct[findIndex];
    console.log(clickProduct);
    // console.log(clickProduct);
    let indexInCart = findIndexByName(clickProduct, dataCart); // đi tìm thằng dataProduct[findIndex] nằm ở vị trí nào trong thằng datacart
    if (indexInCart > -1) {
      // NẾu mà nó có thì cộng phần tử số lượng nên 1
      dataCart[indexInCart].amount = dataCart[indexInCart].amount + 1;
      alert("Bạn đã thêm thành công");
      console.log(dataCart);

      localStorage.setItem("dataCart", JSON.stringify(dataCart)); // Đẩy dữ liệu lên local
    } else {
      // Ngược lại nếu như nó không có thì mình push nó vào thằng dataCart mới
      // location.reload();
      // if (!dataCart.includes(clickProduct)) {
      dataCart.push(clickProduct);

      alert("Bạn đã thêm thành công");
      console.log("tao moi");
      localStorage.setItem("dataCart", JSON.stringify(dataCart)); // Đẩy dữ liệu lên local
      // }
    }
  }

  // uy quyen su kien cho thang img
  if (e.target.classList.contains("image")) {
    let imgid = +e.target.parentElement.id;
    console.log(typeof imgid);
    // debugger;
    // tim ra vi tri san pham cua thang vua bam o vi tri thua may trong data product
    let findIndeximg = -1;
    for (let i = 0; i < dataProduct.length; i++) {
      if (imgid == dataProduct[i].id) {
        findIndeximg = i;
      }
    }
    let clickImg = dataProduct[findIndeximg];
    console.log(dataProduct[findIndeximg]);
    // console.log(clickImg); // object
    localStorage.setItem("dataclickImg", JSON.stringify(clickImg));
    window.location.href = "http://127.0.0.1:5500/html/detail.html";
  }
};

function findIndexByName(element, array) {
  let index = -1;
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i].id === element.id) {
      console.log(element.id);
      index = i;
    }
  }
  return index;
}

function myBag() {
  window.location = "http://127.0.0.1:5500/html/Cart.html";
}
