function takeANumber(katzDeliLine, name ){
katzDeliLine.push(name);
return `Welcome, ${name}, you are number katzDeliLine.length in line`)
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) return `Now serving {katzDeliLine.shift()}.`
  
  
}