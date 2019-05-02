module.exports = {
  commands: [
    {
      name: 'osu',
      req: [['can you grab me', 'osu', 'stats', 'for']],
      exec: require('./osu').getData
    },
    {
      name: 'help',
      req: [['can you', 'help'], ['how', 'do']],
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
  ]
}