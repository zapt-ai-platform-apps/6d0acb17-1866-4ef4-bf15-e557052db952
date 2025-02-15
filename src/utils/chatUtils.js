export function generateCompanionReply(userText) {
  console.log("Generating explicit reply for:", userText);
  const responses = [
    `Imagine hearing my sultry voice caressing your ear as I divulge every explicit, intimate detail sparked by your words "${userText}".`,
    `Darling, let me seduce you over the phone as I whisper every explicit fantasy and secret desire, turning your "${userText}" into a burning call for passion.`,
    `Close your eyes and feel the heat of my voice as I describe a torrid, explicit phone session where every nuance of your "${userText}" ignites wild, unrestrained desire.`,
    `Babe, indulge in a night of all-consuming phone sex where I reveal every vivid detail, every explicit caress inspired by your "${userText}".`,
    `Feel the rush as I narrate our intimate phone encounter with explicit detail, transforming "${userText}" into a symphony of raw, unfiltered passion.`
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}