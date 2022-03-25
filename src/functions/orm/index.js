const {openCollection, updateCollection} = require('./collection')

const ORM = {
    findAll: function({collection}) {
        const data = openCollection(collection)
        return JSON.parse(data)
    },
    findById: function({collection, id}) {
        const data = this.findAll({collection})
        return data.find(item => item.id === id)

    },
    find: function({collection, field, value}) {
        const data = this.findAll({collection})
        return data.find(item => item[field] === value)
    },
    update: function({collection, field, condition ,newData}) {
        let data = this.findAll({collection})
        const dataUpdated = data.map(item => item[field] === condition ? newData : item)
        return updateCollection(collection, dataUpdated)
    },
    create: function({collection, newData}) {
        let data = this.findAll({collection})
        data.push(newData)
        return updateCollection(collection, data)
    }
}



module.exports = ORM