let menu = require('../data/menu.json')
let about = require('../data/about.json')

module.exports = {
    home:(req, res) => {
        return res.render('index',{
            menu,
            about
        })
    },
    detalle:(req, res) => {
       let id = +req.params.id

       let plato = menu.find(plato => plato.id === id)
 
       return res.render('detalleMenu',{
            plato
       })
    }
}