let carts = document.querySelectorAll(".add-to-cart")
//setting product name, price, image.
let products = 
[
  {
    tag:"food1",
    name:"Pot Carnitas",
    price:"299",
    incart:"0"
  },
  {
    name:"Rainbow summer sushi rolls",
    tag:"food2",
    price:"399",
    incart:"0"
  },
  {
    name:"Chicken with Veggie salad",
    tag:"food3",
    price:"359",
    incart:"0"
  },
  {
    name:"Steak Frites with chilli fries",
    tag:"food4",
    price:"239",
    incart:"0"
  },
  {
    name:"Pepper steak with brandy sauce",
    tag:"food5",
    price:"559",
    incart:"0"
  },
  {
    name:"Roasted pumpkin with hummus",
    tag:"food6",
    price:"499",
    incart:"0"
  },
  {
    name:"Chicken and cauliflower Ricebowl",
    tag:"food7",
    price:"799",
    incart:"0"
  },
  {
    name:"French Fry Box",
    tag:"food8",
    price:"999",
    incart:"0"
  },
]

//getting all add to cart button from food-menu.html
for (let i=0;i<carts.length;i++)
{
carts[i].addEventListener("click", ()=>
{
  cartnumbers(products[i]);
  totalcost(products[i]);
  
})

}

// everytime the windows load the cart is updated
function onloadcount()
{
  let productcount = localStorage.getItem("cartnumbers");
  if (productcount) {
    document.querySelector(".cart-btn span").textContent = productcount;
  }
}

// increase or decrease cart 
function cartnumbers(products)
{
  let productcount = localStorage.getItem("cartnumbers");
  productcount = parseInt(productcount);

  let cartItems = localStorage.getItem("productincart");
  cartItems=parseInt(cartItems);

  if(productcount)
  {
    localStorage.setItem("cartnumbers",productcount+1);
    document.querySelector(".cart-btn span").textContent = productcount+1;
  }
  else
  {
    localStorage.setItem("cartnumbers", 1) ;
    document.querySelector(".cart-btn span").textContent = 1;
  }
  setitems(products)
}

//making clicked product to store in local storage with cart details
function setitems(products) {
  
  let cartitems = localStorage.getItem("productincart");
  cartitems = JSON.parse(cartitems);
  
 
  if (cartitems != null) {
    products.incart = 0;
    if (cartitems[products.tag] == undefined) 
    {
      
      cartitems = {...cartitems,
        [products.tag]:products}
    }
    cartitems[products.tag].incart += 1;
    
  }
  else
  {     
    products.incart = 1;
        cartitems =  {
          [products.tag]:products
        }
  }
  localStorage.setItem("productincart",JSON.stringify(cartitems));
}

//calculating total cost and storeing in local storage
function totalcost(products) {
  let total = localStorage.getItem("totalcost")
   if (total != null) {
    total = parseInt(total);
    products.price = parseInt(products.price);
    console.log(typeof products.price)
    localStorage.setItem("totalcost",total+products.price)
  }
  else{
    localStorage.setItem("totalcost",products.price);
  }
}

//getting cart details from local storage and displaying in cart.html page
function displaycart() {
  
  let cartItems = localStorage.getItem("productincart");
  cartItems = JSON.parse(cartItems);
  
  let productcontainer = document.querySelector(".products");
  let total = localStorage.getItem("totalcost");
  total = parseInt(total);
  if(cartItems && productcontainer){
    productcontainer.innerHTML = "";
    Object.values(cartItems).map(item =>{
      productcontainer.innerHTML +=`
      <div class="product">
      <box-icon type='solid' class="removeitem" name='trash-alt'></box-icon>
      <img src="/assets/${item.tag}.png">
      <span>${item.name}</span>
      </div>
      <div class="price">${item.price}</div>
      <div class="quantity">
      <box-icon type='solid' class="decrease" name='chevron-left-circle'></box-icon>
      <span>${item.incart}</span>
      <box-icon name='chevron-right-circle' class="increase" type='solid' ></box-icon>
      </div>
      <div class="total">
       Rs${item.incart * item.price}
      </div>
      `;
    });
    productcontainer.innerHTML += `
    <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Cart Total</h4>
        <h4 class="basketTotal">Rs${total}.00</h4>
    </div>`

   clearcart();
  //  deleteitem();
   
  }
 
}

// function increase()
// {
//   let increment = document.querySelectorAll(".increase")
//   for (let t = 0; i < increment.length; i++) {
//     const element = array[t];
    
//   }
// }

//function to clear local storage
function clearcart()
{
  let clear = document.querySelector(".clear button")
  clear.addEventListener("click",()=>{
    console.log("working");
    localStorage.clear();
    window.location.reload();
  })
}

onloadcount();
displaycart();