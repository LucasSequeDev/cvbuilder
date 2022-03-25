const fs = require('fs')
const path = require('path')

const BASE_PATH_DATA = path.join(__dirname, '../../data/')

const openCollection = (collection) => {
    const collectionPath = path.join(BASE_PATH_DATA, collection + '.json')
    return fs.readFileSync(collectionPath, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            throw err
        }
        return data
    })
}

const updateCollection = (collection, data) => {
    const collectionPath = path.join(BASE_PATH_DATA, collection + '.json')
    fs.writeFileSync(collectionPath, JSON.stringify(data,null,2), (err) => {
        if (err) {
            throw err
        }
    })
}

module.exports = {openCollection, updateCollection}