let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation =()=> {
    let cartIcon = document.getElementById('cartAmount')
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y) => x + y, 0)
    // console.log(basket.map((x)=> x.item).reduce((x, y) => x + y, 0))
}

calculation()

let generateCardItems = () => { 
    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((x) =>{
            // console.log(x)
            let {id , item } = x
            let search = shopItemsData.find((y) => y.id == id) || []
            let {img, name, price} = search //desturcturing an object//
            return `
            <div class="cart-item">
                <img width="100" src="${img}">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})"class="bi bi-x-lg"></i>
                    </div>

                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-file-minus-fill"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-file-plus-fill"></i>
                    </div>

                    <h3>$ ${item * search.price}</h3>
                </div>
            </div>
            `
        }).join(""))
    }
    else{
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="homeBtn">Bck to Home</button>
        </a>
        `
    }
}
generateCardItems()

let increment = (id) => {
    let selectedItem = id
    let search = basket.find((x)=>  x.id === selectedItem)

    if(search === undefined){
        basket.push({
            id: selectedItem,
            item: 1,
        })
    } 
    else {
        search.item += 1
    }
    
    generateCardItems()
    update(selectedItem)
    localStorage.setItem("data", JSON.stringify(basket))
    // console.log(basket)

}

let decrement = (id) => {
    let selectedItem = id
    let search = basket.find((x)=>  x.id === selectedItem)

    if(search === undefined) return
    else if(search.item === 0) return
    else {
        search.item -= 1
    }
    
    update(selectedItem)
    basket = basket.filter((x)=> x.item !== 0)
    generateCardItems()
    localStorage.setItem("data", JSON.stringify(basket))
}


let update = (id) => {
    let search = basket.find((x)=> x.id === id)
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation()
    totAmount()
}

let removeItem = (id)=>{
    let selectedItem = id
    basket = basket.filter((x)=> x.id !== selectedItem)
    generateCardItems()
    totAmount()
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))


    // console.log(selectedItem)
}

let clearCart =()=>{
    basket = []
    generateCardItems()
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))


}

let totAmount = () =>{
    if(basket.length !== 0){
        let amount = basket.map((e)=>{
            let { item, id} = e
            let search = shopItemsData.find((y) => y.id == id) || []
            return item * search.price
        }).reduce((x,y)=> x + y, 0)
        // console.log(amount)
        label.innerHTML = `
            <h2>Total Bill is : $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onclick="clearCart()" class="removeAll">Clear Cart</button>

        `
    }
    else return
}

totAmount()