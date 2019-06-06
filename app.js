// Import
const Discord = require('discord.js')
const debug = require('debug')('Darnell:Main')
const login = require('./private/private')
const pointer = require('./commands/pointer')


// Set
const client = new Discord.Client()
Object.prototype.text = function() {return this.content.toLowerCase()} // Dry up some repeats


// Run
client.on('message', async msg => {
  if(/(^yo darnell$)/.test(msg.text())) msg.channel.send("yo")
  if (/(^yo darnell)( *|, *|. *)([a-zA-Z0-9])/.test(msg.text())) {
    await pointer.check(msg)
  }

  // Check if any roles need to be assigned
  pointer.roles.check(msg)
})

client.on('ready', () => {
  debug(`Logged in as ${client.user.tag}!\nConnected to ${client.guilds.size} servers with ${client.users.size} users total`)
})

client.login(login.getKey())
  .catch(e => debug(e))