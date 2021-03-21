//Collaborated with Shawn for wk9c
//didn't collaborate for wk9d or wk9E

//wk9c Stuff
//This was the first part before the bonus
// This one was easy after the last assignment.
// created an array with the different tweets as strings for items,
// defined the array length
//ran the 'for' loop to print all of the tweets
// var tweet = [
//   `Yea your booty is nice but how thicc is your love for the environment.`,
//   `My daughter's only 6 months old and already drawing. I'd hang it on the fridge but honestly, it's absolute garbage.`,
//   `Hey guys, wanna feel old? I'm 40. You're welcome.`,
//   `I like to think of myself less like an 'adult' and more like a 'former fetus'.`,
//   `Is there an Uber eats that gets you the food but also feeds it to you and asks you about your day?`,
//   `@gerardway when you step on a scale does it tell you how much Gerard weighs please respond`,
//   `Every once in a while if I really need one, I ask my dog to give me a shoulder massage, and she never does`,
//   `U a software update? because not now`,
//   `2020 is what 2012 tried so hard to be`,
//   `My closet is like 16 shirts I plan to fit into again and 1 shirt I wear every day`,
// ];
// tweetsLength = tweet.length;
// for (var counter = 0; counter < tweetsLength; counter = counter + 1) {
//   console.log(tweet[counter]);
// }

// (WK9C) created this array with the objects (which are inside of {}) according to your PPTs
//(WK9C)keys on left of : and values on right of : within {}
var completeTweets = [
  {
    tweet: `Yea your booty is nice but how thicc is your love for the environment.`,
    username: `@BillNye`,
    createdAt: `10-06-2017`,
    age: 62,
  },
  {
    tweet: `My daughter's only 6 months old and already drawing. I'd hang it on the fridge but honestly, it's absolute garbage.`,
    username: `@RyanReynolds`,
    createdAt: `12-06-2017`,
    age: 44,
  },
  {
    tweet: `Hey guys, wanna feel old? I'm 40. You're welcome.`,
    username: `@MacaulayCulkin`,
    createdAt: `08-26-2020`,
    age: 40,
  },
  {
    tweet: `I like to think of myself less like an 'adult' and more like a 'former fetus'.`,
    username: `@AnnaKendrick`,
    createdAt: `12-22-2018`,
    age: 24,
  },
  {
    tweet: `Is there an Uber eats that gets you the food but also feeds it to you and asks you about your day?`,
    username: `@Adamripp`,
    createdAt: `03-18-2018`,
    age: 16,
  },
  {
    tweet: `@gerardway when you step on a scale does it tell you how much Gerard weighs please respond`,
    username: `@smosh`,
    createdAt: `10-05-2016`,
    age: 30,
  },
  {
    tweet: `Every once in a while if I really need one, I ask my dog to give me a shoulder massage, and she never does`,
    username: `@SarahKSilverman`,
    createdAt: `09-5-2018`,
    age: 35,
  },
  {
    tweet: `U a software update? because not now`,
    username: `@pakalupapito`,
    createdAt: `06-23-2017`,
    age: 14,
  },
  {
    tweet: `2020 is what 2012 tried so hard to be`,
    username: `@TheSanPlanet`,
    createdAt: `04-26-2020`,
    age: 30,
  },
  {
    tweet: `My closet is like 16 shirts I plan to fit into again and 1 shirt I wear every day`,
    username: `@TheCatWhisperer`,
    createdAt: `03-15-2019`,
    age: 12,
  },
];
// console.log(completeTweets);

// WK9E stuff -  declaration of the function
//'the function legalAge takes the argument ageOfUSers and applies the conditional statements within it to
//the data in the variable above; it just returns 'true' when ran this way though because the age of the first
//user is >=18

//I'm a bit confused how it knows to reference the data set 'complete tweets' though??? obviously it's the only
//one I have on the page here but what if it wasn't? is it because of '.age'?
function legalAge(agesOfUsers) {
  if (agesOfUsers.age >= 18) {
    return true;
  } else if (agesOfUsers.age < 18) {
    return false;
  } else {
    console.log(`Please try again`);
  }
}

//filtering out any objects that the function 'legalAge' found to have 'age' keys with values over 18
var eighteenPlus = completeTweets.filter(legalAge);
console.log(eighteenPlus);

// Wk9C Stuff
//This calculates the total number of objects('items') inside of the array
// var tweetsArray = completeTweets.length;

//ran this 'for' loop again with the console logs for each of the keys within the different completeTweets objects
// for (var i = 0; i < tweetsArray; i++) {
//   // console.log(completeTweets[i].tweet);
//   // console.log(completeTweets[i].username);
//   // console.log(completeTweets[i].createdAt);
//   // console.log(completeTweets[i].age);
//   console.log(
//     `Tweet:${completeTweets[i].tweet} \nUsername: ${completeTweets[i].username} \nCreated At:${completeTweets[i].createdAt} \nAge:${completeTweets[i].age}`
//   );
// }
//Here, Shawn suggested I try creating these template literals with variables in them to make my code more DRY which v easy
//Also since you can put text and variables in these I labelled each new line
//I made each of the variables equal to what I had  individually console-logged above, because I'm calling them again but all together within my template literal
// A combo of you saying \n created a new line and also google, because I hated how it looked when it was all blobbed together :)

//I know this is probably too many comments but it really helps me to understand it better and it will be nice to look back at if I need to
//so, sorryyyyyyy
