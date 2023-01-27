let shop = document.getElementById('shop')

/**
 * ! ES6 error function
 */
let generateShop =()=>{
    return `
    <div class="item">  
    <img width="220" src="images/img-1.jpg" alt="">
    <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="price-quantity">
            <h2>$ 45</h2>
            <div class="buttons">
                <i class="bi bi-file-minus-fill"></i>
                <div class="qunatity">0</div>
                <i class="bi bi-file-plus-fill"></i>
            </div>
        </div>
    </div>
</div>
    `
}

generateShop()