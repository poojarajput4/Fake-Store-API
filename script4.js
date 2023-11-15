var products=[]
var t=""
var container=document.querySelector(".container")
async function display(){
    var raw=await fetch("https://fakestoreapi.com/products");
    products=await raw.json()
    for(var i=0;i<products.length;i++)
    {
        t=t+`<div class="productBox">
        <div class="imgBox">
        <img src="${products[i].image}"/>
        </div>
        <div class="contentBox">
        <h3>${(products[i].title).substring(0,20)}....</h3>
        <p>${(products[i].description).substring(0,130)} <span>read more</span></p>
        </div>
        <div class="priceBox">
        <h3>Rs.${products[i].price}</h3>
        <button class="addToCart">Add to Cart</button>
        </div>
        </div>`;
    }
    container.innerHTML=t
}