const ORM = require('../functions/orm')
const { validationResult } = require('express-validator')

const controller ={
    renderCV:(req, res) => {
        const id = req.params.id
        const data = ORM.findAll( {collection: 'cv'} )
        const user = data.filter( item => item.id === id)
        
        if( user.length === 0 ) {
            return res.render('404')
        }
        
        return res.render('cv', user[0] )
    },
    login: (req, res) => {
        res.render('login')
    },
    auth: (req, res) => {
        const resultado = validationResult(req)
        const errors = resultado.mapped()
        res.render('login', { errors })
    }
}

module.exports = controller;