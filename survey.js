const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?  Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (food) => {
        rl.question("What's your favourite thing to eat for that meal? ", (moreFood) => {
          rl.question("Which sport is your absolute favourite ", (sport) => {
            rl.question("What's your superpower? In a few words, tell us what you are amazing at! ", (hero) => {
              console.log(`My name is ${name}.  An activity that I love to do is ${activity}.  While doing this, I like to listen to ${music}.  My favourite meal is ${food}. My favourite thing to eat during ${food} is ${moreFood}. My favourite sport is ${sport}.  My superpower is ${hero}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
