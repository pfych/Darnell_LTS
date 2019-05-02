exports.yeahNah = function (msg) {
  if (Math.floor(Math.random() * 2) ) {
    msg.channel.send("Yeah")
  } else {
    msg.channel.send("Nah")
  }
}