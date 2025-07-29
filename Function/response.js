const greetings = ["hello", "hi", "sup", "greetings"];
const animal = ["Cat", "Dog", "Snake", "Lion", "Chicken"];
import { getWeather } from "./weatherFetch.js";
import { mathBot } from './mathFunction.js';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export async function getResponse(message){
  const msg = message.toLowerCase().trim();
  const lowerMsg = message.toLowerCase();

  if (greetings.some(word => lowerMsg.includes(word)) && msg.includes("denver")){
    return "I am your first Ai sir 🤖";
  }

  if (msg.includes("animal") && msg.includes("do") && msg.includes("think")){
    return `I don't know but this kind of animal come in to my mind : ${animal[Math.floor(Math.random()* animal.length)]}`
  }

  if (greetings.some(word => lowerMsg.includes(word))) {
    return "Hi There ✋";
  }

  if (msg.includes('time') && (msg.includes('denver'))){
    return `its, ${new Date().toLocaleTimeString()} sir`;
  }

  if (msg === "exit"){
    return null;
  }

  if (msg.includes("math")){
    return mathBot();
  }

  if (msg.includes('time')){
    return `current time is: ${new Date().toLocaleTimeString()}`;
  }

  if (msg.includes('thanks') || msg.includes("thank")) {
    return "You're Welcome Sir"
  }

  if (msg.includes('how are you') || msg.includes('how are you denver')){
    return "I am fine as you see sir";
  }

  if (msg.includes('today') && msg.includes('what')){
    return `Today is ${weekday[new Date().getDay().toString()]}`;
  }

  if (msg.includes("weather")) {
    const words = msg.split(" ");
    const cityIndex = words.findIndex(word => word === "in");
    if (cityIndex !== -1 && words[cityIndex + 1]) {
      const city = words.slice(cityIndex + 1).join(" ");
      return getWeather(city); // Ini promise, nanti kita ubah penanganannya
    }
    return "Please specify a city, like 'weather in Jakarta'";
  }

  return "sorry, I don't understand that yet";
  // In the future this is the right momen i will teach the ai.
}
