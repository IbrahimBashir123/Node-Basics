
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text == 'exit\n') {
    quit();
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help Command that displays all possible commands 
 *
 * @returns {void}
 */
function help(){
  console.log('--hello --> Display hello!' + '\n' +
  '--hello ${text} --> Displays Hello & text added' + '\n' +
  '--unknown error --> Display unknown if command not found' + '\n' +
  '--help --> Provides help with all possible commands'+ '\n' +
  '--exit or quit --> Exit or quit the application' +'\n' +
  '--add --> add "Task_name" if you want to add a new task to the exisiting list' + '\n' +
  '--remove --> removes the last task from the existing list' + '\n' +
  '--remove nb --> removes the nb of element you enetred from the existing list' + '\n'+
  '--edit --> throws an error' + '\n'+
  '--edit new task --> edits the last element in the list with the new task name entered' + '\n'+ 
  '--edit nb new task --> edits the indexed element you enetred with the new task name' + '\n'+ 
  '--check nb_task --> Checks the task index' + '\n'+ 
  '--uncheck nb_task --> Uncheck the task index' +'\n' +
  '--node fileName.js --> runs the apps with the default saved JSON file' + '\n' +
  '--node fileName.js JSONFile.json --> runs the app with the entered JSON file'
  );
}

// The following line starts the application
startApp("Ibrahim Bashir")
