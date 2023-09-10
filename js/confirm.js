let mainElement = document.getElementById("main");
console.log(mainElement);
let imgElement = document.getElementById("img");
let imgelement = document.getElementById;
let userLogin = JSON.parse(localStorage.getItem("userLogin"));
console.log(userLogin);
let dataCart = JSON.parse(localStorage.getItem("dataCart"));
let totalitemElement = JSON.parse(localStorage.getItem("totalitem"));
console.log(totalitemElement);
let totalmoneyElement = JSON.parse(localStorage.getItem("totalmoney"));
console.log(totalmoneyElement);
let priceElement = document.getElementById("priceElement");
let checkboxElement = document.getElementById("checkbox");
function rendermainelement() {
  mainElement.innerHTML = `
    <div class="login-main">
    <div><h3>GIAO HÀNG</h3></div>
    <div>
      <p>
        GIAO HÀNG TIÊU CHUẨN TỚI NHÀ · 
        <br>
        <br>
        THỨ SÁU 05, THÁNG 5 - THỨ HAI 08,
        THÁNG 5
      </p>
    </div>
    <div class="freeship"><p>Miễn phí vận chuyển cho đơn hàng trên 1.299.000 VND</p></div>
    <div class="infor">
      <div>
        <div class="name">${userLogin.username}</div>
        <div id="addrees" class="addrees">${userLogin.address}</div>
      </div>
      <div><a href="">Sửa</a></div>
    </div>
  </div>
  <div class="register-main">
  <div>
    <h3>GIAO HÀNG NGÀY THỨ SÁU 05, THÁNG 5 - THỨ HAI 08, THÁNG 5</h3>
  </div>
  <div>
    <p>TỔNG SỐ SẢN PHẨM: <b>${totalitemElement}</b></p>
    <br>
  </div>
</div> 

    `;
}

rendermainelement();

function renderImg() {
  for (let i = 0; i < dataCart.length; i++) {
    imgElement.innerHTML =
      imgElement.innerHTML +
      `
        <div><img src="${dataCart[i].img}" alt=""></div>
       `;
  }
}
renderImg();

function renderPrice() {
  priceElement.innerHTML = `
    TỔNG <b>${totalmoneyElement.toLocaleString()}</b> VND
            <p>* BAO GỒM THUẾ VAT</p>
    `;
}
renderPrice();

function buttonOrder() {
  window.location = "http://127.0.0.1:5500/html/OK.html";
}

function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}

function myCart() {
  if (checkboxElement !== none) {
    window.location = "http://127.0.0.1:5500/html/Cart.html";
  } else {
    alert("Hãy đọc điều khoản và check vào ô trống");
  }
}
function myBag() {
  window.location = "http://127.0.0.1:5500/html/Cart.html";
}

