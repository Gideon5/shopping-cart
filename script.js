let shop = document.getElementById('shop')

let shopItemsData = [{
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-1.jpg"
},
{
    id: "2",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-2.jpg"
},
{
    id: "3",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-3.jpg"
},
{
    id: "4",
    name: "Men's Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/img-4.jpg"
}]

let basket = []

/**
 * ! ES6 error function
 */
let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x 
        /**
         * ! destructuring
         **/
        return `
        <div id=product-id-${id} class="item">  
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-file-minus-fill"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-file-plus-fill"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }).join(""))
}

generateShop()

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
   

    // console.log(basket)
    update(selectedItem)

}

let decrement = (id) => {
    let selectedItem = id
    let search = basket.find((x)=>  x.id === selectedItem)

    if(search.item === 0) return
    else {
        search.item -= 1
    }
   

    // console.log(basket)
    update(selectedItem)

}

let update = (id) => {
    let search = basket.find((x)=> x.id === id)
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation()
}

let calculation =()=> {
    console.log("caluction func is running")
}