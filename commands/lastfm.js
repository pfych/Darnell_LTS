const fm = require('../private/private').fm

module.exports = {
  getAlbums: async function (msg) {
    fm.user.getTopAlbums({user: "Puffycheeses", limit: 5, period: '7day'}, function (err, track) {
      if (err) { throw err; }
      let num = Math.floor(Math.random() * 4)
      const embed = {
        // Key                      Value
        "title":                    track.album[num].name,
        "description":              `**Artist:** ${track.album[num].artist.name}\n**Track Play-count:** ${track.album[num].playcount}`,
        "url":                      track.album[num].url,
        "color":                    11011009,
        "footer": {
          "icon_url":               "https://www.iconsdb.com/icons/preview/red/lastfm-2-xxl.png",
          "text":                   "Data provided by lastfm"
        },
        "thumbnail": {
          "url":                    track.album[num].image[3]['#text']
        }
      }
      msg.channel.send('Recently I have been listening to', {embed})
    })
  }
}
