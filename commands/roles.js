let details = require("../private/private").details

module.exports = {
  check: async function (msg) {
    if(msg.channel.id === details.servers.nue.bot && msg.author.id === details.bots.mee6) { await nue(msg) } // Nue's Server
  }
}

async function nue (msg) {
  let player = await msg.guild.fetchMember(msg.content.split("GG ")[1].split(",")[0].replace(/\D/g,''))
  let level = msg.content.split("level ")[1].split("!")[0]
  if (level >= 10 && level < 20) {
    await player.removeRoles(details.servers.nue.roles)
    await player.addRole(details.servers.nue.roles[0])
  } else if (level >= 20 && level < 30) {
    await player.removeRoles(details.servers.nue.roles)
    await player.addRole(details.servers.nue.roles[1])
  } else if (level >= 30 && level < 40) {
    await player.removeRoles(details.servers.nue.roles)
    await player.addRole(details.servers.nue.roles[2])
  }
}