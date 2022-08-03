function playMe(element, emotion) {
  element.classList.add('active');
  let quote = new Audio('voicelines/mp3/irenicus_'+emotion+'.mp3');
  quote.play();
  quote.onended = function () {
    element.classList.remove('active');
  }
}

var quotes = [
  'threaten',
  'thankyou',
  'laugh',
  'no',
  'battlecry1',
  'battlecry3',
  'bored',
  'cannotdo',
  'cheer',
  'death',
  'enemies',
  'neardeath',
  'lookhere',
  'guardme',
  'flee',
  'poisoned'
];
var names = [
  'Angry',
  'As predicted',
  'lol',
  'Missplay',
  'Attack Me?',
  'Die!',
  'Forgotten',
  'Hurry Up',
  'Good Play',
  'Defeat',
  'Interrupted',
  'you will all suffer',
  'WTF?',
  'Thanks for the help',
  'Stop Talking',
  'Who dares attack me?'
];

var index = 0;
quotes.forEach(element => {
  mainCont = document.getElementById('main-cont');
  let buttonCont = document.createElement('div');
  let button = document.createElement('div');
  let label = document.createElement('p');
  let text = document.createTextNode(names[index]);

  buttonCont.setAttribute('class', 'button-cont');
  button.setAttribute('onclick', 'playMe(this,"'+element+'")')
  button.setAttribute('class', 'button');
  label.appendChild(text);
  buttonCont.appendChild(button);
  buttonCont.appendChild(label)
  mainCont.appendChild(buttonCont);
  index++;
});

