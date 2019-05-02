const data = [
  {
    name: 'osu',
    description: 'Grab your OSU stats',
    EBNF: "'yo darnell can you grab me' 'osu'? GAMEMODE 'stats' 'for' USERNAME",
    EBNFImg: `https://i.imgur.com/xo7dH76.png`,
  },
  {
    name: 'help',
    description: 'How complex do you think it is?',
    EBNF: "'yo darnell' '*' ( 'can you' '*' 'help' | 'how' '*' 'do' ) '*' COMMAND",
    EBNFImg: `https://i.imgur.com/9mX6LZX.png`,
  },
  {
    name: 'dance',
    description: 'Reserved for epic gamer moments',
    EBNF: "'yo darnell' '*' 'this'? '*' ( 'epic' | 'gamer moment' ) '*'",
    EBNFImg: `https://i.imgur.com/9UuaKxa.png`
  },
  {
    name: 'thing',
    description: 'I can do osu stuff and dance right now',
    EBNF: 'Why would this catch all have an EBNF diagram?',
    EBNFImg: ''
  },
  {
    name: 'invite',
    description: 'Bruh literally just ask, its not hard',
    EBNF: '0iq?',
    EBNFImg: ''
  }
]

module.exports = {
  help: async function (msg) {
    data.forEach(item => {
      if (msg.text().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace('can you help', '').split(" ").includes(item.name)) {
        msg.channel.send(`**${item.name.toUpperCase()}**\n*${item.description}*`, {
          file: `${item.EBNFImg}` // Or replace with FileOptions object
        })
        return true
      }
    })
  }
}