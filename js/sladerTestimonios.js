let contentSladerBase = document.querySelector("#contentSladerBase")
let box = document.querySelectorAll('#box')


//let arrowNext = document.querySelector('#arrowNext')
//let arrowPrev = document.querySelector('#arrowPrev')

let UltimaPosition = box[ box.length - 1]
contentSladerBase.insertAdjacentElement("afterbegin",UltimaPosition)


document.addEventListener('click', (e) =>{
    //console.log(e.target)
    if(e.target.id === "arrowNext"){
        //console.log("le di a siguiente")
        let elementoFoco = document.querySelectorAll("#box")[0]
        contentSladerBase.style.marginLeft = "-200%"
        contentSladerBase.style.transition = "0.2s all"
        setTimeout(()=>{
            contentSladerBase.style.transition = "none"
            contentSladerBase.insertAdjacentElement("beforeend",elementoFoco)
            contentSladerBase.style.marginLeft = "-100%"
        },200)
    }else if(e.target.id === "arrowPrev"){
        //console.log("le di a derecha")
        let box = document.querySelectorAll("#box")
        let ultimoEle = box[box.length - 1]
        contentSladerBase.style.marginLeft = "0"
        contentSladerBase.style.transition = "0.2s all"
        setTimeout(()=>{
            contentSladerBase.style.transition = "none"
            contentSladerBase.insertAdjacentElement("afterbegin", ultimoEle)
            contentSladerBase.style.marginLeft = "-100%"
        },200)
    }
})




