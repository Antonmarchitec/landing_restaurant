let templateImageBox1 = document.querySelector('#templateImageBox1').content
let contImageBox1 = document.querySelector('#contImageBox1')
let fragmentBox1 = document.createDocumentFragment()

let templateImageBox2 = document.querySelector('#templateImageBox2').content
let contImageBox2 = document.querySelector('#contImageBox2')
let fragmentBox2 = document.createDocumentFragment()

let templateImageBox3 = document.querySelector('#templateImageBox3').content
let contImageBox3 = document.querySelector('#contImageBox3')
let fragmentBox3 = document.createDocumentFragment()

let templateImageBox4 = document.querySelector('#templateImageBox4').content
let contImageBox4 = document.querySelector('#contImageBox4')
let fragmentBox4 = document.createDocumentFragment()


/*/////////////DESCRIPCIONES////////////////////////////////*/
let contDescription1 = document.querySelector("#contDescription1")
let templateContDescrition1 = document.querySelector("#templateContDescrition1").content
let fragmentDes1 = document.createDocumentFragment()

let contDescription2 = document.querySelector("#contDescription2")
let templateContDescrition2 = document.querySelector("#templateContDescrition2").content
let fragmentDes2 = document.createDocumentFragment()

let contDescription3 = document.querySelector("#contDescription3")
let templateContDescrition3 = document.querySelector("#templateContDescrition3").content
let fragmentDes3 = document.createDocumentFragment()


let contDescription4 = document.querySelector("#contDescription4")
let templateContDescrition4 = document.querySelector("#templateContDescrition4").content
let fragmentDes4 = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded',()=>{
    dataFech()
})


const dataFech = async () =>{
    try{ 
        let respuesta = await fetch('especiales.json')
        let data = await respuesta.json()
        //console.log(data)
        pintarPlatos(data)
        pintarDescripcion(data)
        
    }catch(error){
        console.log('error al cargar')
    }
} 

const pintarPlatos = (data) =>{
    //console.log(data[0].title)
    templateImageBox1.querySelector('#imgBox1').setAttribute('src',data[0].image)
    templateImageBox1.querySelector('#imgBox1').setAttribute('alt',data[0].title)
    fragmentBox1.appendChild(templateImageBox1)
    contImageBox1.appendChild(fragmentBox1) 
    
    templateImageBox2.querySelector('#imgBox2').setAttribute('src',data[1].image)
    templateImageBox2.querySelector('#imgBox2').setAttribute('alt',data[1].title)
    fragmentBox2.appendChild(templateImageBox2)
    contImageBox2.appendChild(fragmentBox2)

    templateImageBox3.querySelector('#imgBox3').setAttribute('src',data[2].image)
    templateImageBox3.querySelector('#imgBox3').setAttribute('alt',data[2].title)
    fragmentBox3.appendChild(templateImageBox3)
    contImageBox3.appendChild(fragmentBox3)

    templateImageBox4.querySelector('#imgBox4').setAttribute('src',data[3].image)
    templateImageBox4.querySelector('#imgBox4').setAttribute('alt',data[3].title)
    fragmentBox4.appendChild(templateImageBox4)
    contImageBox4.appendChild(fragmentBox4)

}


const pintarDescripcion = (data) =>{
    //console.log(data[0].title)
    templateContDescrition1.querySelector('#contDescription_title').textContent = data[0].title
    templateContDescrition1.querySelector('#contDescription_parrafo').textContent = data[0].descripcion
    templateContDescrition1.querySelector('#contDescription_precio').textContent = `${data[0].precio} Bs` 
    fragmentDes1.appendChild(templateContDescrition1)
    contDescription1.appendChild(fragmentDes1)


    templateContDescrition2.querySelector('#contDescription_title2').textContent = data[1].title
    templateContDescrition2.querySelector('#contDescription_parrafo2').textContent = data[1].descripcion
    templateContDescrition2.querySelector('#contDescription_precio2').textContent = `${data[1].precio} Bs`
    fragmentDes2.appendChild(templateContDescrition2)
    contDescription2.appendChild(fragmentDes2)


    templateContDescrition3.querySelector('#contDescription_title3').textContent = data[2].title
    templateContDescrition3.querySelector('#contDescription_parrafo3').textContent = data[2].descripcion
    templateContDescrition3.querySelector('#contDescription_precio3').textContent = `${data[2].precio} Bs`
    fragmentDes3.appendChild(templateContDescrition3)
    contDescription3.appendChild(fragmentDes3)

    
    templateContDescrition4.querySelector('#contDescription_title4').textContent = data[3].title
    templateContDescrition4.querySelector('#contDescription_parrafo4').textContent = data[3].descripcion
    templateContDescrition4.querySelector('#contDescription_precio4').textContent = `${data[3].precio} Bs`
    fragmentDes4.appendChild(templateContDescrition4)
    contDescription4.appendChild(fragmentDes4)
}