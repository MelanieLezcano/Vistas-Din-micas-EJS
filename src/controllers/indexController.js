let menu = [
    {   
        id:1,
        titulo:'Carpaccio fresco',
        descripcion:'Entrada Carpaccio de salmón con cítricos',
        precio:'65.50',
    },
    {
        id:2,
        titulo:'Risotto de berenjena',
        descripcion:'Risotto de berenjena y queso de cabra',
        precio:'47.00',
    },
    {
        id:3,
        titulo:'Mousse de arroz',
        descripcion:'Mousse de arroz con leche y aroma de azahar',
        precio:'27.50',
    },
    {
        id:4,
        titulo:'Espárragos blancos',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio:'37.50',
    },
]

module.exports = {
    home:(req, res) => {
        return res.render('index',{
            menu
        })
    },
    menu:(req, res) => {
        return res.render('detalleMenu')
    },
    detalle:(req, res) => {
        return res.render('detalleMenu')
    }
}