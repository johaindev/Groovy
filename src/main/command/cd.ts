const fs = require('fs')

module.exports = {
    data: {
        name: 'cd',
        description: '',
        version: '0.0.1',
        author: 'Groovy'
    },
    
    async Execute(args: string[]) {

        const main = require('../../main')
        
        const argument = args.slice(0).toString()

        const olddir = main.data.directoy
        const olddirarray: string[] = olddir.split('/', 1)

        switch (argument) {
            case '..': {


                console.log('out')
                //fs.existsSync(``)
                console.log(olddirarray.pop())
                break
            }
            default: {
                try {
                    fs.existsSync(`${olddir}\\${argument}`)
                    main.data.directory = `${olddir}\\${argument}`
                    console.log(`${main.data.directory}`)
                } catch (FileNotFoundException) {
                    console.log(`Groovy: ${argument}: Directory not found.`)
                }
                break
            }
        }
    }

}