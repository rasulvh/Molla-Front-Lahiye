$(function () {

  let language = document.querySelector(".head-up .right .language-dropdown")
  if (localStorage.getItem("language") != null) {
    language.innerHTML = localStorage.getItem("language") + `<i class="fa-solid fa-chevron-down"></i>
      <ul class="dropdown">
          <li class="english">English</li>
          <li class="french">French</li>
          <li class="spanish">Spanish</li>
      </ul>`
  }
  else {
    language.innerHTML = `English <i class="fa-solid fa-chevron-down"></i>
      <ul class="dropdown">
          <li class="english">English</li>
          <li class="french">French</li>
          <li class="spanish">Spanish</li>
      </ul>`
  }
  language.addEventListener("mouseenter", function () {
    let languageChoices = document.querySelectorAll(".head-up .right .language-dropdown .dropdown li")

    for (const item of languageChoices) {
      item.addEventListener("click", function () {
        language.innerHTML = item.innerText + `<i class="fa-solid fa-chevron-down"></i>
          <ul class="dropdown">
              <li class="english">English</li>
              <li class="french">French</li>
              <li class="spanish">Spanish</li>
          </ul>`

        localStorage.setItem("language", item.innerText)
      })
    }

  })

  let currency = document.querySelector(".head-up .right .currency-dropdown")
  if (localStorage.getItem("currency") != null) {
    currency.innerHTML = localStorage.getItem("currency").toUpperCase() + `<i class="fa-solid fa-chevron-down"></i>
      <ul class="dropdown">
          <li class="euro">Eur</li>
          <li class="dollar">Usd</li>
      </ul>`
  }
  else {
    currency.innerHTML = `USD <i class="fa-solid fa-chevron-down"></i>
      <ul class="dropdown">
          <li class="euro">Eur</li>
          <li class="dollar">Usd</li>
      </ul>`
  }
  currency.addEventListener("mouseenter", function () {
    let currencyChoices = document.querySelectorAll(".head-up .right .currency-dropdown .dropdown li")

    for (const item of currencyChoices) {
      item.addEventListener("click", function () {
        currency.innerHTML = item.innerText.toUpperCase() + `<i class="fa-solid fa-chevron-down"></i>
          <ul class="dropdown">
              <li class="euro">Eur</li>
              <li class="dollar">Usd</li>
          </ul>`

        localStorage.setItem("currency", item.innerText)
      })
    }
  })

  window.onscroll = function () { myFunction() };

  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function checkProductCount() {
    if (JSON.parse(localStorage.getItem("products")).length > 0) {
      $("#no-product").addClass("d-none")
      $("#products").removeClass("d-none")
    }
    else {
      $("#no-product").removeClass("d-none")
      $("#products").addClass("d-none")
    }
  }

  checkProductCount()

  let products = JSON.parse(localStorage.getItem("products"))
  let tBody = document.querySelector("#products .left tbody")

  function tableBody(product) {
    tBody.innerHTML += `
      <tr data-id="${product.id}">
        <td class="product"><img src="${product.image}" alt=""> <span>${product.name}</span></td>
        <td class="price">$${product.price}</td>
        <td class="quantity">
            <span data-id="${product.id}" class="decrease">-</span>
            <input type="number" value="${product.count}" min="1" max="1000">
            <span data-id="${product.id}" class="increase">+</span>
        </td>
        <td class="total-price">$${(product.price * product.count).toFixed(2)}</td>
        <td class="option"><i data-id="${product.id}" class="fa-light fa-x"></i></td>
      </tr>
      `
  }

  for (const product of products) {
    tableBody(product)
  }

  let increaseButtons = document.querySelectorAll("#products .left tbody .increase")
  let decreaseButtons = document.querySelectorAll("#products .left tbody .decrease")
  let deleteButtons = document.querySelectorAll("#products .left tbody .fa-x")
  let cartCount = document.querySelector(".head-up .down .right-icons .cart .cart-count")
  let countInputs = document.querySelectorAll("#products .left tbody input")
  let subTotalPrice = document.querySelector(".sub-total .sub-total-price")
  let totalPrice = document.querySelector(".total .total-price")
  let radioInputs = document.querySelectorAll(".cart-summary .form input")

  for (const btn of deleteButtons) {
    btn.addEventListener("click", function () {
      this.parentNode.parentNode.remove()

      let deleteProduct = products.find(m => m.id == btn.getAttribute("data-id"))
      let deleteIndex = products.indexOf(deleteProduct)

      console.log(products);

      if (deleteIndex > -1) {
        products.splice(deleteIndex, 1)
      }

      localStorage.setItem("products", JSON.stringify(products))

      checkProductCount()

      calculateCartCount()

      calculateSubTotal()

      calculateTotal()
    })

  }

  for (const btn of increaseButtons) {
    btn.addEventListener("click", function () {
      this.previousElementSibling.value++;

      let changeProduct = products.find(m => m.id == btn.getAttribute("data-id"))

      changeProduct.count++
      localStorage.setItem("products", JSON.stringify(products))

      this.parentNode.nextElementSibling.innerText = `$${(changeProduct.price * changeProduct.count).toFixed(2)}`

      calculateCartCount()

      calculateSubTotal()

      calculateTotal()
    })
  }

  for (const btn of decreaseButtons) {
    btn.addEventListener("click", function () {
      let changeProduct = products.find(m => m.id == btn.getAttribute("data-id"))

      if (changeProduct.count > 1) {
        this.nextElementSibling.value--;

        changeProduct.count--
        localStorage.setItem("products", JSON.stringify(products))

        this.parentNode.nextElementSibling.innerText = `$${(changeProduct.price * changeProduct.count).toFixed(2)}`

        calculateCartCount()

        calculateSubTotal()

        calculateTotal()
      }
    })
  }

  for (const input of radioInputs) {
    input.addEventListener("change", calculateTotal)
  }

  for (const input of countInputs) {
    input.addEventListener("change", function(){
      let changeProduct = products.find(m => m.id == input.parentNode.parentNode.getAttribute("data-id"))

      if(input.value >= 1 && input.value <= 1000){
        changeProduct.count = input.value

        localStorage.setItem("products", JSON.stringify(products))

        this.parentNode.nextElementSibling.innerText = `$${(changeProduct.price * changeProduct.count).toFixed(2)}`

        calculateCartCount()

        calculateSubTotal()
      
        calculateTotal()
      }
      else{
        input.value = changeProduct.count
      }
      
    })
  }

  function calculateCartCount() {
    let sum = 0

    for (const item of products) {
      sum += item.count;
    }

    cartCount.innerText = sum
  }

  function calculateSubTotal() {
    let sum = 0;

    for (const item of products) {
      sum += (item.price * item.count)
    }

    subTotalPrice.innerText = `$${sum.toFixed(2)}`

    return sum
  }

  function calculateTotal(){
    let sum = calculateSubTotal() + parseInt(document.querySelector('.cart-summary .form input:checked').value)

    totalPrice.innerText = `$${sum.toFixed(2)}`
  }

  calculateCartCount()

  calculateSubTotal()

  calculateTotal()

})


