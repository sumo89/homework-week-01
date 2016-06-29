//adjective, noun, verb, place, people
var adjective = ['active', 'big', 'complex', 'dim', 'elegant', 'filthy'];
var noun = ['oven', 'country', 'week', 'exam', 'movie', 'series', 'camera'];
var person = ['John', 'Fred', 'Cindy', 'Donald', 'Mark'];
var place = ['France', 'Turkey', 'Waitrose', 'Chariots', 'Browns', 'Islington', 'Scunthorpe'];
var verb = ['admire', 'boil', 'contain', 'dial', 'emit', 'floss', 'help'];

//randoms
var randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
var randomNoun = noun[Math.floor(Math.random() * noun.length)];
var randomPerson = person[Math.floor(Math.random() * person.length)];
var randomPlace = place[Math.floor(Math.random() * place.length)];
var randomVerb = verb[Math.floor(Math.random() * verb.length)];

//story
var story = 'Once upon a time there was a [adjective] [noun]. It was really [adjective]. It liked to [verb] all day. One day, it went to [place] to meet [person]. To get there, it rode in a [vehicle], but on the way there, the [vehicle] crashed.  It had to walk the rest of the way.';

console.log(story);
