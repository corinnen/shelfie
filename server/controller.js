
module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.get_inventory().then(response => {
            res.send(response)
        }).catch(err => {
            console.log('error fetching products', err)
            res.status(500).send(err)
        })
    },

    addProduct: (req, res) => {
        let db = req.app.get('db')
        db.create_inventory().then(response => {
            res.send(response)
        }).catch(err => {
            console.log('error', err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let{id} = req.params
        let {name, price, img} = req.body
        db.update_product([id, name, price, img]).then(response => {
            res.send(response)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.delete_product(id).then( response => {
            res.send(response)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

}