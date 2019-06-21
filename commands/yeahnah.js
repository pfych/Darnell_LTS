const dictionary = require("./commands").dictionary

function getContext(msg) {
  let responses = ["Yeah", "Nah"];
  dictionary.forEach(item => {
    if(item.words.some(word => msg.text().includes(word))){
      responses = item.responses;
    }
  })
  return responses;
}

exports.yeahNah = (msg) => {
  let responses = getContext(msg)
  msg.channel.send(responses[Math.floor(Math.random()*responses.length)])
}

// Thanks for the help Kwright02
// https://github.com/Kwright02