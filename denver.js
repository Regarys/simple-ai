import readline from "readline-sync";
import fetch from "node-fetch";
import { getResponse } from './Function/response.js';
import { typeReply } from './Function/typeReply.js';

console.log("I am denver 0.1 (exit to quit)");
async function chatLoop() {
  const input = readline.question('You : ');
  const reply = await getResponse(input);
  if (reply === null){
    console.log("See You");
    return;
  }
  process.stdout.write("Bot : ");
  typeReply(reply, chatLoop);
}

chatLoop();
