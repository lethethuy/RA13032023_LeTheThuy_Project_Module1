let dataCart = JSON.parse(localStorage.getItem("dataCart")); // gọi dữ liệu từ local về dưới dạng mảng
// console.log(dataCart);
let money = document.getElementById("money");
// console.log(money);
let totalitems = document.getElementById("totalItem");
console.log(totalitems);

let productcontainer = document.getElementById("product-container");
// console.log(productcontainer);
function renderArr() {
  productcontainer.innerHTML = "";
  for (let i = 0; i < dataCart.length; i++) {
    // console.log(dataCart[i]);
    productcontainer.innerHTML =
      productcontainer.innerHTML +
      `
    <div class="product-1" id="${dataCart[i].id}">
    <div class="product-img">
        <img src=${dataCart[i].img} alt="" />
      </div>
      <div class="product-detail">
        <div>
          <div>${dataCart[i].name}</div>
          <div>${dataCart[i].price}</div>
          <div><button class ="sell" id ="${dataCart[i].id}">-</button> <b>${dataCart[i].amount}</b> <button class="buy" id="${dataCart[i].id}">+</button></div>
        </div>
      </div>
</div>
    
    `;
  }
}
renderArr();
console.log(dataCart);

productcontainer.onclick = function (e) {
  console.log(e.target.classList);

  // truy cap den element chua button sell
  if (e.target.classList.contains("sell")) {
    // console.log("aaa");
    let sellID = +e.target.id;
    console.log(sellID);

    let check = -1;
    for (let i = 0; i < dataCart.length; i++) {
      // console.log(dataCart[i].id);
      if (sellID == dataCart[i].id) {
        check = i;
      }
    }
    if (dataCart[check].amount == 1) {
      dataCart.splice(check, 1);
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      console.log(dataCart);
      renderArr();
    } else if (check !== -1 && dataCart[check].amount > 1) {
      dataCart[check].amount = dataCart[check].amount - 1;
      // console.log(dataCart[check].amount);

      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      // JSON.parse(localStorage.getItem("dataCart"));

      money.innerHTML = `${totalMoney().toLocaleString()}
      `;
      localStorage.setItem("totalmoney", JSON.stringify(totalMoney()));
      totalitems.innerHTML = `${totalItem()}`;
      localStorage.setItem("totalitem", JSON.stringify(totalItem()));
      renderArr();
    }
  }
  console.log(totalitems);
  // truy cap den element chua button buy
  if (e.target.classList.contains("buy")) {
    // console.log("aaa");
    let buyID = +e.target.id;
    // console.log(buyID);

    let check = -1;
    for (let i = 0; i < dataCart.length; i++) {
      // console.log(dataCart[i].id);
      if (buyID == dataCart[i].id) {
        check = i;
      }
    }
    if (check !== -1) {
      dataCart[check].amount = dataCart[check].amount + 1;
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      money.innerHTML = `${totalMoney().toLocaleString()}
      `;
      localStorage.setItem("totalmoney", JSON.stringify(totalMoney()));
      totalitems.innerHTML = `${totalItem()}`;
      localStorage.setItem("totalitem", JSON.stringify(totalItem()));
      renderArr();
    }
  }
};
localStorage.setItem("totalitem", JSON.stringify(totalItem()));
localStorage.setItem("totalmoney", JSON.stringify(totalMoney()));


function totalMoney() {
  let sum = 0;
  for (let i = 0; i < dataCart.length; i = i + 1) {
    sum += +dataCart[i].price.replaceAll(".", "") * dataCart[i].amount;
  }
  return sum;
}
console.log();

money.innerHTML = `${totalMoney().toLocaleString()}`;

function totalItem() {
  let sum = 0;
  for (let i = 0; i < dataCart.length; i++) {
    sum += dataCart[i].amount;
  }
  return sum;
}
totalitems.innerText = `${totalItem()}`;

function buttonOrder() {
  window.location = "http://127.0.0.1:5500/html/confirm.html";
}

function myHome() {
  window.location = "http://127.0.0.1:5500/html/home.html";
}
