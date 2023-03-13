const emoji = require('node-emoji');

// console.log(process.argv[2]);

if (process.argv[2] === undefined) {
  console.log(emoji.random().emoji);
} else if (emoji.hasEmoji(process.argv[2])) {
  console.log(emoji.get(process.argv[2]));
} else {
  console.log('emoji not found');
}
