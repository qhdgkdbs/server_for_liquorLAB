const app = require('../../index')
const syncDB = require('./sync-db')

syncDB().then(_=>{
    console.log('Sync Database')
    app.listen(3000, ()=> {
        console.log("hello start")
    })
})

