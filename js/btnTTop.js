let subir = document.querySelector('#subir')
let btnTop = document.querySelector("#btnTop")

window.document.addEventListener('scroll', () =>{
    let positionScroll = document.documentElement.scrollTop;
    console.log(positionScroll)
    let positionElement = subir.offsetTop;
    console.log(positionElement)
    if(positionScroll >= positionElement + 100){
         console.log("cumplidos los 1000")  
         btnTop.classList.add("btnTop_JS")
    }else if(positionScroll <= positionElement + 400){
        console.log("que aparexca")
        btnTop.classList.remove("btnTop_JS")
        
    }
})

