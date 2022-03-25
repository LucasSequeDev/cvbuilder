const controller ={
    index:(req, res) => {
        res.render('index', { msg: "Lienzo en blanco"})
    },
}

module.exports = controller;