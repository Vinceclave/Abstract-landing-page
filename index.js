
let mobileSearchClose = document.querySelector(".mobile-search-xmark");
let search = document.querySelector(".fa-magnifying-glass");
let mobileSearch = document.querySelector(".mobile-search");
let mainNav = document.querySelector(".main-nav");
let button = document.querySelector(".tcon-menu--xcross");


button.addEventListener('click', function(){
  mainNav.classList.toggle('show_nav');

  button.classList.toggle("tcon-transform");
})

search.addEventListener('click', function(){
    mobileSearchClose.classList.toggle('mobile-xmark-rotate')
    mobileSearch.classList.toggle('mobile-search_show');
})




mobileSearchClose.addEventListener('click', function(){
    mobileSearch.classList.remove('mobile-search_show');
})


