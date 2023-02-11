let total=0;

function AddToCart(item){
    let singleItem=item.closest('.single-item');
    let price=singleItem.querySelector('.price').innerText;
    let name=singleItem.querySelector('h1').innerText;
    let quantity=singleItem.querySelector('input');
    let cartItems=document.querySelector('.cart-items');


 if(parseInt(quantity.value) > 0){
   
   price=price.substring(1);
   let totalPrice=parseInt(price)*quantity.value;
   total+=totalPrice;
    cartItems.innerHTML+=`<div class="single-item-cart">
    <h3><span>${name}</span> ${quantity.value}x</h3>
    <p>Item price:$<span>${totalPrice}</span></p>
    <button class="remove" onclick="removeItem(this)">Remove</button>
    </div><br>`;
    document.querySelector('.total').innerText=`Total: $${total}`
    item.innerText='Added';
    item.setAttribute('disabled', 'true');
    quantity.setAttribute('disabled', 'true');
    
 }
   else{
  alert('Please choose items');
   }
    
}


function removeItem(item){
   let singleItem=item.closest('.single-item-cart');
   let name=singleItem.querySelector('h3 span').innerText;
   let priceMinus=singleItem.querySelector('p span').innerText;
   let vegetables=document.querySelectorAll('.single-item');
   priceMinus=parseInt(priceMinus); 
   total-=priceMinus;
   document.querySelector('.total').innerText=`Total: $${parseInt(total)} `;
   singleItem.remove();
   
   vegetables.forEach( function (vegetable) {
      if(vegetable.querySelector('.single-item-info h1').innerText===name){
         vegetable.querySelector('.single-item-price input').removeAttribute('disabled');
         vegetable.querySelector('.single-item-price input').value=0;
         vegetable.querySelector('.single-item-price button').innerText='Add';
         vegetable.querySelector('.single-item-price button').removeAttribute('disabled');     
         
      }
   })
}
