[
    {
        "id": 1,
        "name": "Zapatilla yeezy 350",
        "price": 320.000,
        category: "sneakers",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw66011cbb/products/ADIF3219/ADIF3219-1.JPG"
    },
    {
        "id": 2,
        "name": "Zapatilla yeezy 700",
        "price": 320.000,
        category: "sneakers",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw169589e7/products/ADHQ6979/ADHQ6979-1.JPG"
    },
    {
        "id": 3,
        "name": "Zapatilla Nike Air Max TN",
        "price": 300.000,
        category: "sneakers",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw798d787c/products/NIDM0032-008/NIDM0032-008-1.JPG"
    },
    {
        "id": 4,
        "name": "Pantalon True Religion",
        "price": 210.000,
        category: "under",
        "img": "https://www.marcados.mx/cdn/shop/products/image_f500d367-003b-46a2-be5c-4d534fad6d8a.jpg?v=1679864910&width=500"
    },
    {
        "id": 5,
        "name": "Campera North Face x GUCCI",
        "price": 200.000,
        category: "top",
        "img": "https://st-cdn.tsum.com/sig/18df9c15e098614041df65350b87cd62/width/434/i/fa/e5/8b/ea/fae58bea-cbff-3f4a-8520-66deeb382038.jpg"
    },
    {
        "id": 6,
        "name": "Bathing Ape Baby Milo shoulder bag",
        "price": 190.000,
        category: "accesorios",
        "img": "https://i.ebayimg.com/images/g/uwoAAOSwrVVjnSoS/s-l400.jpg"
    }
]
//Obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //Simulacion de retraso de red
        setTimeout( ()=>{
            resolve(products)
        }, 2000) 
    })
}

export { getProducts }