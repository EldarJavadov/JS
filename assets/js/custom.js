let searchBtn = document.querySelector('.cursor-pointer')
let search = document.querySelector('#search')
let closeSearch = document.querySelector('#close-search')

/**
 * Show search bar
 */
searchBtn.onclick = function(){
    search.classList.toggle('d-none');
}

/**
 * Hide search bar
 */
closeSearch.onclick = function(){
    search.classList.add('d-none');
}




let add = document.querySelector('#add')
let listContainer = document.querySelector('#list')

add.onclick = function(){
    /**
     * Get input value
     */
    let inputValue = document.querySelector('#input').value

    if ( inputValue !== '' ) {
        /**
         * div
         */
        let div = document.createElement('div')
        div.classList.add('list-item')
        div.classList.add('mb-2')

        /**
         * p
         */
        let p = document.createElement('p')
        p.classList.add('m-0')
        p.innerText = inputValue
        div.appendChild(p)

        /**
         * button
         */
        let button = document.createElement('button')
        button.className = 'btn btn-danger remove-btn'
        button.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
        div.appendChild(button)

        /**
         * Append div to list
         */
        listContainer.appendChild(div)

        /**
         * Remove list item
         */
        let removeBtns = document.querySelectorAll('.remove-btn')
        for (let btn of removeBtns) {
            console.log(btn)
            btn.onclick = function(){
                this.parentElement.remove()
            }
        }
    }
    else{
        let alert = '<div class="alert alert-danger"><strong>Məlumat!</strong> Sahəni boş saxlamayın.</div>'
        listContainer.innerHTML = alert
    }

    /**
     * Remove alert
     */
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 1500);
}

 


/**
 * Rotate icon
 * Show/hide lang container
 */
let icon = document.querySelector('.lang-icon')
icon.onclick = function(){
    /**
     * Rotate icon
     */
    this.childNodes[1].classList.toggle('rotate')

    /**
     * Show/hide lang container
     */    
    let langContainer = document.querySelector('.selectric-items')
    langContainer.classList.toggle('show')
}
