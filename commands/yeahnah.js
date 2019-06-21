let dictionary = [
    {
      words: ["long", "far", "high", "low"],
      context: "distance"
    },
    {
      words: ["big", "small"],
      context: "size"
    },
    {
      words: ["money", "cost", "charge", "paycheck", "pay check"],
      context: "money"
    }
]

function getContext(msg) {
  let context = "Uknown";
  dictionary.forEach(item => {
    if(item.words.some(word => msg.text().includes(word))){
      context = item.context;
    }
  })
  return context;
}

exports.yeahNah = (msg) => {
  switch(getContext(msg)) {
    case "size":
      (Math.floor(Math.random() * 2)) ? msg.channel.send('Pretty small tbh') : msg.channel.send('Absolutley massive')
      break;
    case "distance":
      (Math.floor(Math.random() * 2)) ? msg.channel.send('Not too far') : msg.channel.send('Way off')
      break;
    case "money":
      (Math.floor(Math.random() * 2)) ? msg.channel.send('Bruh I dont do math') : msg.channel.send('Bruh I am broke af')
      break;
    default:
      (Math.floor(Math.random() * 2)) ? msg.channel.send('Yeah') : msg.channel.send('Nah')
  }
}

