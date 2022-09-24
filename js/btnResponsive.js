let gridTablero = document.querySelector('#gridTablero')
//let btnResponsiveHeader = document.querySelector('#btnResponsiveHeader')

window.document.addEventListener('click', e =>{
    if(e.target.id === 'btnResponsiveHeader'){
        gridTablero.classList.add('GridTablero_JS')
    }else if(e.target.id === 'btnResponsive'){
        gridTablero.classList.remove('GridTablero_JS')
    }
})