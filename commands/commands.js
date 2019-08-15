module.exports = {
  commands: [
    {
      name: 'osu',
      req: [['can you grab me', 'osu', 'stats', 'for'], ['can you grab', 'osu', 'stats', 'for']],
      exec: require('./osu').getData
    },
    {
      name: 'help',
      req: [['can you', 'help'], ['how', 'do'], ['help']],
      exec: require('./help').help
    },
    {
      name: 'dance',
      req: [['this is', 'epic'], ['gamer', 'moment']],
      exec: require('./dance').dance
    },
    {
      name: 'invite',
      req: [['invite', 'link']],
      exec: require('./base').inv
    },
    {
      name: 'listening',
      req: [['favourite', 'album'], ['fav', 'album'], ['listening', 'to'], ['listening', 'too']],
      exec: require('./lastfm').getAlbums
    }
  ],
  dictionary: [
    {
      words: ["long", "far", "high", "low"],
      responses: ['Way off', 'Not too far', 'Kinda in the middle']
    },
    {
      words: ["big", "small", "large", "tiny"],
      responses: ['Pretty small tbh', 'Absolutely Massive', 'Atomically small']
    },
    {
      words: ["money", "cost", "charge", "paycheck", "pay check"],
      responses: ['Bruh I dont do math', 'Is that something I\'m too broke to understand?']
    },
    {
      words: ["the fuck", "what?"],
      responses: ["no u", "bruh sound effect #2"]
    }
  ]
}