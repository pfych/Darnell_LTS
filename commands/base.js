const request = require('request-promise')

module.exports = {
  makeRequest: async (target, form) => {
    let options = {
      url: target,
      method: 'POST',
      headers: { 'User-Agent': 'Super Agent/0.0.1', 'Content-Type': 'application/x-www-form-urlencoded' },
      form: form,
    }
    let returnVal = await request(options)
    return JSON.parse(returnVal)
  },
  contains: (msg, term) => {
    return msg.content.toLowerCase().includes(term)
  },
  formatNum: (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  inv: (msg) => {
    msg.channel.send('You better take care of me man\n<https://discordapp.com/oauth2/authorize?client_id=444754530685419520&permissions=0&scope=bot>\n\nTalk with my dad here: https://discord.gg/9AQ9SEq')
  }
}