let menu = document.querySelector('.main_aside'),
    open = document.querySelector('.open');


open.onclick=()=>{
    if (menu.style.display == "block"){
        menu.style.display = 'none'
        open.textContent = "Развернуть меню"
    }
    else{
        menu.style.display = 'block'
        open.textContent = "Свернуть меню"
    }

}    
