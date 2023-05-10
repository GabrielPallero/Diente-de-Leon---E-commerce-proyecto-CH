
const productos = [
   

    {id:'1',name:'Piluso',price:1000,category:'gorros',img:'https://raw.githubusercontent.com/GabrielPallero/Diente-de-Leon---E-commerce-proyecto-CH/master/src/components/imagenes/IMG-20230424-WA0020.jpg',stock:2,description:''},
    {id:'2',name:'Mitones de Crochet',price:1000,category:'tejidos',img:'https://raw.githubusercontent.com/GabrielPallero/Diente-de-Leon---E-commerce-proyecto-CH/master/src/components/imagenes/IMG-20230424-WA0021.jpg',stock:3,description:'Crochet'},
    {id:'3',name:'Polainas',price:900,category:'tejidos',img:'https://raw.githubusercontent.com/GabrielPallero/Diente-de-Leon---E-commerce-proyecto-CH/master/src/components/imagenes/IMG-20230424-WA0016.jpg',stock:4,description:'a dos agujas'},
    {id:'4',name:'Bufanda en tricot',price:1500,category:'bufandas',img:'https://raw.githubusercontent.com/GabrielPallero/Diente-de-Leon---E-commerce-proyecto-CH/master/src/components/imagenes/IMG-20230424-WA0017.jpg',stock:3,description:'a dos agujas'},
]
export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(productos)},500)})
}

export const getProductosById = (itemId) =>{
    return new Promise ((resolve,)=>{
        setTimeout(() => {
            resolve(productos.map(prod=> prod.id === itemId))
        },2000)

    },[])
}
export const getProductosByCategory = (categoryId) =>{  
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos.filter(prod=> prod.category === categoryId))
        
        },2000)

    },)
}