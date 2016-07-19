//adjective, noun, verb, place, person
var adjective = ['active', 'big', 'complex', 'dim', 'elegant', 'filthy'];
var noun = ['oven', 'country', 'week', 'exam', 'movie', 'series', 'camera'];
var person = ['John', 'Fred', 'Cindy', 'Donald', 'Mark'];
var place = ['France', 'Turkey', 'Waitrose', 'Chariots', 'Browns', 'Islington', 'Scunthorpe'];
var verb = ['admire', 'boil', 'contain', 'dial', 'emit', 'floss', 'help'];
var vehicle = ['car', 'bike', 'tricycle', 'train', 'pogo stick'];

//randoms
var randomAdjective 	= adjective[Math.floor(Math.random() 	* adjective.length)];
var randomNoun 			= noun[Math.floor(Math.random() 		* noun.length)];
var randomPerson 		= person[Math.floor(Math.random() 		* person.length)];
var randomPlace 		= place[Math.floor(Math.random() 		* place.length)];
var randomVerb 			= verb[Math.floor(Math.random() 		* verb.length)];
var randomVehicle 		= vehicle[Math.floor(Math.random() 		* vehicle.length)];

//story
var story = 'Once upon a time there was a ' + randomAdjective + ' ' + randomNoun + '. It was really ' + randomAdjective + '. It liked to ' + randomVerb + ' all day. One day, it went to ' + randomPlace + ' to meet ' + randomPerson + '. To get there, it rode in a ' + randomVehicle + ', but on the way there, the ' + randomVehicle + ' crashed. It had to walk the rest of the way.';

console.log(story);