const productos = [
   
    {id:'1',name:'Bufanda y mitones',price:1500,category:'tejidos',img:'https://onedrive.live.com/?cid=00C423696F741BDD&id=C423696F741BDD%2163661&parId=C423696F741BDD%2163655&o=OneUp',stock:2,description:''}, 
    {id:'2',name:'Piluso',price:1000,category:'tejidos',img:'https://drive.google.com/file/d/1qSEjavMwYhIhI02-DsWQFlOOxN4-lwzE/view',stock:2,description:''},
    {id:'3',name:'Mitones de Crochet',price:1000,category:'tejidos',img:'https://drive.google.com/file/d/1qWxcCsd-UuyES_VJu2GdGdWahmrGrw1J/view',stock:1,description:'Crochet'},
    {id:'4',name:'Polainas',price:900,category:'tejidos',img:'https://drive.google.com/file/d/1qfIJgEGdS8_lbV7wn7q0muJU9bYgFmwA/view',stock:1,description:'a dos agujas'},
    {id:'5',name:'Bufanda en tricot',price:1500,category:'tejidos',img:'https://drive.google.com/file/d/1qcBAZcNdoM4QJBI3IUytdj9jwWuB7y07/view',stock:1,description:'a dos agujas'},
]
export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(productos)},500)})
}

export const getProductosDetalle = (productoId) =>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos.find(prod=> prod.id === productoId))
        },500)

    })
}