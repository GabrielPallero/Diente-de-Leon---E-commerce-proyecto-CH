const productos = [
    {id: '1',name:'Bufanda',price:4000,category:'tejidos', img:'https://img.freepik.com/foto-gratis/bufanda-roja-invierno-aislada-sobre-fondo-blanco_1101-2407.jpg?w=360',stock: 2,description: 'bufanda hecha a crochet'},
    {id: '2',name:'Pulover',price: 15000,category:'tejidos', img:'https://http2.mlstatic.com/D_NQ_NP_983848-MLA50333766890_062022-O.jpg',stock:5,description: 'Pulover hecho a mano'},
    {id: '3',name:'Gorro Lana',price: 2000,category:'tejidos', img:'https://amjeans.com.ar/wp-content/uploads/2022/04/gorro-pompon-1.jpg',stock:3,description: 'gorro tejido a crochet'},
]
export const getProductos = () => {
    return new Promise ((resolve) => { 
        setTimeout(()=>{
            resolve(productos)},500)})
}