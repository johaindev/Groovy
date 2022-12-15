module.exports = async function(cmd: string) {

    const command: string = cmd.split(' ')[0]
    const args: string[] = cmd.split(' ').slice(1)

    try {
        require(`../../command/${command}.ts`).Execute(args)
    } catch (FileNotFoundException) {
        console.log(`Groovy: ${command}: Command not found.`)
    }

    console.log()
    require('../commandLine')()

}