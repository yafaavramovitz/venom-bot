const venom = require('venom-bot');
const axios = require('axios');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onAnyMessage(async (message) => {
    if (message.isGroupMsg && (message.body.includes('הצטרף') || message.body.includes('הצטרפה'))) {
      await axios.post('https://hook.eu2.make.com/oxt2jpxykyl4ibd7pm9xwo0xa2hrk4dw', {
        from: message.sender.id,
        body: message.body,
        groupId: message.chatId,
      });
    }
  });
}
