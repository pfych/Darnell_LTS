// Import
const Discord = require('discord.js')
const debug = require('debug')('Darnell:Main')
const login = require('./private/private')
const pointer = require('./commands/pointer')


// Set
const client = new Discord.Client()
Object.prototype.text = function() {return this.content.toLowerCase()} // Dry up some repeats
let roles = ["584350364334292994", "584350519577935873", "584350659349053440"]

// Run
client.on('message', async msg => {
  if(/(^yo darnell$)/.test(msg.text())) msg.channel.send("yo")
  if (/(^yo darnell)( *|, *|. *)([a-zA-Z0-9])/.test(msg.text())) {
    await pointer.check(msg)
  }

  // This here will be moved to its own function!
  if(msg.channel.id === "582156871905968138" && msg.author.id === "159985870458322944") {
    let player = await msg.guild.fetchMember(msg.content.split("GG ")[1].split(",")[0].replace(/\D/g,''))
    let level = msg.content.split("level ")[1].split("!")[0]
    if (level >= 10 && level < 20) {
      console.log("level 10")
      await player.removeRoles(roles)
      await player.addRole("584350364334292994")
    } else if (level >= 20 && level < 30) {
      await player.removeRoles(roles)
      await player.addRole("584350519577935873")
    } else if (level >= 30 && level < 40) {
      await player.removeRoles(roles)
      await player.addRole("584350659349053440")
    }
  }
})

client.on('ready', () => {
  debug(`Logged in as ${client.user.tag}!\nConnected to ${client.guilds.size} servers with ${client.users.size} users total`)
})

client.login(login.getKey())
  .catch(e => debug(e))