if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]))
}


let buttons = document.querySelectorAll('.card a')

for ( btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
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


function showCount() {
    let basket = JSON.parse(localStorage.getItem('products'))
    document.getElementById('count').innerText = basket.length
}


showCount()