let productsOnStorage = JSON.parse(localStorage.getItem('products'))

function getItems(){
	let basket = JSON.parse(localStorage.getItem('products'))
	let totalPrice = 0
	let number = 0


	basket.forEach(item => {

		let currentPrice = (item.Price * item.Count).toFixed(2)
		totalPrice += parseInt(currentPrice)


		document.querySelector('#total').innerText = totalPrice.toFixed(2)
		document.querySelector('.table tbody').innerHTML +=
		`
		<tr>
            <td>${item.Id}</td>
            <td>
            	<img  width="100" src="${item.Image}">
            </td>
            <td>${item.Title}</td>
            <td>
            	<input type="number" onchange="updateProducts(this, '${item.Id}')" min=1 value="${item.Count}">
            </td>
            <td>${currentPrice} AZN</td>
            <td>
            	<button onclick="deleteProducts(${item.Id})" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
		`
	})
}



function deleteProducts(p){
    let products = JSON.parse(localStorage.getItem('products'))
    let indexId = products.findIndex(product => product.Id === p.toString())

	if ( indexId !== -1 ) {
		products.splice(indexId, 1)
	}else{
		console.log('There is no product with given id')
	}
    
    localStorage.setItem('products', JSON.stringify(products))

	let tbody = document.getElementsByTagName('tbody')[0];

	while (tbody.firstChild) {
	    tbody.removeChild(tbody.firstChild);
	}

    getItems()
}




function updateProducts(inputElement, productId) {
    let products = JSON.parse(localStorage.getItem('products'))
    let indexId = products.find(product => product.Id === productId)

	if ( indexId !== -1 ) {
		indexId.Count = parseInt(inputElement.value, 10)
		localStorage.setItem('products', JSON.stringify(products))

		let tbody = document.getElementsByTagName('tbody')[0];

		while (tbody.firstChild) {
		    tbody.removeChild(tbody.firstChild);
		}

		getItems()
	}else{
		console.log('There is no product with given id')
	}
}




getItems()



