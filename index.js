//#1
//main function with a parameter called callback
function receivesAFunction(callback) {
    callback();
  }
//this is the argument of the main function receivesAFunction
//defining a callback function called youTuber that returns a message into the console
  function youTuber() {
    return("Welcome to my YouTube channel.");
  }
//this is the argument of the youTuber function
//it is also a callback function that calls the youTuber function
//in doing so it will cause the youTuber function to be executed
  function introMessage() {
    youTuber();
  }
//btw as you can see i have been able to do all this without explicitly calling the callback function youTuber
//this is because it will work on the same principle as illustrated on line 11 and 12
  receivesAFunction(introMessage);

//#2
//let's now combine the work of #1
function returnsANamedFunction(xFm){
    console.log (xFm);
    return function singAlongSong(){
            return ("Breakeven by The Script");
    }
}

//#3
function returnsAnAnonymousFunction(ghosts){
    console.log (ghosts);
    return function (){
            return ("Breakeven by The Script");
    }
}