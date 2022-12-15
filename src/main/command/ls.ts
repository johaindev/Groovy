module.exports = {
    data: {
        name: 'ls',
        description: '',
        version: '0.0.1',
        author: 'Groovy'
    },
    
    async Execute(_args: string[]) {

        const main = require('../../main')
        
        console.log(main.data.directory)
    }

}