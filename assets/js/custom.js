let searchBtn = document.querySelector('.cursor-pointer')
let search = document.querySelector('#search')
let closeSearch = document.querySelector('#close-search')

searchBtn.onclick = function(){
    search.classList.toggle('d-none');
}


closeSearch.onclick = function(){
    search.classList.add('d-none');
}