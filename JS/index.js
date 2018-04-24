
function getRandomLocation() {
  var locations = [
    'Junk Junction',
    'Haunted Hills',
    'Snobby Shores',
    'Greasy Grove',
    'Shifty Shafts',
    'Flush Factory',
    'Fatal Fields',
    'Tilted Towers',
    'Pleasant Park',
    'Loot Lake',
    'Anarchy Acres',
    'Tomato Town',
    'Wailing Woods',
    'Lonely Lodge',
    'Moisty Mire',
    'Dusty Depot',
    'Lucky Landing',
  ]
  var random=Math.floor((Math.random() * locations.length));
  var randomLocation=locations[random];
  console.log(randomLocation);
}
