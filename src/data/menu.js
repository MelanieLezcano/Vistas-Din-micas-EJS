let menu = [
    {   
        id:1,
        titulo:'Carpaccio fresco',
        imagen:'Carpaccio-de-salmon.jpg',
        descripcion:'Entrada Carpaccio de salmón con cítricos',
        precio:'65.50',
        descripcionDetallada: 'Plato Tipico',
    },
    {
        id:2,
        titulo:'Risotto de berenjena',
        imagen:'Risotto-berenjena-queso-cabra.jpg',
        descripcion:'Risotto de berenjena y queso de cabra',
        precio:'47.00',
        descripcionDetallada: 'Plato Tipico',
    },
    {
        id:3,
        titulo:'Mousse de arroz',
        imagen:'Mousse-de-arroz-con-leche.jpg',
        descripcion:'Mousse de arroz con leche y aroma de azahar',
        precio:'27.50',
        descripcionDetallada: 'Plato Tipico',
    },
    {
        id:4,
        titulo:'Espárragos blancos',
        imagen:'esparragos.png',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio:'37.50',
        descripcionDetallada: 'Plato Tipico',
    },
]

let fs = require('fs')
let string = JSON.stringify(menu,null,4)
fs.writeFileSync('./menu.json',string,'utf-8')