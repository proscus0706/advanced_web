findMessageByValue = (val) => {
  for(let msg of messages.values()){
      if(msg === val) return msg;
  }
};

messagesToArray = () => { return Array.from(messages.values())};