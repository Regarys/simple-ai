export function typeReply(reply, callback){
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(reply[i]);
    i++;
    if (i >= reply.length){
      clearInterval(interval);
      process.stdout.write('\n');
      if (callback) callback();
    }
  }, 50);
}
