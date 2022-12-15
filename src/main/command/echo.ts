module.exports = {
    data: {
        name: 'echo',
        description: '',
        version: '0.0.1',
        author: 'Groovy'
    },
    
    async Execute(args: string[]) {
        console.log(args.join(' '))
    }

}