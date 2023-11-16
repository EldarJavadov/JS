if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]))
}

let container = document.getElementById('productContainer')
let cats = document.getElementById('cats')
let searchInput = document.getElementById('searchInput')
let collectProducts = []




/**
 * Fetch all products
 * */
async function fetchAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    showProducts(data)
    collectProducts.push(data)

    document.getElementById('searchInput').addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase()
        const filteredProducts = collectProducts[0].filter(product => product.title.toLowerCase().includes(searchTerm))

        showProducts(filteredProducts)
    })

    addCard()
}
fetchAllProducts().then(() => addCard())







/**
 * Fetch all categories and show in navbar
 * */
async function fetchCats() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()

        cats.innerHTML = ''

        data.forEach(category => {
            cats.innerHTML += `
                            <a class="text-white text-decoration-none text-capitalize me-3 categories" data-cat="${category}" href="#">${category}</a>
                            `
        })
    } catch (error) {
        console.log(error)
    }
}
fetchCats()




/**
 * When click on custom category, fetch products by clicked category name
 * */
fetchCats().then(function(){
    let navCats = document.querySelectorAll('.categories')   
    

    for (navCat of navCats) {
        navCat.onclick = function (e) {
            e.preventDefault()
            collectProducts = []

            let category = this.dataset.cat
            fetchProductsByCategory(category)
        }
    }     
})





/**
 * Fetch products by category name
 * */
async function fetchProductsByCategory(category) {

    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()

    container.innerHTML = ''
    collectProducts.push(data)

    showProducts(data)
}




/**
 * Show products
 * */
function showProducts(products) {
    container.innerHTML = ''

    products.forEach(product => {
        container.innerHTML += `
            <div class="col-lg-3 col-6 gy-3">
                <div class="item">
                    <div id="${product.id}" class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title text-primary text-center">${product.category}</h5>
                            <h5 class="card-title">${product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h5>
                            <p class="card-text"><span>${product.price}</span> AZN</p>
                            <a href="#" class="btn btn-primary w-100">Add to Card</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}








/**
 * Add product to basket
 * */
function addCard() {
    let buttons = document.querySelectorAll('.card a')

    for ( btn of buttons){
        btn.onclick = function(e){
            e.preventDefault()

            let basket = JSON.parse(localStorage.getItem('products'))
            let id = this.parentElement.parentElement.id
            let img = this.parentElement.previousElementSibling.src
            let title = this.parentElement.children[0].innerText
            let price = this.previousElementSibling.children[0].innerText


            let existProduct = basket.find(item => item.Id === id)
            if (existProduct === undefined) {
                basket.push({
                    Id: id,
                    Image: img,
                    Title: title,
                    Price: price,
                    Count: 1
                })            
            }else{
                existProduct.Count += 1
            }


            localStorage.setItem('products', JSON.stringify(basket))
            showCount()
        }
    }    
}

function showCount() {
    let basket = JSON.parse(localStorage.getItem('products'))
    document.getElementById('count').innerText = basket.length
}


showCount()