import * as readline from 'readline'
const os = require('os')
const Colors = require('../util/color')

const commandHandler = require('./handler/commandHandler')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

module.exports = async function() {
    console.log(`${Colors.Foreground.Green}${os.userInfo().username}@${os.hostname()} ${Colors.Foreground.Magenta}GROOVY ${Colors.Foreground.Yellow}~`)

    rl.question(`${Colors.Reset}$ `, async (command) => {
        commandHandler(command)
    })
}