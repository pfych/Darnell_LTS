const yeahNah = require('./yeahnah').yeahNah
const commands = require('./commands').commands
const debug = require('debug')('Darnell:Pointer')

let found

module.exports = {
  check: async function (msg) {
    found = false
    commands.forEach(item => {
      if (found) return
      item.req.forEach(set => {
        if (found) return
        if (set.every(com => msg.text().includes(com))) {
          item.exec(msg)
          debug(`${item.name} executed by ${msg.author.username}`)
          found = true
        }
      })
    })
    if (!found) yeahNah(msg)
  }
}